# Stripe Invoice Generator

A simple, free invoice generator for Stripe one-time payments built with Next.js. This project was born out of frustration with having to manually create invoices for Stripe payments and not wanting to pay for external services so I pretty much vibe coded this with Claude Code inspired by [@levelsio's Stripe invoice generator](https://gist.github.com/levelsio/b30721cc99166223fcf3dd590d6d0454).

## Demo

[![Watch the video](https://img.youtube.com/vi/C_hKSgCNy-U/0.jpg)](https://youtu.be/C_hKSgCNy-U)

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sunergos-ro/invoice-generator)

## Features

- **No Backend Required**: Runs entirely in your browser
- **localStorage Persistence**: Your invoice details are automatically saved
- **Print to PDF**: Generate professional PDFs using your browser's print function
- **Customizable**: Add your company logo and details
- **Real-time Preview**: See your invoice update as you type

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

1. **Enter Invoice Details**: Fill in the receipt number and dates
2. **Add Customer Information**: Enter your customer's name, email, and address
3. **Specify Payment Details**: Add the amount paid and payment method details
4. **Describe the Item**: Enter a description of the service or product
5. **Additional Fields**: Optionally add custom fields like VAT numbers
6. **Print/Export**: Click "Print / Export as PDF" to generate your invoice

The application automatically saves your inputs to localStorage, so your data persists between sessions.

### Customization

You can customize the invoice by:
- Selecting different company logos from the dropdown
- Modifying the default company details in the code
- Adding new logo options in the `public` folder

## Development

This project uses:
- **Next.js 15.3.5** with App Router
- **React 19.0.0**
- **TypeScript 5** with strict mode
- **Tailwind CSS v4**
- **Turbopack** for fast development builds

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

## Acknowledgments

- [@levelsio](https://twitter.com/levelsio) for the original [Better Stripe Invoice Generator](https://gist.github.com/levelsio/b30721cc99166223fcf3dd590d6d0454)
- Built as a free alternative to paid invoice services