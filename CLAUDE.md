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
├── page.tsx          # Home page
└── globals.css       # Global styles with Tailwind CSS

public/               # Static assets (SVG icons)
```

### Key Technologies
- **Next.js 15.3.5** with App Router
- **React 19.0.0** 
- **TypeScript 5** with strict mode
- **Tailwind CSS v4** (uses CSS-based configuration)
- **Turbopack** for development builds

### TypeScript Configuration
- Path alias: `@/*` maps to `./src/*`
- Strict mode enabled
- Target: ES2017

## Important Notes

1. **Fresh Project State**: This is a newly initialized Next.js project. The Stripe invoice generation functionality needs to be implemented.

2. **No Testing Framework**: Currently no testing setup. Consider adding Jest or Vitest when implementing features.

3. **Environment Variables**: No `.env` files exist yet. When adding Stripe integration, create `.env.local` for API keys.

4. **Tailwind CSS v4**: This project uses the latest Tailwind version which uses CSS-based configuration instead of a JavaScript config file.

5. **Type Safety**: Always maintain TypeScript strict mode compliance when adding new code.