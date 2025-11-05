'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Mail, Check } from 'lucide-react';
import styles from './VerificationPanel.module.css';

interface VerificationPanelProps {
  isVerified?: boolean;
  autoFill?: boolean;
  code?: string;
}

export default function VerificationPanel({ isVerified = false, autoFill = false, code = '123456' }: VerificationPanelProps) {
  const [codeDigits, setCodeDigits] = useState<string[]>(['', '', '', '', '', '']);
  const [verified, setVerified] = useState(isVerified);
  const [timer, setTimer] = useState(240); // 4 minutes
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (autoFill && !isVerified) {
      // Auto-fill animation
      const digits = code.split('');
      digits.forEach((digit, index) => {
        setTimeout(() => {
          setCodeDigits(prev => {
            const newDigits = [...prev];
            newDigits[index] = digit;
            return newDigits;
          });
        }, 300 * (index + 1));
      });

      // Auto-verify after filling
      setTimeout(() => {
        setVerified(true);
      }, 300 * digits.length + 500);
    }
  }, [autoFill, code, isVerified]);

  useEffect(() => {
    if (!verified && timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [verified, timer]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div
      className={styles.panel}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.iconWrapper}>
        {verified ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className={styles.successIcon}
          >
            <Check size={32} />
          </motion.div>
        ) : (
          <Mail size={32} className={styles.mailIcon} />
        )}
      </div>

      {!verified ? (
        <>
          <h3 className={styles.title}>Enter Verification Code</h3>
          <p className={styles.subtitle}>
            We've sent a 6-digit code to your email
          </p>

          <div className={styles.codeInputs}>
            {codeDigits.map((digit, index) => (
              <input
                key={index}
                ref={el => { inputRefs.current[index] = el; }}
                type="text"
                maxLength={1}
                value={digit}
                readOnly={autoFill}
                className={styles.codeInput}
                style={{
                  borderColor: digit ? 'var(--color-primary)' : undefined
                }}
              />
            ))}
          </div>

          <div className={styles.footer}>
            <p className={styles.timer}>Code expires in {formatTime(timer)}</p>
            <button className={styles.resendButton}>Resend Code</button>
          </div>
        </>
      ) : (
        <>
          <h3 className={styles.title}>Verified!</h3>
          <p className={styles.subtitle}>
            Your identity has been confirmed
          </p>
        </>
      )}
    </motion.div>
  );
}
