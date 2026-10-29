# Bishal Gautam — Executive Personal Brand Website

A premium, multi-page static website for **Bishal Gautam**, specializing in **Sales, Marketing, Business Development, Client Acquisition, and Commercial Growth**.

## Overview

- **Name**: Bishal Gautam
- **Positioning**: Sales & Marketing | Business Development | Business Expansion | Commercial Growth
- **Location**: Kathmandu, Nepal
- **Email**: zprofessor2077@gmail.com
- **Phone**: +977 9749410075
- **Languages**: Nepali, English, Hindi

## Architecture & Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS v4 (Editorial palette: warm white `#FBFBF9`, charcoal `#111827`, restrained navy `#0F172A`)
- **Typography**: Plus Jakarta Sans (Body & UI) & Newsreader (Editorial headlines)
- **Interactive Visual**: Custom animated SVG component (`GrowthMotionVisual.tsx`) depicting business momentum, ascending structures, and interconnected opportunity pathways
- **Personal Photograph**: Authentic supplied portrait configured at `/public/assets/bishal_gautam_portrait.png` (integrated cleanly into the About page)
- **Static Hosting**: 100% static, requires no database or backend server for navigation or page rendering.

## Project Structure

```
├── /public
│   └── /assets
│       └── bishal_gautam_portrait.png # Authentic supplied portrait
├── /src
│   ├── /components
│   │   ├── Navbar.tsx             # 3-Zone Top Bar Contract navigation with mobile drawer
│   │   ├── Footer.tsx             # Refined editorial footer with dynamic year & links
│   │   ├── CtaBanner.tsx          # Conversion callout banner
│   │   └── GrowthMotionVisual.tsx # Original animated "Business Growth in Motion" visual
│   ├── /data
│   │   └── content.ts             # Structured personal brand content & 6 specialties
│   ├── /pages
│   │   ├── HomePage.tsx           # Hero with Growth Motion visual, Perspective, Specialties, Principles
│   │   ├── AboutPage.tsx          # Authentic portrait, commercial perspective, strengths, languages
│   │   ├── ExpertisePage.tsx       # In-depth 6 specialties, situations, challenges, collaboration
│   │   ├── ApproachPage.tsx       # 5-Stage framework (Understand, Identify, Connect, Execute, Improve)
│   │   ├── ContactPage.tsx        # Direct inquiry form with mailto fallback & validation
│   │   └── NotFoundPage.tsx       # Editorial 404 handler
│   ├── /types
│   │   └── index.ts               # TypeScript interfaces
│   ├── /utils
│   │   ├── contact.ts             # Validation & mailto RFC URI generator
│   │   └── contact.test.ts        # Node test runner unit tests
│   ├── App.tsx                    # Router, history pushState, scroll management, title syncing
│   ├── main.tsx                   # React entry point
│   └── index.css                  # Tailwind CSS v4 layers & typography
├── index.html                     # Semantic HTML5, Schema.org Person JSON-LD, SEO meta
├── package.json
└── vite.config.ts
```

## Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. **Run unit tests**:
   ```bash
   npx --yes tsx --test src/utils/contact.test.ts
   ```

## Production Build & Static Deployment

To create a static production build:

```bash
npm run build
```

The compiled assets will be placed in the `/dist` directory and can be hosted directly on Vercel, Netlify, Cloudflare Pages, or GitHub Pages.
