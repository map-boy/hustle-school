import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [lookupId, setLookupId] = useState<string>('');
  const [lookupResult, setLookupResult] = useState<string | null>(null);

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lookupId.trim()) return;
    setLookupResult(`${t('footer.lookupResultPrefix')}${lookupId.trim().toUpperCase()} • ${t('footer.lookupResultSuffix')}`);
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
              <span className="font-serif text-2xl font-bold tracking-tight text-[#F2EDE4]">{t('footer.brandName')}</span>
            </div>

            <p className="text-sm text-[#F2EDE4]/70 max-w-md leading-relaxed">
              {t('footer.brandDesc')}
            </p>

            <div className="font-mono text-xs text-[#7ECB9E] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7ECB9E] animate-pulse"></span>
              <span>{t('footer.nodeStatus')}</span>
            </div>
          </div>

          {/* Receipt Verification Lookup Tool */}
          <div className="lg:col-span-6 bg-[#0B3D2E] p-6 border border-[#F2EDE4]/20 space-y-3 font-mono text-xs">
            <div className="text-[#B8935F] uppercase font-bold tracking-wider">
              {t('footer.lookupTitle')}
            </div>
            <p className="text-[#F2EDE4]/70 text-[11px] font-sans">
              {t('footer.lookupDesc')}
            </p>

            <form onSubmit={handleLookup} className="flex gap-2">
              <input
                type="text"
                placeholder={t('footer.lookupPlaceholder')}
                value={lookupId}
                onChange={(e) => setLookupId(e.target.value)}
                className="flex-1 bg-[#082D22] border border-[#F2EDE4]/20 text-[#F2EDE4] placeholder-[#F2EDE4]/40 p-2.5 rounded-[2px] focus:outline-none focus:border-[#B8935F]"
              />
              <button
                type="submit"
                className="bg-[#C1440E] hover:bg-[#a83a0b] text-[#F2EDE4] font-bold px-4 py-2.5 rounded-[2px] transition-colors cursor-pointer"
              >{t('footer.verify')}</button>
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
            <div className="text-[#B8935F] uppercase font-bold mb-3">{t('footer.colStreams')}</div>
            <ul className="space-y-2">
              <li><a href="#ledger-items" className="hover:text-[#F2EDE4]">{t('footer.linkCopywriting')}</a></li>
              <li><a href="#ledger-items" className="hover:text-[#F2EDE4]">{t('footer.linkOutreach')}</a></li>
              <li><a href="#ledger-items" className="hover:text-[#F2EDE4]">{t('footer.linkWebflow')}</a></li>
              <li><a href="#ledger-items" className="hover:text-[#F2EDE4]">{t('footer.linkOperations')}</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[#B8935F] uppercase font-bold mb-3">{t('footer.colAuditProof')}</div>
            <ul className="space-y-2">
              <li><a href="#proof-feed" className="hover:text-[#F2EDE4]">{t('footer.linkLiveFeed')}</a></li>
              <li><a href="#audit-terms" className="hover:text-[#F2EDE4]">{t('footer.linkEscrowTerms')}</a></li>
              <li><a href="#calculator" className="hover:text-[#F2EDE4]">{t('footer.linkRoiEngine')}</a></li>
              <li><a href="#audit-terms" className="hover:text-[#F2EDE4]">{t('footer.linkStripeHashes')}</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[#B8935F] uppercase font-bold mb-3">{t('footer.colDisclosures')}</div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#F2EDE4]">{t('footer.linkEarningsPolicy')}</a></li>
              <li><a href="#" className="hover:text-[#F2EDE4]">{t('footer.linkNda')}</a></li>
              <li><a href="#" className="hover:text-[#F2EDE4]">{t('footer.linkPrivacy')}</a></li>
              <li><a href="#" className="hover:text-[#F2EDE4]">{t('footer.linkTos')}</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[#B8935F] uppercase font-bold mb-3">{t('footer.colContact')}</div>
            <p className="text-[#F2EDE4]/60 font-sans text-xs leading-normal">
              {t('footer.auditorDesk')}
            </p>
            <p className="text-[#F2EDE4]/60 font-sans text-xs mt-2">
              {t('footer.locations')}
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-[#F2EDE4]/10 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-[#F2EDE4]/50 gap-4">
          <div>
            {t('footer.copyright')}
          </div>
          <div className="flex items-center gap-4">
            <span>{t('footer.secCompliant')}</span>
            <span>â€¢</span>
            <span>{t('footer.stripeVerified')}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

