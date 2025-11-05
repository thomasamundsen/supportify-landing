'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import styles from './ChatConversation.module.css';

export interface ChatMessage {
  id: string;
  type: 'customer' | 'ai' | 'typing';
  content?: string;
  delay?: number;
}

interface ChatConversationProps {
  messages: ChatMessage[];
  currentStep?: number;
  currentStepInTab?: number;
  autoPlay?: boolean;
}

export default function ChatConversation({ messages, currentStep, currentStepInTab, autoPlay = true }: ChatConversationProps) {
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const previousMessageCountRef = useRef(0);

  useEffect(() => {
    if (!autoPlay) {
      // For scroll-driven showcase - progressively reveal messages
      const messagesToShow = messages.filter(m => m.type !== 'typing');

      // Check if we have new messages to show
      if (messagesToShow.length > previousMessageCountRef.current) {
        // We have new messages - update visible messages
        setVisibleMessages(messagesToShow);
        previousMessageCountRef.current = messagesToShow.length;
      } else if (messagesToShow.length < previousMessageCountRef.current) {
        // Messages decreased (tab switched) - reset
        setVisibleMessages(messagesToShow);
        previousMessageCountRef.current = messagesToShow.length;
      }
      return;
    }

    // Auto-play animation logic
    setVisibleMessages([]);
    let currentIndex = 0;
    const timers: NodeJS.Timeout[] = [];

    const showNextMessage = () => {
      if (currentIndex >= messages.length) return;

      const message = messages[currentIndex];
      const delay = message.delay || 2000;

      const timer = setTimeout(() => {
        if (message.type === 'typing') {
          setShowTyping(true);
          const hideTypingTimer = setTimeout(() => {
            setShowTyping(false);
            currentIndex++;
            showNextMessage();
          }, 1500);
          timers.push(hideTypingTimer);
        } else if (message.type === 'ai') {
          // Show typing before AI message
          setShowTyping(true);
          const typingTimer = setTimeout(() => {
            setShowTyping(false);
            setVisibleMessages(prev => [...prev, message]);
            currentIndex++;
            showNextMessage();
          }, 1500);
          timers.push(typingTimer);
        } else {
          setVisibleMessages(prev => [...prev, message]);
          currentIndex++;
          showNextMessage();
        }
      }, delay);

      timers.push(timer);
    };

    showNextMessage();

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [messages, currentStep, autoPlay]);

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messagesArea}>
        <AnimatePresence mode="popLayout">
          {visibleMessages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className={`${styles.message} ${
                message.type === 'customer' ? styles.customerMessage : styles.aiMessage
              }`}
            >
              {message.content}
            </motion.div>
          ))}

          {showTyping && (
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
      </div>
    </div>
  );
}
