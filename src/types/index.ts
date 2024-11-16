export interface UserInfo {
  name: string;
  gender: 'male' | 'female';
  age: number;
  familyMembers: FamilyMember[];
}

export interface FamilyMember {
  name: string;
  gender: 'male' | 'female';
  age: number;
  relationship: string;
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
  recommendations: ProductRecommendation[];
}

export interface ProductRecommendation {
  productId: string;
  premium: number;
}

export interface CashFlowItem {
  year: number;
  premium?: number;
  withdrawal?: number;
  balance: number;
}
