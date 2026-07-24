import React, { useState } from 'react';
import { RECEIPTS_DATA } from '../data/receipts';
import { StudentReceipt } from '../types';
import { Search, ShieldCheck, CheckCircle, ExternalLink, Filter } from 'lucide-react';

export const LiveTransactionFeed: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inspectReceipt, setInspectReceipt] = useState<StudentReceipt | null>(null);

  const categories = ['ALL', 'Copywriting', 'Cold Email Architecture', 'Webflow', 'Operations'];

  const filteredReceipts = RECEIPTS_DATA.filter((receipt) => {
    const matchesCategory =
      selectedCategory === 'ALL' ||
      receipt.skill.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch =
      receipt.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      receipt.skill.toLowerCase().includes(searchQuery.toLowerCase()) ||
      receipt.proofRef.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="proof-feed" className="py-20 px-4 md:px-8 border-b border-[#F2EDE4]/15 bg-[#0B3D2E]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-mono text-[#7ECB9E] uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7ECB9E] animate-ping"></span>
              LIVE LEDGER AUDIT FEED
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#F2EDE4] tracking-tight">
              Verified Student Transaction Log
            </h2>
            <p className="font-sans text-[#F2EDE4]/70 mt-2 max-w-xl text-sm md:text-base">
              Every payout logged below is backed by Stripe invoice hashes, bank wire confirmations, or escrow release receipts.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#F2EDE4]/50" />
            <input
              type="text"
              placeholder="Search student, skill, or hash..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#082D22] border border-[#F2EDE4]/20 text-[#F2EDE4] placeholder-[#F2EDE4]/40 font-mono text-xs pl-9 pr-4 py-2.5 rounded-[2px] focus:outline-none focus:border-[#B8935F]"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-mono border-b border-[#F2EDE4]/15">
          <span className="text-[#F2EDE4]/50 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> FILTER:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-[2px] uppercase transition-colors cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#F2EDE4] text-[#1A1A1A] font-bold'
                  : 'bg-[#082D22] text-[#F2EDE4]/70 hover:text-[#F2EDE4] border border-[#F2EDE4]/15'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Receipts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReceipts.map((receipt) => (
            <div
              key={receipt.id}
              onClick={() => setInspectReceipt(receipt)}
              className="receipt-paper p-5 font-mono text-xs cursor-pointer hover:scale-[1.01] transition-transform duration-200 group"
            >
              {/* Receipt Header */}
              <div className="flex items-center justify-between border-b border-dashed border-[#1A1A1A]/30 pb-3">
                <div className="text-[10px] text-[#1A1A1A]/60 font-bold uppercase">
                  #{receipt.receiptId}
                </div>
                <div className="stamp-verified text-[9px] py-0.5 px-2">
                  VERIFIED
                </div>
              </div>

              {/* Receipt Body */}
              <div className="py-3 space-y-2 text-[#1A1A1A]">
                <div className="flex justify-between items-baseline">
                  <span className="text-[#1A1A1A]/60 uppercase">ENROLLED:</span>
                  <span className="font-bold">{receipt.studentName}</span>
                </div>

                <div className="flex justify-between items-baseline">
                  <span className="text-[#1A1A1A]/60 uppercase">SKILL:</span>
                  <span className="font-semibold text-right truncate max-w-[150px]">{receipt.skill}</span>
                </div>

                <div className="flex justify-between items-baseline bg-[#1A1A1A]/5 p-1.5 my-1">
                  <span className="text-[#1A1A1A]/80 font-bold uppercase">FIRST PAYMENT:</span>
                  <span className="font-bold text-sm text-[#0B3D2E]">
                    ${receipt.firstPaymentAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </span>
                </div>

                <div className="flex justify-between items-baseline text-[11px]">
                  <span className="text-[#1A1A1A]/60 uppercase">DAY REACHED:</span>
                  <span className="font-bold">Day {receipt.dayNumber}</span>
                </div>

                <div className="flex justify-between items-baseline text-[11px]">
                  <span className="text-[#1A1A1A]/60 uppercase">METHOD:</span>
                  <span>{receipt.proofType}</span>
                </div>
              </div>

              {/* Footer Hash */}
              <div className="pt-2 border-t border-dashed border-[#1A1A1A]/30 flex items-center justify-between text-[10px] text-[#1A1A1A]/70">
                <span className="truncate max-w-[180px] font-mono">{receipt.proofRef}</span>
                <span className="text-[#C1440E] font-bold group-hover:underline flex items-center gap-1">
                  INSPECT <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Inspecting Receipt */}
        {inspectReceipt && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="receipt-paper max-w-md w-full p-6 font-mono text-xs relative animate-in fade-in zoom-in-95 duration-200">
              
              <div className="flex justify-between items-center border-b border-[#1A1A1A]/30 pb-3 mb-4">
                <div className="font-bold text-sm uppercase">RECEIPT AUDIT RECORD</div>
                <button
                  onClick={() => setInspectReceipt(null)}
                  className="px-2 py-1 bg-[#1A1A1A] text-[#F2EDE4] text-xs font-bold rounded-[2px] cursor-pointer"
                >
                  CLOSE [X]
                </button>
              </div>

              <div className="space-y-3 text-[#1A1A1A] text-xs">
                <div className="flex justify-between py-1 border-b border-dotted border-[#1A1A1A]/20">
                  <span className="text-[#1A1A1A]/60">TRANSACTION ID:</span>
                  <span className="font-bold">{inspectReceipt.receiptId}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-dotted border-[#1A1A1A]/20">
                  <span className="text-[#1A1A1A]/60">STUDENT:</span>
                  <span className="font-bold">{inspectReceipt.studentName}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-dotted border-[#1A1A1A]/20">
                  <span className="text-[#1A1A1A]/60">COHORT SKILL:</span>
                  <span className="font-bold">{inspectReceipt.skill}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-dotted border-[#1A1A1A]/20 bg-[#1A1A1A]/5 p-2">
                  <span className="font-bold">INVOICE VALUE:</span>
                  <span className="font-bold text-base text-[#0B3D2E]">
                    ${inspectReceipt.firstPaymentAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </span>
                </div>

                <div className="flex justify-between py-1 border-b border-dotted border-[#1A1A1A]/20">
                  <span className="text-[#1A1A1A]/60">TIMEFRAME:</span>
                  <span>{inspectReceipt.dayNumber} Days Post-Enrollment</span>
                </div>

                <div className="flex justify-between py-1 border-b border-dotted border-[#1A1A1A]/20">
                  <span className="text-[#1A1A1A]/60">PAYMENT PROVIDER:</span>
                  <span>{inspectReceipt.proofType}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-dotted border-[#1A1A1A]/20">
                  <span className="text-[#1A1A1A]/60">PAYMENT HASH:</span>
                  <span className="font-mono text-[11px] font-bold">{inspectReceipt.proofRef}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-dotted border-[#1A1A1A]/20">
                  <span className="text-[#1A1A1A]/60">CLIENT INDUSTRY:</span>
                  <span>{inspectReceipt.clientSector}</span>
                </div>

                <div className="py-2 text-center my-2">
                  <div className="stamp-verified text-sm">
                    *** VERIFIED LEDGER ENTRY ***
                  </div>
                </div>

                <p className="text-[10px] text-[#1A1A1A]/60 text-center leading-normal pt-2 border-t border-[#1A1A1A]/20">
                  This transaction record has been cryptographically cross-referenced against original banking payloads. Student privacy protected under NDA hash guidelines.
                </p>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
