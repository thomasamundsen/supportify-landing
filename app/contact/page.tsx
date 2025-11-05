import React from 'react';
import { Metadata } from 'next';
import { Mail, MessageCircle, FileText } from 'lucide-react';
import { Navigation } from '@/components/Navigation/Navigation';
import { Footer } from '@/components/Footer/Footer';
import styles from './Contact.module.css';

export const metadata: Metadata = {
  title: 'Contact Us | Supportify',
  description: 'Get in touch with the Supportify team. We\'re here to help with questions, support, and feedback.',
};

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <Navigation />

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>
            We're here to help. Reach out to our team.
          </p>
        </div>
      </header>

      {/* Content */}
      <main className={styles.content}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* General Support */}
            <div className={styles.contactCard}>
              <div className={styles.iconWrapper}>
                <Mail className={styles.icon} />
              </div>
              <h2>General Support</h2>
              <p>
                Have questions or need help? Our support team is here to assist you.
              </p>
              <a href="mailto:support@supportify.no" className={styles.contactButton}>
                support@supportify.no
              </a>
            </div>

            {/* Sales & Demos */}
            <div className={styles.contactCard}>
              <div className={styles.iconWrapper}>
                <MessageCircle className={styles.icon} />
              </div>
              <h2>Sales & Demos</h2>
              <p>
                Interested in learning more? Book a demo or talk to our sales team.
              </p>
              <a href="mailto:sales@supportify.no" className={styles.contactButton}>
                sales@supportify.no
              </a>
            </div>

            {/* Legal & Privacy */}
            <div className={styles.contactCard}>
              <div className={styles.iconWrapper}>
                <FileText className={styles.icon} />
              </div>
              <h2>Legal & Privacy</h2>
              <p>
                Questions about privacy, terms, or legal matters?
              </p>
              <a href="mailto:legal@supportify.no" className={styles.contactButton}>
                legal@supportify.no
              </a>
            </div>
          </div>

          {/* Alternative Contact Methods */}
          <section className={styles.alternativeSection}>
            <h2>Other Ways to Reach Us</h2>
            <div className={styles.alternativeGrid}>
              <div className={styles.alternativeCard}>
                <h3>Documentation</h3>
                <p>Find answers in our comprehensive documentation</p>
                <a href="/docs" className={styles.textLink}>Browse Docs →</a>
              </div>
              <div className={styles.alternativeCard}>
                <h3>FAQ</h3>
                <p>Check our frequently asked questions</p>
                <a href="/faq" className={styles.textLink}>View FAQ →</a>
              </div>
            </div>
          </section>

          {/* Response Time */}
          <div className={styles.responseInfo}>
            <p className={styles.responseText}>
              <strong>Response Time:</strong> We typically respond within 24 hours on business days (Monday - Friday).
              For urgent issues, please mention "Urgent" in your email subject line.
            </p>
          </div>

          {/* Back to home */}
          <div className={styles.backToHome}>
            <a href="/" className={styles.backLink}>← Back to Home</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
