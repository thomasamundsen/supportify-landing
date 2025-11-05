'use client';

import React from 'react';
import { TrendingUp, CheckCircle } from 'lucide-react';
import styles from './Winner.module.css';

const highlights = [
  '50x more cost effective',
  '720x faster response',
  'Unlimited scalability',
  'Higher satisfaction ratings',
];

export const Winner: React.FC = () => {
  return (
    <section className={styles.winner}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.header}>
            <div className={styles.iconWrapper}>
              <TrendingUp className={styles.icon} strokeWidth={2.5} />
            </div>
            <h2 className={styles.title}>The Clear Winner</h2>
          </div>

          <p className={styles.description}>
            Supportify AI agents deliver superior performance across every metric that matters - from cost efficiency to customer satisfaction. Join the AI revolution and transform your support experience.
          </p>

          <div className={styles.highlights}>
            {highlights.map((highlight, index) => (
              <div key={index} className={styles.highlight}>
                <CheckCircle className={styles.checkIcon} strokeWidth={2} />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
