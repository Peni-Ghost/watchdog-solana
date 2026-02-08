"use client";

import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function HeroSearch() {
  const [address, setAddress] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.length > 30) {
      router.push(`/report/${address}`);
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-25 animate-pulse"></div>
      <form onSubmit={handleSearch} className="relative flex items-center bg-[#0B1121] border border-slate-700/50 rounded-xl p-2 shadow-2xl">
        <div className="pl-4 text-slate-500">
          <Search className="w-5 h-5" />
        </div>
        <input 
          type="text" 
          placeholder="Paste Token Address (CA)..." 
          className="w-full bg-transparent border-none text-white px-4 py-3 focus:outline-none focus:ring-0 placeholder:text-slate-600 font-mono text-sm"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all">
          Analyze
        </button>
      </form>
    </div>
  );
}
