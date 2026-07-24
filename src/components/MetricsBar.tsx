import React from 'react';
import { ShieldCheck, BarChart3, Clock, DollarSign } from 'lucide-react';

export const MetricsBar: React.FC = () => {
  return (
    <div className="bg-[#082D22] border-b border-[#F2EDE4]/15 py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-sm">
        
        <div className="flex flex-col gap-1 border-r border-[#F2EDE4]/10 pr-4 last:border-r-0">
          <div className="text-[#F2EDE4]/60 text-xs flex items-center gap-1.5 uppercase tracking-wider">
            <DollarSign className="w-3.5 h-3.5 text-[#7ECB9E]" />
            TOTAL STUDENT PAYOUTS
          </div>
          <div className="text-2xl font-bold text-[#7ECB9E] font-mono tracking-tight">
            $14,289,450.00
          </div>
          <div className="text-[11px] text-[#F2EDE4]/50">
            Audited via Stripe & Wise APIs
          </div>
        </div>

        <div className="flex flex-col gap-1 border-r border-[#F2EDE4]/10 pr-4 last:border-r-0">
          <div className="text-[#F2EDE4]/60 text-xs flex items-center gap-1.5 uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-[#B8935F]" />
            MEDIAN PAYBACK TIME
          </div>
          <div className="text-2xl font-bold text-[#B8935F] font-mono tracking-tight">
            18 Days
          </div>
          <div className="text-[11px] text-[#F2EDE4]/50">
            From enrollment to 1st invoice
          </div>
        </div>

        <div className="flex flex-col gap-1 border-r border-[#F2EDE4]/10 pr-4 last:border-r-0">
          <div className="text-[#F2EDE4]/60 text-xs flex items-center gap-1.5 uppercase tracking-wider">
            <BarChart3 className="w-3.5 h-3.5 text-[#F2EDE4]" />
            COMPLETION RATE
          </div>
          <div className="text-2xl font-bold text-[#F2EDE4] font-mono tracking-tight">
            88.4%
          </div>
          <div className="text-[11px] text-[#F2EDE4]/50">
            Cohort milestone pass rate
          </div>
        </div>

        <div className="flex flex-col gap-1 pr-4">
          <div className="text-[#F2EDE4]/60 text-xs flex items-center gap-1.5 uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C1440E]" />
            VERIFIED INVOICES
          </div>
          <div className="text-2xl font-bold text-[#F2EDE4] font-mono tracking-tight">
            3,142 Logged
          </div>
          <div className="text-[11px] text-[#F2EDE4]/50">
            Cryptographically hash verified
          </div>
        </div>

      </div>
    </div>
  );
};
