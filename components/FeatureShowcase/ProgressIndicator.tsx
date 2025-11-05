'use client';

import { motion } from 'framer-motion';
import styles from './ProgressIndicator.module.css';

interface ProgressIndicatorProps {
  totalSteps: number;
  currentStep: number;
  stepLabels?: string[];
}

export default function ProgressIndicator({ totalSteps, currentStep, stepLabels }: ProgressIndicatorProps) {
  return (
    <div className={styles.container}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div key={index} className={styles.dotWrapper}>
          <motion.div
            className={`${styles.dot} ${index === currentStep ? styles.active : ''}`}
            initial={{ scale: 0.8 }}
            animate={{
              scale: index === currentStep ? 1.2 : 0.8,
              backgroundColor: index <= currentStep ? 'var(--color-primary)' : '#d1d5db',
            }}
            transition={{ duration: 0.3 }}
          />
          {stepLabels && stepLabels[index] && (
            <div className={styles.tooltip}>{stepLabels[index]}</div>
          )}
        </div>
      ))}
    </div>
  );
}
