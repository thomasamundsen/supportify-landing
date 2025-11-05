'use client';

import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { Navigation } from '@/components/Navigation/Navigation';
import { Footer } from '@/components/Footer/Footer';
import styles from './FAQ.module.css';

const faqData = [
  {
    category: 'Getting Started',
    questions: [
      {
        question: 'How do I install Supportify on my Shopify store?',
        answer: 'Installing Supportify is easy! Simply visit the Shopify App Store, search for "Supportify AI", and click "Add app". You\'ll be redirected to authorize the app, and once complete, you\'ll be taken to the Supportify dashboard where you can configure your chatbot. The entire process takes less than 5 minutes.'
      },
      {
        question: 'What information does Supportify need to access from my Shopify store?',
        answer: 'Supportify requires read access to your products, orders, and customers to provide accurate support. It also needs write access to update customer information and create returns when authorized. All data is encrypted and stored securely, and we never share your data with third parties.'
      },
      {
        question: 'How long does it take to set up?',
        answer: 'Basic setup takes about 5 minutes. You can start with the default configuration and have a working chatbot immediately. For optimal results, we recommend spending 15-30 minutes customizing your chatbot\'s system prompt, uploading your knowledge base documents, and configuring which tools to enable.'
      },
      {
        question: 'Do I need technical knowledge to use Supportify?',
        answer: 'No technical knowledge is required! Supportify is designed to be user-friendly with a simple point-and-click interface. The chatbot automatically integrates with your Shopify store, and you can customize everything through our intuitive dashboard.'
      }
    ]
  },
  {
    category: 'Features & Capabilities',
    questions: [
      {
        question: 'What can the AI chatbot help customers with?',
        answer: 'The AI chatbot can help customers with product searches, order tracking, order cancellations, return requests, customer profile updates, and general questions about your store. It can also search your knowledge base for answers to common questions and escalate complex issues to human support.'
      },
      {
        question: 'Can customers cancel orders or request returns through the chatbot?',
        answer: 'Yes! Customers can cancel unfulfilled orders and request returns directly through the chat. For security, we require email verification before processing these sensitive actions. The chatbot will automatically verify the customer\'s email before proceeding.'
      },
      {
        question: 'How does the knowledge base work?',
        answer: 'You can upload documents (PDF, DOCX, TXT, MD) containing information about your products, policies, and FAQs. Supportify uses AI embeddings to understand your content and automatically finds relevant information when customers ask questions. The more documents you upload, the better the chatbot performs.'
      },
      {
        question: 'What is the ticket escalation feature?',
        answer: 'If the AI can\'t resolve a customer\'s issue, it can create a support ticket that includes the full conversation transcript. You\'ll receive an email notification, and the customer gets a ticket number and access link. They can reply via email or through the ticket portal, and you can respond from your admin dashboard.'
      },
      {
        question: 'Can I customize the chatbot\'s personality and responses?',
        answer: 'Absolutely! You can customize the system prompt to define your chatbot\'s tone, personality, and behavior. You can make it formal, casual, funny, or match your brand voice. You can also enable/disable specific tools and configure response length and creativity.'
      }
    ]
  },
  {
    category: 'Pricing & Billing',
    questions: [
      {
        question: 'How does Supportify pricing work?',
        answer: 'Supportify offers flexible pricing based on usage. We provide a free trial credit to get started. After that, you\'re charged based on the number of AI messages, tokens used, and tools executed. You can view detailed usage statistics in your dashboard. All charges are billed through Shopify.'
      },
      {
        question: 'What happens if I exceed my usage limit?',
        answer: 'We provide a grace period and warnings before any service interruption. You\'ll receive alerts when approaching limits, and there\'s a buffer period where the service continues while you upgrade. Overage charges are calculated transparently and shown in your billing dashboard.'
      },
      {
        question: 'Can I cancel my subscription at any time?',
        answer: 'Yes, you can cancel at any time with no penalties. Your data will be retained for 90 days after cancellation, allowing you to reactivate without losing conversation history. After 90 days, all data is automatically deleted per our retention policy.'
      },
      {
        question: 'Is there a free trial?',
        answer: 'Yes! All new users receive trial credit to test Supportify without charges. This gives you enough credit to handle hundreds of conversations and evaluate the service. No credit card required for the trial.'
      }
    ]
  },
  {
    category: 'Security & Privacy',
    questions: [
      {
        question: 'How is customer data protected?',
        answer: 'We take security seriously. All data is encrypted in transit using TLS 1.2+, and sensitive tokens are encrypted at rest using AES-256-GCM. We implement strict access controls, regular security audits, and comply with GDPR and CCPA regulations. Customer data is never shared with third parties for marketing.'
      },
      {
        question: 'How does email verification work for sensitive actions?',
        answer: 'When a customer requests a sensitive action (like order cancellation or profile update), the chatbot sends a 6-digit verification code to their email. The customer must enter this code in the chat to proceed. Codes expire after 3-4 hours and are rate-limited to prevent abuse.'
      },
      {
        question: 'What happens to my data if I uninstall the app?',
        answer: 'When you uninstall Supportify, all your data is immediately deleted from our systems, including chat sessions, tickets, documents, and store configuration. This ensures your data doesn\'t remain on our servers after you stop using the service.'
      },
      {
        question: 'Is Supportify GDPR compliant?',
        answer: 'Yes, Supportify is fully GDPR compliant. We automatically handle Shopify\'s GDPR webhooks for customer data requests, erasure, and shop deletion. We maintain audit logs, implement 90-day data retention policies, and provide customers with their data rights (access, deletion, portability).'
      }
    ]
  },
  {
    category: 'Customization',
    questions: [
      {
        question: 'Can I change the chatbot\'s appearance?',
        answer: 'Yes! You can customize the chat widget\'s primary color to match your brand, change the position (currently bottom-right), and customize the welcome message. More customization options are in development.'
      },
      {
        question: 'Which AI models are supported?',
        answer: 'Supportify supports multiple models from OpenAI (GPT-4, GPT-4 Turbo, GPT-3.5 Turbo) and Claude (Claude 3 Opus, Sonnet, Haiku). You can switch models at any time from your dashboard. Different models have different costs and capabilities.'
      },
      {
        question: 'Can I control which tools the chatbot can use?',
        answer: 'Yes! Each tool can be individually enabled or disabled. For example, if you don\'t want customers to cancel orders through the chat, you can disable the order cancellation tool. This gives you full control over what actions customers can take.'
      },
      {
        question: 'How do I add my own content to the knowledge base?',
        answer: 'Navigate to Documents in your dashboard and click "Upload". You can upload up to 10 files at once (max 10MB each). Supported formats include PDF, DOCX, TXT, and Markdown. The system automatically processes and indexes your content, making it searchable within minutes.'
      }
    ]
  },
  {
    category: 'Technical & Support',
    questions: [
      {
        question: 'What are the rate limits?',
        answer: 'To ensure service quality, we implement rate limits: 20 messages per minute per chat session, 10 new sessions per minute per IP, and 60 requests per 15 minutes for the ticket portal. These limits are designed to be generous for normal use while preventing abuse.'
      },
      {
        question: 'Can customers reply to tickets via email?',
        answer: 'Yes! When a ticket is created, customers receive an email with a reply-to address. They can simply reply to that email, and their message is automatically added to the ticket. This provides a seamless experience without requiring them to log in.'
      },
      {
        question: 'How does the streaming chat work?',
        answer: 'Supportify uses Server-Sent Events (SSE) to stream responses in real-time. This means customers see the AI typing out responses word-by-word, providing a natural conversational experience rather than waiting for the complete response.'
      },
      {
        question: 'What languages does Supportify support?',
        answer: 'The AI models support multiple languages out of the box. The chatbot will automatically detect and respond in the customer\'s language. You can also configure your system prompt in any language to set the default language and tone.'
      },
      {
        question: 'How do I get support if I have issues?',
        answer: 'You can reach our support team at support@supportify.no. We typically respond within 24 hours on business days. For urgent issues, please mark your email as "Urgent". We also provide documentation and guides in our docs section.'
      }
    ]
  },
  {
    category: 'Integration & Setup',
    questions: [
      {
        question: 'Do I need to embed code on my store?',
        answer: 'No! Supportify is a Shopify theme extension (app block) that integrates seamlessly without any manual code editing. After installing the app, you simply add the Supportify Chat Widget block to your theme in the theme editor. No coding required!'
      },
      {
        question: 'Will Supportify slow down my store?',
        answer: 'No. The chat widget loads asynchronously and has minimal impact on your store\'s performance. The script is small (< 50KB) and loads after your store\'s main content, ensuring your customers\' shopping experience isn\'t affected.'
      },
      {
        question: 'Can I test the chatbot before making it live?',
        answer: 'Yes! Your dashboard includes a "Test Chatbot" feature where you can send sample messages and see how the AI responds. This lets you refine your configuration before enabling the chat widget on your live store.'
      },
      {
        question: 'How do webhooks work with Supportify?',
        answer: 'Supportify automatically registers webhooks with your Shopify store to stay synchronized with orders, products, and customer updates. We also use inbound email webhooks from Resend to handle ticket replies. All webhooks use signature verification for security.'
      }
    ]
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const filteredData = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      searchQuery === '' ||
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className={styles.faqPage}>
      <Navigation />
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>Frequently Asked Questions</h1>
          <p className={styles.subtitle}>
            Find answers to common questions about Supportify AI
          </p>

          {/* Search */}
          <div className={styles.searchContainer}>
            <Search className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search questions..."
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className={styles.content}>
        <div className={styles.container}>
          {filteredData.length === 0 ? (
            <div className={styles.noResults}>
              <p>No questions found matching "{searchQuery}"</p>
              <button
                className={styles.clearButton}
                onClick={() => setSearchQuery('')}
              >
                Clear search
              </button>
            </div>
          ) : (
            filteredData.map((category, categoryIndex) => (
              <section key={category.category} className={styles.category}>
                <h2 className={styles.categoryTitle}>{category.category}</h2>
                <div className={styles.questionList}>
                  {category.questions.map((item, questionIndex) => {
                    const key = `${categoryIndex}-${questionIndex}`;
                    const isOpen = openItems[key];

                    return (
                      <div key={key} className={styles.faqItem}>
                        <button
                          className={styles.questionButton}
                          onClick={() => toggleItem(categoryIndex, questionIndex)}
                          aria-expanded={isOpen}
                        >
                          <span className={styles.question}>{item.question}</span>
                          <ChevronDown
                            className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
                          />
                        </button>
                        {isOpen && (
                          <div className={styles.answer}>
                            <p>{item.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            ))
          )}

          {/* Still have questions */}
          <section className={styles.contactSection}>
            <h2>Still have questions?</h2>
            <p>
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className={styles.contactButtons}>
              <a href="mailto:support@supportify.no" className={styles.primaryButton}>
                Contact Support
              </a>
              <a href="/docs" className={styles.secondaryButton}>
                View Documentation
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
