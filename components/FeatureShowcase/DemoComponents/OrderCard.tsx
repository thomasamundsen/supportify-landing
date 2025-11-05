'use client';

import { motion } from 'framer-motion';
import { Package, MapPin, Calendar, ExternalLink } from 'lucide-react';
import styles from './OrderCard.module.css';

export interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface OrderCardProps {
  orderNumber: string;
  orderDate: string;
  status: 'processing' | 'shipped' | 'delivered';
  items: OrderItem[];
  trackingNumber?: string;
  estimatedDelivery?: string;
  totalAmount: number;
}

export default function OrderCard({
  orderNumber,
  orderDate,
  status,
  items,
  trackingNumber,
  estimatedDelivery,
  totalAmount,
}: OrderCardProps) {
  const statusConfig = {
    processing: { label: 'Processing', progress: 33, color: '#f59e0b' },
    shipped: { label: 'Shipped', progress: 66, color: '#3b82f6' },
    delivered: { label: 'Delivered', progress: 100, color: '#10b981' },
  };

  const currentStatus = statusConfig[status];

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.header}>
        <div>
          <h3 className={styles.orderNumber}>Order #{orderNumber}</h3>
          <p className={styles.orderDate}>
            <Calendar size={14} />
            Placed on {orderDate}
          </p>
        </div>
        <span
          className={styles.statusBadge}
          style={{ backgroundColor: currentStatus.color }}
        >
          {currentStatus.label}
        </span>
      </div>

      <div className={styles.progressSection}>
        <div className={styles.progressBar}>
          <motion.div
            className={styles.progressFill}
            initial={{ width: 0 }}
            animate={{ width: `${currentStatus.progress}%` }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ backgroundColor: currentStatus.color }}
          />
        </div>
      </div>

      <div className={styles.items}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.itemImage}>
              <Package size={20} />
            </div>
            <div className={styles.itemDetails}>
              <p className={styles.itemName}>{item.name}</p>
              <p className={styles.itemQuantity}>Qty: {item.quantity}</p>
            </div>
            <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>

      {trackingNumber && (
        <div className={styles.tracking}>
          <MapPin size={16} />
          <div>
            <p className={styles.trackingLabel}>Tracking Number</p>
            <p className={styles.trackingNumber}>{trackingNumber}</p>
          </div>
        </div>
      )}

      {estimatedDelivery && (
        <div className={styles.delivery}>
          <p className={styles.deliveryLabel}>Estimated Delivery</p>
          <p className={styles.deliveryDate}>{estimatedDelivery}</p>
        </div>
      )}

      <div className={styles.footer}>
        <div className={styles.total}>
          <span>Total</span>
          <span className={styles.totalAmount}>${totalAmount.toFixed(2)}</span>
        </div>
        <button className={styles.trackButton}>
          Track Order
          <ExternalLink size={16} />
        </button>
      </div>
    </motion.div>
  );
}
