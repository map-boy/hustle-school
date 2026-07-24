import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { ShieldCheck, FileCheck, Lock, RefreshCw } from 'lucide-react';

interface EscrowGuaranteeProps {
  onOpenEnrollment: () => void;
}

export const EscrowGuarantee: React.FC<EscrowGuaranteeProps> = ({ onOpenEnrollment }) => {
  const { t } = useTranslation();
  return (
    <section id="audit-terms" className="py-20 px-4 md:px-8 border-b border-[#F2EDE4]/15 bg-[#0B3D2E]">
      <div className="max-w-5xl mx-auto">
        
        {/* Paper Contract Container */}
        <div className="receipt-paper p-8 md:p-12 font-mono text-xs text-[#1A1A1A] space-y-6 relative shadow-2xl border-t-4 border-[#C1440E]">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-[#1A1A1A] pb-6 gap-4">
            <div>
              <div className="text-xs font-bold tracking-widest text-[#C1440E] uppercase">
                {t('escrow.clauseLabel')} • {t('escrow.clauseRef')}
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1A1A1A] tracking-tight mt-1">
                {t('escrow.title')}
              </h3>
            </div>

            <div className="stamp-verified text-xs self-start md:self-auto">
              {t('escrow.auditedContract')}
            </div>
          </div>

          <div className="space-y-4 font-sans text-sm leading-relaxed text-[#1A1A1A]/90">
            <p>
              {t('escrow.intro')}
            </p>

            <div className="p-4 bg-[#1A1A1A]/5 font-mono text-xs border-l-2 border-[#C1440E] space-y-2">
              <div className="font-bold text-[#1A1A1A] uppercase">{t('escrow.termsTitle')}</div>
              <ol className="list-decimal list-inside space-y-1.5 text-[#1A1A1A]/80">
                <li>{t('escrow.term1')}</li>
                <li>{t('escrow.term2')}</li>
                <li><Trans i18nKey="escrow.term3" components={{ strong: <strong /> }} /></li>
              </ol>
            </div>

            <p>
              {t('escrow.outro')}
            </p>
          </div>

          <div className="pt-6 border-t border-dashed border-[#1A1A1A]/30 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-[#0B3D2E] font-bold">
              <Lock className="w-4 h-4 text-[#C1440E]" />
              <span>{t('escrow.auditorId')}</span>
            </div>

            <button
              onClick={onOpenEnrollment}
              className="bg-[#C1440E] hover:bg-[#a83a0b] text-[#F2EDE4] font-mono text-xs font-bold px-6 py-3 rounded-[2px] transition-colors cursor-pointer"
            >{t('escrow.getReceipt')}</button>
          </div>

        </div>

      </div>
    </section>
  );
};

