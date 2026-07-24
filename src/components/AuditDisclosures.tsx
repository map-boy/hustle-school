import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AUDIT_DISCLOSURES_DATA } from '../data/receipts';
import { ChevronDown, ChevronUp, FileText, HelpCircle } from 'lucide-react';

export const AuditDisclosures: React.FC = () => {
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState<string | null>('disc-01');

  const toggleAccordion = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section className="py-20 px-4 md:px-8 border-b border-[#F2EDE4]/15 bg-[#082D22]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Title */}
        <div className="mb-10 text-center md:text-left">
          <div className="text-xs font-mono text-[#B8935F] uppercase tracking-widest mb-2 flex items-center justify-center md:justify-start gap-2">
            <HelpCircle className="w-4 h-4 text-[#B8935F]" />
            {t('disclosures.notesLabel')}
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#F2EDE4] tracking-tight">{t('disclosures.title')}</h2>
          <p className="font-sans text-[#F2EDE4]/70 mt-2 max-w-xl text-sm md:text-base">
            {t('disclosures.subtitle')}
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-3 font-sans">
          {AUDIT_DISCLOSURES_DATA.map((disc) => {
            const isOpen = expandedId === disc.id;

            return (
              <div
                key={disc.id}
                className="border border-[#F2EDE4]/20 bg-[#0B3D2E] transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(disc.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#082D22] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#B8935F] px-2 py-0.5 border border-[#B8935F]/30 bg-[#082D22]">
                      {disc.code}
                    </span>
                    <span className="font-serif font-semibold text-base md:text-lg text-[#F2EDE4]">
                      {disc.title}
                    </span>
                  </div>

                  <div className="text-[#F2EDE4]/60">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#F2EDE4]/80 leading-relaxed font-sans border-t border-dashed border-[#F2EDE4]/15 mt-1">
                    {disc.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

