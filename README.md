# Supportify Landing Page

A beautiful, responsive landing page for Supportify - an AI-powered customer support platform for Shopify stores.

## 🚀 Features

- **Fully Responsive**: Optimized for mobile, tablet, and desktop screens
- **Modern Design**: Clean, professional SaaS landing page with smooth animations
- **Component-Based Architecture**: Well-organized, reusable React components
- **TypeScript**: Type-safe code for better developer experience
- **CSS Modules**: Scoped styling without conflicts (no Tailwind as requested)
- **Framer Motion**: Smooth, performant animations throughout
- **Next.js 15**: Latest Next.js with App Router for optimal performance

## 📦 Tech Stack

- **Framework**: Next.js 16 with TypeScript
- **Styling**: CSS Modules
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: System fonts for optimal performance

## 🏗️ Project Structure

```
supportify-landing/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Home page
├── components/
│   ├── Navigation/           # Fixed navigation with mobile menu
│   ├── Hero/                 # Hero section with CTA
│   ├── ChatBot/              # Animated chatbot demo
│   ├── StatsBar/             # Statistics display
│   ├── FeatureShowcase/      # Feature tabs with 7 demo components
│   │   ├── DemoComponents/   # Interactive feature demonstrations
│   │   ├── ProgressIndicator.tsx
│   │   └── featureConfig.ts  # Feature data & step configuration
│   ├── CTA/                  # Call-to-action section
│   └── Footer/               # Footer with links
└── public/                   # Static assets
```

## 🎨 Component Overview

### Navigation
- Sticky header with backdrop blur
- Mobile hamburger menu
- Smooth scroll to sections
- Responsive breakpoints at 768px

### Hero Section
- Eye-catching headline with gradient text
- Feature pills showcasing key benefits
- Dual CTAs (primary and secondary)
- Animated chatbot demo on the right

### ChatBot Demo
- Auto-playing conversation loop
- Typing indicators
- Smooth message animations
- Realistic chat interface

### Stats Bar
- 4 key metrics display
- Icon-based design
- Responsive grid (2x2 on mobile, 1x4 on desktop)

### Feature Showcase ✨ NEW
- Tab-based navigation with 6 features
- **7 interactive demo components:**
  - ChatConversation - Message animations
  - VerificationPanel - 6-digit code verification
  - ProductGrid - AI product recommendations
  - OrderCard - Order tracking display
  - AddressForm - Address updates
  - AdminPanel - Shopify ticket interface
  - ConfirmationModal - Success/error states
- **Step-by-step navigation** through each feature
- Progress indicator with dots
- Auto-scroll on tab switch
- 37 total demonstration steps across all features

### CTA Section
- Clear call-to-action
- Dual buttons for different user intents
- Centered, focused design

### Footer
- 4-column layout on desktop
- Company info and links
- Social media icons
- Responsive grid

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation & Running

1. Navigate to the project directory:
   ```bash
   cd supportify-landing
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   # Default port (3000)
   npm run dev

   # Or specify a custom port:
   npm run dev:3001  # Port 3001
   npm run dev:3002  # Port 3002
   npm run dev:3003  # Port 3003

   # Or use any custom port:
   npm run dev -- -p 4000
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000 (or your chosen port)
   ```

### Troubleshooting Port Issues

If you see "port in use" or lock file errors:

```bash
# Kill existing Next.js processes
pkill -f "next dev"

# Remove lock file if needed
rm -rf .next/dev/lock

# Start on a different port
npm run dev:3001
```

### Build for Production

```bash
npm run build
npm start
```

## 📱 Responsive Breakpoints

The design follows a mobile-first approach with these breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: ≥ 1024px

All components are fully responsive and optimized for touch interactions on mobile devices.

## 🎨 Design System

### Color Palette

The design uses CSS custom properties for easy theming:

- **Primary**: `#95BF47` (Shopify Green) ✅ Updated
- **Primary Dark**: `#7FA037` (Hover states)
- **Primary Light**: `#A9CC5F` (Highlights)
- **Background**: White and light gray variants
- **Text**: Dark gray scale

### Typography

- System font stack for optimal performance
- Responsive font sizes using `clamp()`
- Clear hierarchy with appropriate line heights

### Spacing

- Consistent spacing scale from 8px to 80px
- Responsive padding and margins
- Well-balanced white space

## 🔧 Customization

### Changing Colors

Edit the CSS custom properties in `app/globals.css`:

```css
:root {
  --color-primary: #95BF47;           /* Shopify Green */
  --color-primary-dark: #7FA037;      /* Hover states */
  --color-primary-light: #A9CC5F;     /* Highlights */
  /* ... other colors */
}
```

### Adding New Sections

1. Create a new component folder in `components/`
2. Add the component and its CSS module
3. Import and add to `app/page.tsx`

### Modifying Features

Edit the `featureTabs` array in `components/FeatureShowcase/featureConfig.ts` to add/remove features or modify steps.

## 📝 Development Notes

- **No Tailwind**: This project uses CSS Modules as requested
- **Type Safety**: All components are fully typed with TypeScript
- **Performance**: Optimized with Next.js features like automatic code splitting
- **Accessibility**: Semantic HTML and ARIA labels where appropriate
- **SEO**: Proper metadata and semantic structure

---

Built with ❤️ using Next.js, TypeScript, and CSS Modules
