import { Ticket, ShoppingBag, Package, Edit, Mail, Shield, BookOpen } from 'lucide-react';
import { ChatMessage } from './DemoComponents/ChatConversation';

export interface FeatureStep {
  title: string;
  description: string;
  componentType: 'chat' | 'verification' | 'admin' | 'products' | 'order' | 'address' | 'confirmation' | 'none';
  componentProps?: any;
}

export interface FeatureTab {
  id: string;
  label: string;
  icon: any;
  totalSteps: number;
  steps: FeatureStep[];
}

export const featureTabs: FeatureTab[] = [
  {
    id: 'product-recommendations',
    label: 'Products',
    icon: ShoppingBag,
    totalSteps: 5,
    steps: [
      {
        title: 'AI-Powered Product Discovery',
        description: 'Our AI understands customer needs and recommends the perfect products from your catalog.',
        componentType: 'none',
      },
      {
        title: 'Customer Asks for Help',
        description: 'Customer describes what they\'re looking for',
        componentType: 'chat',
        componentProps: {
          messages: [
            { id: '1', type: 'customer', content: 'I\'m looking for a good laptop for video editing, budget around $1500' },
          ] as ChatMessage[],
          autoPlay: false,
        },
      },
      {
        title: 'AI Asks Clarifying Questions',
        description: 'AI gathers more details to make better recommendations',
        componentType: 'chat',
        componentProps: {
          messages: [
            { id: '1', type: 'customer', content: 'I\'m looking for a good laptop for video editing, budget around $1500' },
            { id: '2', type: 'ai', content: 'Great! To help you find the perfect laptop, could you tell me what video editing software you use and if portability is important?' },
          ] as ChatMessage[],
          autoPlay: false,
        },
      },
      {
        title: 'Customer Provides Details',
        description: 'Customer shares additional requirements',
        componentType: 'chat',
        componentProps: {
          messages: [
            { id: '1', type: 'customer', content: 'I\'m looking for a good laptop for video editing, budget around $1500' },
            { id: '2', type: 'ai', content: 'Great! To help you find the perfect laptop, could you tell me what video editing software you use and if portability is important?' },
            { id: '3', type: 'customer', content: 'I use Adobe Premiere Pro and yes, I travel a lot so portability matters' },
          ] as ChatMessage[],
          autoPlay: false,
        },
      },
      {
        title: 'AI Shows Product Recommendations',
        description: 'AI presents personalized product recommendations based on requirements',
        componentType: 'chat',
        componentProps: {
          messages: [
            { id: '1', type: 'customer', content: 'I\'m looking for a good laptop for video editing, budget around $1500' },
            { id: '2', type: 'ai', content: 'Great! To help you find the perfect laptop, could you tell me what video editing software you use and if portability is important?' },
            { id: '3', type: 'customer', content: 'I use Adobe Premiere Pro and yes, I travel a lot so portability matters' },
            { id: '4', type: 'ai', content: 'Perfect! Based on your needs, I recommend the MacBook Pro 14" ($1,499) with M3 Pro chip, 16GB RAM - excellent for Premiere Pro and weighs only 3.5 lbs. Alternatively, the Dell XPS 15 ($1,399) offers 32GB RAM and OLED display.' },
          ] as ChatMessage[],
          autoPlay: false,
        },
      },
    ],
  },
  {
    id: 'order-lookup',
    label: 'Lookup',
    icon: Package,
    totalSteps: 9,
    steps: [
      {
        title: 'Instant Order Information',
        description: 'Customers can quickly check their order status, tracking info, and delivery estimates.',
        componentType: 'none',
      },
      {
        title: 'Customer Asks About Order',
        description: 'Customer wants to check their order status',
        componentType: 'chat',
        componentProps: {
          messages: [
            { id: '1', type: 'customer', content: 'Where is my order?' },
          ] as ChatMessage[],
          autoPlay: false,
        },
      },
      {
        title: 'AI Requests Order Number',
        description: 'AI asks for order number to look up the order',
        componentType: 'chat',
        componentProps: {
          messages: [
            { id: '1', type: 'customer', content: 'Where is my order?' },
            { id: '2', type: 'ai', content: 'I can help you track your order! Could you please provide your order number?' },
          ] as ChatMessage[],
          autoPlay: false,
        },
      },
      {
        title: 'Customer Provides Order Number',
        description: 'Customer shares their order number',
        componentType: 'chat',
        componentProps: {
          messages: [
            { id: '1', type: 'customer', content: 'Where is my order?' },
            { id: '2', type: 'ai', content: 'I can help you track your order! Could you please provide your order number?' },
            { id: '3', type: 'customer', content: 'Order #12345' },
          ] as ChatMessage[],
          autoPlay: false,
        },
      },
      {
        title: 'AI Requests Email',
        description: 'AI asks for email address for verification',
        componentType: 'chat',
        componentProps: {
          messages: [
            { id: '1', type: 'customer', content: 'Where is my order?' },
            { id: '2', type: 'ai', content: 'I can help you track your order! Could you please provide your order number?' },
            { id: '3', type: 'customer', content: 'Order #12345' },
            { id: '4', type: 'ai', content: 'Great! To look up your order details, I need to verify your email address. What email did you use for this order?' },
          ] as ChatMessage[],
          autoPlay: false,
        },
      },
      {
        title: 'Customer Provides Email',
        description: 'Customer shares their email address',
        componentType: 'chat',
        componentProps: {
          messages: [
            { id: '1', type: 'customer', content: 'Where is my order?' },
            { id: '2', type: 'ai', content: 'I can help you track your order! Could you please provide your order number?' },
            { id: '3', type: 'customer', content: 'Order #12345' },
            { id: '4', type: 'ai', content: 'Great! To look up your order details, I need to verify your email address. What email did you use for this order?' },
            { id: '5', type: 'customer', content: 'john@example.com' },
          ] as ChatMessage[],
          autoPlay: false,
        },
      },
      {
        title: 'Verification Code Sent',
        description: 'AI sends verification code to the email',
        componentType: 'chat',
        componentProps: {
          messages: [
            { id: '1', type: 'customer', content: 'Where is my order?' },
            { id: '2', type: 'ai', content: 'I can help you track your order! Could you please provide your order number?' },
            { id: '3', type: 'customer', content: 'Order #12345' },
            { id: '4', type: 'ai', content: 'Great! To look up your order details, I need to verify your email address. What email did you use for this order?' },
            { id: '5', type: 'customer', content: 'john@example.com' },
            { id: '6', type: 'ai', content: 'Perfect! I\'ve sent a verification code to john@example.com. Please enter the code to continue.' },
          ] as ChatMessage[],
          autoPlay: false,
        },
      },
      {
        title: 'Customer Enters Code',
        description: 'Customer provides the verification code',
        componentType: 'chat',
        componentProps: {
          messages: [
            { id: '1', type: 'customer', content: 'Where is my order?' },
            { id: '2', type: 'ai', content: 'I can help you track your order! Could you please provide your order number?' },
            { id: '3', type: 'customer', content: 'Order #12345' },
            { id: '4', type: 'ai', content: 'Great! To look up your order details, I need to verify your email address. What email did you use for this order?' },
            { id: '5', type: 'customer', content: 'john@example.com' },
            { id: '6', type: 'ai', content: 'Perfect! I\'ve sent a verification code to john@example.com. Please enter the code to continue.' },
            { id: '7', type: 'customer', content: '739284' },
          ] as ChatMessage[],
          autoPlay: false,
        },
      },
      {
        title: 'Order Details Provided',
        description: 'AI shows complete order information with tracking details',
        componentType: 'chat',
        componentProps: {
          messages: [
            { id: '1', type: 'customer', content: 'Where is my order?' },
            { id: '2', type: 'ai', content: 'I can help you track your order! Could you please provide your order number?' },
            { id: '3', type: 'customer', content: 'Order #12345' },
            { id: '4', type: 'ai', content: 'Great! To look up your order details, I need to verify your email address. What email did you use for this order?' },
            { id: '5', type: 'customer', content: 'john@example.com' },
            { id: '6', type: 'ai', content: 'Perfect! I\'ve sent a verification code to john@example.com. Please enter the code to continue.' },
            { id: '7', type: 'customer', content: '739284' },
            { id: '8', type: 'ai', content: 'Verified! Here\'s your order #12345:\n\n📦 Status: Shipped\n📅 Ordered: March 15, 2024\n🚚 Tracking: 1Z999AA10123456784\n📍 Est. Delivery: March 20, 2024\n\nItems:\n• Wireless Headphones (1x) - $129.99\n• Phone Case (2x) - $24.99 each\n\nTotal: $179.97' },
          ] as ChatMessage[],
          autoPlay: false,
        },
      },
    ],
  },
  {
    id: 'order-management',
    label: 'Manage',
    icon: Edit,
    totalSteps: 6,
    steps: [
      {
        title: 'Secure Order Modifications',
        description: 'Customers can cancel or modify orders with built-in email verification for security.',
        componentType: 'none',
      },
      {
        title: 'Customer Requests Cancellation',
        description: 'Customer wants to cancel their order',
        componentType: 'chat',
        componentProps: {
          messages: [
            { id: '1', type: 'customer', content: 'I need to cancel my order #12345' },
          ] as ChatMessage[],
          autoPlay: false,
        },
      },
      {
        title: 'Security Verification Required',
        description: 'AI initiates email verification for security',
        componentType: 'chat',
        componentProps: {
          messages: [
            { id: '1', type: 'customer', content: 'I need to cancel my order #12345' },
            { id: '2', type: 'ai', content: 'I can help you cancel that order. For security, I\'ve sent a verification code to your email. Please enter it below.' },
          ] as ChatMessage[],
          autoPlay: false,
        },
      },
      {
        title: 'Customer Enters Code',
        description: 'Customer receives and enters the verification code',
        componentType: 'chat',
        componentProps: {
          messages: [
            { id: '1', type: 'customer', content: 'I need to cancel my order #12345' },
            { id: '2', type: 'ai', content: 'I can help you cancel that order. For security, I\'ve sent a verification code to your email. Please enter it below.' },
            { id: '3', type: 'customer', content: '847293' },
          ] as ChatMessage[],
          autoPlay: false,
        },
      },
      {
        title: 'Order Cancelled',
        description: 'Verification confirmed and order successfully cancelled',
        componentType: 'chat',
        componentProps: {
          messages: [
            { id: '1', type: 'customer', content: 'I need to cancel my order #12345' },
            { id: '2', type: 'ai', content: 'I can help you cancel that order. For security, I\'ve sent a verification code to your email. Please enter it below.' },
            { id: '3', type: 'customer', content: '847293' },
            { id: '4', type: 'ai', content: 'Thank you! Code verified successfully.\n\nYour order #12345 has been cancelled. Your refund of $179.97 will be processed in 3-5 business days to your original payment method.' },
          ] as ChatMessage[],
          autoPlay: false,
        },
      },
      {
        title: 'Confirmation Received',
        description: 'Customer acknowledges the cancellation',
        componentType: 'chat',
        componentProps: {
          messages: [
            { id: '1', type: 'customer', content: 'I need to cancel my order #12345' },
            { id: '2', type: 'ai', content: 'I can help you cancel that order. For security, I\'ve sent a verification code to your email. Please enter it below.' },
            { id: '3', type: 'customer', content: '847293' },
            { id: '4', type: 'ai', content: 'Thank you! Code verified successfully.\n\nYour order #12345 has been cancelled. Your refund of $179.97 will be processed in 3-5 business days to your original payment method.' },
            { id: '5', type: 'customer', content: 'Thank you!' },
          ] as ChatMessage[],
          autoPlay: false,
        },
      },
    ],
  },
  {
    id: 'address-management',
    label: 'Address',
    icon: Mail,
    totalSteps: 7,
    steps: [
      {
        title: 'Easy Address Changes',
        description: 'Customers can update shipping addresses with email verification before the order ships.',
        componentType: 'none',
      },
      {
        title: 'Customer Requests Address Change',
        description: 'Customer wants to update their shipping address',
        componentType: 'chat',
        componentProps: {
          messages: [
            { id: '1', type: 'customer', content: 'I need to change the shipping address for order #12345' },
          ] as ChatMessage[],
          autoPlay: false,
        },
      },
      {
        title: 'AI Checks Order Status',
        description: 'AI verifies the order hasn\'t shipped yet',
        componentType: 'chat',
        componentProps: {
          messages: [
            { id: '1', type: 'customer', content: 'I need to change the shipping address for order #12345' },
            { id: '2', type: 'ai', content: 'Good news! Your order hasn\'t shipped yet, so I can update the address. Let me verify your identity first.' },
          ] as ChatMessage[],
          autoPlay: false,
        },
      },
      {
        title: 'Verification Code Sent',
        description: 'Email verification code is sent',
        componentType: 'chat',
        componentProps: {
          messages: [
            { id: '1', type: 'customer', content: 'I need to change the shipping address for order #12345' },
            { id: '2', type: 'ai', content: 'Good news! Your order hasn\'t shipped yet, so I can update the address. Let me verify your identity first.' },
            { id: '3', type: 'ai', content: 'I\'ve sent a verification code to your email. Please enter it to continue.' },
          ] as ChatMessage[],
          autoPlay: false,
        },
      },
      {
        title: 'Customer Enters Code',
        description: 'Customer provides verification code',
        componentType: 'chat',
        componentProps: {
          messages: [
            { id: '1', type: 'customer', content: 'I need to change the shipping address for order #12345' },
            { id: '2', type: 'ai', content: 'Good news! Your order hasn\'t shipped yet, so I can update the address. Let me verify your identity first.' },
            { id: '3', type: 'ai', content: 'I\'ve sent a verification code to your email. Please enter it to continue.' },
            { id: '4', type: 'customer', content: '543198' },
          ] as ChatMessage[],
          autoPlay: false,
        },
      },
      {
        title: 'New Address Provided',
        description: 'Customer enters new shipping address',
        componentType: 'chat',
        componentProps: {
          messages: [
            { id: '1', type: 'customer', content: 'I need to change the shipping address for order #12345' },
            { id: '2', type: 'ai', content: 'Good news! Your order hasn\'t shipped yet, so I can update the address. Let me verify your identity first.' },
            { id: '3', type: 'ai', content: 'I\'ve sent a verification code to your email. Please enter it to continue.' },
            { id: '4', type: 'customer', content: '543198' },
            { id: '5', type: 'ai', content: 'Verified! Please provide the new shipping address.' },
            { id: '6', type: 'customer', content: '123 Main St, San Francisco, CA 94102' },
          ] as ChatMessage[],
          autoPlay: false,
        },
      },
      {
        title: 'Address Updated Successfully',
        description: 'New address is saved and confirmed',
        componentType: 'chat',
        componentProps: {
          messages: [
            { id: '1', type: 'customer', content: 'I need to change the shipping address for order #12345' },
            { id: '2', type: 'ai', content: 'Good news! Your order hasn\'t shipped yet, so I can update the address. Let me verify your identity first.' },
            { id: '3', type: 'ai', content: 'I\'ve sent a verification code to your email. Please enter it to continue.' },
            { id: '4', type: 'customer', content: '543198' },
            { id: '5', type: 'ai', content: 'Verified! Please provide the new shipping address.' },
            { id: '6', type: 'customer', content: '123 Main St, San Francisco, CA 94102' },
            { id: '7', type: 'ai', content: 'Perfect! Your shipping address has been updated to 123 Main St, San Francisco, CA 94102. Your order will be delivered there.' },
          ] as ChatMessage[],
          autoPlay: false,
        },
      },
    ],
  },
  {
    id: 'knowledge-base',
    label: 'Knowledge',
    icon: BookOpen,
    totalSteps: 6,
    steps: [
      {
        title: 'AI-Powered Knowledge Base',
        description: 'AI instantly searches your custom knowledge base to provide accurate product information and troubleshooting steps.',
        componentType: 'none',
      },
      {
        title: 'Customer Asks Technical Question',
        description: 'Customer needs help with a product feature',
        componentType: 'chat',
        componentProps: {
          messages: [
            { id: '1', type: 'customer', content: 'How do I reset my Bluetooth headphones to factory settings?' },
          ] as ChatMessage[],
          autoPlay: false,
        },
      },
      {
        title: 'AI Searches Knowledge Base',
        description: 'AI acknowledges and searches product documentation',
        componentType: 'chat',
        componentProps: {
          messages: [
            { id: '1', type: 'customer', content: 'How do I reset my Bluetooth headphones to factory settings?' },
            { id: '2', type: 'ai', content: 'Let me look that up in the product manual for you.' },
          ] as ChatMessage[],
          autoPlay: false,
        },
      },
      {
        title: 'Instructions Provided',
        description: 'AI provides detailed step-by-step instructions from the manual',
        componentType: 'chat',
        componentProps: {
          messages: [
            { id: '1', type: 'customer', content: 'How do I reset my Bluetooth headphones to factory settings?' },
            { id: '2', type: 'ai', content: 'Let me look that up in the product manual for you.' },
            { id: '3', type: 'ai', content: 'Found it! Here\'s how to reset your Bluetooth headphones to factory settings:\n\n1. Turn off the headphones\n2. Press and hold both volume buttons simultaneously for 10 seconds\n3. You\'ll see a red and blue LED flash alternating\n4. Release the buttons when the LED turns solid white\n5. Your headphones are now reset to factory settings\n\nThe process takes about 15 seconds total.' },
          ] as ChatMessage[],
          autoPlay: false,
        },
      },
      {
        title: 'Follow-up Question',
        description: 'Customer asks for clarification',
        componentType: 'chat',
        componentProps: {
          messages: [
            { id: '1', type: 'customer', content: 'How do I reset my Bluetooth headphones to factory settings?' },
            { id: '2', type: 'ai', content: 'Let me look that up in the product manual for you.' },
            { id: '3', type: 'ai', content: 'Found it! Here\'s how to reset your Bluetooth headphones to factory settings:\n\n1. Turn off the headphones\n2. Press and hold both volume buttons simultaneously for 10 seconds\n3. You\'ll see a red and blue LED flash alternating\n4. Release the buttons when the LED turns solid white\n5. Your headphones are now reset to factory settings\n\nThe process takes about 15 seconds total.' },
            { id: '4', type: 'customer', content: 'Will this delete my paired devices?' },
          ] as ChatMessage[],
          autoPlay: false,
        },
      },
      {
        title: 'Additional Information',
        description: 'AI provides more context from knowledge base',
        componentType: 'chat',
        componentProps: {
          messages: [
            { id: '1', type: 'customer', content: 'How do I reset my Bluetooth headphones to factory settings?' },
            { id: '2', type: 'ai', content: 'Let me look that up in the product manual for you.' },
            { id: '3', type: 'ai', content: 'Found it! Here\'s how to reset your Bluetooth headphones to factory settings:\n\n1. Turn off the headphones\n2. Press and hold both volume buttons simultaneously for 10 seconds\n3. You\'ll see a red and blue LED flash alternating\n4. Release the buttons when the LED turns solid white\n5. Your headphones are now reset to factory settings\n\nThe process takes about 15 seconds total.' },
            { id: '4', type: 'customer', content: 'Will this delete my paired devices?' },
            { id: '5', type: 'ai', content: 'Yes, a factory reset will remove all paired devices from the headphones\' memory. You\'ll need to pair them again with your phone, laptop, or other devices.\n\nThis also resets:\n• Volume settings to default\n• EQ presets to factory defaults\n• Noise cancellation preferences\n\nYour devices will still have the headphones in their Bluetooth list, so you may want to "forget" the device on your phone before re-pairing.' },
          ] as ChatMessage[],
          autoPlay: false,
        },
      },
    ],
  },
  {
    id: 'human-handoff',
    label: 'Handoff',
    icon: Ticket,
    totalSteps: 7,
    steps: [
      {
        title: 'Seamless Human Handoff',
        description: 'When customers need human support, our AI seamlessly creates tickets and transfers the conversation to your team.',
        componentType: 'none',
      },
      {
        title: 'Customer Requests Agent',
        description: 'Customer asks to speak with a human support agent',
        componentType: 'chat',
        componentProps: {
          messages: [
            { id: '1', type: 'customer', content: 'Hi, I have a complex issue with my order. Can I speak to a human agent?' },
          ] as ChatMessage[],
          autoPlay: false,
        },
      },
      {
        title: 'AI Requests Email',
        description: 'AI asks for the customer\'s email to create a support ticket',
        componentType: 'chat',
        componentProps: {
          messages: [
            { id: '1', type: 'customer', content: 'Hi, I have a complex issue with my order. Can I speak to a human agent?' },
            { id: '2', type: 'ai', content: 'Of course! I\'ll create a support ticket for you. Could you please provide your email address?' },
          ] as ChatMessage[],
          autoPlay: false,
        },
      },
      {
        title: 'Customer Provides Email',
        description: 'Customer shares their email address',
        componentType: 'chat',
        componentProps: {
          messages: [
            { id: '1', type: 'customer', content: 'Hi, I have a complex issue with my order. Can I speak to a human agent?' },
            { id: '2', type: 'ai', content: 'Of course! I\'ll create a support ticket for you. Could you please provide your email address?' },
            { id: '3', type: 'customer', content: 'Sure, it\'s john.doe@example.com' },
          ] as ChatMessage[],
          autoPlay: false,
        },
      },
      {
        title: 'Ticket Created',
        description: 'AI confirms the ticket has been created and provides the ticket number',
        componentType: 'chat',
        componentProps: {
          messages: [
            { id: '1', type: 'customer', content: 'Hi, I have a complex issue with my order. Can I speak to a human agent?' },
            { id: '2', type: 'ai', content: 'Of course! I\'ll create a support ticket for you. Could you please provide your email address?' },
            { id: '3', type: 'customer', content: 'Sure, it\'s john.doe@example.com' },
            { id: '4', type: 'ai', content: 'Perfect! I\'ve created ticket #2847 for you. A support agent will respond shortly via email.' },
          ] as ChatMessage[],
          autoPlay: false,
        },
      },
      {
        title: 'View in Admin Panel',
        description: 'The ticket appears in your Shopify admin panel',
        componentType: 'admin',
        componentProps: {
          ticketNumber: '2847',
          customerEmail: 'john.doe@example.com',
          status: 'open',
          messages: [
            {
              id: '1',
              sender: 'customer',
              content: 'Hi, I have a complex issue with my order. Can I speak to a human agent?',
              timestamp: '2:34 PM',
            },
          ],
          showAgentReply: false,
        },
      },
      {
        title: 'Agent Responds',
        description: 'Your support team can reply directly from Shopify',
        componentType: 'admin',
        componentProps: {
          ticketNumber: '2847',
          customerEmail: 'john.doe@example.com',
          status: 'pending',
          messages: [
            {
              id: '1',
              sender: 'customer',
              content: 'Hi, I have a complex issue with my order. Can I speak to a human agent?',
              timestamp: '2:34 PM',
            },
          ],
          showAgentReply: true,
        },
      },
    ],
  },
  // Removed: Email Verification tab - verification is already demonstrated in Order Management and Address Management
];
