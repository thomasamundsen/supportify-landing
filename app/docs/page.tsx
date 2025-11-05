import React from 'react';
import { Metadata } from 'next';
import {
  BookOpen,
  Rocket,
  Settings,
  Zap,
  Shield,
  HelpCircle,
  FileText,
  MessageSquare,
  Wrench,
  CreditCard,
  Database,
  Mail
} from 'lucide-react';
import { Navigation } from '@/components/Navigation/Navigation';
import { Footer } from '@/components/Footer/Footer';
import styles from './Docs.module.css';

export const metadata: Metadata = {
  title: 'Documentation | Supportify',
  description: 'Complete documentation for Supportify AI - setup guides, feature documentation, API reference, and more.',
};

export default function DocsPage() {
  return (
    <div className={styles.docsPage}>
      <Navigation />
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>Documentation</h1>
          <p className={styles.subtitle}>
            Everything you need to know about Supportify AI
          </p>
        </div>
      </header>

      {/* Content */}
      <main className={styles.content}>
        <div className={styles.container}>
          {/* Quick Start */}
          <section className={styles.quickStart}>
            <div className={styles.quickStartCard}>
              <Rocket className={styles.quickStartIcon} />
              <h2>New to Supportify?</h2>
              <p>Get your AI chatbot up and running in less than 10 minutes</p>
              <a href="/docs/getting-started" className={styles.primaryButton}>
                Get Started →
              </a>
            </div>
          </section>

          {/* Main Documentation Sections */}
          <section className={styles.docsGrid}>
            {/* Getting Started */}
            <div className={styles.docCard}>
              <div className={styles.docIcon}>
                <Rocket />
              </div>
              <h3>Getting Started</h3>
              <p>Installation, setup, and configuration guide</p>
              <ul className={styles.docLinks}>
                <li><a href="/docs/getting-started">Quick Start Guide</a></li>
                <li><a href="/docs/getting-started#configure-chatbot">Configure Your Chatbot</a></li>
                <li><a href="/docs/getting-started#enable-widget">Enable Chat Widget</a></li>
              </ul>
            </div>

            {/* Core Features */}
            <div className={styles.docCard}>
              <div className={styles.docIcon}>
                <Zap />
              </div>
              <h3>Core Features</h3>
              <p>Learn about Supportify's powerful capabilities</p>
              <ul className={styles.docLinks}>
                <li><a href="#ai-chat">AI-Powered Chat</a></li>
                <li><a href="#knowledge-base">Knowledge Base</a></li>
                <li><a href="#ticket-system">Ticket System</a></li>
                <li><a href="#email-integration">Email Integration</a></li>
              </ul>
            </div>

            {/* AI Tools */}
            <div className={styles.docCard}>
              <div className={styles.docIcon}>
                <Wrench />
              </div>
              <h3>AI Tools</h3>
              <p>Configure which actions the AI can perform</p>
              <ul className={styles.docLinks}>
                <li><a href="#product-search">Product Search</a></li>
                <li><a href="#order-management">Order Management</a></li>
                <li><a href="#customer-tools">Customer Tools</a></li>
                <li><a href="#escalation">Escalate to Ticket</a></li>
              </ul>
            </div>

            {/* Customization */}
            <div className={styles.docCard}>
              <div className={styles.docIcon}>
                <Settings />
              </div>
              <h3>Customization</h3>
              <p>Personalize your chatbot's behavior and appearance</p>
              <ul className={styles.docLinks}>
                <li><a href="#system-prompt">System Prompt Guide</a></li>
                <li><a href="#ai-models">Choose AI Model</a></li>
                <li><a href="#widget-customization">Widget Styling</a></li>
                <li><a href="#tone-personality">Tone & Personality</a></li>
              </ul>
            </div>

            {/* Billing */}
            <div className={styles.docCard}>
              <div className={styles.docIcon}>
                <CreditCard />
              </div>
              <h3>Billing & Plans</h3>
              <p>Understand pricing, usage, and subscriptions</p>
              <ul className={styles.docLinks}>
                <li><a href="#pricing">Pricing Model</a></li>
                <li><a href="#usage-tracking">Usage Tracking</a></li>
                <li><a href="#overage">Overage Handling</a></li>
                <li><a href="#trial">Free Trial</a></li>
              </ul>
            </div>

            {/* Security & Privacy */}
            <div className={styles.docCard}>
              <div className={styles.docIcon}>
                <Shield />
              </div>
              <h3>Security & Privacy</h3>
              <p>Data protection, GDPR compliance, and security</p>
              <ul className={styles.docLinks}>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="#email-verification">Email Verification</a></li>
                <li><a href="#data-retention">Data Retention</a></li>
                <li><a href="#gdpr">GDPR Compliance</a></li>
              </ul>
            </div>
          </section>

          {/* Detailed Sections */}
          <section className={styles.detailSection} id="ai-chat">
            <h2>AI-Powered Chat</h2>
            <p>
              Supportify uses advanced language models from OpenAI and Anthropic to provide intelligent, context-aware
              customer support. The AI can understand customer intent, search your knowledge base, and take actions
              through integrated tools.
            </p>
            <h3>Supported AI Models</h3>
            <ul>
              <li><strong>GPT-4:</strong> Most capable model, best for complex queries and nuanced conversations</li>
              <li><strong>GPT-3.5 Turbo:</strong> Fast and cost-effective, recommended for most use cases</li>
              <li><strong>Claude 3 Opus:</strong> Excellent reasoning and long-context understanding</li>
              <li><strong>Claude 3 Sonnet:</strong> Balanced performance and cost</li>
              <li><strong>Claude 3 Haiku:</strong> Ultra-fast responses for simple queries</li>
            </ul>
            <h3>Features</h3>
            <ul>
              <li>Streaming responses with real-time typing effect</li>
              <li>Conversation history and context retention</li>
              <li>Multi-turn conversations with memory</li>
              <li>Rate limiting (20 messages/min per session)</li>
              <li>Session management and persistence</li>
            </ul>
          </section>

          <section className={styles.detailSection} id="knowledge-base">
            <h2>Knowledge Base</h2>
            <p>
              Upload documents to create a searchable knowledge base. The AI uses vector embeddings to find relevant
              information and answer customer questions based on your content.
            </p>
            <h3>Supported File Types</h3>
            <ul>
              <li><strong>PDF:</strong> Product catalogs, policy documents, user manuals</li>
              <li><strong>DOCX:</strong> Word documents with FAQs and guides</li>
              <li><strong>TXT:</strong> Plain text files</li>
              <li><strong>Markdown (.md):</strong> Formatted documentation</li>
            </ul>
            <h3>Upload Limits</h3>
            <ul>
              <li>Up to 10 files per upload</li>
              <li>Maximum 10MB per file</li>
              <li>Automatic text chunking and embedding</li>
              <li>Processing typically completes within 1-5 minutes</li>
            </ul>
            <h3>Best Practices</h3>
            <ul>
              <li>Upload comprehensive FAQs and policy documents</li>
              <li>Keep documents focused on specific topics</li>
              <li>Include product care instructions and usage guides</li>
              <li>Update documents when policies change</li>
              <li>Use clear, concise language in your documents</li>
            </ul>
          </section>

          <section className={styles.detailSection} id="ticket-system">
            <h2>Ticket System</h2>
            <p>
              When the AI can't resolve an issue, it can escalate to a human support ticket. Customers receive a
              unique ticket number and can reply via email or a secure web portal.
            </p>
            <h3>Ticket Features</h3>
            <ul>
              <li><strong>Automatic Creation:</strong> AI creates tickets with full conversation context</li>
              <li><strong>Priority Levels:</strong> Low, medium, high, urgent</li>
              <li><strong>Email Notifications:</strong> Customers and admins receive updates</li>
              <li><strong>Status Workflow:</strong> Pending → In Progress → Resolved → Closed</li>
              <li><strong>Access Tokens:</strong> Secure customer portal links</li>
              <li><strong>Email Replies:</strong> Customers can reply to tickets via email</li>
            </ul>
            <h3>Admin Dashboard</h3>
            <ul>
              <li>View all tickets with filters (status, priority)</li>
              <li>Add internal notes (not visible to customers)</li>
              <li>Track response and resolution times</li>
              <li>Update ticket status and priority</li>
            </ul>
          </section>

          <section className={styles.detailSection} id="email-integration">
            <h2>Email Integration</h2>
            <p>
              Supportify integrates with Resend for transactional emails and inbound email processing. Customers
              can reply to ticket notification emails, and their responses are automatically added to the ticket.
            </p>
            <h3>Email Features</h3>
            <ul>
              <li><strong>Ticket Notifications:</strong> Automatic emails when tickets are created or updated</li>
              <li><strong>Reply-to Addresses:</strong> Each ticket has a unique reply address (ticket+TKT-XXXXX@supportify.no)</li>
              <li><strong>Email Parsing:</strong> Automatic removal of quoted text and signatures</li>
              <li><strong>Reopen Closed Tickets:</strong> Tickets automatically reopen when customers reply</li>
              <li><strong>Admin Notifications:</strong> Alerts when customers reply to tickets</li>
            </ul>
          </section>

          <section className={styles.detailSection} id="product-search">
            <h2>AI Tools: Product Search</h2>
            <p>
              Allows the AI to search your Shopify product catalog by name, type, vendor, or tags. Returns relevant
              products with prices, availability, and images.
            </p>
            <h3>Capabilities</h3>
            <ul>
              <li>Natural language search (e.g., "blue shirts under $50")</li>
              <li>Filter by product type, vendor, availability</li>
              <li>Returns up to 50 products per search</li>
              <li>Includes variant information (sizes, colors)</li>
              <li>Shows current pricing and inventory status</li>
            </ul>
          </section>

          <section className={styles.detailSection} id="order-management">
            <h2>AI Tools: Order Management</h2>
            <p>
              Powerful tools for customers to manage their orders through the chat interface.
            </p>
            <h3>Order Lookup</h3>
            <ul>
              <li>Search by order number or email address</li>
              <li>Email verification required for security</li>
              <li>Shows order status, items, totals, shipping info</li>
              <li>Includes tracking information when available</li>
            </ul>
            <h3>Order Cancellation</h3>
            <ul>
              <li>Cancel unfulfilled orders</li>
              <li>Email verification required</li>
              <li>Option to notify customer via email</li>
              <li>Prevents cancellation of fulfilled orders</li>
            </ul>
            <h3>Fulfillment Tracking</h3>
            <ul>
              <li>Real-time shipment tracking</li>
              <li>Carrier information and tracking numbers</li>
              <li>Estimated delivery dates</li>
              <li>Delivery status updates</li>
            </ul>
          </section>

          <section className={styles.detailSection} id="customer-tools">
            <h2>AI Tools: Customer Tools</h2>
            <h3>Customer Lookup</h3>
            <ul>
              <li>Search customers by email or ID</li>
              <li>View order history and account details</li>
              <li>Customer tier classification (New, Returning, VIP, etc.)</li>
              <li>Lifetime value calculations</li>
              <li>Email verification required</li>
            </ul>
            <h3>Customer Profile Update</h3>
            <ul>
              <li>Update name, phone, email</li>
              <li>Modify default shipping address</li>
              <li>Email verification required</li>
              <li>Changes sync to Shopify immediately</li>
            </ul>
            <h3>Return Requests</h3>
            <ul>
              <li>Create return authorizations</li>
              <li>Specify items and quantities</li>
              <li>Email verification required</li>
              <li>Returns authorization number provided</li>
            </ul>
          </section>

          <section className={styles.detailSection} id="system-prompt">
            <h2>System Prompt Guide</h2>
            <p>
              The system prompt is the most important configuration for your chatbot. It defines personality, tone,
              and behavior guidelines.
            </p>
            <h3>Best Practices</h3>
            <ul>
              <li><strong>Be specific:</strong> Define exactly how the chatbot should behave</li>
              <li><strong>Set boundaries:</strong> Clarify what the chatbot should and shouldn't do</li>
              <li><strong>Include policies:</strong> Mention key store policies (shipping, returns, etc.)</li>
              <li><strong>Define tone:</strong> Friendly, professional, casual, formal, etc.</li>
              <li><strong>Provide context:</strong> What products you sell, target audience, brand values</li>
            </ul>
            <h3>Example Structure</h3>
            <div className={styles.examplePrompt}>
              <pre>{`You are [Name], a customer support assistant for [Store Name].

Your Role:
- Help customers with product questions, orders, and returns
- Be friendly, professional, and concise
- Always verify customer identity before accessing sensitive information

Store Information:
- We sell [product category]
- Shipping: Free over $50, 3-5 business days
- Returns: 30 days, original condition
- Support hours: Mon-Fri 9am-5pm EST

Guidelines:
- If you can't help, escalate to a human agent
- Never make up information - search the knowledge base first
- Always thank customers for their patience`}</pre>
            </div>
          </section>

          <section className={styles.detailSection} id="email-verification">
            <h2>Email Verification</h2>
            <p>
              For security, Supportify requires email verification before executing sensitive actions like order
              cancellations, returns, or profile updates.
            </p>
            <h3>How It Works</h3>
            <ul>
              <li>Customer requests a sensitive action (e.g., cancel order)</li>
              <li>AI sends a 6-digit verification code to the customer's email</li>
              <li>Customer enters the code in the chat</li>
              <li>Code is valid for 3-4 hours</li>
              <li>Maximum 3 verification attempts</li>
              <li>Rate limited to prevent abuse</li>
            </ul>
          </section>

          <section className={styles.detailSection} id="data-retention">
            <h2>Data Retention</h2>
            <p>
              Supportify implements a 90-day data retention policy for customer data, in compliance with GDPR
              and privacy best practices.
            </p>
            <h3>What Gets Deleted</h3>
            <ul>
              <li>Chat sessions ended more than 90 days ago</li>
              <li>Chat messages older than 90 days</li>
              <li>Tool execution logs older than 90 days</li>
              <li>Data access audit logs older than 90 days</li>
            </ul>
            <h3>What's Retained</h3>
            <ul>
              <li>Active chat sessions (not yet ended)</li>
              <li>Open or recently closed tickets (configurable)</li>
              <li>Store configuration and settings</li>
              <li>Knowledge base documents</li>
              <li>Usage and billing records (required for accounting)</li>
            </ul>
          </section>

          <section className={styles.detailSection} id="pricing">
            <h2>Pricing Model</h2>
            <p>
              Supportify uses usage-based pricing, charging based on actual AI usage rather than flat monthly fees.
              This means you only pay for what you use.
            </p>
            <h3>What You're Charged For</h3>
            <ul>
              <li><strong>AI Messages:</strong> Each message sent by the AI chatbot</li>
              <li><strong>Tokens:</strong> Input and output tokens processed by the AI model</li>
              <li><strong>Tool Executions:</strong> When AI uses tools (order lookup, product search, etc.)</li>
              <li><strong>Knowledge Base Searches:</strong> Document searches using embeddings</li>
            </ul>
            <h3>Free Trial</h3>
            <ul>
              <li>All new users receive trial credit</li>
              <li>No credit card required for trial</li>
              <li>Enough credit for hundreds of conversations</li>
              <li>Test all features during trial period</li>
            </ul>
            <h3>Overage Handling</h3>
            <ul>
              <li>Grace period when approaching limits</li>
              <li>Warnings before service interruption</li>
              <li>Transparent overage calculations in dashboard</li>
              <li>Option to upgrade plan or purchase credits</li>
            </ul>
          </section>

          {/* FAQ Link */}
          <section className={styles.faqCallout}>
            <HelpCircle className={styles.faqIcon} />
            <div>
              <h3>Still have questions?</h3>
              <p>Check out our comprehensive FAQ for answers to common questions</p>
            </div>
            <a href="/faq" className={styles.faqButton}>
              View FAQ →
            </a>
          </section>

          {/* Support */}
          <section className={styles.supportSection}>
            <h2>Need Help?</h2>
            <p>
              Can't find what you're looking for? Our support team is here to assist you.
            </p>
            <div className={styles.supportButtons}>
              <a href="mailto:support@supportify.no" className={styles.primaryButton}>
                <Mail className={styles.buttonIcon} />
                Contact Support
              </a>
              <a href="/docs/getting-started" className={styles.secondaryButton}>
                <Rocket className={styles.buttonIcon} />
                Quick Start Guide
              </a>
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
