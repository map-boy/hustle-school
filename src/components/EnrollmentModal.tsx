import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { COURSES_DATA } from '../data/courses';
import { Course } from '../types';
import { FileText, CheckCircle2, ShieldCheck, ArrowRight, X } from 'lucide-react';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourseId?: string;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  defaultCourseId = 'b2b-copywriting',
}) => {
  const [selectedCourseId, setSelectedCourseId] = useState<string>(defaultCourseId);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'crypto' | 'wise'>('card');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [generatedReceiptId, setGeneratedReceiptId] = useState<string>('');

  useEffect(() => {
    if (defaultCourseId) {
      setSelectedCourseId(defaultCourseId);
    }
  }, [defaultCourseId]);

  if (!isOpen) return null;

  const selectedCourse: Course =
    COURSES_DATA.find((c) => c.id === selectedCourseId) || COURSES_DATA[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    const randomTx = 'TX-' + Math.floor(100000 + Math.random() * 900000) + '-2026';
    setGeneratedReceiptId(randomTx);
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="receipt-paper max-w-xl w-full p-6 md:p-8 font-mono text-xs relative my-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Serrated Top */}
        <div className="receipt-top-edge absolute -top-2 left-0"></div>

        {/* Modal Header */}
        <div className="flex justify-between items-center border-b-2 border-[#1A1A1A] pb-4 mb-6">
          <div>
            <div className="font-bold text-base uppercase text-[#1A1A1A] tracking-wider">
              {t('modal.officialReceipt')}
            </div>
            <div className="text-[10px] text-[#1A1A1A]/60">
              {t('modal.entryForm')} • {t('modal.augustDate')}
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 bg-[#1A1A1A] text-[#F2EDE4] hover:bg-[#C1440E] transition-colors rounded-[2px] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="space-y-5 text-[#1A1A1A]">
            
            {/* Course Selector */}
            <div>
              <label className="block text-[11px] font-bold text-[#1A1A1A] uppercase mb-2">
                {t('modal.step1')}
              </label>
              <select
                value={selectedCourseId}
                onChange={(e) => setSelectedCourseId(e.target.value)}
                className="w-full bg-[#1A1A1A]/5 border border-[#1A1A1A]/30 text-[#1A1A1A] font-mono text-xs p-3 rounded-[2px] focus:outline-none focus:border-[#C1440E]"
              >
                {COURSES_DATA.map((c) => (
                  <option key={c.id} value={c.id}>
                    [{c.code}] {c.item} - ${c.investment} USD
                  </option>
                ))}
              </select>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-[#1A1A1A] uppercase mb-1.5">
                  {t('modal.fullName')}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t('modal.fullNamePlaceholder')}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-[#1A1A1A]/5 border border-[#1A1A1A]/30 text-[#1A1A1A] font-mono text-xs p-2.5 rounded-[2px] focus:outline-none focus:border-[#C1440E]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#1A1A1A] uppercase mb-1.5">
                  {t('modal.emailAddress')}
                </label>
                <input
                  type="email"
                  required
                  placeholder={t('modal.emailPlaceholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#1A1A1A]/5 border border-[#1A1A1A]/30 text-[#1A1A1A] font-mono text-xs p-2.5 rounded-[2px] focus:outline-none focus:border-[#C1440E]"
                />
              </div>
            </div>

            {/* Itemized Line Item Invoice */}
            <div className="p-4 bg-[#1A1A1A]/5 border border-dashed border-[#1A1A1A]/30 space-y-2 text-xs">
              <div className="font-bold border-b border-[#1A1A1A]/20 pb-1.5 flex justify-between">
                <span>{t('modal.itemDescription')}</span>
                <span>{t('modal.amount')}</span>
              </div>

              <div className="flex justify-between text-[#1A1A1A]/90">
                <span>{selectedCourse.item}</span>
                <span className="font-bold">${selectedCourse.investment.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-[11px] text-[#1A1A1A]/70">
                <span>{t('modal.escrowTerms')}</span>
                <span className="text-[#0B3D2E] font-bold">{t('modal.included')}</span>
              </div>

              <div className="flex justify-between text-[11px] text-[#1A1A1A]/70">
                <span>{t('modal.seatReservation')}</span>
                <span className="text-[#C1440E] font-bold">{t('modal.seat')}{26 - selectedCourse.cohortRemaining}</span>
              </div>

              <div className="pt-2 border-t border-[#1A1A1A]/20 flex justify-between font-bold text-sm text-[#0B3D2E]">
                <span>{t('modal.totalDue')}</span>
                <span>${selectedCourse.investment.toFixed(2)} USD</span>
              </div>
            </div>

            {/* Payment Options */}
            <div>
              <label className="block text-[11px] font-bold text-[#1A1A1A] uppercase mb-2">
                {t('modal.paymentMethod')}
              </label>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                {[
                  { id: 'card', label: t('modal.payCard') },
                  { id: 'wise', label: t('modal.payWise') },
                  { id: 'crypto', label: t('modal.payCrypto') },
                ].map((m) => (
                  <button
                    type="button"
                    key={m.id}
                    onClick={() => setPaymentMethod(m.id as any)}
                    className={`py-2 px-1 border transition-colors cursor-pointer ${
                      paymentMethod === m.id
                        ? 'border-[#C1440E] bg-[#C1440E] text-[#F2EDE4] font-bold'
                        : 'border-[#1A1A1A]/30 text-[#1A1A1A]/80 hover:bg-[#1A1A1A]/10'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#C1440E] hover:bg-[#a83a0b] text-[#F2EDE4] font-mono text-sm font-bold py-3.5 px-4 rounded-[2px] transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider shadow-sm"
              >
                <FileText className="w-4 h-4" />
                <span>{t('modal.issueReceipt')}${selectedCourse.investment})</span>
              </button>

              <div className="text-[10px] text-[#1A1A1A]/60 text-center mt-2.5 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0B3D2E]" />
                <span>{t('modal.protectedBy')}</span>
              </div>
            </div>

          </form>
        ) : (
          /* Confirmation State */
          <div className="space-y-4 text-center py-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3D2E] text-[#7ECB9E] mb-2">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
              {t('modal.receiptIssued')}
            </h3>

            <div className="p-4 bg-[#1A1A1A]/5 font-mono text-xs border border-dashed border-[#1A1A1A]/30 text-left space-y-2">
              <div className="flex justify-between border-b border-[#1A1A1A]/20 pb-1">
                <span className="text-[#1A1A1A]/60">{t('modal.receiptNumber')}</span>
                <span className="font-bold text-[#C1440E]">{generatedReceiptId}</span>
              </div>

              <div className="flex justify-between border-b border-[#1A1A1A]/20 pb-1">
                <span className="text-[#1A1A1A]/60">{t('modal.student')}</span>
                <span className="font-bold">{fullName}</span>
              </div>

              <div className="flex justify-between border-b border-[#1A1A1A]/20 pb-1">
                <span className="text-[#1A1A1A]/60">{t('modal.cohort')}</span>
                <span>{selectedCourse.item}</span>
              </div>

              <div className="flex justify-between border-b border-[#1A1A1A]/20 pb-1">
                <span className="text-[#1A1A1A]/60">{t('modal.startDate')}</span>
                <span>AUGUST 1, 2026</span>
              </div>

              <div className="flex justify-between font-bold text-sm text-[#0B3D2E] pt-1">
                <span>{t('modal.status')}</span>
                <span>{t('modal.confirmedAudited')}</span>
              </div>
            </div>

            <p className="text-xs text-[#1A1A1A]/80 font-sans">
              {t('modal.onboardingSent')} <strong>{email}</strong>.
            </p>

            <button
              onClick={onClose}
              className="bg-[#1A1A1A] hover:bg-[#333] text-[#F2EDE4] font-mono text-xs font-bold py-3 px-6 rounded-[2px] transition-colors cursor-pointer uppercase tracking-wider"
            >
              {t('modal.returnToLedger')}
            </button>
          </div>
        )}

        {/* Serrated Bottom */}
        <div className="receipt-bottom-edge absolute -bottom-2 left-0"></div>
      </div>
    </div>
  );
};

