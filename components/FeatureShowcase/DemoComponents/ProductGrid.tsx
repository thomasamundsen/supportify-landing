'use client';

import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import styles from './ProductGrid.module.css';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  features: string[];
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className={styles.grid}>
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.4 }}
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
        >
          <div className={styles.imageWrapper}>
            <div className={styles.imagePlaceholder}>
              <span className={styles.imageText}>{product.name[0]}</span>
            </div>
          </div>

          <div className={styles.content}>
            <h4 className={styles.productName}>{product.name}</h4>

            <div className={styles.rating}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  fill={i < product.rating ? 'var(--color-primary)' : 'none'}
                  stroke={i < product.rating ? 'var(--color-primary)' : '#d1d5db'}
                />
              ))}
              <span className={styles.ratingText}>({product.rating}.0)</span>
            </div>

            <p className={styles.price}>${product.price.toFixed(2)}</p>

            <ul className={styles.features}>
              {product.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <button className={styles.button}>
              View Product
              <ExternalLink size={16} />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
