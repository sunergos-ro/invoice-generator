# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a plain HTML, CSS, and JavaScript application designed for generating Stripe invoices. The application can be hosted on Cloudflare Pages or any static web hosting service.

## Development & Deployment

This is a static HTML application that requires no build process:

- **Local Development**: Simply open `form.html` in a web browser or use a local web server
- **Deployment**: Upload all files to any static hosting service (Cloudflare Pages, GitHub Pages, Netlify, or any VPS)
- **Files Required**:
  - `form.html` - Main HTML file
  - `form.css` - Stylesheet
  - `form.js` - JavaScript functionality
  - `/images/git-digest-logo.png` - Logo asset (if using Git Digest logo)

## Architecture and Structure

### File Structure
```
/
├── form.html         # Main invoice generator HTML
├── form.css          # Tailwind-inspired CSS styles
├── form.js           # JavaScript for invoice functionality
├── images/
│   ├── git-digest-logo.png  # Git Digest logo
├── stylesheets/
│   ├── common.css         # Common styles shared between pages
│   └── form.css           # Form-specific styles
└── javascript/
    └── form.js            # JavaScript functionality
```

### Key Technologies
- **Plain HTML5**
- **Vanilla JavaScript** (ES6+)
- **CSS3** with Tailwind-inspired utility classes
- **localStorage** for data persistence
- **No dependencies** or build process required

## Important Notes

1. **Invoice Generator**: Fully functional invoice generator with EU VAT support, multiple line items, and print-to-PDF capabilities.

2. **Business/Client Management**: Users can save and manage frequently used business and client details for quick reuse. The feature includes:
   - Dropdown selectors for saved entities
   - In-place editing with unsaved changes detection
   - Persistent storage via Zustand and localStorage
   - Support for multiple businesses and clients

3. **Security**: The application includes security headers and avoids inline JavaScript for better CSP compliance.

4. **Hosting**: Can be deployed to:
   - Cloudflare Pages (recommended for security features)
   - GitHub Pages
   - Netlify
   - Any static web server or VPS

5. **Browser Compatibility**: Works on all modern browsers that support ES6+ JavaScript.

6. **No Backend Required**: Runs entirely in the browser with localStorage for persistence.