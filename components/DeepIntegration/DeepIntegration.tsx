'use client';

import React from 'react';
import { Package, XCircle, Edit3, Search, ThumbsUp, RotateCcw, DollarSign, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './DeepIntegration.module.css';

const actions = [
  {
    icon: Package,
    label: 'Track shipments',
    color: '#3b82f6',
  },
  {
    icon: XCircle,
    label: 'Cancel orders',
    color: '#ef4444',
  },
  {
    icon: Edit3,
    label: 'Edit orders',
    color: '#f59e0b',
  },
  {
    icon: Search,
    label: 'Search products',
    color: '#8b5cf6',
  },
  {
    icon: ThumbsUp,
    label: 'Recommend products',
    color: '#84a959',
  },
  {
    icon: RotateCcw,
    label: 'Create returns',
    color: '#06b6d4',
  },
  {
    icon: DollarSign,
    label: 'Issue refunds',
    color: '#10b981',
  },
];

export const DeepIntegration: React.FC = () => {
  return (
    <section className={styles.deepIntegration}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.badge}>
            <Zap className={styles.badgeIcon} />
            <span>Deep Shopify Integration</span>
          </div>
          <h2 className={styles.title}>
            More than just a chatbot
          </h2>
          <p className={styles.subtitle}>
            Give your AI agent full access to Shopify so it can execute any action a human agent could—automatically and instantly.
          </p>
          <div className={styles.statHighlight}>
            <span className={styles.statNumber}>95%</span>
            <span className={styles.statText}>of tickets handled without human intervention</span>
          </div>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            className={styles.actionsGrid}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.actionsTitle}>Actions our AI can perform:</h3>
            <div className={styles.actionsList}>
              {actions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <motion.div
                    key={index}
                    className={styles.actionItem}
                    initial={{ opacity: 0, x: -30, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.12,
                      ease: [0.34, 1.56, 0.64, 1]
                    }}
                  >
                    <div
                      className={styles.actionIcon}
                      style={{ backgroundColor: `${action.color}15`, color: action.color }}
                    >
                      <Icon strokeWidth={2} />
                    </div>
                    <span className={styles.actionLabel}>{action.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className={styles.illustration}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.illustrationCard}>
              <div className={styles.chatInterface}>
                <div className={styles.chatHeader}>
                  <div className={styles.chatDots}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className={styles.chatTitle}>Customer Support</span>
                </div>

                <div className={styles.chatMessages}>
                  <motion.div
                    className={styles.customerMessage}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <p>I need to return my order #1234</p>
                  </motion.div>

                  <motion.div
                    className={styles.aiMessage}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <div className={styles.aiAvatar}>
                      <Zap size={14} />
                    </div>
                    <div className={styles.aiMessageContent}>
                      <p>I've created a return for order #1234 and sent you a return label via email.</p>
                      <motion.div
                        className={styles.actionBadge}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.8 }}
                      >
                        <RotateCcw size={12} />
                        <span>Return created automatically</span>
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.div
                    className={styles.customerMessage}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.5, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <p>Where is my package?</p>
                  </motion.div>

                  <motion.div
                    className={styles.aiMessage}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.5, delay: 1.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <div className={styles.aiAvatar}>
                      <Zap size={14} />
                    </div>
                    <div className={styles.aiMessageContent}>
                      <p>Your package is out for delivery and will arrive today by 8 PM.</p>
                      <motion.div
                        className={styles.actionBadge}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 1.6 }}
                      >
                        <Package size={12} />
                        <span>Tracking checked automatically</span>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.div
                className={styles.shopifyBadge}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.4 }}
              >
                <svg width="20" height="20" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M388.32,104.1a4.66,4.66,0,0,0-4.4-4c-2,0-37.23-.8-37.23-.8s-21.61-20.82-29.62-28.83V503.2L442.76,472S388.72,106.5,388.32,104.1ZM288.65,70.47a116.67,116.67,0,0,0-7.21-17.61C271,32.85,255.42,22,237,22a15,15,0,0,0-4,.4c-.4-.8-1.2-1.2-1.6-2C223.4,11.63,213,7.63,200.58,8c-24,.8-48,18-67.25,48.83-13.61,21.62-24,48.84-26.82,70.06-27.62,8.4-46.83,14.41-47.23,14.81-14,4.4-14.41,4.8-16,18-1.2,10-38,291.82-38,291.82L307.86,504V65.67a41.66,41.66,0,0,0-4.4.4S297.86,67.67,288.65,70.47ZM233.41,87.69c-16,4.8-33.63,10.4-50.84,15.61,4.8-18.82,14.41-37.63,25.62-50,4.4-4.4,10.41-9.61,17.21-12.81C232.21,54.86,233.81,74.48,233.41,87.69ZM200.58,24.44A27.49,27.49,0,0,1,215,28c-6.4,3.2-12.81,8.41-18.81,14.41-15.21,16.42-26.82,42-31.62,66.45-14.42,4.41-28.83,8.81-42,12.81C131.33,83.28,163.75,25.24,200.58,24.44ZM154.15,244.61c1.6,25.61,69.25,31.22,73.25,91.66,2.8,47.64-25.22,80.06-65.65,82.47-48.83,3.2-75.65-25.62-75.65-25.62l10.4-44s26.82,20.42,48.44,18.82c14-.8,19.22-12.41,18.81-20.42-2-33.62-57.24-31.62-60.84-86.86-3.2-46.44,27.22-93.27,94.47-97.68,26-1.6,39.23,4.81,39.23,4.81L221.4,225.39s-17.21-8-37.63-6.4C154.15,221,153.75,239.8,154.15,244.61ZM249.42,82.88c0-12-1.6-29.22-7.21-43.63,18.42,3.6,27.22,24,31.23,36.43Q262.63,78.68,249.42,82.88Z"/>
                </svg>
                <span>Connected to Shopify</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
