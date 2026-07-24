import { StudentReceipt } from '../types';

export const RECEIPTS_DATA: StudentReceipt[] = [
  {
    id: 'rcpt-101',
    receiptId: 'TX-892401-2026',
    studentName: 'Marcus Vance',
    skill: 'B2B Technical Copywriting',
    firstPaymentAmount: 3850,
    dayNumber: 19,
    timestamp: '2026-07-22 14:12:08 UTC',
    proofType: 'Stripe Invoice',
    proofRef: 'INV-88219-SAAS',
    clientSector: 'Cloud Security Platform (Series B)',
    status: 'VERIFIED'
  },
  {
    id: 'rcpt-102',
    receiptId: 'TX-904112-2026',
    studentName: 'Elena Rostova',
    skill: 'Cold Email Architecture',
    firstPaymentAmount: 5200,
    dayNumber: 14,
    timestamp: '2026-07-21 09:44:31 UTC',
    proofType: 'Upwork Escrow',
    proofRef: 'ESC-99214-OUT',
    clientSector: 'Fintech Advisory Group',
    status: 'VERIFIED'
  },
  {
    id: 'rcpt-103',
    receiptId: 'TX-883109-2026',
    studentName: 'David K. Mercer',
    skill: 'Framer & Webflow Development',
    firstPaymentAmount: 6500,
    dayNumber: 22,
    timestamp: '2026-07-20 18:20:55 UTC',
    proofType: 'Bank Wire',
    proofRef: 'WIR-44102-WEB',
    clientSector: 'AI Medical Imaging Startup',
    status: 'VERIFIED'
  },
  {
    id: 'rcpt-104',
    receiptId: 'TX-910408-2026',
    studentName: 'Sora Tanaka',
    skill: 'Fractional AI Operations',
    firstPaymentAmount: 4200,
    dayNumber: 27,
    timestamp: '2026-07-19 11:05:12 UTC',
    proofType: 'Wise Transfer',
    proofRef: 'WSE-10394-OPS',
    clientSector: 'Commercial Real Estate Brokerage',
    status: 'VERIFIED'
  },
  {
    id: 'rcpt-105',
    receiptId: 'TX-874291-2026',
    studentName: 'Julian Thorne',
    skill: 'B2B Technical Copywriting',
    firstPaymentAmount: 2900,
    dayNumber: 16,
    timestamp: '2026-07-18 16:30:40 UTC',
    proofType: 'Stripe Invoice',
    proofRef: 'INV-77301-CPY',
    clientSector: 'DevOps Automation Tool',
    status: 'VERIFIED'
  },
  {
    id: 'rcpt-106',
    receiptId: 'TX-923810-2026',
    studentName: 'Chloe Gallagher',
    skill: 'D2C Performance Testing',
    firstPaymentAmount: 3400,
    dayNumber: 21,
    timestamp: '2026-07-17 21:15:00 UTC',
    proofType: 'Stripe Invoice',
    proofRef: 'INV-30192-D2C',
    clientSector: 'Organic Skincare Brand',
    status: 'VERIFIED'
  }
];

export const AUDIT_DISCLOSURES_DATA = [
  {
    id: 'disc-01',
    code: 'SEC-01',
    title: 'How are student receipts verified?',
    content: 'All payment figures displayed on this platform undergo third-party automated validation via API connections to Stripe, Wise, or escrow transaction hashes. We do not accept self-reported earnings, testimonials without invoice numbers, or static screenshot submissions.'
  },
  {
    id: 'disc-02',
    code: 'SEC-02',
    title: 'What if I do not secure a paid client?',
    content: 'Under our Escrow Guarantee Agreement, if you execute the four core milestone deliverables within 30 days and submit 25 client proposals without securing a paid invoice of at least 2x your course fee, 100% of your tuition is refunded directly back to your original source account.'
  },
  {
    id: 'disc-03',
    code: 'SEC-03',
    title: 'Why is enrollment capped per cohort?',
    content: 'We limit every monthly cohort to a maximum of 25 seats. This ensures direct code/copy/proposal reviews by senior operators rather than automated AI scoring or passive pre-recorded video dumps.'
  },
  {
    id: 'disc-04',
    code: 'SEC-04',
    title: 'Are these skills suitable for absolute beginners?',
    content: 'Yes. Every ledger curriculum begins with the foundational mechanics—from setting up cold outreach domains to structuring clean client contracts—before escalating to high-ticket positioning and closing tactics.'
  }
];
