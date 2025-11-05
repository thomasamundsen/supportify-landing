'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import styles from './Navigation.module.css';

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleBookDemo = () => {
    router.push('/book-demo');
  };

  return (
    <nav className={`${styles.navigation} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <MessageCircle className={styles.logoIcon} />
          <span className={styles.logoText}>Supportify</span>
        </a>

        {/* Desktop Navigation */}
        <div className={styles.desktopMenu}>
          <a href="/pricing" className={styles.navLink}>Pricing</a>
          <a href="/docs" className={styles.navLink}>Docs</a>
          <a href="/faq" className={styles.navLink}>FAQ</a>
          <button onClick={handleBookDemo} className={styles.primaryButton}>
            Book demo
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className={styles.mobileMenuContent}>
              <a href="/pricing" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
                Pricing
              </a>
              <a href="/docs" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
                Docs
              </a>
              <a href="/faq" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
                FAQ
              </a>
              <button
                onClick={() => {
                  handleBookDemo();
                  setIsMenuOpen(false);
                }}
                className={styles.mobileBookButton}
              >
                Book demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
