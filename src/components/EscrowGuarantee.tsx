import React from 'react';
import { ShieldCheck, FileCheck, Lock, RefreshCw } from 'lucide-react';

interface EscrowGuaranteeProps {
  onOpenEnrollment: () => void;
}

export const EscrowGuarantee: React.FC<EscrowGuaranteeProps> = ({ onOpenEnrollment }) => {
  return (
    <section id="audit-terms" className="py-20 px-4 md:px-8 border-b border-[#F2EDE4]/15 bg-[#0B3D2E]">
      <div className="max-w-5xl mx-auto">
        
        {/* Paper Contract Container */}
        <div className="receipt-paper p-8 md:p-12 font-mono text-xs text-[#1A1A1A] space-y-6 relative shadow-2xl border-t-4 border-[#C1440E]">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-[#1A1A1A] pb-6 gap-4">
            <div>
              <div className="text-xs font-bold tracking-widest text-[#C1440E] uppercase">
                FORMAL TUITION ESCROW AGREEMENT • CLAUSE #30-REF
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1A1A1A] tracking-tight mt-1">
                The 30-Day Proof Guarantee
              </h3>
            </div>

            <div className="stamp-verified text-xs self-start md:self-auto">
              *** AUDITED CONTRACT ***
            </div>
          </div>

          <div className="space-y-4 font-sans text-sm leading-relaxed text-[#1A1A1A]/90">
            <p>
              We operate strictly on evidence. We do not keep money earned from unexecuted promises or passive course hoarders.
            </p>

            <div className="p-4 bg-[#1A1A1A]/5 font-mono text-xs border-l-2 border-[#C1440E] space-y-2">
              <div className="font-bold text-[#1A1A1A] uppercase">TERMS OF REFUND DISBURSEMENT:</div>
              <ol className="list-decimal list-inside space-y-1.5 text-[#1A1A1A]/80">
                <li>Complete all 4 required stream milestone deliverables in your cohort dashboard.</li>
                <li>Submit 25 structured client proposals using our audited outreach models.</li>
                <li>If you fail to log a verified client invoice of at least <strong>2x your tuition cost</strong> within 30 days of enrollment, 100% of your tuition is immediately refunded to your source card or crypto wallet.</li>
              </ol>
            </div>

            <p>
              No lengthy customer support calls or defensive questioning. If the ledger does not show 2x proof of earnings, your funds are returned automatically.
            </p>
          </div>

          <div className="pt-6 border-t border-dashed border-[#1A1A1A]/30 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-[#0B3D2E] font-bold">
              <Lock className="w-4 h-4 text-[#C1440E]" />
              <span>OFFICIAL ESCROW AUDITOR ID: #LDR-AUDIT-2026</span>
            </div>

            <button
              onClick={onOpenEnrollment}
              className="bg-[#C1440E] hover:bg-[#a83a0b] text-[#F2EDE4] font-mono text-xs font-bold px-6 py-3 rounded-[2px] transition-colors cursor-pointer"
            >
              Get your receipt
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
