'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Trash2, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ChatBot.module.css';

interface Message {
  id: number;
  text: string;
  isCustomer: boolean;
}

const demoMessages: Omit<Message, 'id'>[] = [
  { text: "Hi! I need help with my recent order.", isCustomer: true },
  { text: "Hello! I'd be happy to help you with your order. Could you please provide your order number?", isCustomer: false },
  { text: "Sure, it's #2847", isCustomer: true },
  { text: "Thank you! I've found your order. It's currently being processed and should ship within 24 hours. Is there anything specific you'd like to know?", isCustomer: false },
];

export const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    // Scroll only within the messages area, not the whole page
    if (messagesAreaRef.current) {
      messagesAreaRef.current.scrollTop = messagesAreaRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (currentMessageIndex >= demoMessages.length) {
      // Reset after a pause
      const resetTimer = setTimeout(() => {
        setMessages([]);
        setCurrentMessageIndex(0);
      }, 4000);

      return () => clearTimeout(resetTimer);
    }

    const timer = setTimeout(() => {
      // Show typing indicator for AI messages
      if (!demoMessages[currentMessageIndex].isCustomer) {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [
            ...prev,
            { ...demoMessages[currentMessageIndex], id: currentMessageIndex }
          ]);
          setCurrentMessageIndex(prev => prev + 1);
        }, 1500);
      } else {
        setMessages(prev => [
          ...prev,
          { ...demoMessages[currentMessageIndex], id: currentMessageIndex }
        ]);
        setCurrentMessageIndex(prev => prev + 1);
      }
    }, currentMessageIndex === 0 ? 500 : 2000);

    return () => clearTimeout(timer);
  }, [currentMessageIndex]);

  return (
    <div className={styles.chatBot}>
      <div className={styles.header}>
        <h3 className={styles.headerTitle}>Chat Support</h3>
        <div className={styles.headerActions}>
          <button className={styles.iconButton} aria-label="Clear chat">
            <Trash2 />
          </button>
          <button className={styles.iconButton} aria-label="Close chat">
            <X />
          </button>
        </div>
      </div>

      <div ref={messagesAreaRef} className={styles.messagesArea}>
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`${styles.message} ${message.isCustomer ? styles.customerMessage : styles.aiMessage}`}
            >
              {message.text}
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`${styles.message} ${styles.aiMessage}`}
            >
              <div className={styles.typingIndicator}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      <div className={styles.inputArea}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            placeholder="Type a message..."
            className={styles.input}
            disabled
          />
          <button className={styles.sendButton} disabled aria-label="Send message">
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
};
