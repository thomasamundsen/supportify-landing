'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { featureTabs } from './featureConfig';
import ProgressIndicator from './ProgressIndicator';
import ChatConversation from './DemoComponents/ChatConversation';
import VerificationPanel from './DemoComponents/VerificationPanel';
import AdminPanel from './DemoComponents/AdminPanel';
import ProductGrid from './DemoComponents/ProductGrid';
import OrderCard from './DemoComponents/OrderCard';
import AddressForm from './DemoComponents/AddressForm';
import ConfirmationModal from './DemoComponents/ConfirmationModal';
import styles from './FeatureShowcase.module.css';

export const FeatureShowcase: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  const activeTab = featureTabs[activeTabIndex];
  const currentStepData = activeTab.steps[currentStep] || activeTab.steps[0];

  // Track scroll progress through the scroll container as it passes through viewport
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ['start center', 'end center'],
  });

  // Fade in progress indicator as user starts scrolling
  const progressOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Map scroll progress (0-1) to current step
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (progress) => {
      // Calculate which step we're on based on scroll progress
      // Add small threshold to ensure we reach the last step
      const stepIndex = Math.min(
        Math.floor(progress * activeTab.totalSteps + 0.5),
        activeTab.totalSteps - 1
      );
      setCurrentStep(Math.max(0, stepIndex));
    });

    return () => unsubscribe();
  }, [scrollYProgress, activeTab.totalSteps]);

  // Reset step when switching tabs and scroll to section
  useEffect(() => {
    // Skip scroll on initial mount
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    setCurrentStep(0);
    // Scroll to section top when tab changes
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeTabIndex]);

  const handleTabChange = (index: number) => {
    setActiveTabIndex(index);
  };

  const renderComponent = () => {
    const { componentType, componentProps } = currentStepData;

    // Use activeTab.id as key so component only remounts on tab change, not step change
    // This allows progressive content revelation instead of fade out/in
    switch (componentType) {
      case 'chat':
        return <ChatConversation key={activeTab.id} {...componentProps} currentStepInTab={currentStep} />;
      case 'verification':
        return <VerificationPanel key={activeTab.id} {...componentProps} />;
      case 'admin':
        return <AdminPanel key={activeTab.id} {...componentProps} />;
      case 'products':
        return <ProductGrid key={activeTab.id} {...componentProps} />;
      case 'order':
        return <OrderCard key={activeTab.id} {...componentProps} />;
      case 'address':
        return <AddressForm key={activeTab.id} {...componentProps} />;
      case 'confirmation':
        return <ConfirmationModal key={activeTab.id} {...componentProps} />;
      default:
        return (
          <motion.div
            className={styles.visualPlaceholder}
            animate={{ opacity: currentStep === 0 ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {React.createElement(activeTab.icon, {
              className: styles.largeIcon,
              strokeWidth: 1.5,
            })}
            <p className={styles.visualText}>
              {activeTab.label} Feature Demo
            </p>
          </motion.div>
        );
    }
  };

  // Calculate scroll container height based on number of steps
  // Each step needs enough space to trigger scroll progress
  const scrollContainerHeight = `${activeTab.totalSteps * 300}px`;

  return (
    <section ref={sectionRef} className={styles.showcase} id="features">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Powerful Features for Modern Support</h2>
          <p className={styles.subtitle}>
            Everything you need to deliver exceptional customer experiences, powered by AI.
          </p>
        </motion.div>

        {/* Feature Tabs - Sticky at top */}
        <div className={styles.tabsWrapper}>
          <div className={styles.tabs}>
            {featureTabs.map((tab, index) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  className={`${styles.tab} ${activeTabIndex === index ? styles.activeTab : ''}`}
                  onClick={() => handleTabChange(index)}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className={styles.tabIcon} />
                  <span className={styles.tabLabel}>{tab.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Scroll-driven container */}
        <div
          ref={scrollContainerRef}
          className={styles.scrollContainer}
          style={{ height: scrollContainerHeight }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              className={styles.stickyContent}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.content}>
                <motion.div
                  className={styles.featureInfo}
                  key={`info-${currentStep}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className={styles.featureTitle}>{currentStepData.title}</h3>
                  <p className={styles.featureDescription}>{currentStepData.description}</p>
                </motion.div>

                <div className={styles.featureVisual}>
                  {renderComponent()}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Indicator - Fixed at bottom of section */}
        <motion.div
          className={styles.progressWrapper}
          style={{ opacity: progressOpacity }}
        >
          <ProgressIndicator
            totalSteps={activeTab.totalSteps}
            currentStep={currentStep}
          />
          <p className={styles.scrollHint}>Scroll to see more</p>
        </motion.div>
      </div>
    </section>
  );
};
