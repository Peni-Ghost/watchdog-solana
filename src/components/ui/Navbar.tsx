"use client";

import Link from 'next/link';
import { Shield, Activity, Radar, FileText, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center border border-blue-500/30 group-hover:border-blue-400 transition-all shadow-[0_0_15px_rgba(37,99,235,0.2)]">
            <Shield className="w-5 h-5 text-blue-400" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">Sol<span className="text-blue-500">Guard</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="/" icon={<Radar size={16} />}>Scanner</NavLink>
          <NavLink href="/feed" icon={<Activity size={16} />}>Live Feed</NavLink>
          <NavLink href="/intel" icon={<FileText size={16} />}>Intel</NavLink>
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40">
            Connect Wallet
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#020617] border-b border-slate-800 p-4 space-y-4">
          <MobileNavLink href="/">Scanner</MobileNavLink>
          <MobileNavLink href="/feed">Live Feed</MobileNavLink>
          <MobileNavLink href="/intel">Intel</MobileNavLink>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children, icon }: { href: string; children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <Link href={href} className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors">
      {icon}
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="block text-slate-400 hover:text-white font-medium py-2">
      {children}
    </Link>
  );
}
