'use client';

import { motion } from 'framer-motion';
import { MapPin, Check } from 'lucide-react';
import { useState } from 'react';
import styles from './AddressForm.module.css';

interface AddressFormProps {
  isSubmitted?: boolean;
  autoFill?: boolean;
}

export default function AddressForm({ isSubmitted = false, autoFill = false }: AddressFormProps) {
  const [submitted, setSubmitted] = useState(isSubmitted);
  const [formData, setFormData] = useState({
    street: autoFill ? '123 Main Street' : '',
    city: autoFill ? 'San Francisco' : '',
    state: autoFill ? 'CA' : '',
    zip: autoFill ? '94102' : '',
    country: autoFill ? 'United States' : '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        className={styles.successCard}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className={styles.successIcon}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
        >
          <Check size={32} />
        </motion.div>
        <h3 className={styles.successTitle}>Address Updated!</h3>
        <p className={styles.successText}>
          Your shipping address has been successfully updated
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={styles.form}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.header}>
        <MapPin size={24} className={styles.icon} />
        <h3 className={styles.title}>Update Shipping Address</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label className={styles.label}>Street Address</label>
          <input
            type="text"
            value={formData.street}
            onChange={(e) => setFormData({ ...formData, street: e.target.value })}
            className={styles.input}
            placeholder="123 Main St"
            required
          />
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label}>City</label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className={styles.input}
              placeholder="San Francisco"
              required
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>State</label>
            <input
              type="text"
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              className={styles.input}
              placeholder="CA"
              required
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label}>ZIP Code</label>
            <input
              type="text"
              value={formData.zip}
              onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
              className={styles.input}
              placeholder="94102"
              required
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Country</label>
            <select
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className={styles.input}
              required
            >
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Australia">Australia</option>
            </select>
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>
          Update Address
        </button>
      </form>
    </motion.div>
  );
}
