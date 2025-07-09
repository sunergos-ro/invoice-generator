# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.3.5 application designed for generating Stripe invoices. The project uses TypeScript, React 19, and Tailwind CSS v4.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (uses Turbopack for faster builds)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## Architecture and Structure

### Directory Layout
```
src/app/              # Next.js App Router pages and layouts
├── layout.tsx        # Root layout with Geist fonts
├── page.tsx          # Home page with invoice generator
└── globals.css       # Global styles with Tailwind CSS

src/stores/           # Zustand state management
└── invoiceStore.ts   # Business and client entity management

public/               # Static assets (SVG icons)
```

### Key Technologies
- **Next.js 15.3.5** with App Router
- **React 19.0.0** 
- **TypeScript 5** with strict mode
- **Tailwind CSS v4** (uses CSS-based configuration)
- **Turbopack** for development builds
- **Zustand** for state management with localStorage persistence

### TypeScript Configuration
- Path alias: `@/*` maps to `./src/*`
- Strict mode enabled
- Target: ES2017

## Important Notes

1. **Invoice Generator**: Fully functional invoice generator with EU VAT support, multiple line items, and print-to-PDF capabilities.

2. **Business/Client Management**: Users can save and manage frequently used business and client details for quick reuse. The feature includes:
   - Dropdown selectors for saved entities
   - In-place editing with unsaved changes detection
   - Persistent storage via Zustand and localStorage
   - Support for multiple businesses and clients

3. **No Testing Framework**: Currently no testing setup. Consider adding Jest or Vitest when implementing features.

4. **Environment Variables**: No `.env` files exist yet. When adding Stripe integration, create `.env.local` for API keys.

5. **Tailwind CSS v4**: This project uses the latest Tailwind version which uses CSS-based configuration instead of a JavaScript config file.

6. **Type Safety**: Always maintain TypeScript strict mode compliance when adding new code.