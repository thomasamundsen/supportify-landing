'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, FileText, Upload, Palette, MessageCircle, Headphones, HelpCircle, Send } from 'lucide-react';
import styles from './EasySetup.module.css';

const toneOptions = [
  {
    value: 'friendly',
    label: 'Friendly & Casual',
    preview: "Hey there! 👋 I'd be happy to help you with that order!"
  },
  {
    value: 'professional',
    label: 'Professional & Formal',
    preview: "Good day. I would be pleased to assist you with your order inquiry."
  },
  {
    value: 'helpful',
    label: 'Helpful & Supportive',
    preview: "I'm here to help! Let me look into that order for you right away."
  },
  {
    value: 'expert',
    label: 'Expert & Knowledgeable',
    preview: "I can provide detailed information about your order status and tracking details."
  }
];

export const EasySetup: React.FC = () => {
  const [selectedTone, setSelectedTone] = useState(toneOptions[0]);
  const [toggles, setToggles] = useState({
    searchProducts: true,
    lookupOrders: true,
    cancelOrders: true,
    trackShipments: true,
    lookupCustomers: true,
    updateCustomers: false,
    searchKnowledge: true,
    ticketSupport: true,
  });

  const [themeSettings, setThemeSettings] = useState({
    welcomeMessage: 'Hi! How can I help you today?',
    icon: 'message',
    color: 'green',
    position: 'right'
  });

  const handleToggle = (key: string) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };

  const getIconComponent = (iconType: string, size: number = 16) => {
    switch (iconType) {
      case 'message': return <MessageCircle size={size} />;
      case 'headphones': return <Headphones size={size} />;
      case 'help': return <HelpCircle size={size} />;
      default: return <MessageCircle size={size} />;
    }
  };

  const getColorValue = () => {
    switch (themeSettings.color) {
      case 'green': return '#95BF47';
      case 'blue': return '#4F9CF9';
      case 'purple': return '#9B59B6';
      default: return '#95BF47';
    }
  };

  return (
    <section className={styles.setup}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Setup in Minutes, Not Hours</h2>
          <p className={styles.subtitle}>
            Configure your AI support agent with our simple, intuitive interface. No technical knowledge required.
          </p>
        </motion.div>

        {/* Step 1: Choose Personality - Content Left, Visual Right */}
        <motion.div
          className={styles.step}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.stepContent}>
            <div className={styles.stepNumber}>01</div>
            <h3 className={styles.stepTitle}>Choose Your AI Personality</h3>
            <p className={styles.stepDescription}>
              Select from 6 pre-built conversation styles or create your own.
              Your AI instantly adapts to match your brand voice.
            </p>
            <ul className={styles.benefits}>
              <li className={styles.benefit}>
                <Check className={styles.checkIcon} />
                <span>Pre-configured tone presets</span>
              </li>
              <li className={styles.benefit}>
                <Check className={styles.checkIcon} />
                <span>Live response preview</span>
              </li>
              <li className={styles.benefit}>
                <Check className={styles.checkIcon} />
                <span>Switch anytime, no limits</span>
              </li>
            </ul>
          </div>
          <div className={styles.stepVisual}>
            <div className={styles.visualCard}>
              <div className={styles.label}>Select Tone</div>
              <div className={styles.optionsList}>
                {toneOptions.map((tone) => (
                  <div
                    key={tone.value}
                    className={`${styles.option} ${selectedTone.value === tone.value ? styles.selected : ''}`}
                    onClick={() => setSelectedTone(tone)}
                  >
                    {tone.label}
                  </div>
                ))}
              </div>
              <div className={styles.previewBox}>
                <div className={styles.previewLabel}>Preview</div>
                <div className={styles.previewMessage}>
                  "{selectedTone.preview}"
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Step 2: Enable Tools - Visual Left, Content Right */}
        <motion.div
          className={`${styles.step} ${styles.stepReverse}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.stepContent}>
            <div className={styles.stepNumber}>02</div>
            <h3 className={styles.stepTitle}>Enable Smart Integrations</h3>
            <p className={styles.stepDescription}>
              Toggle powerful Shopify integrations with simple checkboxes.
              Your AI instantly gains the ability to help with orders, products, and more.
            </p>
            <ul className={styles.benefits}>
              <li className={styles.benefit}>
                <Check className={styles.checkIcon} />
                <span>One-click tool activation</span>
              </li>
              <li className={styles.benefit}>
                <Check className={styles.checkIcon} />
                <span>12+ Shopify integrations</span>
              </li>
              <li className={styles.benefit}>
                <Check className={styles.checkIcon} />
                <span>Granular control per tool</span>
              </li>
            </ul>
          </div>
          <div className={styles.stepVisual}>
            <div className={styles.visualCard}>
              <div className={styles.toolSection}>
                <div className={styles.sectionLabel}>Product Search</div>
                <div
                  className={`${styles.toggle} ${toggles.searchProducts ? styles.on : ''}`}
                  onClick={() => handleToggle('searchProducts')}
                >
                  <div className={styles.toggleCircle}></div>
                  <span>Search Products</span>
                </div>
              </div>
              <div className={styles.toolSection}>
                <div className={styles.sectionLabel}>Order Management</div>
                <div
                  className={`${styles.toggle} ${toggles.lookupOrders ? styles.on : ''}`}
                  onClick={() => handleToggle('lookupOrders')}
                >
                  <div className={styles.toggleCircle}></div>
                  <span>Lookup Orders</span>
                </div>
                <div
                  className={`${styles.toggle} ${toggles.cancelOrders ? styles.on : ''}`}
                  onClick={() => handleToggle('cancelOrders')}
                >
                  <div className={styles.toggleCircle}></div>
                  <span>Cancel Orders</span>
                </div>
                <div
                  className={`${styles.toggle} ${toggles.trackShipments ? styles.on : ''}`}
                  onClick={() => handleToggle('trackShipments')}
                >
                  <div className={styles.toggleCircle}></div>
                  <span>Track Shipments</span>
                </div>
              </div>
              <div className={styles.toolSection}>
                <div className={styles.sectionLabel}>Customer Service</div>
                <div
                  className={`${styles.toggle} ${toggles.lookupCustomers ? styles.on : ''}`}
                  onClick={() => handleToggle('lookupCustomers')}
                >
                  <div className={styles.toggleCircle}></div>
                  <span>Lookup Customers</span>
                </div>
                <div
                  className={`${styles.toggle} ${toggles.updateCustomers ? styles.on : ''}`}
                  onClick={() => handleToggle('updateCustomers')}
                >
                  <div className={styles.toggleCircle}></div>
                  <span>Update Customer Info</span>
                </div>
              </div>
              <div className={styles.toolSection}>
                <div className={styles.sectionLabel}>Support Tools</div>
                <div
                  className={`${styles.toggle} ${toggles.searchKnowledge ? styles.on : ''}`}
                  onClick={() => handleToggle('searchKnowledge')}
                >
                  <div className={styles.toggleCircle}></div>
                  <span>Search Knowledge Base</span>
                </div>
                <div
                  className={`${styles.toggle} ${toggles.ticketSupport ? styles.on : ''}`}
                  onClick={() => handleToggle('ticketSupport')}
                >
                  <div className={styles.toggleCircle}></div>
                  <span>Ticket System Support</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Step 3: Upload Knowledge - Content Left, Visual Right */}
        <motion.div
          className={styles.step}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.stepContent}>
            <div className={styles.stepNumber}>03</div>
            <h3 className={styles.stepTitle}>Upload Your Knowledge</h3>
            <p className={styles.stepDescription}>
              Simply drag and drop your product manuals, FAQs, and policies.
              The AI automatically learns from your content in seconds.
            </p>
            <ul className={styles.benefits}>
              <li className={styles.benefit}>
                <Check className={styles.checkIcon} />
                <span>Multiple file format support</span>
              </li>
              <li className={styles.benefit}>
                <Check className={styles.checkIcon} />
                <span>Automatic content indexing</span>
              </li>
              <li className={styles.benefit}>
                <Check className={styles.checkIcon} />
                <span>Instant semantic search</span>
              </li>
            </ul>
          </div>
          <div className={styles.stepVisual}>
            <div className={styles.visualCard}>
              <div className={styles.uploadArea}>
                <Upload className={styles.uploadIconSvg} />
                <div className={styles.uploadText}>Drag & drop files here</div>
                <div className={styles.uploadHint}>PDF, DOC, TXT</div>
              </div>
              <div className={styles.fileList}>
                <div className={styles.file}>
                  <FileText className={styles.fileIconSvg} color="#4F9CF9" />
                  <span className={styles.fileName}>Product Manual.pdf</span>
                  <span className={styles.fileCheck}>✓</span>
                </div>
                <div className={styles.file}>
                  <FileText className={styles.fileIconSvg} color="#95BF47" />
                  <span className={styles.fileName}>Return Policy.pdf</span>
                  <span className={styles.fileCheck}>✓</span>
                </div>
                <div className={styles.file}>
                  <FileText className={styles.fileIconSvg} color="#F39C12" />
                  <span className={styles.fileName}>FAQ Document.txt</span>
                  <span className={styles.fileCheck}>✓</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Step 4: Customize Theme - Visual Left, Content Right */}
        <motion.div
          className={`${styles.step} ${styles.stepReverse}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.stepContent}>
            <div className={styles.stepNumber}>04</div>
            <h3 className={styles.stepTitle}>Customize Your Theme</h3>
            <p className={styles.stepDescription}>
              Personalize the chat widget to match your brand. Change colors, size, and position
              directly in the Shopify theme editor.
            </p>
            <ul className={styles.benefits}>
              <li className={styles.benefit}>
                <Check className={styles.checkIcon} />
                <span>Real-time preview</span>
              </li>
              <li className={styles.benefit}>
                <Check className={styles.checkIcon} />
                <span>No coding required</span>
              </li>
              <li className={styles.benefit}>
                <Check className={styles.checkIcon} />
                <span>Matches your brand</span>
              </li>
            </ul>
          </div>
          <div className={styles.stepVisual}>
            <div className={styles.visualCard}>
              <div className={styles.themeSection}>
                <div className={styles.label}>Welcome Message</div>
                <input
                  type="text"
                  className={styles.welcomeInput}
                  value={themeSettings.welcomeMessage}
                  onChange={(e) => setThemeSettings({...themeSettings, welcomeMessage: e.target.value})}
                  placeholder="Enter welcome message..."
                />
              </div>
              <div className={styles.themeSection}>
                <div className={styles.label}>Chat Icon</div>
                <div className={styles.iconOptions}>
                  <div
                    className={`${styles.iconOption} ${themeSettings.icon === 'message' ? styles.active : ''}`}
                    onClick={() => setThemeSettings({...themeSettings, icon: 'message'})}
                  >
                    <MessageCircle size={20} />
                  </div>
                  <div
                    className={`${styles.iconOption} ${themeSettings.icon === 'headphones' ? styles.active : ''}`}
                    onClick={() => setThemeSettings({...themeSettings, icon: 'headphones'})}
                  >
                    <Headphones size={20} />
                  </div>
                  <div
                    className={`${styles.iconOption} ${themeSettings.icon === 'help' ? styles.active : ''}`}
                    onClick={() => setThemeSettings({...themeSettings, icon: 'help'})}
                  >
                    <HelpCircle size={20} />
                  </div>
                </div>
              </div>
              <div className={styles.themeSection}>
                <div className={styles.label}>Theme Color</div>
                <div className={styles.colorOptions}>
                  <div
                    className={`${styles.colorOption} ${themeSettings.color === 'green' ? styles.active : ''}`}
                    style={{ backgroundColor: '#95BF47' }}
                    onClick={() => setThemeSettings({...themeSettings, color: 'green'})}
                  ></div>
                  <div
                    className={`${styles.colorOption} ${themeSettings.color === 'blue' ? styles.active : ''}`}
                    style={{ backgroundColor: '#4F9CF9' }}
                    onClick={() => setThemeSettings({...themeSettings, color: 'blue'})}
                  ></div>
                  <div
                    className={`${styles.colorOption} ${themeSettings.color === 'purple' ? styles.active : ''}`}
                    style={{ backgroundColor: '#9B59B6' }}
                    onClick={() => setThemeSettings({...themeSettings, color: 'purple'})}
                  ></div>
                </div>
              </div>
              <div className={styles.themeSection}>
                <div className={styles.label}>Position</div>
                <div className={styles.positionOptions}>
                  <div
                    className={`${styles.positionOption} ${themeSettings.position === 'left' ? styles.active : ''}`}
                    onClick={() => setThemeSettings({...themeSettings, position: 'left'})}
                  >
                    Left
                  </div>
                  <div
                    className={`${styles.positionOption} ${themeSettings.position === 'right' ? styles.active : ''}`}
                    onClick={() => setThemeSettings({...themeSettings, position: 'right'})}
                  >
                    Right
                  </div>
                </div>
              </div>
              <div className={styles.themePreview}>
                <div className={styles.previewLabel}>Preview</div>
                <div className={styles.browserMockup}>
                  <div className={styles.browserBar}>
                    <div className={styles.browserDots}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className={styles.browserContent}>
                    {/* Floating Action Button */}
                    <div
                      className={styles.floatingActionButton}
                      style={{
                        backgroundColor: getColorValue(),
                        [themeSettings.position]: '20px'
                      }}
                    >
                      {getIconComponent(themeSettings.icon, 22)}
                    </div>

                    {/* Chat Widget */}
                    <div
                      className={styles.floatingChat}
                      style={{
                        width: '320px',
                        [themeSettings.position]: '20px'
                      }}
                    >
                      <div className={styles.chatHeaderPreview} style={{ backgroundColor: getColorValue() }}>
                        {getIconComponent(themeSettings.icon, 16)}
                        <span>Chat with us</span>
                      </div>
                      <div className={styles.chatBodyPreview}>
                        <div className={styles.aiMsgPreview}>{themeSettings.welcomeMessage}</div>
                      </div>
                      <div className={styles.chatInputArea}>
                        <input
                          type="text"
                          className={styles.chatInput}
                          placeholder="Type a message..."
                          readOnly
                        />
                        <button className={styles.sendButton} style={{ backgroundColor: getColorValue() }}>
                          <Send size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Step 5: Deploy - Content Left, Visual Right */}
        <motion.div
          className={styles.step}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.stepContent}>
            <div className={styles.stepNumber}>05</div>
            <h3 className={styles.stepTitle}>Test & Deploy Instantly</h3>
            <p className={styles.stepDescription}>
              Preview your chatbot with the built-in testing widget. When ready,
              deploy to your store with one click. Updates sync automatically.
            </p>
            <ul className={styles.benefits}>
              <li className={styles.benefit}>
                <Check className={styles.checkIcon} />
                <span>Live chat preview widget</span>
              </li>
              <li className={styles.benefit}>
                <Check className={styles.checkIcon} />
                <span>One-click deployment</span>
              </li>
              <li className={styles.benefit}>
                <Check className={styles.checkIcon} />
                <span>Auto-sync updates</span>
              </li>
            </ul>
          </div>
          <div className={styles.stepVisual}>
            <div className={styles.visualCard}>
              <div className={styles.storeMockup}>
                <div className={styles.storePage}>
                  <div className={styles.storeHeader}></div>
                  <div className={styles.storeContent}>
                    <div className={styles.storeLine}></div>
                    <div className={styles.storeLine}></div>
                    <div className={styles.storeLineShort}></div>
                  </div>
                </div>
                <div className={styles.chatBubble}>
                  <div className={styles.bubbleHeader}>
                    <MessageCircle size={14} />
                    <span>Support</span>
                  </div>
                  <div className={styles.bubbleMessages}>
                    <div className={styles.bubbleAiMsg}>Hi! How can I help?</div>
                    <div className={styles.bubbleUserMsg}>Where's my order?</div>
                    <div className={styles.bubbleAiMsg}>I can help with that!</div>
                  </div>
                  <div className={styles.bubbleInputArea}>
                    <input
                      type="text"
                      className={styles.bubbleInput}
                      placeholder="Type a message..."
                      readOnly
                    />
                    <button className={styles.bubbleSendButton}>
                      <Send size={14} />
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.deployBox}>
                <div className={styles.status}>
                  <span className={styles.statusDot}></span>
                  Ready to Deploy
                </div>
                <button className={styles.deployBtn}>Deploy to Store</button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.footer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4 className={styles.footerTitle}>That's it! You're ready to go.</h4>
          <p className={styles.footerText}>
            Manage conversations, tickets, and analytics from one simple dashboard.
            Make changes anytime—your AI adapts instantly.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
