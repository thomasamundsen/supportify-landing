import React from 'react';
import { Metadata } from 'next';
import { Navigation } from '@/components/Navigation/Navigation';
import { Footer } from '@/components/Footer/Footer';
import styles from './Privacy.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | Supportify',
  description: 'Learn how Supportify collects, uses, and protects your data. Our privacy policy explains our commitment to data security and GDPR compliance.',
};

export default function PrivacyPage() {
  return (
    <div className={styles.privacyPage}>
      <Navigation />
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.subtitle}>
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </header>

      {/* Content */}
      <main className={styles.content}>
        <div className={styles.container}>
          <section className={styles.section}>
            <h2>Introduction</h2>
            <p>
              Supportify ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your data.
              This Privacy Policy explains how we collect, use, store, and protect information when you use our AI-powered customer
              support application for Shopify stores.
            </p>
            <p>
              By installing or using Supportify, you agree to the collection and use of information in accordance with this policy.
              We take data privacy seriously and comply with applicable privacy laws, including GDPR and CCPA.
            </p>
          </section>

          <section className={styles.section}>
            <h2>1. Information We Collect</h2>

            <h3>1.1 Store and Business Information</h3>
            <p>When you install Supportify on your Shopify store, we collect:</p>
            <ul>
              <li><strong>Store details:</strong> Shop domain, store name, email address, and timezone</li>
              <li><strong>Authentication tokens:</strong> Encrypted Shopify access tokens to interact with your store's API</li>
              <li><strong>App configuration:</strong> Your chatbot settings, customizations, and preferences</li>
            </ul>

            <h3>1.2 Customer Data</h3>
            <p>To provide customer support services, we process:</p>
            <ul>
              <li><strong>Customer identifiers:</strong> Customer IDs, email addresses, and names</li>
              <li><strong>Chat conversations:</strong> Messages exchanged between your customers and our AI chatbot</li>
              <li><strong>Order information:</strong> Order numbers, statuses, and details when customers inquire about orders</li>
              <li><strong>Support tickets:</strong> Ticket content, status, and related customer communications</li>
              <li><strong>Email correspondence:</strong> Email replies from customers to support tickets</li>
            </ul>

            <h3>1.3 Technical and Usage Data</h3>
            <ul>
              <li><strong>Session data:</strong> IP addresses, user agents, session timestamps</li>
              <li><strong>Tool execution logs:</strong> Records of AI tool calls and actions performed</li>
              <li><strong>Analytics data:</strong> Usage statistics, feature adoption, and performance metrics</li>
              <li><strong>Data access logs:</strong> Audit trails of customer data access (for compliance purposes)</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>2. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>

            <h3>2.1 Providing Core Services</h3>
            <ul>
              <li>Delivering AI-powered customer support responses</li>
              <li>Managing support tickets and customer inquiries</li>
              <li>Processing customer requests (order lookups, address updates, etc.)</li>
              <li>Sending email notifications about ticket updates</li>
            </ul>

            <h3>2.2 Service Improvement</h3>
            <ul>
              <li>Analyzing usage patterns to improve our AI models</li>
              <li>Monitoring system performance and reliability</li>
              <li>Developing new features and functionality</li>
              <li>Training and refining our chatbot responses</li>
            </ul>

            <h3>2.3 Security and Compliance</h3>
            <ul>
              <li>Detecting and preventing fraud or unauthorized access</li>
              <li>Maintaining audit logs for compliance with privacy regulations</li>
              <li>Responding to data subject requests (access, deletion, portability)</li>
              <li>Ensuring data retention and deletion policies are enforced</li>
            </ul>

            <h3>2.4 Communication</h3>
            <ul>
              <li>Sending service-related notifications and updates</li>
              <li>Responding to support requests from merchants</li>
              <li>Providing important security or privacy updates</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Data Storage and Security</h2>

            <h3>3.1 Data Storage</h3>
            <p>
              Your data is stored securely in encrypted databases hosted on trusted cloud infrastructure. We implement industry-standard
              security measures including:
            </p>
            <ul>
              <li><strong>Encryption in transit:</strong> All data transmitted between your browser, our servers, and Shopify is encrypted using TLS 1.2+</li>
              <li><strong>Encryption at rest:</strong> Sensitive authentication tokens are encrypted using AES-256-GCM</li>
              <li><strong>Access controls:</strong> Strict role-based access controls limit who can access your data</li>
              <li><strong>Database security:</strong> SSL-enforced database connections with regular security patches</li>
            </ul>

            <h3>3.2 Data Retention</h3>
            <p>We retain your data only as long as necessary to provide our services and comply with legal obligations:</p>
            <ul>
              <li><strong>Active stores:</strong> Data is retained while your store actively uses Supportify</li>
              <li><strong>Chat sessions:</strong> Ended chat sessions and messages are automatically deleted after <strong>90 days</strong></li>
              <li><strong>Support tickets:</strong> Tickets are retained according to your preferences (minimum 90 days)</li>
              <li><strong>Audit logs:</strong> Data access logs are retained for 90 days for compliance purposes</li>
              <li><strong>App uninstall:</strong> All data is deleted when you uninstall the app (see section 6 for details)</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Data Sharing and Third Parties</h2>

            <h3>4.1 We Do NOT Sell Your Data</h3>
            <p>
              We do not sell, rent, or trade your customer data or store information to third parties for marketing purposes.
            </p>

            <h3>4.2 Service Providers</h3>
            <p>We may share data with trusted third-party service providers who assist us in operating our service:</p>
            <ul>
              <li><strong>Shopify:</strong> We access your store data via the Shopify API to provide our services</li>
              <li><strong>Cloud hosting providers:</strong> For secure data storage and application hosting</li>
              <li><strong>Email service provider (Resend):</strong> For sending support ticket notifications</li>
              <li><strong>AI/ML providers:</strong> For processing natural language and generating customer support responses</li>
            </ul>
            <p>
              All third-party providers are contractually bound to protect your data and use it only for the purposes we specify.
            </p>

            <h3>4.3 Legal Requirements</h3>
            <p>We may disclose your information if required by law or in response to:</p>
            <ul>
              <li>Valid legal processes (subpoenas, court orders, etc.)</li>
              <li>Protection of our rights, property, or safety</li>
              <li>Emergency situations involving potential harm to individuals</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>5. Your Rights and Choices</h2>
            <p>
              Depending on your location, you may have the following rights regarding your personal data:
            </p>

            <h3>5.1 Access and Portability</h3>
            <ul>
              <li><strong>Right to access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Data portability:</strong> Receive your data in a structured, machine-readable format</li>
            </ul>

            <h3>5.2 Correction and Deletion</h3>
            <ul>
              <li><strong>Right to rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Right to erasure:</strong> Request deletion of your personal data (subject to legal retention requirements)</li>
            </ul>

            <h3>5.3 Control and Restriction</h3>
            <ul>
              <li><strong>Right to restrict processing:</strong> Limit how we use your data in certain circumstances</li>
              <li><strong>Right to object:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Right to withdraw consent:</strong> Withdraw consent at any time (by uninstalling the app)</li>
            </ul>

            <h3>5.4 Exercising Your Rights</h3>
            <p>
              To exercise any of these rights, please contact us at <a href="mailto:privacy@supportify.no">privacy@supportify.no</a>.
              We will respond to your request within 30 days.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. GDPR Compliance and Data Subject Requests</h2>
            <p>
              Supportify is fully compliant with the General Data Protection Regulation (GDPR) and has implemented the following measures:
            </p>

            <h3>6.1 Shopify GDPR Webhooks</h3>
            <p>We automatically process Shopify's GDPR webhooks to handle data subject requests:</p>
            <ul>
              <li>
                <strong>Customer Data Request:</strong> When a customer requests their data via Shopify, we automatically compile and export
                all chat sessions, messages, and support tickets associated with that customer.
              </li>
              <li>
                <strong>Customer Data Erasure:</strong> When a customer requests deletion via Shopify, we automatically delete all their
                chat sessions, messages, and associated data from our systems.
              </li>
              <li>
                <strong>Shop Data Erasure:</strong> When you delete your Shopify store, we automatically delete all associated data including
                all customer information, chat sessions, tickets, and store configuration.
              </li>
            </ul>

            <h3>6.2 Data Protection Officer</h3>
            <p>
              For GDPR-related inquiries, you can contact our Data Protection Officer at <a href="mailto:dpo@supportify.no">dpo@supportify.no</a>.
            </p>

            <h3>6.3 Legal Basis for Processing</h3>
            <p>We process your data based on the following legal grounds:</p>
            <ul>
              <li><strong>Contract performance:</strong> Processing necessary to provide our services</li>
              <li><strong>Legitimate interests:</strong> Improving our service, security, and fraud prevention</li>
              <li><strong>Legal obligations:</strong> Compliance with applicable laws and regulations</li>
              <li><strong>Consent:</strong> Where you have given explicit consent (e.g., email notifications)</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>7. Cookies and Tracking</h2>
            <p>
              Supportify uses minimal cookies and tracking technologies:
            </p>

            <h3>7.1 Essential Cookies</h3>
            <ul>
              <li><strong>Session cookies:</strong> Used to maintain your login session and application state</li>
              <li><strong>Security tokens:</strong> For authentication and CSRF protection</li>
            </ul>

            <h3>7.2 Analytics</h3>
            <ul>
              <li>We use anonymous analytics to understand how our service is used</li>
              <li>We do not use third-party advertising cookies or trackers</li>
            </ul>

            <h3>7.3 Customer Portal</h3>
            <p>
              When customers access the ticket portal, we use token-based authentication instead of cookies to protect their privacy.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. International Data Transfers</h2>
            <p>
              Your data may be transferred to and processed in countries outside of your jurisdiction. When we transfer data
              internationally, we ensure appropriate safeguards are in place, including:
            </p>
            <ul>
              <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
              <li>Data processing agreements with all service providers</li>
              <li>Compliance with applicable data protection laws in each jurisdiction</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>9. Children's Privacy</h2>
            <p>
              Supportify is not intended for use by individuals under the age of 16. We do not knowingly collect personal information
              from children. If you believe we have inadvertently collected data from a child, please contact us immediately.
            </p>
          </section>

          <section className={styles.section}>
            <h2>10. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, regulatory, or
              operational reasons. We will notify you of any material changes by:
            </p>
            <ul>
              <li>Updating the "Last updated" date at the top of this policy</li>
              <li>Sending an email notification to your registered email address</li>
              <li>Displaying a prominent notice in the Supportify app</li>
            </ul>
            <p>
              Your continued use of Supportify after any changes indicates your acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section className={styles.section}>
            <h2>11. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className={styles.contactInfo}>
              <p><strong>Email:</strong> <a href="mailto:privacy@supportify.no">privacy@supportify.no</a></p>
              <p><strong>Data Protection Officer:</strong> <a href="mailto:dpo@supportify.no">dpo@supportify.no</a></p>
              <p><strong>General Support:</strong> <a href="mailto:support@supportify.no">support@supportify.no</a></p>
            </div>
            <p>
              We will respond to your inquiries within 30 days and work with you to resolve any privacy concerns.
            </p>
          </section>

          <section className={styles.section}>
            <h2>12. Shopify App Requirements</h2>
            <p>
              As a Shopify app, Supportify adheres to Shopify's App Store requirements and Partner Program Agreement, including:
            </p>
            <ul>
              <li>Transparent data usage and collection practices</li>
              <li>Secure handling of merchant and customer data</li>
              <li>Proper implementation of GDPR webhook handlers</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Compliance with Shopify's API Terms of Service</li>
            </ul>
            <p>
              For more information about Shopify's privacy practices, please visit <a href="https://www.shopify.com/legal/privacy" target="_blank" rel="noopener noreferrer">Shopify's Privacy Policy</a>.
            </p>
          </section>

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
