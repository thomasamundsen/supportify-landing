'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './CTA.module.css';

export const CTA: React.FC = () => {
  const handleGetStarted = () => {
    console.log('Get started clicked');
  };

  const handleContactSales = () => {
    console.log('Contact sales clicked');
  };

  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.headline}>Ready to Transform Your Customer Support?</h2>
          <p className={styles.subheadline}>
            Join thousands of businesses using Supportify to deliver exceptional customer experiences.
            Start your free trial today—no credit card required.
          </p>
          <div className={styles.buttons}>
            <button onClick={handleGetStarted} className={styles.primaryButton}>
              Start Free Trial
            </button>
            <button onClick={handleContactSales} className={styles.secondaryButton}>
              Contact Sales
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
