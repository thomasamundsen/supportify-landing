'use client';

import React from 'react';
import { Sparkles, Zap, ShoppingBag, Store, Timer, DollarSign, StarIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ChatBot } from '../ChatBot/ChatBot';
import styles from './Hero.module.css';

const stats = [
  {
    icon: Timer,
    number: '5s',
    label: 'Average Reply Time',
  },
  {
    icon: Store,
    number: '20hrs',
    label: 'Saved Per Week',
  },
  {
    icon: DollarSign,
    number: '80%',
    label: 'Cost Reduction',
  },
  {
    icon: StarIcon,
    number: '+20%',
    label: 'Higher Store Rating',
  },
];

export const Hero: React.FC = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/book-demo');
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className={styles.badge}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <Sparkles className={styles.badgeIcon} />
              <span>AI-Powered Customer Support</span>
            </motion.div>

            <h1 className={styles.headline}>
              Customer support that runs itself.{' '}
              <span className={styles.highlight}>Literally.</span>
            </h1>

            <p className={styles.subheadline}>
              Automate 100% of your support tickets with AI agents for Shopify. Save time, cut costs, and boost customer satisfaction with instant replies and real actions.
            </p>

            <div className={styles.featurePills}>
              <div className={`${styles.pill} ${styles.pillGreen}`}>
                <span className={styles.pillIconWrapper}>✓</span>
                <span>Automatic return handling</span>
              </div>
              <div className={`${styles.pill} ${styles.pillBlue}`}>
                <Zap className={styles.pillIcon} />
                <span>Instant order updates</span>
              </div>
              <div className={`${styles.pill} ${styles.pillPurple}`}>
                <ShoppingBag className={styles.pillIcon} />
                <span>Shopify integration</span>
              </div>
            </div>

            <div className={styles.ctaButtons}>
              <button
                onClick={handleGetStarted}
                className={styles.primaryButton}
                style={{ position: 'relative', zIndex: 10, pointerEvents: 'auto' }}
              >
                Book Demo Now
              </button>
            </div>
          </motion.div>

          <motion.div
            className={styles.demoColumn}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <ChatBot />
          </motion.div>
        </div>

        <div className={styles.statsContainer}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className={styles.statItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Icon className={styles.statIcon} strokeWidth={2} />
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
