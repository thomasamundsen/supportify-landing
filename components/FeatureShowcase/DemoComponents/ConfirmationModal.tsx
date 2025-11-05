'use client';

import { motion } from 'framer-motion';
import { Check, X, AlertCircle, Info } from 'lucide-react';
import styles from './ConfirmationModal.module.css';

interface ConfirmationModalProps {
  type: 'success' | 'error' | 'info' | 'warning';
  title: string;
  message: string;
  details?: string[];
  buttonText?: string;
}

export default function ConfirmationModal({
  type,
  title,
  message,
  details,
  buttonText = 'Got it',
}: ConfirmationModalProps) {
  const config = {
    success: {
      icon: <Check size={32} />,
      color: '#10b981',
      bgColor: 'rgba(16, 185, 129, 0.1)',
    },
    error: {
      icon: <X size={32} />,
      color: '#ef4444',
      bgColor: 'rgba(239, 68, 68, 0.1)',
    },
    warning: {
      icon: <AlertCircle size={32} />,
      color: '#f59e0b',
      bgColor: 'rgba(245, 158, 11, 0.1)',
    },
    info: {
      icon: <Info size={32} />,
      color: '#3b82f6',
      bgColor: 'rgba(59, 130, 246, 0.1)',
    },
  };

  const currentConfig = config[type];

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className={styles.modal}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        <motion.div
          className={styles.iconWrapper}
          style={{ backgroundColor: currentConfig.bgColor }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
        >
          <div style={{ color: currentConfig.color }}>
            {currentConfig.icon}
          </div>
        </motion.div>

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.message}>{message}</p>

        {details && details.length > 0 && (
          <div className={styles.details}>
            <ul className={styles.detailsList}>
              {details.map((detail, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {detail}
                </motion.li>
              ))}
            </ul>
          </div>
        )}

        <button
          className={styles.button}
          style={{ backgroundColor: currentConfig.color }}
        >
          {buttonText}
        </button>
      </motion.div>
    </motion.div>
  );
}
