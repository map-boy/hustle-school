import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { COURSES_DATA } from '../data/courses';
import { Calculator, Printer, ArrowRight, Check } from 'lucide-react';

interface ReceiptCalculatorProps {
  onOpenEnrollment: (courseId: string) => void;
}

export const ReceiptCalculator: React.FC<ReceiptCalculatorProps> = ({ onOpenEnrollment }) => {
  const { t } = useTranslation();
  const [selectedCourseId, setSelectedCourseId] = useState<string>('b2b-copywriting');
  const [weeklyHours, setWeeklyHours] = useState<number>(12);
  const [experienceLevel, setExperienceLevel] = useState<'beginner' | 'intermediate' | 'experienced'>('beginner');

  const selectedCourse = COURSES_DATA.find(c => c.id === selectedCourseId) || COURSES_DATA[0];

  // Calculation multipliers
  const hourMultiplier = Math.min(2.0, Math.max(0.6, weeklyHours / 10));
  const expMultiplier = experienceLevel === 'beginner' ? 0.85 : experienceLevel === 'intermediate' ? 1.1 : 1.35;

  const estimatedFirstInvoice = Math.round((selectedCourse.returnAverage * expMultiplier * Math.sqrt(hourMultiplier)) / 100) * 100;
  const estimatedPaybackDays = Math.max(10, Math.round(selectedCourse.paybackDays / Math.sqrt(hourMultiplier * expMultiplier)));
  const calculated30DayRevenue = Math.round(estimatedFirstInvoice * 1.25);

  return (
    <section id="calculator" className="py-20 px-4 md:px-8 border-b border-[#F2EDE4]/15 bg-[#082D22]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="mb-12">
          <div className="text-xs font-mono text-[#B8935F] uppercase tracking-widest mb-2 flex items-center gap-2">
            <Calculator className="w-4 h-4 text-[#B8935F]" />
            {t('calculator.engineLabel')}
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#F2EDE4] tracking-tight">
            {t('calculator.title')}
          </h2>
          <p className="font-sans text-[#F2EDE4]/70 mt-2 max-w-2xl text-sm md:text-base">
            {t('calculator.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-[#0B3D2E] p-6 md:p-8 border border-[#F2EDE4]/20 space-y-6">
            
            {/* Step 1: Select Skill Stream */}
            <div>
              <label className="block font-mono text-xs text-[#B8935F] uppercase font-bold mb-3">
                {t('calculator.step1')}
              </label>
              <div className="space-y-2">
                {COURSES_DATA.map((course) => (
                  <div
                    key={course.id}
                    onClick={() => setSelectedCourseId(course.id)}
                    className={`p-3.5 border cursor-pointer transition-colors flex items-center justify-between font-sans text-sm ${
                      selectedCourseId === course.id
                        ? 'border-[#B8935F] bg-[#082D22] text-[#F2EDE4]'
                        : 'border-[#F2EDE4]/15 bg-[#0B3D2E] text-[#F2EDE4]/70 hover:text-[#F2EDE4] hover:border-[#F2EDE4]/30'
                    }`}
                  >
                    <div className="font-medium">{course.item}</div>
                    <div className="font-mono text-xs text-[#7ECB9E] font-bold">
                      ${course.investment}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Weekly Time Commitment */}
            <div>
              <div className="flex justify-between items-center mb-2 font-mono text-xs">
                <label className="text-[#B8935F] uppercase font-bold">
                  {t('calculator.step2')}
                </label>
                <span className="text-[#F2EDE4] font-bold">{weeklyHours} {t('calculator.hoursPerWeek')}</span>
              </div>
              <input
                type="range"
                min={5}
                max={30}
                step={1}
                value={weeklyHours}
                onChange={(e) => setWeeklyHours(Number(e.target.value))}
                className="w-full accent-[#C1440E] cursor-pointer bg-[#082D22] h-2 rounded-none"
              />
              <div className="flex justify-between text-[11px] font-mono text-[#F2EDE4]/50 mt-1">
                <span>{t('calculator.hrsCasual')}</span>
                <span>{t('calculator.hrsFocused')}</span>
                <span>{t('calculator.hrsAccelerated')}</span>
              </div>
            </div>

            {/* Step 3: Prior Experience */}
            <div>
              <label className="block font-mono text-xs text-[#B8935F] uppercase font-bold mb-2">
                {t('calculator.step3')}
              </label>
              <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                {[
                  { id: 'beginner', label: t('calculator.expZero') },
                  { id: 'intermediate', label: t('calculator.expSome') },
                  { id: 'experienced', label: t('calculator.expAgency') },
                ].map((exp) => (
                  <button
                    key={exp.id}
                    onClick={() => setExperienceLevel(exp.id as any)}
                    className={`py-2 px-2 border text-center transition-colors cursor-pointer ${
                      experienceLevel === exp.id
                        ? 'border-[#F2EDE4] bg-[#F2EDE4] text-[#1A1A1A] font-bold'
                        : 'border-[#F2EDE4]/20 text-[#F2EDE4]/70 hover:text-[#F2EDE4]'
                    }`}
                  >
                    {exp.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Simulated Printed Receipt Column */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            <div className="receipt-paper w-full max-w-md p-6 font-mono text-xs space-y-3 relative shadow-2xl">
              <div className="receipt-top-edge absolute -top-2 left-0"></div>

              <div className="text-center pb-3 border-b border-dashed border-[#1A1A1A]/30">
                <div className="font-bold tracking-widest text-sm uppercase">
                  {t('calculator.receiptTitle')}
                </div>
                <div className="text-[10px] text-[#1A1A1A]/60 uppercase mt-0.5">
                  {t('calculator.receiptSubtitle')}
                </div>
              </div>

              <div className="py-2 space-y-2 text-[#1A1A1A]">
                <div className="flex justify-between py-1 border-b border-dotted border-[#1A1A1A]/20">
                  <span className="text-[#1A1A1A]/60">{t('calculator.targetStream')}</span>
                  <span className="font-bold text-right max-w-[180px] truncate">{selectedCourse.item}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-dotted border-[#1A1A1A]/20">
                  <span className="text-[#1A1A1A]/60">{t('calculator.tuitionCapital')}</span>
                  <span className="font-bold">${selectedCourse.investment.toFixed(2)}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-dotted border-[#1A1A1A]/20">
                  <span className="text-[#1A1A1A]/60">{t('calculator.weeklyInput')}</span>
                  <span>{weeklyHours} {t('calculator.hoursPerWeek')}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-dotted border-[#1A1A1A]/20 bg-[#1A1A1A]/5 p-2">
                  <span className="font-bold">{t('calculator.estFirstInvoice')}</span>
                  <span className="font-bold text-base text-[#0B3D2E]">
                    ${estimatedFirstInvoice.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </span>
                </div>

                <div className="flex justify-between py-1 border-b border-dotted border-[#1A1A1A]/20">
                  <span className="text-[#1A1A1A]/60">{t('calculator.estPaybackWindow')}</span>
                  <span className="font-bold text-[#C1440E]">{estimatedPaybackDays} {t('calculator.days')}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-dotted border-[#1A1A1A]/20">
                  <span className="text-[#1A1A1A]/60">{t('calculator.expected30Day')}</span>
                  <span className="font-bold text-[#0B3D2E]">
                    ${calculated30DayRevenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-dashed border-[#1A1A1A]/30 text-center space-y-3">
                <div className="stamp-verified text-xs">
                  {t('calculator.guaranteedByEscrow')}
                </div>

                <button
                  onClick={() => onOpenEnrollment(selectedCourse.id)}
                  className="w-full bg-[#C1440E] hover:bg-[#a83a0b] text-[#F2EDE4] font-mono text-xs font-bold py-3 px-4 rounded-[2px] transition-colors flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                >
                  <Printer className="w-4 h-4" />
                  <span>{t('calculator.lockInReceipt')}</span>
                </button>
              </div>

              <div className="receipt-bottom-edge absolute -bottom-2 left-0"></div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

