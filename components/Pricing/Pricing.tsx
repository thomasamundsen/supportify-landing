'use client';

import React, { useState } from 'react';
import { ArrowRight, TrendingDown, Sparkles, Zap, ShoppingBag, CheckCircle } from 'lucide-react';
import styles from './Pricing.module.css';

export const Pricing: React.FC = () => {
  const [ticketCount, setTicketCount] = useState(200);

  const freeTickets = 50;
  const pricePerTicket = 0.5;
  const additionalTickets = Math.max(0, ticketCount - freeTickets);
  const monthlyCost = additionalTickets * pricePerTicket;

  // Traditional support calculation ($3-5 per ticket average, using $4)
  const traditionalCostPerTicket = 4;
  const traditionalCost = ticketCount * traditionalCostPerTicket;
  const savings = traditionalCost - monthlyCost;
  const savingsPercent = Math.round((savings / traditionalCost) * 100);
  const yearlySavings = savings * 12;

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTicketCount(Number(e.target.value));
  };

  return (
    <section className={styles.pricing}>
      <div className={styles.container}>
        <div style={{ textAlign: 'center' }}>
          <p className={styles.badge}>Simple, Transparent Pricing</p>
        </div>
        <h1 className={styles.mainTitle}>Pay Only for What You Use</h1>
        <p className={styles.mainSubtitle}>
          Start with 50 free tickets every month, then pay just $0.50 per ticket.
        </p>
        <p className={styles.subText}>
          No hidden fees. No contracts. Cancel anytime.
        </p>

        <div className={styles.calculator}>

          <div className={styles.sliderSection}>
            <div className={styles.ticketDisplay}>
              <span className={styles.ticketNumber}>{ticketCount}</span>
              <span className={styles.ticketLabel}>tickets/month</span>
            </div>

            <input
              type="range"
              min="0"
              max="1000"
              value={ticketCount}
              onChange={handleSliderChange}
              className={styles.slider}
            />
            <div className={styles.sliderLabels}>
              <span>0</span>
              <span>500</span>
              <span>1,000</span>
            </div>
          </div>

          <div className={styles.breakdown}>
            <div className={styles.breakdownRow}>
              <div className={styles.breakdownLabel}>
                <CheckCircle className={styles.checkIcon} />
                <span>First 50 tickets</span>
              </div>
              <div className={styles.breakdownValue}>
                <span className={styles.freeTag}>FREE</span>
                <span className={styles.breakdownDetail}>50 tickets</span>
              </div>
            </div>

            <div className={styles.breakdownRow}>
              <div className={styles.breakdownLabel}>
                <span className={styles.dollarIcon}>$</span>
                <span>Additional tickets</span>
              </div>
              <div className={styles.breakdownValue}>
                <span className={styles.price}>${monthlyCost.toFixed(2)}</span>
                <span className={styles.breakdownDetail}>
                  {additionalTickets} × ${pricePerTicket.toFixed(1)}
                </span>
              </div>
            </div>
          </div>

          <div className={styles.total}>
            <span className={styles.totalLabel}>Total Monthly Cost</span>
            <div className={styles.totalValue}>
              <span className={styles.totalPrice}>${monthlyCost.toFixed(2)}</span>
              <span className={styles.perMonth}>per month</span>
            </div>
          </div>

          <div className={styles.comparison}>
            <div className={styles.comparisonIcon}>
              <TrendingDown />
            </div>
            <div className={styles.comparisonContent}>
              <h3 className={styles.comparisonTitle}>Compare to Traditional Support</h3>
              <div className={styles.comparisonStats}>
                <div>
                  <div className={styles.comparisonLabel}>Traditional Support Cost</div>
                  <div className={styles.comparisonAmount}>${traditionalCost.toFixed(2)}/mo</div>
                  <div className={styles.comparisonNote}>@ ${traditionalCostPerTicket} per ticket average</div>
                </div>
                <div>
                  <div className={styles.comparisonLabel}>Your Savings</div>
                  <div className={styles.savingsAmount}>${savings.toFixed(2)}/mo</div>
                  <div className={styles.savingsNote}>Save {savingsPercent}% with AI automation</div>
                </div>
              </div>
              <div className={styles.yearlySavings}>
                <Sparkles className={styles.sparkleIcon} />
                That's ${yearlySavings.toFixed(2)} saved per year!
              </div>
            </div>
          </div>

          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton}>
              Start Free Trial <ArrowRight size={20} />
            </button>
            <button className={styles.secondaryButton}>Book a Demo</button>
          </div>
        </div>

        <div className={styles.features}>
          <h2 className={styles.featuresTitle}>Everything Included</h2>
          <p className={styles.featuresSubtitle}>
            No tiers, no upsells. Every feature, every channel, every integration.
          </p>

          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <ShoppingBag />
              </div>
              <h3 className={styles.featureCardTitle}>AI Automation</h3>
              <p className={styles.featureCardDescription}>
                100% automation for returns, refunds, order tracking, and more
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIconBlue}>
                <Zap />
              </div>
              <h3 className={styles.featureCardTitle}>All Channels</h3>
              <p className={styles.featureCardDescription}>
                WhatsApp, Instagram, Gmail, Messenger, and chat widget included
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIconGreen}>
                <CheckCircle />
              </div>
              <h3 className={styles.featureCardTitle}>Shopify Integration</h3>
              <p className={styles.featureCardDescription}>
                Full access to your store data to execute actions automatically
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
