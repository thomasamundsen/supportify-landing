'use client';

import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Users, MessageSquare } from 'lucide-react';
import { Navigation } from '@/components/Navigation/Navigation';
import { Footer } from '@/components/Footer/Footer';
import styles from './BookDemo.module.css';
import { useRouter } from 'next/navigation';

export default function BookDemoPage() {
  const router = useRouter();

  useEffect(() => {
    // Load HubSpot Meetings Embed Script
    const script = document.createElement('script');
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className={styles.bookDemoPage}>
      <Navigation />

      <div className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            {/* Left Column - Info Section */}
            <div className={styles.infoSection}>
              <button onClick={() => router.push('/')} className={styles.backButton}>
                <ArrowLeft className={styles.backIcon} />
                Back to home
              </button>

              <button className={styles.scheduleButton}>
                <Calendar className={styles.scheduleIcon} />
                Schedule Your Demo
              </button>

              <h1 className={styles.title}>See Supportify in Action</h1>

              <p className={styles.description}>
                Book a personalized demo with our team and discover how Supportify can transform your customer support operations.
              </p>

              <div className={styles.features}>
                <h2 className={styles.featuresTitle}>What you'll get:</h2>

                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <Calendar />
                  </div>
                  <div className={styles.featureContent}>
                    <h3 className={styles.featureTitle}>Live Product Walkthrough</h3>
                    <p className={styles.featureText}>
                      See exactly how Supportify handles real customer tickets across all channels.
                    </p>
                  </div>
                </div>

                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <Users />
                  </div>
                  <div className={styles.featureContent}>
                    <h3 className={styles.featureTitle}>Customized for Your Store</h3>
                    <p className={styles.featureText}>
                      We'll tailor the demo to your specific use case and ticket volume.
                    </p>
                  </div>
                </div>

                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <MessageSquare />
                  </div>
                  <div className={styles.featureContent}>
                    <h3 className={styles.featureTitle}>Q&A Session</h3>
                    <p className={styles.featureText}>
                      Ask our team anything about AI automation, integrations, or pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - HubSpot Meeting Scheduler */}
            <div className={styles.formSection}>
              {/* HubSpot Meetings Embed */}
              <div
                className="meetings-iframe-container"
                data-src="https://meetings-eu1.hubspot.com/tamundsen?embed=true"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
