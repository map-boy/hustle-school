import React, { useState } from 'react';
import { Course } from '../types';
import { COURSES_DATA } from '../data/courses';
import { ChevronDown, ChevronUp, FileText, Check, ArrowRight, AlertCircle } from 'lucide-react';

interface LedgerTableProps {
  onOpenEnrollment: (courseId: string) => void;
}

export const LedgerTable: React.FC<LedgerTableProps> = ({ onOpenEnrollment }) => {
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>('b2b-copywriting');

  const toggleExpand = (id: string) => {
    setExpandedCourseId(prev => (prev === id ? null : id));
  };

  return (
    <section id="ledger-items" className="py-20 px-4 md:px-8 border-b border-[#F2EDE4]/15 bg-[#0B3D2E]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono text-[#B8935F] uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#B8935F]"></span>
              LEDGER SHEET • COHORT SCHEDULE 2026
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#F2EDE4] tracking-tight">
              Active Skill Streams
            </h2>
            <p className="font-sans text-[#F2EDE4]/70 mt-2 max-w-xl text-sm md:text-base">
              Every course is listed as a ledger line item. No boxed cards or generic feature icons—just investment capital, verified return metrics, and expected payback timelines.
            </p>
          </div>

          <div className="font-mono text-xs text-[#F2EDE4]/60 border border-[#F2EDE4]/15 p-3 bg-[#082D22] flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#7ECB9E] animate-pulse"></span>
            <span>AUGUST COHORT: <strong className="text-[#F2EDE4]">SEATS OPENING</strong></span>
          </div>
        </div>

        {/* Ledger Table Container */}
        <div className="w-full overflow-x-auto border border-[#F2EDE4]/20 bg-[#082D22]/60">
          
          <table className="w-full text-left border-collapse min-w-[700px]">
            {/* Ledger Table Header */}
            <thead>
              <tr className="border-b border-[#F2EDE4]/20 bg-[#082D22] font-mono text-xs text-[#F2EDE4]/60 uppercase tracking-wider">
                <th className="py-4 px-6 font-medium">ITEM (COURSE NAME)</th>
                <th className="py-4 px-6 font-medium text-right">INVESTMENT</th>
                <th className="py-4 px-6 font-medium text-right">RETURN (AVG)</th>
                <th className="py-4 px-6 font-medium text-center">PAYBACK</th>
                <th className="py-4 px-6 font-medium text-right">ACTION</th>
              </tr>
            </thead>

            {/* Ledger Line Items */}
            <tbody className="divide-y divide-[#F2EDE4]/15 font-sans">
              {COURSES_DATA.map((course: Course) => {
                const isExpanded = expandedCourseId === course.id;

                return (
                  <React.Fragment key={course.id}>
                    {/* Main Row */}
                    <tr
                      onClick={() => toggleExpand(course.id)}
                      className={`group cursor-pointer transition-colors ${
                        isExpanded ? 'bg-[#082D22]' : 'hover:bg-[#082D22]/80'
                      }`}
                    >
                      {/* Column 1: ITEM */}
                      <td className="py-5 px-6">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs text-[#B8935F] px-2 py-0.5 border border-[#B8935F]/30 bg-[#0B3D2E]">
                            {course.code}
                          </span>
                          <div>
                            <div className="font-serif font-semibold text-lg text-[#F2EDE4] group-hover:text-[#B8935F] transition-colors">
                              {course.item}
                            </div>
                            <div className="font-mono text-xs text-[#F2EDE4]/50 mt-0.5">
                              {course.category} • {course.verifiedInvoicesCount} Verified Invoices
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Column 2: INVESTMENT */}
                      <td className="py-5 px-6 text-right font-mono font-bold text-base text-[#F2EDE4]">
                        ${course.investment.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </td>

                      {/* Column 3: RETURN (Average Student Earning) */}
                      <td className="py-5 px-6 text-right font-mono font-bold text-base text-[#7ECB9E]">
                        +${course.returnAverage.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </td>

                      {/* Column 4: PAYBACK */}
                      <td className="py-5 px-6 text-center font-mono text-sm text-[#B8935F]">
                        {course.paybackDays} Days
                      </td>

                      {/* Column 5: ACTION */}
                      <td className="py-5 px-6 text-right">
                        <div className="flex items-center justify-end gap-3" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => onOpenEnrollment(course.id)}
                            className="bg-[#C1440E] hover:bg-[#a83a0b] text-[#F2EDE4] font-mono text-xs font-semibold px-4 py-2 rounded-[2px] transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap active:translate-y-0.5"
                          >
                            <span>Get your receipt</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>

                          <button
                            onClick={() => toggleExpand(course.id)}
                            className="p-1.5 border border-[#F2EDE4]/20 hover:border-[#F2EDE4] text-[#F2EDE4]/70 hover:text-[#F2EDE4] transition-colors rounded-[2px] cursor-pointer"
                            title="Expand Ledger Details"
                          >
                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* Expanded Detail Drawer */}
                    {isExpanded && (
                      <tr className="bg-[#082D22] border-b border-[#F2EDE4]/20">
                        <td colSpan={5} className="p-6 md:p-8">
                          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-dashed border-[#F2EDE4]/20 pt-6">
                            
                            {/* Summary & Client Specs */}
                            <div className="md:col-span-6 space-y-4">
                              <div>
                                <h4 className="font-serif font-bold text-lg text-[#F2EDE4]">
                                  Stream Breakdown
                                </h4>
                                <p className="text-sm text-[#F2EDE4]/80 mt-1 leading-relaxed">
                                  {course.summary}
                                </p>
                              </div>

                              <div className="p-4 border border-[#F2EDE4]/15 bg-[#0B3D2E] font-mono text-xs space-y-2">
                                <div className="text-[#B8935F] uppercase font-bold tracking-wider">
                                  TARGET CLIENT PROFILE:
                                </div>
                                <div className="text-[#F2EDE4]/90">
                                  {course.targetClient}
                                </div>
                              </div>

                              <div className="flex items-center gap-4 font-mono text-xs text-[#F2EDE4]/70 pt-2">
                                <div>
                                  SEATS REMAINING: <strong className="text-[#C1440E]">{course.cohortRemaining} SEATS</strong>
                                </div>
                                <span>•</span>
                                <div>
                                  START DATE: <strong className="text-[#F2EDE4]">{course.cohortStartDate}</strong>
                                </div>
                              </div>
                            </div>

                            {/* Core Deliverables / Syllabus */}
                            <div className="md:col-span-6 space-y-4">
                              <h4 className="font-serif font-bold text-lg text-[#F2EDE4]">
                                Core Output Deliverables
                              </h4>

                              <ul className="space-y-2.5 font-sans text-xs md:text-sm">
                                {course.deliverables.map((item, index) => (
                                  <li key={index} className="flex items-start gap-2.5 text-[#F2EDE4]/90">
                                    <span className="w-5 h-5 bg-[#7ECB9E]/15 text-[#7ECB9E] font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-[#7ECB9E]/30">
                                      0{index + 1}
                                    </span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>

                              <div className="pt-4 flex items-center justify-between border-t border-[#F2EDE4]/15">
                                <div className="font-mono text-xs text-[#7ECB9E] flex items-center gap-1.5">
                                  <Check className="w-4 h-4" />
                                  <span>30-Day Escrow Guarantee Eligible</span>
                                </div>

                                <button
                                  onClick={() => onOpenEnrollment(course.id)}
                                  className="bg-[#C1440E] hover:bg-[#a83a0b] text-[#F2EDE4] font-mono text-xs font-bold px-5 py-2.5 rounded-[2px] transition-all flex items-center gap-2 cursor-pointer"
                                >
                                  <FileText className="w-3.5 h-3.5" />
                                  <span>Claim Seat #{26 - course.cohortRemaining}</span>
                                </button>
                              </div>
                            </div>

                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>

        </div>

        {/* Footnote */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#F2EDE4]/50 gap-2">
          <div>
            * Return figures represent 90-day post-enrollment mean verified revenue from active students.
          </div>
          <div className="text-[#B8935F]">
            ALL FIGURES AUDITED QUARTERLY
          </div>
        </div>

      </div>
    </section>
  );
};
