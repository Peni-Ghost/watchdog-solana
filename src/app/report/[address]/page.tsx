import { analyzeToken } from '@/lib/analyzer';
import { ReportClient } from '@/components/ui/ReportClient';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ address: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { address } = await params;
  return {
    title: `Token Analysis: ${address.slice(0, 8)}... | SolGuard`,
    description: `Security analysis report for Solana token ${address}`,
  };
}

export default async function ReportPage({ params }: PageProps) {
  const { address } = await params;
  
  try {
    const report = await analyzeToken(address);
    return <ReportClient report={report} address={address} />;
  } catch (error) {
    // Fallback error handling in case analyzeToken throws unexpectedly
    const fallbackReport = {
      address,
      supply: 0,
      decimals: 0,
      mintAuthority: true,
      freezeAuthority: true,
      riskScore: 100,
      riskLevel: 'CRITICAL' as const,
      details: ['An unexpected error occurred while analyzing the token.'],
    };
    return <ReportClient report={fallbackReport} address={address} />;
  }
}
