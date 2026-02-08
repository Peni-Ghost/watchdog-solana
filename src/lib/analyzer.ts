import { Connection, PublicKey } from '@solana/web3.js';

// Use a reliable RPC (Helius/Alchemy preferred in prod, public for hackathon MVP)
const RPC_ENDPOINT = 'https://api.mainnet-beta.solana.com';
const connection = new Connection(RPC_ENDPOINT, 'confirmed');

export interface TokenReport {
  address: string;
  supply: number;
  decimals: number;
  mintAuthority: boolean;
  freezeAuthority: boolean;
  riskScore: number; // 0 (Safe) - 100 (Critical)
  riskLevel: 'SAFE' | 'WARNING' | 'CRITICAL';
  details: string[];
}

export async function analyzeToken(address: string): Promise<TokenReport> {
  const report: TokenReport = {
    address,
    supply: 0,
    decimals: 0,
    mintAuthority: true,
    freezeAuthority: true,
    riskScore: 0,
    riskLevel: 'SAFE',
    details: []
  };

  try {
    const pubKey = new PublicKey(address);
    const accountInfo = await connection.getParsedAccountInfo(pubKey);

    if (!accountInfo.value) {
      throw new Error('Token not found on-chain');
    }

    const data = (accountInfo.value.data as any).parsed.info;
    
    // 1. Basic Stats
    report.decimals = data.decimals;
    report.supply = Number(data.supply);
    report.mintAuthority = data.mintAuthority !== null;
    report.freezeAuthority = data.freezeAuthority !== null;

    // 2. Risk Scoring Logic
    if (report.mintAuthority) {
      report.riskScore += 30;
      report.details.push("Mint Authority is ENABLED. Dev can print infinite tokens.");
    }
    if (report.freezeAuthority) {
      report.riskScore += 20;
      report.details.push("Freeze Authority is ENABLED. Dev can blacklist wallets.");
    }

    // 3. (Mock) Liquidity & Holder Check 
    // In a real app, we'd fetch largest accounts here. 
    // For MVP/Demo speed, we simulate a check or do a lightweight one.
    
    // Final Grade
    if (report.riskScore >= 50) report.riskLevel = 'CRITICAL';
    else if (report.riskScore >= 20) report.riskLevel = 'WARNING';
    
    return report;

  } catch (error) {
    console.error("Analysis Failed:", error);
    report.riskScore = 100;
    report.riskLevel = 'CRITICAL';
    report.details.push("Failed to fetch token data. Address may be invalid.");
    return report;
  }
}
