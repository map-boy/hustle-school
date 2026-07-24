export interface Course {
  id: string;
  item: string; // Course name
  code: string; // e.g. "LDR-001"
  category: 'Copywriting' | 'Outreach Systems' | 'Web Architecture' | 'Fractional Ops' | 'E-commerce Media';
  investment: number; // Price e.g. 490
  returnAverage: number; // Average student earnings e.g. 4850
  paybackDays: number; // e.g. 19
  cohortRemaining: number;
  cohortStartDate: string;
  summary: string;
  deliverables: string[];
  targetClient: string;
  verifiedInvoicesCount: number;
}

export interface StudentReceipt {
  id: string;
  receiptId: string;
  studentName: string;
  skill: string;
  firstPaymentAmount: number;
  dayNumber: number;
  timestamp: string;
  proofType: 'Stripe Invoice' | 'Bank Wire' | 'Upwork Escrow' | 'Wise Transfer';
  proofRef: string;
  clientSector: string;
  status: 'VERIFIED' | 'AUDITED';
}

export interface AuditDisclosure {
  id: string;
  code: string;
  title: string;
  content: string;
}
