# Aspera Website

Next.js website for Aspera — AI-powered coding interview assistant.

**Live Site:** https://aspera-website.vercel.app/

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
aspera-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API Routes
│   │   │   ├── payment/verify # Verify crypto payments
│   │   │   ├── download       # Secure download links
│   │   │   └── webhook/indexer # Blockchain event webhooks
│   │   ├── layout.tsx         # Root layout with Web3Provider
│   │   ├── page.tsx           # Landing page
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Demo.tsx
│   │   ├── Pricing.tsx
│   │   └── Footer.tsx
│   └── lib/                   # Utilities
│       ├── Web3Provider.tsx   # RainbowKit setup (commented)
│       └── db.ts              # Database types & functions
├── package.json
├── tailwind.config.js
└── next.config.js
```

## 🛣️ Roadmap

### Phase 1: Wallet Integration
1. Uncomment `Web3Provider.tsx`
2. Add WalletConnect Project ID
3. Update `Pricing.tsx` to use RainbowKit's `ConnectButton`

### Phase 2: Payment System
1. Set up database (Prisma + PostgreSQL or Supabase)
2. Implement `db.ts` functions
3. Add payment verification in `api/payment/verify`

### Phase 3: Blockchain Indexer
1. Set up Alchemy/QuickNode webhook
2. Implement `api/webhook/indexer`
3. Auto-confirm payments on blockchain events

### Phase 4: Download System
1. Upload app binary to S3/storage
2. Implement signed URL generation in `api/download`
3. Send download links via email

## 🔗 Useful Resources

- [RainbowKit Docs](https://www.rainbowkit.com/docs/introduction)
- [Wagmi Docs](https://wagmi.sh/)
- [Viem Docs](https://viem.sh/)
- [Alchemy Webhooks](https://docs.alchemy.com/reference/notify-api-quickstart)

## 📝 Notes

- Currently uses static export (`output: 'export'`)
- To enable API routes, change `next.config.js` to use server mode
- Wallet connection UI is ready — just needs RainbowKit activation
