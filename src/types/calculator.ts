// 用户相关类型
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

// 产品相关类型
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

// 需求相关类型
export interface CustomerNeed {
  yearlyExpense: number;
  inflation: number;
  startYear: number;
  endYear: number;
}

// 结果相关类型
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
