# SolGuard 🛡️

**Institutional-Grade Security Analysis for Solana Tokens.**

[![Live Demo](https://img.shields.io/badge/Live-Demo-2ea44f?style=for-the-badge&logo=vercel)](https://solguard-production.netlify.app)
[![Solana](https://img.shields.io/badge/Solana-Web3.js-9945FF?style=for-the-badge&logo=solana)](https://solana.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org)

SolGuard is an autonomous security agent that monitors the Solana blockchain for suspicious contract activity. It detects new Raydium pools in real-time, analyzes token authorities (Mint/Freeze), and provides a comprehensive "Trust Score" for any SPL token.

## 🚀 Live Dashboard
👉 **[Launch SolGuard Platform](https://solguard-production.netlify.app)**

## ✨ Features
- **🔍 Deep Token Analysis:** Instantly check Mint Authority, Freeze Authority, and Supply distribution.
- **📡 Live Mempool Feed:** Watch new liquidity pools launch on Raydium in real-time.
- **🛡️ Rug Pull Detection:** Automated scoring algorithm to flag high-risk contracts.
- **⚡ Zero-Latency:** Built on Next.js 14 App Router for instant transitions.

## 🛠️ Technology Stack
- **Frontend:** Next.js 14, TailwindCSS, Framer Motion, Lucide Icons
- **Blockchain:** @solana/web3.js (RPC connection)
- **Deployment:** Netlify (Edge Network)

## 🏗️ Local Development

```bash
# 1. Clone the repo
git clone https://github.com/Peni-Ghost/watchdog-solana.git

# 2. Install dependencies
cd watchdog-solana/solguard
npm install

# 3. Run development server
npm run dev
```

## 🧠 How It Works
SolGuard connects directly to Solana RPC nodes to fetch raw account data. It parses the SPL Token Program state to verify critical security flags:
1. **Mint Authority:** If enabled, the developer can print infinite tokens. (Risk Score: +30)
2. **Freeze Authority:** If enabled, the developer can blacklist wallets. (Risk Score: +20)
3. **Liquidity Analysis:** (Coming Soon) Verifies if LP tokens are burned or locked.

---
*Built for the Colosseum Hackathon 2026.*
