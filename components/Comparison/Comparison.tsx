'use client';

import React from 'react';
import { DollarSign, Clock, Heart, ShoppingBag, CheckCircle, XCircle, Star, TrendingUp, Zap } from 'lucide-react';
import styles from './Comparison.module.css';

const comparisonData = [
  {
    category: 'Cost per Ticket',
    icon: DollarSign,
    ai: {
      value: '$0.50',
      description: 'Fixed low cost per resolution',
      isPositive: true,
    },
    human: {
      value: '$3-5',
      description: 'Per ticket cost for human agents',
      isPositive: false,
    },
  },
  {
    category: 'Response Time',
    icon: Clock,
    ai: {
      value: '10 seconds',
      description: 'Instant 24/7 availability',
      isPositive: true,
    },
    human: {
      value: '2-24 hours',
      description: 'Depends on business hours',
      isPositive: false,
    },
  },
  {
    category: 'Emotional Intelligence',
    icon: Heart,
    ai: {
      value: 'Advanced AI',
      description: 'More personal and empathetic responses',
      isPositive: true,
    },
    human: {
      value: 'Variable',
      description: 'Depends on agent training & mood',
      isPositive: false,
    },
  },
  {
    category: 'Store Ratings',
    icon: Star,
    ai: {
      value: '4.8/5',
      description: 'High retention and better ratings',
      isPositive: true,
    },
    human: {
      value: '3.9/5',
      description: 'Inconsistent customer satisfaction',
      isPositive: false,
    },
  },
  {
    category: 'Scalability',
    icon: TrendingUp,
    ai: {
      value: 'Unlimited',
      description: 'Handle any volume instantly',
      isPositive: true,
    },
    human: {
      value: 'Linear scaling',
      description: 'Need to hire more agents',
      isPositive: false,
    },
  },
  {
    category: 'Availability',
    icon: Zap,
    ai: {
      value: '24/7/365',
      description: 'Never sleeps, never sick',
      isPositive: true,
    },
    human: {
      value: 'Business hours',
      description: 'Limited by schedules & time zones',
      isPositive: false,
    },
  },
];

export const Comparison: React.FC = () => {
  return (
    <section className={styles.comparison}>
      <div className={styles.container}>
        <h2 className={styles.title}>AI vs Human Support Agents</h2>
        <p className={styles.subtitle}>
          See why thousands of Shopify stores are switching from traditional human support to Supportify's AI agents.
        </p>

        <div className={styles.comparisonTable}>
          <div className={styles.tableHeader}>
            <div className={styles.categoryColumn}></div>
            <div className={styles.aiColumn}>
              <div className={styles.columnHeader}>
                <div className={styles.aiIcon}>
                  <ShoppingBag strokeWidth={2} />
                </div>
                <div>
                  <h3 className={styles.columnTitle}>Supportify AI</h3>
                  <span className={styles.badge}>Recommended</span>
                </div>
              </div>
            </div>
            <div className={styles.humanColumn}>
              <div className={styles.columnHeader}>
                <div className={styles.humanIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className={styles.columnTitle}>Human Agents</h3>
                  <span className={styles.traditionalBadge}>Traditional</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.tableBody}>
            {comparisonData.map((row, index) => {
              const Icon = row.icon;
              return (
                <div key={index} className={styles.tableRow}>
                  <div className={styles.categoryCell}>
                    <Icon className={styles.categoryIcon} strokeWidth={2} />
                    <span className={styles.categoryName}>{row.category}</span>
                  </div>
                  <div className={`${styles.valueCell} ${styles.aiCell}`}>
                    <div className={styles.valueWrapper}>
                      <div className={styles.valueHeader}>
                        <span className={styles.value}>{row.ai.value}</span>
                        <CheckCircle className={styles.checkIcon} strokeWidth={2} />
                      </div>
                      <p className={styles.description}>{row.ai.description}</p>
                    </div>
                  </div>
                  <div className={`${styles.valueCell} ${styles.humanCell}`}>
                    <div className={styles.valueWrapper}>
                      <div className={styles.valueHeader}>
                        <span className={styles.value}>{row.human.value}</span>
                        <XCircle className={styles.xIcon} strokeWidth={2} />
                      </div>
                      <p className={styles.description}>{row.human.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
