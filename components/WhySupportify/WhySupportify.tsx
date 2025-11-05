'use client';

import React from 'react';
import { TrendingDown, Clock, Heart, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './WhySupportify.module.css';

const benefits = [
  {
    icon: TrendingDown,
    title: 'Reduce costs',
    stat: '80%',
    description: 'cheaper than human agents',
    gradient: 'linear-gradient(135deg, #84a959 0%, #9bc065 100%)',
  },
  {
    icon: Clock,
    title: 'Save time',
    stat: '20hrs',
    description: 'saved per week on average',
    gradient: 'linear-gradient(135deg, #84a959 0%, #9bc065 100%)',
  },
  {
    icon: Heart,
    title: 'Better support',
    stat: '4.8/5',
    description: 'customer satisfaction rating',
    gradient: 'linear-gradient(135deg, #84a959 0%, #9bc065 100%)',
  },
  {
    icon: Zap,
    title: 'Faster replies',
    stat: '10s',
    description: 'average response time',
    gradient: 'linear-gradient(135deg, #84a959 0%, #9bc065 100%)',
  },
];

export const WhySupportify: React.FC = () => {
  return (
    <section className={styles.whySupportify}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Why choose Supportify?</h2>
          <p className={styles.subtitle}>
            Deliver exceptional support while reducing costs and improving efficiency
          </p>
        </motion.div>

        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className={styles.benefitCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <div className={styles.cardContent}>
                  <div
                    className={styles.iconWrapper}
                    style={{ background: benefit.gradient }}
                  >
                    <Icon className={styles.icon} strokeWidth={2.5} />
                  </div>
                  <div className={styles.textContent}>
                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                    <div className={styles.statWrapper}>
                      <span
                        className={styles.stat}
                        style={{ background: benefit.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                      >
                        {benefit.stat}
                      </span>
                      <span className={styles.description}>{benefit.description}</span>
                    </div>
                  </div>
                </div>
                <div
                  className={styles.cardGlow}
                  style={{ background: benefit.gradient }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
