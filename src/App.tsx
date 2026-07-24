/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroReceipt } from './components/HeroReceipt';
import { MetricsBar } from './components/MetricsBar';
import { LedgerTable } from './components/LedgerTable';
import { LiveTransactionFeed } from './components/LiveTransactionFeed';
import { ReceiptCalculator } from './components/ReceiptCalculator';
import { EscrowGuarantee } from './components/EscrowGuarantee';
import { AuditDisclosures } from './components/AuditDisclosures';
import { Footer } from './components/Footer';
import { EnrollmentModal } from './components/EnrollmentModal';
import LanguageSwitcher from './components/LanguageSwitcher';

export default function App() {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState<boolean>(false);
  const [selectedCourseId, setSelectedCourseId] = useState<string>('b2b-copywriting');

  const handleOpenEnrollment = (courseId?: string) => {
    if (courseId) {
      setSelectedCourseId(courseId);
    }
    setIsEnrollmentOpen(true);
  };

  const handleCloseEnrollment = () => {
    setIsEnrollmentOpen(false);
  };

  const handleScrollToCourses = () => {
    const el = document.getElementById('ledger-items');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B3D2E] text-[#F2EDE4] font-sans antialiased flex flex-col">
      {/* Header with live ticker */}
      <Header onOpenEnrollment={handleOpenEnrollment} />
        <div className="flex justify-end px-4 pt-2">
          <LanguageSwitcher />
        </div>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with Thermal Printer Receipt */}
        <HeroReceipt
          onOpenEnrollment={handleOpenEnrollment}
          onExploreCourses={handleScrollToCourses}
        />

        {/* Aggregate Audit Metrics Bar */}
        <MetricsBar />

        {/* The Core 3-Column Ledger Course Listing */}
        <LedgerTable onOpenEnrollment={handleOpenEnrollment} />

        {/* Live Transaction Feed of Student Receipts */}
        <LiveTransactionFeed />

        {/* Interactive Receipt ROI Estimator */}
        <ReceiptCalculator onOpenEnrollment={handleOpenEnrollment} />

        {/* The Formal Escrow & Refund Guarantee Agreement */}
        <EscrowGuarantee onOpenEnrollment={() => handleOpenEnrollment()} />

        {/* FAQ Audit Disclosures */}
        <AuditDisclosures />
      </main>

      {/* Footer with Authenticity Lookup */}
      <Footer />

      {/* Seat Claim & Invoice Modal */}
      <EnrollmentModal
        isOpen={isEnrollmentOpen}
        onClose={handleCloseEnrollment}
        defaultCourseId={selectedCourseId}
      />
    </div>
  );
}

