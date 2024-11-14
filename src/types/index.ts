export interface CustomerNeed {
  yearlyExpense: number;
  inflation: number;
  startYear: number;
  endYear: number;
}

export interface Solution {
  totalWithdrawal: number;
  overallIRR: number;
  totalPremium: number;
  recommendations: {
    productId: string;
    premium: number;
  }[];
}

export interface ProductIRR {
  productId: string;
  fullName: string;
  currency: string;
  paymentTerm: number;
  irrTable: {
    surrenderYear: number;
    irr: number;
  }[];
}

export interface InsuranceProduct {
  id: string;
  company: string;
  productName: string;
  fullName: string;
  minInvestment: number;
  maxInvestment: number;
  currency: 'HKD' | 'USD';
  paymentTerm: number;
  description: string;
  features: string[];
}
