import React from 'react';
import { Metadata } from 'next';
import { Navigation } from '@/components/Navigation/Navigation';
import { Footer } from '@/components/Footer/Footer';
import styles from './Terms.module.css';

export const metadata: Metadata = {
  title: 'Terms of Service | Supportify',
  description: 'Terms of Service for using Supportify AI-powered customer support for Shopify stores.',
};

export default function TermsPage() {
  return (
    <div className={styles.termsPage}>
      <Navigation />

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>Terms of Service</h1>
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
              Welcome to Supportify. These Terms of Service ("Terms") govern your use of the Supportify application
              ("Service", "App") for Shopify stores. By installing or using Supportify, you agree to be bound by these Terms.
            </p>
            <p>
              If you do not agree to these Terms, please do not install or use the Service.
            </p>
          </section>

          <section className={styles.section}>
            <h2>1. Definitions</h2>
            <ul>
              <li><strong>"Service"</strong> refers to the Supportify application and all related services.</li>
              <li><strong>"You"</strong> or <strong>"Merchant"</strong> refers to the Shopify store owner using the Service.</li>
              <li><strong>"Customer"</strong> refers to end users of your Shopify store who interact with the chatbot.</li>
              <li><strong>"We"</strong>, <strong>"Us"</strong>, or <strong>"Supportify"</strong> refers to the Service provider.</li>
              <li><strong>"Store Data"</strong> refers to products, orders, customer information, and other data from your Shopify store.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>2. Acceptance of Terms</h2>
            <p>
              By installing Supportify on your Shopify store, you acknowledge that you have read, understood, and agree to be bound by:
            </p>
            <ul>
              <li>These Terms of Service</li>
              <li>Our <a href="/privacy">Privacy Policy</a></li>
              <li>Shopify's Terms of Service and API Terms of Use</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Service Description</h2>
            <p>
              Supportify provides an AI-powered customer support chatbot for Shopify stores with the following capabilities:
            </p>
            <ul>
              <li>Automated customer support through natural language conversations</li>
              <li>Product search and recommendations</li>
              <li>Order lookup, tracking, and status updates</li>
              <li>Order cancellation and return request processing</li>
              <li>Customer profile updates</li>
              <li>Knowledge base search from uploaded documents</li>
              <li>Support ticket creation and management</li>
              <li>Email integration for ticket replies</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Account Registration and Setup</h2>

            <h3>4.1 Shopify Store Requirement</h3>
            <p>
              To use Supportify, you must have an active Shopify store with appropriate permissions to install apps.
            </p>

            <h3>4.2 Installation and Authorization</h3>
            <p>
              During installation, you grant Supportify permission to:
            </p>
            <ul>
              <li>Read your store's products, orders, customers, and inventory</li>
              <li>Write fulfillments, orders, returns, and shipping information</li>
              <li>Update customer information when authorized</li>
              <li>Receive webhooks for data protection compliance (GDPR)</li>
            </ul>

            <h3>4.3 Account Security</h3>
            <p>
              You are responsible for:
            </p>
            <ul>
              <li>Maintaining the security of your Shopify store credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>5. Usage Guidelines</h2>

            <h3>5.1 Acceptable Use</h3>
            <p>You agree to use Supportify only for lawful purposes and in accordance with these Terms. You agree NOT to:</p>
            <ul>
              <li>Use the Service in any way that violates applicable laws or regulations</li>
              <li>Attempt to reverse engineer, decompile, or hack the Service</li>
              <li>Use the Service to send spam or malicious content</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Use the Service to impersonate others or provide false information</li>
              <li>Attempt to bypass rate limits or usage restrictions</li>
              <li>Resell or redistribute the Service without authorization</li>
            </ul>

            <h3>5.2 Chatbot Configuration</h3>
            <p>You are responsible for:</p>
            <ul>
              <li>Configuring your chatbot's system prompt appropriately</li>
              <li>Ensuring your chatbot complies with your store's policies</li>
              <li>Monitoring chatbot conversations for quality and accuracy</li>
              <li>Disabling tools that you don't want customers to use</li>
              <li>Uploading only appropriate content to the knowledge base</li>
            </ul>

            <h3>5.3 Customer Interactions</h3>
            <p>You acknowledge that:</p>
            <ul>
              <li>The AI chatbot may make mistakes or provide incorrect information</li>
              <li>You should review and test chatbot responses before going live</li>
              <li>Sensitive actions (order cancellation, returns) require email verification</li>
              <li>You remain responsible for all customer interactions and transactions</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>6. Billing and Payments</h2>

            <h3>6.1 Pricing Model</h3>
            <p>
              Supportify uses usage-based pricing. You are charged for:
            </p>
            <ul>
              <li>AI messages sent by the chatbot</li>
              <li>Tokens processed by AI models (input and output)</li>
              <li>Tool executions (product search, order lookup, etc.)</li>
              <li>Knowledge base searches</li>
            </ul>

            <h3>6.2 Free Trial</h3>
            <p>
              New users receive trial credit to test the Service. Trial credit has no expiration but is non-refundable and non-transferable.
            </p>

            <h3>6.3 Payment Terms</h3>
            <ul>
              <li>Charges are billed through your Shopify account</li>
              <li>Usage is tracked in real-time in your dashboard</li>
              <li>You will receive warnings before reaching usage limits</li>
              <li>Overage handling includes a grace period before service interruption</li>
            </ul>

            <h3>6.4 Refunds</h3>
            <p>
              Usage-based charges are non-refundable. However, we may issue refunds at our discretion in cases of:
            </p>
            <ul>
              <li>Service outages or significant downtime caused by us</li>
              <li>Billing errors or technical issues</li>
              <li>Other circumstances deemed appropriate by us</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>7. Data and Privacy</h2>

            <h3>7.1 Data Processing</h3>
            <p>
              We process Store Data and Customer Data solely to provide the Service. See our <a href="/privacy">Privacy Policy</a> for details on:
            </p>
            <ul>
              <li>What data we collect and why</li>
              <li>How we store and protect data</li>
              <li>Data retention and deletion policies</li>
              <li>GDPR and privacy compliance</li>
            </ul>

            <h3>7.2 Your Responsibilities</h3>
            <p>You are responsible for:</p>
            <ul>
              <li>Ensuring you have the right to share Customer Data with us</li>
              <li>Complying with privacy laws applicable to your business</li>
              <li>Providing appropriate privacy notices to your customers</li>
              <li>Handling customer consent for data processing</li>
            </ul>

            <h3>7.3 Data Retention</h3>
            <p>
              We retain data according to our published retention policies:
            </p>
            <ul>
              <li>Chat sessions and messages: 90 days after session ends</li>
              <li>Support tickets: Configurable (minimum 90 days)</li>
              <li>Tool execution logs: 90 days</li>
              <li>Upon app uninstall: All data is deleted immediately</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>8. Intellectual Property</h2>

            <h3>8.1 Ownership</h3>
            <p>
              Supportify and all related intellectual property (software, documentation, branding) remain our exclusive property.
            </p>

            <h3>8.2 Your Content</h3>
            <p>
              You retain ownership of all content you upload (knowledge base documents, system prompts, etc.). By using the Service, you grant us a license to:
            </p>
            <ul>
              <li>Process your content to provide the Service</li>
              <li>Use AI models to analyze and respond to customer inquiries</li>
              <li>Store your content on our servers</li>
            </ul>
            <p>
              We will not use your content for any other purpose without your permission.
            </p>

            <h3>8.3 AI-Generated Content</h3>
            <p>
              Responses generated by the AI chatbot are provided "as-is." While we strive for accuracy, we do not guarantee that AI responses are error-free or appropriate for all situations.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. Service Availability</h2>

            <h3>9.1 Uptime</h3>
            <p>
              We strive to maintain high availability but do not guarantee uninterrupted service. We are not liable for:
            </p>
            <ul>
              <li>Scheduled maintenance windows</li>
              <li>Third-party service outages (Shopify, AI providers, hosting)</li>
              <li>Events beyond our control (force majeure)</li>
            </ul>

            <h3>9.2 Service Modifications</h3>
            <p>
              We reserve the right to:
            </p>
            <ul>
              <li>Modify or discontinue features</li>
              <li>Update pricing and usage limits</li>
              <li>Change AI models or underlying technology</li>
            </ul>
            <p>
              We will notify you of material changes via email or in-app notifications.
            </p>

            <h3>9.3 Service Suspension</h3>
            <p>
              We may suspend or terminate your access if:
            </p>
            <ul>
              <li>You violate these Terms</li>
              <li>Your account has unpaid charges</li>
              <li>We detect fraudulent or abusive activity</li>
              <li>Required by law or legal process</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>10. Limitations of Liability</h2>

            <h3>10.1 Disclaimer of Warranties</h3>
            <p>
              THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES INCLUDING:
            </p>
            <ul>
              <li>Merchantability and fitness for a particular purpose</li>
              <li>Accuracy or reliability of AI-generated content</li>
              <li>Uninterrupted or error-free operation</li>
              <li>Data security (though we implement industry-standard measures)</li>
            </ul>

            <h3>10.2 Limitation of Damages</h3>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR:
            </p>
            <ul>
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of profits, revenue, data, or business opportunities</li>
              <li>Customer disputes or damages arising from chatbot interactions</li>
              <li>Third-party claims or actions</li>
            </ul>
            <p>
              Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.
            </p>

            <h3>10.3 Indemnification</h3>
            <p>
              You agree to indemnify and hold us harmless from claims arising from:
            </p>
            <ul>
              <li>Your use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any laws or third-party rights</li>
              <li>Content you upload or chatbot configurations you create</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>11. Termination</h2>

            <h3>11.1 Termination by You</h3>
            <p>
              You may terminate at any time by uninstalling the app from your Shopify store. Upon termination:
            </p>
            <ul>
              <li>Your access to the Service will cease immediately</li>
              <li>All data will be deleted per our data retention policy</li>
              <li>Outstanding charges remain due and payable</li>
            </ul>

            <h3>11.2 Termination by Us</h3>
            <p>
              We may terminate your access for cause (Terms violation) or without cause with 30 days' notice.
            </p>

            <h3>11.3 Effect of Termination</h3>
            <p>
              Upon termination, sections of these Terms that should survive (payment obligations, limitations of liability, etc.) will remain in effect.
            </p>
          </section>

          <section className={styles.section}>
            <h2>12. Dispute Resolution</h2>

            <h3>12.1 Governing Law</h3>
            <p>
              These Terms are governed by the laws of Norway, without regard to conflict of law principles.
            </p>

            <h3>12.2 Arbitration</h3>
            <p>
              Any disputes shall first be resolved through good-faith negotiations. If unresolved, disputes will be settled through binding arbitration under Norwegian law.
            </p>

            <h3>12.3 Exceptions</h3>
            <p>
              Either party may seek injunctive relief in court for intellectual property violations or urgent matters.
            </p>
          </section>

          <section className={styles.section}>
            <h2>13. Shopify Terms</h2>
            <p>
              As a Shopify app, Supportify is subject to:
            </p>
            <ul>
              <li>Shopify's Partner Program Agreement</li>
              <li>Shopify's API Terms of Service</li>
              <li>Shopify's App Store Requirements</li>
            </ul>
            <p>
              In the event of conflict between these Terms and Shopify's terms, Shopify's terms shall prevail regarding Shopify-related matters.
            </p>
          </section>

          <section className={styles.section}>
            <h2>14. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of material changes via:
            </p>
            <ul>
              <li>Email to your registered address</li>
              <li>In-app notifications</li>
              <li>Updating the "Last updated" date</li>
            </ul>
            <p>
              Continued use of the Service after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2>15. General Provisions</h2>

            <h3>15.1 Entire Agreement</h3>
            <p>
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Supportify.
            </p>

            <h3>15.2 Severability</h3>
            <p>
              If any provision is found unenforceable, the remaining provisions remain in effect.
            </p>

            <h3>15.3 No Waiver</h3>
            <p>
              Our failure to enforce any provision does not constitute a waiver of that provision.
            </p>

            <h3>15.4 Assignment</h3>
            <p>
              You may not assign these Terms without our consent. We may assign these Terms to an affiliate or in connection with a merger or acquisition.
            </p>
          </section>

          <section className={styles.section}>
            <h2>16. Contact Information</h2>
            <p>
              For questions about these Terms, please contact us:
            </p>
            <div className={styles.contactInfo}>
              <p><strong>Email:</strong> <a href="mailto:legal@supportify.no">legal@supportify.no</a></p>
              <p><strong>Support:</strong> <a href="mailto:support@supportify.no">support@supportify.no</a></p>
            </div>
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
