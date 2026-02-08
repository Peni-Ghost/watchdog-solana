"use client";

import { HeroSearch } from "@/components/ui/HeroSearch";
import { ShieldCheck, AlertTriangle, Zap, Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,41,59,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.2)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-mono mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            SYSTEM ONLINE v2.4.0
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight font-display">
            Institutional-Grade <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Security Analysis</span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Detect rug pulls, honey pots, and malicious contracts in milliseconds. 
            The industry standard for Solana token safety.
          </p>

          <div className="pt-8">
            <HeroSearch />
          </div>

          {/* Recent Ticker */}
          <div className="pt-12 flex justify-center gap-4 opacity-60 overflow-hidden">
            {[1,2,3].map(i => (
              <div key={i} className="flex items-center gap-3 bg-slate-900/50 border border-slate-800 px-4 py-2 rounded-full text-xs font-mono">
                <span className={`w-1.5 h-1.5 rounded-full ${i===1 ? 'bg-red-500' : 'bg-emerald-500'}`}></span>
                <span>So11...3321</span>
                <span className={i===1 ? 'text-red-400' : 'text-emerald-400'}>{i===1 ? 'RISK: 92' : 'SAFE: 15'}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Lock className="w-8 h-8 text-blue-400" />}
            title="Liquidity Analysis"
            desc="Verify if LP tokens are burned or locked to prevent liquidity removal."
          />
          <FeatureCard 
            icon={<ShieldCheck className="w-8 h-8 text-emerald-400" />}
            title="Authority Checks"
            desc="Detect if Mint or Freeze authorities are still enabled on the contract."
          />
          <FeatureCard 
            icon={<AlertTriangle className="w-8 h-8 text-red-400" />}
            title="Holder Distribution"
            desc="Identify wallet concentration and potential dev sniper wallets."
          />
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="p-8 bg-[#0B1121] border border-slate-800 rounded-2xl hover:border-blue-500/30 transition-all group">
      <div className="mb-4 p-3 bg-slate-900/50 rounded-lg w-fit group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 font-display">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-sm">
        {desc}
      </p>
    </div>
  );
}
