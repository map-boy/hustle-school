import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, FileText, ArrowRight, Activity } from 'lucide-react';

interface HeaderProps {
  onOpenEnrollment: (courseId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnrollment }) => {
  const { t } = useTranslation();
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toISOString().substring(11, 19) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[#0B3D2E]/95 backdrop-blur-md border-b border-[#F2EDE4]/15 py-3.5 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-[#F2EDE4] text-[#1A1A1A] flex items-center justify-center font-mono font-bold text-lg border border-[#F2EDE4]">
            L
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-tight font-bold text-[#F2EDE4] flex items-center gap-2">
              {t('header.brandName')}
              <span className="text-[10px] font-mono tracking-widest px-1.5 py-0.5 border border-[#B8935F] text-[#B8935F] uppercase font-normal">
                {t('header.audited')}
              </span>
            </span>
            <span className="text-[11px] font-mono text-[#F2EDE4]/60 tracking-wider">
              {t('header.tagline')}
            </span>
          </div>
        </a>

        {/* Live Ticker - Desktop */}
        <div className="hidden lg:flex items-center gap-6 px-4 py-1.5 border border-[#F2EDE4]/10 bg-[#082D22] text-xs font-mono">
          <div className="flex items-center gap-2 text-[#7ECB9E]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7ECB9E] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7ECB9E]"></span>
            </span>
            <span>{t('header.nodeSynced')}</span>
          </div>
          <span className="text-[#F2EDE4]/30">|</span>
          <div className="text-[#F2EDE4]/80">
            {t('header.totalPayouts')} <span className="text-[#B8935F] font-semibold">$14,289,450.00</span>
          </div>
          <span className="text-[#F2EDE4]/30">|</span>
          <div className="text-[#F2EDE4]/70">
            {t('header.time')} <span className="text-[#F2EDE4]">{time || '12:00:00 UTC'}</span>
          </div>
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6 text-sm font-sans text-[#F2EDE4]/80">
            <a href="#ledger-items" className="hover:text-[#F2EDE4] transition-colors">{t('header.navCourses')}</a>
            <a href="#proof-feed" className="hover:text-[#F2EDE4] transition-colors">{t('header.navReceiptFeed')}</a>
            <a href="#calculator" className="hover:text-[#F2EDE4] transition-colors">{t('header.navCalculator')}</a>
            <a href="#audit-terms" className="hover:text-[#F2EDE4] transition-colors">{t('header.navGuarantee')}</a>
          </nav>

          <button
            onClick={() => onOpenEnrollment()}
            className="bg-[#C1440E] hover:bg-[#a83a0b] text-[#F2EDE4] font-mono text-xs md:text-sm font-semibold px-4 py-2 rounded-[2px] transition-all flex items-center gap-2 active:translate-y-0.5 cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>{t('header.getReceipt')}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

