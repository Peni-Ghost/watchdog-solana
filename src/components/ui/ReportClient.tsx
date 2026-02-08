"use client";

import { TokenReport } from '@/lib/analyzer';
import { Shield, AlertTriangle, CheckCircle, Activity } from 'lucide-react';

interface ReportClientProps {
  report: TokenReport;
  address: string;
}

export function ReportClient({ report, address }: ReportClientProps) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <div className="text-sm text-slate-500 font-mono mb-2">TARGET IDENTIFIER</div>
          <h1 className="text-3xl md:text-4xl font-bold font-mono text-white break-all">{address}</h1>
        </div>
        <div className={`px-6 py-3 rounded-xl border ${
          report.riskLevel === 'CRITICAL' ? 'bg-red-900/20 border-red-500/50 text-red-400' :
          report.riskLevel === 'WARNING' ? 'bg-yellow-900/20 border-yellow-500/50 text-yellow-400' :
          'bg-emerald-900/20 border-emerald-500/50 text-emerald-400'
        }`}>
          <div className="text-xs font-bold tracking-widest mb-1">THREAT LEVEL</div>
          <div className="text-2xl font-black">{report.riskLevel}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Score Gauge */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-[#0B1121] border border-slate-800 rounded-2xl p-8 relative overflow-hidden">
            <div className="flex items-center gap-4 mb-8">
              <Activity className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-bold text-white">Trust Score Analysis</h2>
            </div>
            
            <div className="relative h-4 bg-slate-800 rounded-full overflow-hidden mb-4">
              <div 
                className={`h-full transition-all duration-1000 ${report.riskLevel === 'SAFE' ? 'bg-emerald-500' : 'bg-red-500'}`}
                style={{ width: `${100 - report.riskScore}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm font-mono text-slate-500">
              <span>CRITICAL RISK</span>
              <span>100% SAFE</span>
            </div>

            <div className="mt-8 space-y-4">
              {report.details.map((detail, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-red-900/10 border border-red-900/30 rounded-lg text-red-300 text-sm">
                  <AlertTriangle className="w-5 h-5 shrink-0" />
                  {detail}
                </div>
              ))}
              {report.details.length === 0 && (
                <div className="flex items-start gap-3 p-4 bg-emerald-900/10 border border-emerald-900/30 rounded-lg text-emerald-300 text-sm">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  No critical vulnerabilities detected in basic scan.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar Stats */}
        <div className="space-y-6">
          <div className="bg-[#0B1121] border border-slate-800 rounded-2xl p-6">
            <h3 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest">Token Metadata</h3>
            <div className="space-y-4">
              <StatRow label="Mint Auth" value={report.mintAuthority ? "Enabled ⚠️" : "Disabled ✅"} />
              <StatRow label="Freeze Auth" value={report.freezeAuthority ? "Enabled ⚠️" : "Disabled ✅"} />
              <StatRow label="Decimals" value={report.decimals.toString()} />
              <StatRow label="Supply" value={(report.supply / Math.pow(10, report.decimals)).toLocaleString()} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function StatRow({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex justify-between items-center border-b border-slate-800 pb-2 last:border-0">
      <span className="text-slate-400 text-sm">{label}</span>
      <span className="text-white font-mono text-sm">{value}</span>
    </div>
  );
}
