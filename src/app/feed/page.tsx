export default function LiveFeedPage() {
  // In a real app, this would use the same Socket.IO connection as the dashboard
  // For the frontend demo, we'll show a placeholder indicating where the stream lives.
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">Live Global Feed</h1>
      <div className="bg-[#0B1121] border border-slate-800 rounded-2xl p-12 text-center">
        <div className="inline-block p-4 bg-blue-900/20 rounded-full mb-4 animate-pulse">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
        </div>
        <h2 className="text-xl text-white font-bold mb-2">Connecting to Solana Mempool...</h2>
        <p className="text-slate-400">
          This module streams new liquidity pools directly from the Solana RPC nodes.
          (See Dashboard for active stream).
        </p>
      </div>
    </div>
  );
}
