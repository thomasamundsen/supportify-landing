import React from 'react';
import { Metadata } from 'next';
import { CheckCircle, Download, Settings, Upload, MessageSquare, Wrench, Sparkles } from 'lucide-react';
import { Navigation } from '@/components/Navigation/Navigation';
import { Footer } from '@/components/Footer/Footer';
import styles from './GettingStarted.module.css';

export const metadata: Metadata = {
  title: 'Getting Started | Supportify Documentation',
  description: 'Learn how to install and configure Supportify AI for your Shopify store in just a few minutes.',
};

export default function GettingStartedPage() {
  return (
    <div className={styles.docsPage}>
      <Navigation />
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>Getting Started with Supportify</h1>
          <p className={styles.subtitle}>
            Set up AI-powered customer support for your Shopify store in less than 10 minutes
          </p>
        </div>
      </header>

      {/* Content */}
      <main className={styles.content}>
        <div className={styles.container}>
          {/* Quick Start */}
          <section className={styles.section}>
            <h2>Quick Start</h2>
            <p>
              Supportify is designed to get you up and running quickly. Follow these simple steps to install and configure
              your AI-powered customer support chatbot.
            </p>
            <div className={styles.timeEstimate}>
              <strong>Estimated time:</strong> 5-10 minutes
            </div>
          </section>

          {/* Step 1 */}
          <section className={styles.step}>
            <div className={styles.stepHeader}>
              <div className={styles.stepNumber}>
                <Download className={styles.stepIcon} />
                <span>1</span>
              </div>
              <h2>Install the App</h2>
            </div>
            <div className={styles.stepContent}>
              <p>
                Start by installing Supportify from the Shopify App Store:
              </p>
              <ol>
                <li>Visit the <a href="https://apps.shopify.com" target="_blank" rel="noopener noreferrer">Shopify App Store</a></li>
                <li>Search for "Supportify" or navigate directly to our app page</li>
                <li>Click the <strong>"Add app"</strong> button</li>
                <li>Review the permissions requested (read products, orders, customers; write fulfillments, orders, returns)</li>
                <li>Click <strong>"Install app"</strong> to authorize Supportify</li>
              </ol>
              <div className={styles.infoBox}>
                <strong>What happens during installation:</strong>
                <ul>
                  <li>Supportify connects to your Shopify store using OAuth</li>
                  <li>Your store credentials are securely synchronized with our backend</li>
                  <li>A chatbot is automatically created for your store</li>
                  <li>GDPR compliance webhooks are registered (customers/data_request, customers/redact, shop/redact)</li>
                  <li>You're redirected to the Supportify dashboard to complete setup</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Step 2 */}
          <section className={styles.step}>
            <div className={styles.stepHeader}>
              <div className={styles.stepNumber}>
                <Settings className={styles.stepIcon} />
                <span>2</span>
              </div>
              <h2>Configure Your Chatbot</h2>
            </div>
            <div className={styles.stepContent}>
              <p>
                After installation, you'll be taken to the Supportify app dashboard inside your Shopify admin.
                A chatbot has been automatically created for your store - now let's customize it:
              </p>

              <h3>Basic Settings</h3>
              <ul>
                <li>
                  <strong>Chatbot Name:</strong> Give your chatbot a friendly name (default: "Customer Support Bot")
                </li>
                <li>
                  <strong>System Prompt:</strong> Define your chatbot's personality and behavior. This is crucial for tone and brand voice.
                </li>
                <li>
                  <strong>Welcome Message:</strong> Set the first message customers see when opening the chat (default: "Hi there! How can I help you today?")
                </li>
              </ul>

              <h3>AI Model Selection</h3>
              <ul>
                <li>
                  <strong>Provider:</strong> Choose between OpenAI or Claude
                </li>
                <li>
                  <strong>Model:</strong> Select the specific model based on your needs:
                  <ul>
                    <li><strong>GPT-4:</strong> Most capable, best for complex queries (higher cost)</li>
                    <li><strong>GPT-3.5 Turbo:</strong> Fast and cost-effective (recommended for most stores)</li>
                    <li><strong>Claude 3 Sonnet:</strong> Excellent balance of speed and intelligence</li>
                  </ul>
                </li>
                <li>
                  <strong>Temperature:</strong> Control creativity (0 = focused, 2 = creative). Recommended: 0.7
                </li>
                <li>
                  <strong>Max Tokens:</strong> Maximum response length. Recommended: 500-1000
                </li>
              </ul>

              <div className={styles.tipBox}>
                <strong>💡 Pro Tip:</strong> Start with GPT-3.5 Turbo at temperature 0.7 for the best balance of cost and performance.
                You can always upgrade to GPT-4 later if you need more advanced reasoning.
              </div>

              <h3>Example System Prompt</h3>
              <div className={styles.codeBlock}>
                <pre>{`You are a helpful customer support assistant for [Your Store Name].
Your goal is to help customers with their questions about products,
orders, and store policies.

Be friendly, professional, and concise. Always verify customer identity
before accessing order information. If you cannot resolve an issue,
offer to escalate to a human support agent.

Store policies:
- Free shipping on orders over $50
- 30-day return policy
- 24-hour order cancellation window`}</pre>
              </div>
            </div>
          </section>

          {/* Step 3 */}
          <section className={styles.step}>
            <div className={styles.stepHeader}>
              <div className={styles.stepNumber}>
                <Wrench className={styles.stepIcon} />
                <span>3</span>
              </div>
              <h2>Configure AI Tools</h2>
            </div>
            <div className={styles.stepContent}>
              <p>
                Supportify provides powerful tools that allow the AI to take actions on behalf of customers.
                Review and enable the tools you want:
              </p>

              <div className={styles.toolsGrid}>
                <div className={styles.toolCard}>
                  <h4>🔍 Product Search</h4>
                  <p>Let customers search your product catalog by name, type, or vendor.</p>
                  <span className={styles.recommended}>Recommended: ✓</span>
                </div>

                <div className={styles.toolCard}>
                  <h4>📦 Order Lookup</h4>
                  <p>Allow customers to check order status and tracking information.</p>
                  <span className={styles.recommended}>Recommended: ✓</span>
                </div>

                <div className={styles.toolCard}>
                  <h4>👤 Customer Lookup</h4>
                  <p>Enable customers to view their order history and account details.</p>
                  <span className={styles.recommended}>Recommended: ✓</span>
                </div>

                <div className={styles.toolCard}>
                  <h4>✏️ Customer Update</h4>
                  <p>Let customers update their profile, phone, and address.</p>
                  <span className={styles.optional}>Optional</span>
                </div>

                <div className={styles.toolCard}>
                  <h4>🚚 Fulfillment Lookup</h4>
                  <p>Show shipment tracking and delivery status.</p>
                  <span className={styles.recommended}>Recommended: ✓</span>
                </div>

                <div className={styles.toolCard}>
                  <h4>❌ Order Cancel</h4>
                  <p>Allow customers to cancel unfulfilled orders.</p>
                  <span className={styles.optional}>Optional</span>
                </div>

                <div className={styles.toolCard}>
                  <h4>↩️ Return Request</h4>
                  <p>Enable customers to request returns through the chat.</p>
                  <span className={styles.optional}>Optional</span>
                </div>

                <div className={styles.toolCard}>
                  <h4>📚 Knowledge Base</h4>
                  <p>Search uploaded documents to answer common questions.</p>
                  <span className={styles.recommended}>Recommended: ✓</span>
                </div>

                <div className={styles.toolCard}>
                  <h4>🎫 Escalate to Ticket</h4>
                  <p>Create support tickets for issues that need human attention.</p>
                  <span className={styles.recommended}>Recommended: ✓</span>
                </div>
              </div>

              <div className={styles.warningBox}>
                <strong>⚠️ Security Note:</strong> Tools that modify data (order cancellation, returns, profile updates)
                require email verification for security. Customers must verify their email before these actions are executed.
              </div>
            </div>
          </section>

          {/* Step 4 */}
          <section className={styles.step}>
            <div className={styles.stepHeader}>
              <div className={styles.stepNumber}>
                <Upload className={styles.stepIcon} />
                <span>4</span>
              </div>
              <h2>Upload Knowledge Base Documents</h2>
            </div>
            <div className={styles.stepContent}>
              <p>
                Enhance your chatbot's knowledge by uploading documents about your products, policies, and FAQs:
              </p>

              <h3>Supported File Types</h3>
              <ul>
                <li><strong>PDF:</strong> Product catalogs, policy documents</li>
                <li><strong>DOCX:</strong> Word documents with FAQs or guides</li>
                <li><strong>TXT:</strong> Plain text files</li>
                <li><strong>Markdown (.md):</strong> Formatted documentation</li>
              </ul>

              <h3>How to Upload</h3>
              <ol>
                <li>Navigate to <strong>Documents</strong> in your dashboard</li>
                <li>Click <strong>"Upload Documents"</strong></li>
                <li>Select up to 10 files (max 10MB each)</li>
                <li>Add optional descriptions for better organization</li>
                <li>Click <strong>"Upload"</strong> and wait for processing</li>
              </ol>

              <h3>What Documents to Upload</h3>
              <div className={styles.documentSuggestions}>
                <div className={styles.suggestionCard}>
                  <strong>📋 Shipping & Returns Policy</strong>
                  <p>Delivery times, return windows, refund process</p>
                </div>
                <div className={styles.suggestionCard}>
                  <strong>💳 Payment Information</strong>
                  <p>Accepted payment methods, security information</p>
                </div>
                <div className={styles.suggestionCard}>
                  <strong>📦 Product Care Instructions</strong>
                  <p>Usage guides, maintenance tips</p>
                </div>
                <div className={styles.suggestionCard}>
                  <strong>❓ Frequently Asked Questions</strong>
                  <p>Common customer questions and answers</p>
                </div>
              </div>

              <div className={styles.tipBox}>
                <strong>💡 Best Practice:</strong> The more relevant content you upload, the better your chatbot performs.
                Aim for at least 3-5 documents covering your most common customer questions.
              </div>
            </div>
          </section>

          {/* Step 5 */}
          <section className={styles.step}>
            <div className={styles.stepHeader}>
              <div className={styles.stepNumber}>
                <MessageSquare className={styles.stepIcon} />
                <span>5</span>
              </div>
              <h2>Test Your Chatbot</h2>
            </div>
            <div className={styles.stepContent}>
              <p>
                Before making your chatbot live, test it to ensure it responds correctly:
              </p>

              <h3>Using the Test Feature</h3>
              <ol>
                <li>Navigate to <strong>Chatbot Settings</strong></li>
                <li>Click <strong>"Test Chatbot"</strong></li>
                <li>Send sample questions like:
                  <ul>
                    <li>"Where is my order?"</li>
                    <li>"What's your return policy?"</li>
                    <li>"Can I cancel my order?"</li>
                    <li>"Tell me about [product name]"</li>
                  </ul>
                </li>
                <li>Review the responses and refine your system prompt if needed</li>
              </ol>

              <h3>What to Test</h3>
              <div className={styles.checklistBox}>
                <div className={styles.checklistItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Tone and personality match your brand</span>
                </div>
                <div className={styles.checklistItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Product search returns relevant results</span>
                </div>
                <div className={styles.checklistItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Order lookup works with test order numbers</span>
                </div>
                <div className={styles.checklistItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Knowledge base answers common questions</span>
                </div>
                <div className={styles.checklistItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Escalation creates tickets properly</span>
                </div>
              </div>
            </div>
          </section>

          {/* Step 6 */}
          <section className={styles.step}>
            <div className={styles.stepHeader}>
              <div className={styles.stepNumber}>
                <Sparkles className={styles.stepIcon} />
                <span>6</span>
              </div>
              <h2>Enable the Chat Widget</h2>
            </div>
            <div className={styles.stepContent}>
              <p>
                The final step is to enable the chat widget on your Shopify store:
              </p>

              <h3>Enable the Theme Extension</h3>
              <ol>
                <li>In your Shopify admin, go to <strong>Online Store → Themes</strong></li>
                <li>Click <strong>"Customize"</strong> on your active theme</li>
                <li>In the theme editor, click <strong>"Add section"</strong> or <strong>"Add app block"</strong></li>
                <li>Look for <strong>"Supportify Chat Widget"</strong> in the Apps section</li>
                <li>Add it to your theme (typically in the footer or as a global app block)</li>
                <li>Customize the appearance if needed (chat bubble color, header text, etc.)</li>
                <li>Click <strong>"Save"</strong> in the top right</li>
              </ol>

              <div className={styles.successBox}>
                <strong>🎉 Congratulations!</strong> Your AI-powered chatbot is now live on your store.
                Customers will see a chat icon in the bottom-right corner of your store pages.
              </div>

              <h3>Customize Widget Appearance</h3>
              <p>
                Back in the Supportify dashboard, you can customize:
              </p>
              <ul>
                <li><strong>Primary Color:</strong> Match your brand colors</li>
                <li><strong>Position:</strong> Bottom-right, bottom-left, etc.</li>
                <li><strong>Welcome Message:</strong> First message customers see</li>
              </ul>
            </div>
          </section>

          {/* Next Steps */}
          <section className={styles.section}>
            <h2>Next Steps</h2>
            <p>
              Now that your chatbot is live, here are some things to do next:
            </p>

            <div className={styles.nextStepsGrid}>
              <div className={styles.nextStepCard}>
                <h4>📊 Monitor Performance</h4>
                <p>Check your dashboard regularly to see chat volume, popular questions, and customer satisfaction.</p>
              </div>

              <div className={styles.nextStepCard}>
                <h4>🎫 Manage Tickets</h4>
                <p>Review escalated tickets and respond to customers who need human assistance.</p>
              </div>

              <div className={styles.nextStepCard}>
                <h4>📈 Optimize Responses</h4>
                <p>Review chat transcripts and refine your system prompt for better responses.</p>
              </div>

              <div className={styles.nextStepCard}>
                <h4>📚 Expand Knowledge Base</h4>
                <p>Add more documents as you identify common questions not yet covered.</p>
              </div>

              <div className={styles.nextStepCard}>
                <h4>⚙️ Adjust Settings</h4>
                <p>Fine-tune AI model, temperature, and tool configurations based on usage patterns.</p>
              </div>

              <div className={styles.nextStepCard}>
                <h4>📧 Set Up Email Replies</h4>
                <p>Configure your email settings so customers can reply to ticket notifications.</p>
              </div>
            </div>
          </section>

          {/* Help section */}
          <section className={styles.helpSection}>
            <h2>Need Help?</h2>
            <p>
              If you run into any issues during setup, we're here to help:
            </p>
            <div className={styles.helpButtons}>
              <a href="/docs" className={styles.primaryButton}>
                View Full Documentation
              </a>
              <a href="/faq" className={styles.secondaryButton}>
                Check FAQ
              </a>
              <a href="mailto:support@supportify.no" className={styles.secondaryButton}>
                Contact Support
              </a>
            </div>
          </section>

          {/* Back to docs */}
          <div className={styles.backToHome}>
            <a href="/docs" className={styles.backLink}>← Back to Documentation</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
