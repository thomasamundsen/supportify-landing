'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.columns}>
          {/* Company Info */}
          <div className={styles.column}>
            <div className={styles.logo}>
              <MessageCircle className={styles.logoIcon} />
              <span className={styles.logoText}>Supportify</span>
            </div>
            <p className={styles.tagline}>
              AI-powered customer support that scales with your business.
            </p>
          </div>

          {/* Product Links */}
          <div className={styles.column}>
            <h4 className={styles.columnHeading}>Product</h4>
            <ul className={styles.linkList}>
              <li><a href="/#features" className={styles.link}>Features</a></li>
              <li><a href="/#pricing" className={styles.link}>Pricing</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className={styles.column}>
            <h4 className={styles.columnHeading}>Resources</h4>
            <ul className={styles.linkList}>
              <li><a href="/docs" className={styles.link}>Documentation</a></li>
              <li><a href="/docs/getting-started" className={styles.link}>Getting Started</a></li>
              <li><a href="/faq" className={styles.link}>FAQ</a></li>
              <li><a href="/contact" className={styles.link}>Contact</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className={styles.column}>
            <h4 className={styles.columnHeading}>Company</h4>
            <ul className={styles.linkList}>
              <li><a href="/contact" className={styles.link}>Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className={styles.column}>
            <h4 className={styles.columnHeading}>Legal</h4>
            <ul className={styles.linkList}>
              <li><a href="/privacy" className={styles.link}>Privacy Policy</a></li>
              <li><a href="/terms" className={styles.link}>Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.column}>
            <h4 className={styles.columnHeading}>Connect</h4>
            <p className={styles.contactText}>
              <a href="mailto:support@supportify.no" className={styles.emailLink}>support@supportify.no</a>
            </p>
            <p className={styles.contactDescription}>
              Get in touch with our team for support, sales inquiries, or general questions.
            </p>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} Supportify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
