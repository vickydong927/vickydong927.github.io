# Vicky Dong - Software Engineer Portfolio

A dark, minimal, engineering-first portfolio showcasing production systems and scalable architecture. Built with React, TypeScript, and Tailwind CSS V4.

## Project Structure

```
.
├── backend/
│   ├── config/
│   │   └── constants.ts          # Environment and app constants
│   ├── middleware/
│   │   └── errorHandler.ts       # Global error handling middleware
│   └── server.ts                 # Express server entry point
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/               # shadcn/ui components (DO NOT MODIFY)
│   │   │   └── custom/           # Custom components
│   │   │       ├── Hero.tsx      # Hero section with profile and CTAs
│   │   │       ├── About.tsx     # About section with tech stack
│   │   │       ├── Projects.tsx  # Projects showcase
│   │   │       ├── Contact.tsx   # Contact section
│   │   │       ├── Navigation.tsx # Fixed navigation bar
│   │   │       └── Footer.tsx    # Footer component
│   │   ├── pages/
│   │   │   └── Index.tsx         # Main page component
│   │   ├── hooks/
│   │   │   ├── use-localStorage.ts # localStorage hook
│   │   │   └── use-mobile.ts     # Mobile detection hook
│   │   ├── lib/
│   │   │   └── utils.ts          # Utility functions
│   │   ├── config/
│   │   │   └── constants.ts      # Configuration constants
│   │   ├── App.tsx               # Root component
│   │   ├── main.tsx              # Application entry point
│   │   └── index.css             # Global styles with Tailwind V4
│   ├── index.html                # HTML template
│   ├── vite.config.ts            # Vite configuration
│   └── package.json              # Frontend dependencies
├── package.json                  # Root dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
└── vercel.json                   # Vercel deployment configuration
```

## Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS V4 with custom design tokens
- **UI Components**: shadcn/ui
- **Fonts**: Space Grotesk (headings), DM Sans (body)
- **Icons**: Lucide React

### Backend
- **Framework**: Express.js with TypeScript
- **Middleware**: Error handling, CORS

## Design System - Jensen Omega Dark

### Color Palette
- **Background**: `oklch(0.06 0 0)` - Deep charcoal (#0B0F14)
- **Foreground**: `oklch(1 0 0)` - Crisp white
- **Accent**: `oklch(0.7 0.15 200)` - Vibrant cyan (#00D9FF)
- **Border**: `oklch(0.15 0 0)` - Subtle gray (#1F2937)
- **Muted**: `oklch(0.5 0 0)` - Medium gray (#6B7280)

### Typography
- **Headings**: Space Grotesk (geometric sans-serif)
- **Body**: DM Sans (clean, readable)
- **Scale**: 11px (micro), 16px (body), 20px (h3), 32px (h2), 56px (h1), 72px+ (display)

### Spacing
- **Base Unit**: 8px
- **Scale**: 8, 16, 24, 32, 48, 64, 96, 128
- **Section Spacing**: 96-128px vertical rhythm
- **Component Spacing**: 16-24px tight spacing

### Border Radius
- **Minimal**: 2px (buttons), 4px (cards/images)
- **No large radius**: Maintains rectangular, structured aesthetic

## Key Features

### Hero Section
- Professional profile photo with decorative circle border
- Clear value proposition: "Building scalable, production-ready systems"
- Primary CTAs: View Projects, Download Resume, GitHub Profile
- Vertical accent line with decorative dot (desktop only)

### About Section
- Professional summary highlighting backend and distributed systems experience
- Engineering philosophy emphasizing production reliability
- Technology stack icons (Java, Go, Node.js, Spring, Docker, Kubernetes, PostgreSQL, Redis)
- Hover effects on technology icons

### Projects Showcase
- **VideoVault**: Distributed video streaming platform
  - Technologies: Spring Boot, Kafka, Redis, PostgreSQL, Docker, Kubernetes
  - Links to production and prototype repositories
- **BatchOrchestrator**: High-throughput batch orchestration system
  - Technologies: Go, Kafka, PostgreSQL, Prometheus, Grafana, Docker
  - Links to production and prototype repositories
- Project cards with hover effects
- Technical highlights for each project

### Contact Section
- Multiple contact options: Email, LinkedIn, GitHub
- Prominent Resume PDF download button with accent styling
- Icon-based links with hover effects

### Navigation
- Fixed navigation bar with smooth scroll
- Active section highlighting
- Mobile-responsive hamburger menu
- Backdrop blur effect on scroll

## Code Generation Guidelines

### Component Architecture
- **Single Responsibility**: Each component handles one feature
- **Composition**: Components are composed in Index.tsx
- **No Prop Drilling**: Use context for shared state if needed
- **Type Safety**: All components use TypeScript with proper typing

### Styling Conventions
- **Tailwind V4**: Use design tokens from `@theme inline`
- **Color Format**: ONLY use `oklch()` format, never hex/rgb/hsl
- **Spacing**: Use Tailwind spacing scale (p-4, p-6, gap-4, gap-6)
- **Typography**: Use font-space-grotesk for headings, font-dm-sans for body
- **Hover Effects**: Subtle transitions (duration-300) for interactive elements

### Critical Rules
- **DO NOT MODIFY**: `frontend/src/components/ui/` (shadcn/ui components)
- **DO NOT REWRITE**: `frontend/src/index.css` (use search_replace for token changes)
- **ALWAYS UPDATE**: `frontend/src/pages/Index.tsx` must be fully implemented
- **NO TODO COMMENTS**: All code must be production-ready

### Performance Targets
- **Lighthouse Performance**: 90+
- **Lighthouse Accessibility**: 90+
- **Initial Load Time**: Under 3 seconds
- **Mobile Responsive**: Excellent usability on all devices

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

Configured for Vercel deployment with `vercel.json`. The app is a static single-page application with no backend dependencies.

## Portfolio Content

### Personal Information
- **Name**: Weiqi (Vicky) Dong
- **Role**: Software Engineer
- **Email**: vicky.dong@example.com
- **GitHub**: https://github.com/weiqidong
- **LinkedIn**: https://linkedin.com/in/weiqidong

### Project Repositories
- **VideoVault Production**: https://github.com/weiqidong/videovault
- **VideoVault Prototype**: https://github.com/weiqidong/videovault_prototype
- **BatchOrchestrator Production**: https://github.com/weiqidong/batchorchestrator
- **BatchOrchestrator Prototype**: https://github.com/weiqidong/batchorchestrator_prototype

## License

MIT
