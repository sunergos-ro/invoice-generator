# Stripe Invoice Generator

A simple, free invoice generator for Stripe one-time payments built with Next.js. This project was born out of frustration with having to manually create invoices for Stripe payments and not wanting to pay for external services so I pretty much vibe coded this with Claude Code inspired by [@levelsio's Stripe invoice generator](https://gist.github.com/levelsio/b30721cc99166223fcf3dd590d6d0454).

## Demo

[![Watch the video](https://img.youtube.com/vi/Hwarc6oYa-o/0.jpg)](https://youtu.be/Hwarc6oYa-o)

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sunergos-ro/invoice-generator)

## Features

- **No Backend Required**: Runs entirely in your browser
- **localStorage Persistence**: Your invoice details are automatically saved
- **Print to PDF**: Generate professional PDFs using your browser's print function
- **Customizable**: Add your company logo and details
- **Real-time Preview**: See your invoice update as you type
- **EU VAT Support**: Automatic VAT calculation and reverse-charge handling for EU businesses
- **Multiple Line Items**: Add multiple products/services to your invoice
- **Country Selection**: Built-in country dropdown with all global countries
- **Business & Client Management**: Save and reuse frequently used business and client details
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Clean Print Layout**: Optimized print styles for professional PDF output

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/sunergos-ro/invoice-generator.git

# Navigate to the project directory
cd invoice-generator

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the invoice generator.

### Usage

1. **Business/Client Selection**: 
   - Choose from saved businesses/clients or create new ones
   - Save frequently used details for quick reuse
   - See "Unsaved changes" indicator when details are modified
2. **Company Setup**: Select your company's country and add your logo (or choose from presets)
3. **Invoice Details**: Set invoice number, issue date, and due date
4. **Customer Information**: Add customer details including country and VAT number (for EU businesses)
5. **Add Line Items**: Add one or more products/services with quantities and prices
6. **VAT Handling**: 
   - Automatic VAT calculation based on EU rules
   - B2B reverse-charge support for cross-border EU transactions
   - Smart detection of when VAT should apply
7. **Print/Export**: Click "Print / Export as PDF" to generate your invoice

The application automatically saves your inputs to localStorage, so your data persists between sessions.

### Customization

You can customize the invoice by:
- Selecting different company logos from the dropdown or providing a custom URL
- Modifying the default company details in the code
- Adding new logo options in the `public` folder
- Adjusting the invoice layout and styling in `src/app/page.tsx`
- Customizing the print styles for PDF generation

## Development

This project uses:
- **Next.js 15.3.5** with App Router
- **React 19.0.0**
- **TypeScript 5** with strict mode
- **Tailwind CSS v4**
- **Turbopack** for fast development builds
- **Zustand** for state management

### Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Key Features Explained

### EU VAT Support
The invoice generator includes comprehensive EU VAT handling:
- **Automatic VAT Rates**: All 27 EU member states with their current standard VAT rates
- **B2B Reverse Charge**: Automatically applies reverse charge for cross-border B2B transactions within the EU
- **B2C VAT**: Correctly applies company country VAT for B2C transactions
- **Smart Detection**: Automatically determines when VAT should apply based on countries and VAT numbers

### Multiple Line Items
- Add unlimited products or services to your invoice
- Each item can have its own description, quantity, and unit price
- Real-time calculation of subtotals and totals
- Easy-to-use interface for managing invoice items

### Business & Client Management
- Save frequently used business and client details
- Quick selection from dropdown menus
- Create new entities or update existing ones
- Automatic unsaved changes detection
- All data persisted to localStorage for future sessions

## Acknowledgments

- [@levelsio](https://twitter.com/levelsio) for the original [Better Stripe Invoice Generator](https://gist.github.com/levelsio/b30721cc99166223fcf3dd590d6d0454)
- Built as a free alternative to paid invoice services
