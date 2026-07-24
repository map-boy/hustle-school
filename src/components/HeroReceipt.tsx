import React, { useState, useEffect } from 'react';
import { RECEIPTS_DATA } from '../data/receipts';
import { StudentReceipt } from '../types';
import { ArrowRight, ShieldCheck, RefreshCw, CheckCircle2 } from 'lucide-react';

interface HeroReceiptProps {
  onOpenEnrollment: (courseId?: string) => void;
  onExploreCourses: () => void;
}

export const HeroReceipt: React.FC<HeroReceiptProps> = ({ onOpenEnrollment, onExploreCourses }) => {
  const [selectedReceiptIndex, setSelectedReceiptIndex] = useState<number>(0);
  const [printedLinesCount, setPrintedLinesCount] = useState<number>(0);
  const [isPrinting, setIsPrinting] = useState<boolean>(false);

  const currentReceipt: StudentReceipt = RECEIPTS_DATA[selectedReceiptIndex];

  // Total lines to print sequentially
  const totalLines = 14;

  useEffect(() => {
    // Print lines sequentially on initial render or receipt switch
    setIsPrinting(true);
    setPrintedLinesCount(0);
    
    let line = 0;
    const interval = setInterval(() => {
      line++;
      setPrintedLinesCount(line);
      if (line >= totalLines) {
        clearInterval(interval);
        setIsPrinting(false);
      }
    }, 90);

    return () => clearInterval(interval);
  }, [selectedReceiptIndex]);

  const handleNextReceipt = () => {
    setSelectedReceiptIndex((prev) => (prev + 1) % RECEIPTS_DATA.length);
  };

  return (
    <section className="relative pt-12 pb-20 px-4 md:px-8 border-b border-[#F2EDE4]/15 bg-[#0B3D2E]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Direct, unglamorous copy */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#B8935F]/40 bg-[#082D22] text-[#B8935F] font-mono text-xs tracking-wider uppercase">
            <span className="w-1.5 h-1.5 bg-[#C1440E]"></span>
            PROOF-OF-EARNINGS PROTOCOL
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-[#F2EDE4] tracking-tight">
            Skills that print their own receipts.
          </h1>

          <p className="font-sans text-lg md:text-xl text-[#F2EDE4]/80 max-w-2xl leading-relaxed">
            No hype. No motivational speeches. Just four tactical digital skillsets grounded in verified client transactions, cryptographically logged invoices, and 30-day proof guarantees.
          </p>

          {/* Quick proof badge summary */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 font-mono text-xs border-y border-[#F2EDE4]/15 py-4 my-2">
            <div>
              <div className="text-[#F2EDE4]/50 uppercase tracking-wider text-[10px]">Verified Payouts</div>
              <div className="text-[#B8935F] font-bold text-base mt-0.5">$14.28M Total</div>
            </div>
            <div>
              <div className="text-[#F2EDE4]/50 uppercase tracking-wider text-[10px]">Median First Invoice</div>
              <div className="text-[#7ECB9E] font-bold text-base mt-0.5">Day 18</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-[#F2EDE4]/50 uppercase tracking-wider text-[10px]">Audit Policy</div>
              <div className="text-[#F2EDE4] font-bold text-base mt-0.5">100% Escrowed</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onOpenEnrollment()}
              className="bg-[#C1440E] hover:bg-[#a83a0b] text-[#F2EDE4] font-mono text-sm font-bold px-6 py-3.5 rounded-[2px] transition-all flex items-center gap-2.5 cursor-pointer shadow-sm active:translate-y-0.5"
            >
              <span>Get your receipt</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreCourses}
              className="border border-[#F2EDE4]/30 hover:border-[#F2EDE4] text-[#F2EDE4] font-mono text-sm px-6 py-3.5 rounded-[2px] transition-colors cursor-pointer"
            >
              Inspect 5 Active Streams
            </button>
          </div>

          {/* Secondary reassurance */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#F2EDE4]/60 pt-1">
            <ShieldCheck className="w-4 h-4 text-[#7ECB9E]" />
            <span>Backed by Stripe invoice hashes & 30-day performance refund terms</span>
          </div>

        </div>

        {/* Right Column: Thermal Printer Receipt Mockup */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          
          {/* Subtle receipt background glow/shadow container */}
          <div className="w-full max-w-sm relative">
            
            {/* The Thermal Printer Receipt */}
            <div className="receipt-paper rounded-none p-6 font-mono text-xs leading-relaxed transform -rotate-2 transition-transform duration-300 hover:rotate-0 select-none">
              
              {/* Serrated top edge */}
              <div className="receipt-top-edge absolute -top-2 left-0"></div>

              {/* Receipt Header */}
              <div className="text-center pb-3 border-b border-dashed border-[#1A1A1A]/30">
                <div className="font-bold tracking-widest text-sm uppercase text-[#1A1A1A]">
                  THE LEDGER VERIFIED
                </div>
                <div className="text-[10px] text-[#1A1A1A]/70 uppercase tracking-wider mt-0.5">
                  PRODUCER RECEIPT • #{currentReceipt.receiptId}
                </div>
                <div className="text-[10px] text-[#1A1A1A]/60">
                  {currentReceipt.timestamp}
                </div>
              </div>

              {/* Receipt Details lines */}
              <div className="py-4 space-y-2.5 text-[#1A1A1A]">
                
                {printedLinesCount >= 1 && (
                  <div className="flex justify-between items-baseline border-b border-dotted border-[#1A1A1A]/20 pb-1">
                    <span className="text-[#1A1A1A]/70 uppercase">ENROLLED:</span>
                    <span className="font-bold text-[#1A1A1A]">{currentReceipt.studentName}</span>
                  </div>
                )}

                {printedLinesCount >= 2 && (
                  <div className="flex justify-between items-baseline border-b border-dotted border-[#1A1A1A]/20 pb-1">
                    <span className="text-[#1A1A1A]/70 uppercase">SKILL:</span>
                    <span className="font-semibold text-[#1A1A1A] text-right max-w-[170px] truncate">
                      {currentReceipt.skill}
                    </span>
                  </div>
                )}

                {printedLinesCount >= 3 && (
                  <div className="flex justify-between items-baseline border-b border-dotted border-[#1A1A1A]/20 pb-1 bg-[#1A1A1A]/5 p-1">
                    <span className="text-[#1A1A1A]/80 uppercase font-bold">FIRST PAYMENT:</span>
                    <span className="font-bold text-sm text-[#0B3D2E]">
                      ${currentReceipt.firstPaymentAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                )}

                {printedLinesCount >= 4 && (
                  <div className="flex justify-between items-baseline border-b border-dotted border-[#1A1A1A]/20 pb-1">
                    <span className="text-[#1A1A1A]/70 uppercase">DAY:</span>
                    <span className="font-bold text-[#1A1A1A]">Day {currentReceipt.dayNumber} post-enrollment</span>
                  </div>
                )}

                {printedLinesCount >= 5 && (
                  <div className="flex justify-between items-baseline border-b border-dotted border-[#1A1A1A]/20 pb-1">
                    <span className="text-[#1A1A1A]/70 uppercase">PROOF METHOD:</span>
                    <span className="text-[#1A1A1A]/90">{currentReceipt.proofType}</span>
                  </div>
                )}

                {printedLinesCount >= 6 && (
                  <div className="flex justify-between items-baseline border-b border-dotted border-[#1A1A1A]/20 pb-1">
                    <span className="text-[#1A1A1A]/70 uppercase">REF HASH:</span>
                    <span className="text-[#1A1A1A]/80 font-mono text-[11px]">{currentReceipt.proofRef}</span>
                  </div>
                )}

                {printedLinesCount >= 7 && (
                  <div className="flex justify-between items-baseline border-b border-dotted border-[#1A1A1A]/20 pb-1">
                    <span className="text-[#1A1A1A]/70 uppercase">CLIENT SECTOR:</span>
                    <span className="text-[#1A1A1A]/90 text-right max-w-[150px] truncate">{currentReceipt.clientSector}</span>
                  </div>
                )}

              </div>

              {/* Dashed divider */}
              <div className="border-t border-dashed border-[#1A1A1A]/30 pt-3 pb-2 text-center">
                {printedLinesCount >= 8 ? (
                  <div className="flex flex-col items-center justify-center gap-1 my-1">
                    <div className="stamp-verified">
                      *** VERIFIED ***
                    </div>
                    <div className="text-[9px] text-[#1A1A1A]/60 tracking-widest uppercase mt-1">
                      INSPECTED & AUDITED LEDGER ENTRY
                    </div>
                  </div>
                ) : (
                  <div className="text-[#1A1A1A]/50 text-[10px] animate-pulse">
                    PRINTING THERMAL LINES...
                  </div>
                )}
              </div>

              {/* Receipt Footer Barcode Simulation */}
              <div className="pt-2 border-t border-[#1A1A1A]/20 text-center">
                <div className="font-mono text-[16px] tracking-tighter text-[#1A1A1A]/80 font-bold select-none overflow-hidden">
                  ||| | |||| | ||||| || | |||| || ||| | ||| ||||
                </div>
                <div className="text-[9px] text-[#1A1A1A]/50 mt-0.5 uppercase tracking-widest">
                  VALIDATED BY THE LEDGER PROTOCOL
                </div>
              </div>

              {/* Serrated bottom edge */}
              <div className="receipt-bottom-edge absolute -bottom-2 left-0"></div>

            </div>

            {/* Receipt Switcher Control Bar */}
            <div className="mt-6 flex items-center justify-between gap-2 px-3 py-2 bg-[#082D22] border border-[#F2EDE4]/20 text-xs font-mono text-[#F2EDE4]/80">
              <span className="text-[11px] text-[#F2EDE4]/60">
                PROOF {selectedReceiptIndex + 1} OF {RECEIPTS_DATA.length}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleNextReceipt}
                  disabled={isPrinting}
                  className="px-2.5 py-1 bg-[#F2EDE4] text-[#1A1A1A] font-bold hover:bg-[#B8935F] transition-colors rounded-[2px] flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  <RefreshCw className={`w-3 h-3 ${isPrinting ? 'animate-spin' : ''}`} />
                  <span>Next Receipt</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
