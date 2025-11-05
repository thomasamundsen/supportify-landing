'use client';

import React from 'react';
import { TrendingUp, Users, Clock, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './StatsBar.module.css';

const stats = [
  {
    icon: TrendingUp,
    number: '95%',
    label: 'Customer Satisfaction',
  },
  {
    icon: Clock,
    number: '<30s',
    label: 'Average Response Time',
  },
  {
    icon: Users,
    number: '10k+',
    label: 'Active Users',
  },
  {
    icon: Star,
    number: '24/7',
    label: 'Availability',
  },
];

export const StatsBar: React.FC = () => {
  return (
    <section className={styles.statsBar}>
      <div className={styles.container}>
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
              <Icon className={styles.icon} />
              <div className={styles.number}>{stat.number}</div>
              <div className={styles.label}>{stat.label}</div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
