import { Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

export default function IntelPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-black text-white">Security Intelligence</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Understanding the vectors of attack on the Solana blockchain is the first step in defense.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <IntelCard 
          icon={<Lock className="w-8 h-8 text-red-500" />}
          title="Liquidity Rug Pull"
          desc="Developers create a token, add liquidity, and then remove it once investors buy in. SolGuard checks if liquidity is 'burned' or locked."
        />
        <IntelCard 
          icon={<Eye className="w-8 h-8 text-blue-500" />}
          title="Mint Authority"
          desc="If Mint Authority is enabled, the developer can print infinite tokens, dumping them on the market and crashing the price to zero."
        />
      </div>
    </div>
  );
}

function IntelCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-8 bg-[#0B1121] border border-slate-800 rounded-xl hover:border-blue-500/50 transition-colors">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
    </div>
  );
}
