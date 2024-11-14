import { InsuranceProduct, ProductIRR } from '../types'

export const products: InsuranceProduct[] = [
  {
    id: 'P001',
    company: '安盛',
    productName: 'Global Elite',
    fullName: '安盛智尊守护储蓄计划',
    minInvestment: 1000000,
    maxInvestment: 10000000,
    currency: 'USD',
    paymentTerm: 5,
    description: '灵活提取，稳健回报',
    features: ['保证回报', '灵活提取', '美元计价']
  },
  // ... 更多产品
]

export const irrData: ProductIRR[] = [
  {
    productId: 'P001',
    fullName: '安盛智尊守护储蓄计划',
    currency: 'USD',
    paymentTerm: 5,
    irrTable: [
      { surrenderYear: 5, irr: 0.035 },
      { surrenderYear: 10, irr: 0.045 },
      { surrenderYear: 15, irr: 0.055 },
      { surrenderYear: 20, irr: 0.065 }
    ]
  },
  // ... 更多IRR数据
]
