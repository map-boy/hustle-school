import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, BarChart3, Clock, DollarSign } from 'lucide-react';

export const MetricsBar: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#082D22] border-b border-[#F2EDE4]/15 py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-sm">
        
        <div className="flex flex-col gap-1 border-r border-[#F2EDE4]/10 pr-4 last:border-r-0">
          <div className="text-[#F2EDE4]/60 text-xs flex items-center gap-1.5 uppercase tracking-wider">
            <DollarSign className="w-3.5 h-3.5 text-[#7ECB9E]" />
            {t('metrics.totalPayouts')}
          </div>
          <div className="text-2xl font-bold text-[#7ECB9E] font-mono tracking-tight">
            {t('metrics.totalPayoutsValue')}
          </div>
          <div className="text-[11px] text-[#F2EDE4]/50">
            {t('metrics.auditedVia')}
          </div>
        </div>

        <div className="flex flex-col gap-1 border-r border-[#F2EDE4]/10 pr-4 last:border-r-0">
          <div className="text-[#F2EDE4]/60 text-xs flex items-center gap-1.5 uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-[#B8935F]" />
            {t('metrics.medianPayback')}
          </div>
          <div className="text-2xl font-bold text-[#B8935F] font-mono tracking-tight">
            18 Days
          </div>
          <div className="text-[11px] text-[#F2EDE4]/50">
            {t('metrics.fromEnrollment')}
          </div>
        </div>

        <div className="flex flex-col gap-1 border-r border-[#F2EDE4]/10 pr-4 last:border-r-0">
          <div className="text-[#F2EDE4]/60 text-xs flex items-center gap-1.5 uppercase tracking-wider">
            <BarChart3 className="w-3.5 h-3.5 text-[#F2EDE4]" />
            {t('metrics.completionRate')}
          </div>
          <div className="text-2xl font-bold text-[#F2EDE4] font-mono tracking-tight">
            88.4%
          </div>
          <div className="text-[11px] text-[#F2EDE4]/50">
            {t('metrics.cohortPassRate')}
          </div>
        </div>

        <div className="flex flex-col gap-1 pr-4">
          <div className="text-[#F2EDE4]/60 text-xs flex items-center gap-1.5 uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C1440E]" />
            {t('metrics.verifiedInvoices')}
          </div>
          <div className="text-2xl font-bold text-[#F2EDE4] font-mono tracking-tight">
            {t('metrics.verifiedInvoicesValue')}
          </div>
          <div className="text-[11px] text-[#F2EDE4]/50">
            {t('metrics.hashVerified')}
          </div>
        </div>

      </div>
    </div>
  );
};

