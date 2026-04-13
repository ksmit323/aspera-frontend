"use client";

import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const features = [
  "Full desktop application",
  "Unlimited usage",
  "All future updates",
  "Priority support",
  "Linux (macOS & Windows coming)",
];

function PurchaseButton() {
  const handlePurchase = () => {
    alert("Purchase flow coming soon!\n\nFor now, join the waitlist by emailing hello@aspera.dev");
  };

  return (
    <button
      onClick={handlePurchase}
      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold rounded-lg hover:opacity-90 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/30"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M16 11h.01" />
      </svg>
      Complete Purchase
    </button>
  );
}

function ConnectWalletPrompt() {
  return (
    <div className="space-y-4">
      <ConnectButton.Custom>
        {({ openConnectModal }) => (
          <button
            onClick={openConnectModal}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold rounded-lg hover:opacity-90 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/30"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <path d="M16 11h.01" />
            </svg>
            Connect Wallet to Buy
          </button>
        )}
      </ConnectButton.Custom>
      <p className="text-sm text-text-muted">
        Pay with crypto (ETH, USDC, USDT)
        <br />
        Supports MetaMask, WalletConnect, OKX, Trust Wallet & more
      </p>
    </div>
  );
}

export default function Pricing() {
  const { isConnected } = useAccount();

  return (
    <section id="pricing" className="py-24 px-8 max-w-3xl mx-auto text-center">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Get Aspera</h2>
        <p className="text-text-secondary text-lg">
          One-time purchase. Lifetime updates. No subscriptions.
        </p>
      </div>

      <div className="bg-bg-card border border-white/[0.08] rounded-3xl p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />

        <h3 className="text-2xl font-semibold mb-2">Aspera Personal</h3>
        <div className="text-6xl font-bold my-6">
          $49<span className="text-xl text-text-secondary font-normal">one-time</span>
        </div>

        <ul className="text-left max-w-xs mx-auto mb-8 space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-3 text-text-secondary">
              <span className="text-green-500 font-bold">✓</span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="pt-8 border-t border-white/[0.08]">
          {isConnected ? <PurchaseButton /> : <ConnectWalletPrompt />}
        </div>
      </div>
    </section>
  );
}
