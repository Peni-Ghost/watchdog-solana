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
  const report = await analyzeToken(address);

  return <ReportClient report={report} address={address} />;
}
