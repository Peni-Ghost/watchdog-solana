import { Navbar } from '@/components/ui/Navbar';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'SolGuard - Solana Token Security Analysis',
  description: 'Institutional-grade security analysis for Solana tokens. Detect rug pulls, honey pots, and malicious contracts in milliseconds.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${mono.variable}`}>
      <body className="bg-[#020617] text-slate-300 min-h-screen flex flex-col font-sans selection:bg-blue-500/30">
        <Navbar />
        <main className="flex-1 pt-16">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="border-t border-slate-800/50 py-8 mt-20 bg-[#020617]">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm text-slate-600">
            <div>© 2026 SolGuard Security. All systems operational.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-400">GitHub</a>
              <a href="#" className="hover:text-blue-400">Twitter</a>
              <a href="#" className="hover:text-blue-400">API</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
