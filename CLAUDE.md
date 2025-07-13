# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a plain HTML, CSS, and JavaScript application designed for generating Stripe invoices. The application can be hosted on Cloudflare Pages or any static web hosting service.

## Development & Deployment

This is a static HTML application that requires no build process:

- **Local Development**: Simply open `form.html` in a web browser or use a local web server
- **Offline Usage**: Clone the repository locally and the application works completely offline - no internet connection required after initial download
- **Deployment**: Upload all files to any static hosting service (Cloudflare Pages, GitHub Pages, Netlify, or any VPS)
- **Files Required**:
  - `form.html` - Main invoice generator HTML
  - `index.html` - Landing/home page
  - `stylesheets/form.css` - Form-specific styles
  - `stylesheets/common.css` - Common styles shared between pages
  - `stylesheets/index.css` - Landing page styles
  - `javascript/form.js` - JavaScript functionality
  - `images/og-image.png` - Open Graph image for social sharing
  - `favicon/` - Favicon assets

## Architecture and Structure

### File Structure
```
/
├── form.html              # Main invoice generator HTML
├── index.html             # Landing/home page
├── images/
│   └── og-image.png         # Open Graph image for social sharing
├── stylesheets/
│   ├── common.css         # Common styles shared between pages
│   ├── form.css           # Form-specific styles
│   └── index.css          # Landing page styles
├── javascript/
│   └── form.js            # JavaScript functionality
└── favicon/               # Favicon assets for various platforms
    ├── favicon.ico
    ├── favicon-16x16.png
    ├── favicon-32x32.png
    ├── apple-touch-icon.png
    ├── android-chrome-192x192.png
    ├── android-chrome-512x512.png
    └── site.webmanifest
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
   - Persistent storage via localStorage
   - Support for multiple businesses and clients

3. **Security**: The application includes security headers and avoids inline JavaScript for better CSP compliance.

4. **Hosting**: Can be deployed to:
   - Cloudflare Pages (recommended for security features)
   - GitHub Pages
   - Netlify
   - Any static web server or VPS

5. **Browser Compatibility**: Works on all modern browsers that support ES6+ JavaScript.

6. **No Backend Required**: Runs entirely in the browser with localStorage for persistence.

7. **Offline Functionality**: Once cloned/downloaded, the application works completely offline. All assets and functionality are self-contained with no external dependencies or API calls.