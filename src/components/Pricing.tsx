'use client'

import { useAccount, useSendTransaction, useWaitForTransactionReceipt } from 'wagmi'
import { parseEther } from 'viem'
import { ConnectButton } from '@rainbow-me/rainbowkit'

// TODO: fill in before launch
const RECIPIENT_ADDRESS = '0x0000000000000000000000000000000000000000' as const

// Payment amount calibrated to ~$49 USD.
// At ETH ≈ $1,600 (April 2026), 0.031 ETH ≈ $49.
// Update this value if ETH price drifts significantly from $1,600.
const PAYMENT_AMOUNT_ETH = '0.031' as const

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

const features = [
  'Full desktop application',
  'Unlimited usage',
  'All future updates',
  'Priority support',
  'Linux (macOS & Windows coming)',
]

function usePurchase() {
  const { data: txHash, sendTransaction, isPending, error, reset } = useSendTransaction()
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash: txHash })

  const isZeroAddress = RECIPIENT_ADDRESS === ZERO_ADDRESS

  const send = () => {
    if (isZeroAddress) return
    sendTransaction({ to: RECIPIENT_ADDRESS, value: parseEther(PAYMENT_AMOUNT_ETH) })
  }

  return { send, isPending, isConfirming, isSuccess, error, reset, isZeroAddress }
}

function purchaseButtonLabel(isPending: boolean, isConfirming: boolean) {
  if (isPending) return 'Confirm in wallet…'
  if (isConfirming) return 'Processing payment…'
  return 'Complete Purchase'
}

function PurchaseButton() {
  const { send, isPending, isConfirming, isSuccess, error, reset, isZeroAddress } = usePurchase()
  const isBusy = isPending || isConfirming

  if (error) {
    return (
      <div className="space-y-3">
        <p className="text-red-400 text-sm">{error.message.split('\n')[0]}</p>
        <button
          onClick={reset}
          className="text-sm text-text-muted underline underline-offset-2 hover:text-text-secondary transition-colors"
        >
          Try again
        </button>
      </div>
    )
  }

  if (isSuccess) {
    return (
      <div className="space-y-4">
        <div className="flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-400"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <p className="text-green-400 font-semibold text-lg">Payment confirmed!</p>
          <p className="text-text-secondary text-sm">
            Thank you for purchasing Aspera. You now have lifetime access to all updates.
          </p>
        </div>
        <button
          onClick={() => window.location.href = '/'}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/15 transition-colors"
        >
          Continue
        </button>
      </div>
    )
  }

  if (isZeroAddress) {
    return (
      <div className="space-y-3">
        <button
          disabled
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500/40 to-amber-400/40 text-white/60 font-semibold rounded-lg cursor-not-allowed"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <path d="M16 11h.01" />
          </svg>
          Complete Purchase
        </button>
        <p className="text-red-400 text-sm">
          Payment is temporarily unavailable. Please try again later.
        </p>
      </div>
    )
  }

  return (
    <button
      onClick={send}
      disabled={isBusy}
      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold rounded-lg hover:opacity-90 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/30 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none"
    >
      {isBusy ? (
        <svg
          className="animate-spin"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="M16 11h.01" />
        </svg>
      )}
      {purchaseButtonLabel(isPending, isConfirming)}
    </button>
  )
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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <path d="M16 11h.01" />
            </svg>
            Connect Wallet to Buy
          </button>
        )}
      </ConnectButton.Custom>
      <p className="text-sm text-text-muted">
        Pay with ETH · Supports MetaMask, WalletConnect, OKX, Trust Wallet & more
      </p>
    </div>
  )
}

function WrongNetworkWarning() {
  return (
    <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-center">
      <div className="flex items-center justify-center gap-2 text-yellow-400 text-sm font-medium mb-1">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
        Wrong Network
      </div>
      <p className="text-yellow-400/80 text-xs">
        Please switch to Ethereum Mainnet to complete your purchase.
      </p>
    </div>
  )
}

export default function Pricing() {
  const { isConnected, chainId } = useAccount()
  const isWrongNetwork = isConnected && chainId !== 1

  return (
    <section id="pricing" className="py-24 px-8 max-w-3xl mx-auto text-center">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Get Aspera</h2>
        <p className="text-text-secondary text-lg">One-time purchase. Lifetime updates. No subscriptions.</p>
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
          {isWrongNetwork && <WrongNetworkWarning />}
          {isConnected ? <PurchaseButton /> : <ConnectWalletPrompt />}
        </div>
      </div>
    </section>
  )
}
