'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { Send, MessageCircle, Clock, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import styles from './TicketPortal.module.css';

interface Ticket {
  id: string;
  ticket_number: string;
  title: string;
  description: string;
  status: 'open' | 'pending' | 'in_progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  customer_email: string;
  customer_name: string | null;
  created_at: string;
  updated_at: string;
  store_name?: string;
}

interface TicketMessage {
  id: string;
  sender_type: 'customer' | 'admin' | 'system';
  sender_name: string | null;
  sender_email: string | null;
  message: string;
  created_at: string;
}

export default function TicketPortal() {
  const params = useParams();
  const searchParams = useSearchParams();
  const ticketNumber = params.ticketNumber as string;
  const token = searchParams.get('token');

  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [messages, setMessages] = useState<TicketMessage[]>([]);
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  useEffect(() => {
    if (!token) {
      setError('Access token required. Please use the link from your email.');
      setLoading(false);
      return;
    }

    fetchTicket();

    // Poll for new messages every 30 seconds
    const interval = setInterval(fetchTicket, 30000);
    return () => clearInterval(interval);
  }, [ticketNumber, token]);

  const fetchTicket = async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
      const res = await fetch(
        `${apiUrl}/api/customer/tickets/${ticketNumber}?token=${token}`
      );

      if (!res.ok) {
        if (res.status === 404) {
          throw new Error('Ticket not found or invalid access token');
        }
        if (res.status === 429) {
          // Rate limited - silently skip this poll, will retry on next interval
          console.warn('Rate limited, will retry on next poll');
          return;
        }
        throw new Error('Failed to load ticket');
      }

      const data = await res.json();
      setTicket(data.ticket);
      setMessages(data.messages || []);
      setError('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load ticket');
    } finally {
      setLoading(false);
    }
  };

  const handleReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reply.trim() || sending) return;

    setSending(true);
    setSendSuccess(false);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
      const res = await fetch(
        `${apiUrl}/api/customer/tickets/${ticketNumber}/messages?token=${token}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: reply }),
        }
      );

      if (!res.ok) {
        throw new Error('Failed to send reply');
      }

      setReply('');
      setSendSuccess(true);
      setTimeout(() => setSendSuccess(false), 3000);

      // Refresh messages
      await fetchTicket();
    } catch (err) {
      alert('Failed to send reply. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig: Record<string, { label: string; className: string; icon: React.ReactNode }> = {
      open: {
        label: 'Open',
        className: styles.statusOpen,
        icon: <MessageCircle size={14} />
      },
      pending: {
        label: 'Pending',
        className: styles.statusPending,
        icon: <Clock size={14} />
      },
      in_progress: {
        label: 'In Progress',
        className: styles.statusInProgress,
        icon: <Loader2 size={14} />
      },
      resolved: {
        label: 'Resolved',
        className: styles.statusResolved,
        icon: <CheckCircle2 size={14} />
      },
      closed: {
        label: 'Closed',
        className: styles.statusClosed,
        icon: <CheckCircle2 size={14} />
      },
    };

    const config = statusConfig[status] || statusConfig.open;
    return (
      <span className={`${styles.statusBadge} ${config.className}`}>
        {config.icon}
        {config.label}
      </span>
    );
  };

  const getPriorityBadge = (priority: string) => {
    const priorityConfig: Record<string, { label: string; className: string }> = {
      low: { label: 'Low', className: styles.priorityLow },
      medium: { label: 'Medium', className: styles.priorityMedium },
      high: { label: 'High', className: styles.priorityHigh },
      urgent: { label: 'Urgent', className: styles.priorityUrgent },
    };

    const config = priorityConfig[priority] || priorityConfig.medium;
    return <span className={`${styles.priorityBadge} ${config.className}`}>{config.label}</span>;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} min ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;

    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined,
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loadingState}>
          <Loader2 className={styles.spinner} size={48} />
          <p>Loading ticket...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.errorState}>
          <AlertCircle size={48} color="#ef4444" />
          <h2>Unable to Load Ticket</h2>
          <p>{error}</p>
          <a href="/" className={styles.homeButton}>
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  if (!ticket) {
    return null;
  }

  const isTicketClosed = ticket.status === 'closed' || ticket.status === 'resolved';

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerTop}>
            <h1 className={styles.storeName}>{ticket.store_name || 'Support'}</h1>
            <div className={styles.ticketNumber}>{ticket.ticket_number}</div>
          </div>
          <div className={styles.headerMeta}>
            {getStatusBadge(ticket.status)}
            {getPriorityBadge(ticket.priority)}
          </div>
        </div>

        {/* Ticket Details Card */}
        <div className={styles.ticketCard}>
          <div className={styles.ticketHeader}>
            <MessageCircle size={24} color="#95BF47" />
            <div>
              <h2 className={styles.ticketTitle}>{ticket.title}</h2>
              <p className={styles.ticketMeta}>
                Created {formatDate(ticket.created_at)} • {ticket.customer_email}
              </p>
            </div>
          </div>

          <div className={styles.ticketDescription}>
            <p className={styles.descriptionLabel}>Your Issue:</p>
            <p className={styles.descriptionText}>{ticket.description}</p>
          </div>
        </div>

        {/* Messages Thread */}
        <div className={styles.messagesSection}>
          <h3 className={styles.sectionTitle}>Conversation</h3>

          <div className={styles.messagesList}>
            {messages.length === 0 ? (
              <div className={styles.emptyMessages}>
                <MessageCircle size={32} color="#9ca3af" />
                <p>No messages yet. Our support team will respond shortly.</p>
              </div>
            ) : (
              messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`${styles.message} ${
                    msg.sender_type === 'customer' ? styles.messageCustomer : styles.messageAdmin
                  }`}
                >
                  <div className={styles.messageHeader}>
                    <span className={styles.messageSender}>
                      {msg.sender_type === 'customer'
                        ? 'You'
                        : msg.sender_name || ticket.store_name || 'Support Team'}
                    </span>
                    <span className={styles.messageTime}>{formatDate(msg.created_at)}</span>
                  </div>
                  <div className={styles.messageContent}>{msg.message}</div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Reply Form */}
        {!isTicketClosed ? (
          <div className={styles.replySection}>
            <h3 className={styles.sectionTitle}>Your Reply</h3>
            <form onSubmit={handleReply} className={styles.replyForm}>
              <textarea
                className={styles.replyTextarea}
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                placeholder="Type your message here..."
                rows={4}
                disabled={sending}
                required
              />
              <div className={styles.replyFooter}>
                {sendSuccess && (
                  <span className={styles.successMessage}>
                    <CheckCircle2 size={16} />
                    Message sent successfully!
                  </span>
                )}
                <button
                  type="submit"
                  className={styles.sendButton}
                  disabled={sending || !reply.trim()}
                >
                  {sending ? (
                    <>
                      <Loader2 size={18} className={styles.spinner} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Reply
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className={styles.closedNotice}>
            <CheckCircle2 size={24} color="#10b981" />
            <div>
              <h4>This ticket has been {ticket.status}</h4>
              <p>
                If you have additional questions, please create a new ticket or contact support
                directly.
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className={styles.footer}>
          <p>
            Need help? Contact us at{' '}
            <a href={`mailto:support@${ticket.store_name?.toLowerCase() || 'support'}.com`}>
              support@{ticket.store_name?.toLowerCase() || 'support'}.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
