'use client';

import { motion } from 'framer-motion';
import { Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import styles from './AdminPanel.module.css';

interface AdminMessage {
  id: string;
  sender: 'customer' | 'agent';
  content: string;
  timestamp: string;
}

interface AdminPanelProps {
  ticketNumber: string;
  customerEmail: string;
  status: 'open' | 'pending' | 'resolved';
  messages: AdminMessage[];
  showAgentReply?: boolean;
}

export default function AdminPanel({
  ticketNumber,
  customerEmail,
  status,
  messages,
  showAgentReply = false,
}: AdminPanelProps) {
  const [replyText, setReplyText] = useState('');

  const statusColors = {
    open: '#f59e0b',
    pending: '#3b82f6',
    resolved: '#10b981',
  };

  return (
    <motion.div
      className={styles.panel}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.header}>
        <div>
          <h3 className={styles.ticketNumber}>Ticket #{ticketNumber}</h3>
          <p className={styles.customerEmail}>
            <Mail size={14} />
            {customerEmail}
          </p>
        </div>
        <span
          className={styles.statusBadge}
          style={{ backgroundColor: statusColors[status] }}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>

      <div className={styles.messagesArea}>
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            className={`${styles.message} ${
              message.sender === 'customer' ? styles.customerMessage : styles.agentMessage
            }`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className={styles.messageSender}>
              {message.sender === 'customer' ? 'Customer' : 'Support Agent'}
            </div>
            <div className={styles.messageContent}>{message.content}</div>
            <div className={styles.messageTime}>
              <Clock size={12} />
              {message.timestamp}
            </div>
          </motion.div>
        ))}

        {showAgentReply && (
          <motion.div
            className={`${styles.message} ${styles.agentMessage} ${styles.highlightedMessage}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: messages.length * 0.2 + 0.3 }}
          >
            <div className={styles.messageSender}>Support Agent</div>
            <div className={styles.messageContent}>
              Hi there! I've reviewed your request and I'm happy to help. Let me look into this for you right away.
            </div>
            <div className={styles.messageTime}>
              <Clock size={12} />
              Just now
            </div>
          </motion.div>
        )}
      </div>

      <div className={styles.replySection}>
        <textarea
          className={styles.textarea}
          placeholder="Type your reply..."
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          rows={3}
        />
        <button className={styles.sendButton}>
          <Send size={18} />
          Send Reply
        </button>
      </div>
    </motion.div>
  );
}
