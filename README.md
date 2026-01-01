# WeaveAI Website

A modern, responsive website for WeaveAI that leverages AI to redefine the content-to-commerce business model.

## Technology Stack

- **Framework**: Next.js 14+ (App Router) with TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with navigation and footer
│   ├── page.tsx            # Home page
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── services/
│   │   └── page.tsx        # Services page
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   ├── sitemap.ts          # Sitemap generation
│   ├── robots.ts            # Robots.txt
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services showcase
│   ├── CTA.tsx             # Call-to-action sections
│   ├── Footer.tsx          # Footer component
│   └── ui/                # Reusable UI components
│       ├── Button.tsx
│       └── Card.tsx
└── public/                 # Static assets
```

## Deployment

### Deploy to Vercel

1. Push your code to a GitHub repository.

2. Import your repository in [Vercel](https://vercel.com).

3. Configure your custom domain (weaveai.us):
   - Go to your project settings in Vercel
   - Navigate to "Domains"
   - Add your domain: weaveai.us

4. Update DNS records in GoDaddy:
   - Log in to your GoDaddy account
   - Go to DNS Management for weaveai.us
   - Add an A record pointing to Vercel's IP (Vercel will provide this)
   - Or add a CNAME record pointing to your Vercel deployment URL

5. Vercel will automatically generate an SSL certificate.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Features

- ✅ Responsive design (mobile-first)
- ✅ Modern, clean aesthetic
- ✅ SEO optimized (meta tags, Open Graph, structured data)
- ✅ Smooth animations and transitions
- ✅ Accessible navigation
- ✅ Gradient color scheme matching WeaveAI logo

## Color Scheme

- **Primary Gradient**: Blue (#3B82F6) to Orange (#F97316)
- **Neutral**: Dark Grey (#1F2937) and Tan (#D4A574)
- **Background**: White (#FFFFFF)

## License

© 2024 WeaveAI. All rights reserved.

