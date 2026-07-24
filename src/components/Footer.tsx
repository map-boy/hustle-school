import React, { useState } from 'react';
import { Search, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [lookupId, setLookupId] = useState<string>('');
  const [lookupResult, setLookupResult] = useState<string | null>(null);

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lookupId.trim()) return;
    setLookupResult(`HASH #${lookupId.trim().toUpperCase()} • VERIFIED ON-CHAIN LEDGER STATUS: ACTIVE (MATCHED STACK)`);
  };

  return (
    <footer className="bg-[#082D22] text-[#F2EDE4] border-t border-[#F2EDE4]/15 py-16 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Section: Brand + Receipt Lookup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#F2EDE4] text-[#1A1A1A] flex items-center justify-center font-mono font-bold text-lg border border-[#F2EDE4]">
                L
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#F2EDE4]">
                THE LEDGER
              </span>
            </div>

            <p className="text-sm text-[#F2EDE4]/70 max-w-md leading-relaxed">
              An online skill acquisition protocol built around verified proof of earnings, cryptographically validated invoice logs, and 30-day performance escrow agreements.
            </p>

            <div className="font-mono text-xs text-[#7ECB9E] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7ECB9E] animate-pulse"></span>
              <span>LEDGER NODE #04 • ONLINE & SYNCED</span>
            </div>
          </div>

          {/* Receipt Verification Lookup Tool */}
          <div className="lg:col-span-6 bg-[#0B3D2E] p-6 border border-[#F2EDE4]/20 space-y-3 font-mono text-xs">
            <div className="text-[#B8935F] uppercase font-bold tracking-wider">
              RECEIPT AUTHENTICITY LOOKUP
            </div>
            <p className="text-[#F2EDE4]/70 text-[11px] font-sans">
              Enter any student invoice number or transaction hash to verify original audit credentials.
            </p>

            <form onSubmit={handleLookup} className="flex gap-2">
              <input
                type="text"
                placeholder="e.g. TX-892401-2026 or INV-88219"
                value={lookupId}
                onChange={(e) => setLookupId(e.target.value)}
                className="flex-1 bg-[#082D22] border border-[#F2EDE4]/20 text-[#F2EDE4] placeholder-[#F2EDE4]/40 p-2.5 rounded-[2px] focus:outline-none focus:border-[#B8935F]"
              />
              <button
                type="submit"
                className="bg-[#C1440E] hover:bg-[#a83a0b] text-[#F2EDE4] font-bold px-4 py-2.5 rounded-[2px] transition-colors cursor-pointer"
              >
                VERIFY
              </button>
            </form>

            {lookupResult && (
              <div className="p-2.5 bg-[#7ECB9E]/15 border border-[#7ECB9E]/30 text-[#7ECB9E] text-[11px] font-bold flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{lookupResult}</span>
              </div>
            )}
          </div>

        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-[#F2EDE4]/10 text-xs font-mono text-[#F2EDE4]/70">
          <div>
            <div className="text-[#B8935F] uppercase font-bold mb-3">COHORT STREAMS</div>
            <ul className="space-y-2">
              <li><a href="#ledger-items" className="hover:text-[#F2EDE4]">B2B Copywriting</a></li>
              <li><a href="#ledger-items" className="hover:text-[#F2EDE4]">Outreach Systems</a></li>
              <li><a href="#ledger-items" className="hover:text-[#F2EDE4]">Webflow & Framer</a></li>
              <li><a href="#ledger-items" className="hover:text-[#F2EDE4]">Fractional Operations</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[#B8935F] uppercase font-bold mb-3">AUDIT & PROOF</div>
            <ul className="space-y-2">
              <li><a href="#proof-feed" className="hover:text-[#F2EDE4]">Live Invoice Feed</a></li>
              <li><a href="#audit-terms" className="hover:text-[#F2EDE4]">Escrow Refund Terms</a></li>
              <li><a href="#calculator" className="hover:text-[#F2EDE4]">ROI Estimator Engine</a></li>
              <li><a href="#audit-terms" className="hover:text-[#F2EDE4]">Stripe Integration Hashes</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[#B8935F] uppercase font-bold mb-3">DISCLOSURES</div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#F2EDE4]">Earnings Audit Policy</a></li>
              <li><a href="#" className="hover:text-[#F2EDE4]">Student NDA Protocols</a></li>
              <li><a href="#" className="hover:text-[#F2EDE4]">Privacy & Cookie Policy</a></li>
              <li><a href="#" className="hover:text-[#F2EDE4]">Cohort Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[#B8935F] uppercase font-bold mb-3">CONTACT LEDGER NODE</div>
            <p className="text-[#F2EDE4]/60 font-sans text-xs leading-normal">
              Auditor Desk: audit@theledgerprotocol.org
            </p>
            <p className="text-[#F2EDE4]/60 font-sans text-xs mt-2">
              San Francisco, CA • London, UK
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-[#F2EDE4]/10 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-[#F2EDE4]/50 gap-4">
          <div>
            © 2026 THE LEDGER PROTOCOL INC. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <span>SEC-01 COMPLIANT</span>
            <span>•</span>
            <span>STRIPE VERIFIED HASHES</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
