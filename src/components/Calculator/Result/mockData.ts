interface CashFlowItem {
  year: number;
  premium: number;
  withdrawal: number;
  balance: number;
}

interface ProductRecommendation {
  productId: string;
  key: string;
  productName: string;
  company: string;
  premium: number;
  paymentTerm: number;
  features: string[];
  description: string;
}

interface Solution {
  totalWithdrawal: number;
  overallIRR: number;
  totalPremium: number;
  recommendations: ProductRecommendation[];
  analysis: string;
  cashFlow: CashFlowItem[];
}

// 获取当前年份
const currentYear = new Date().getFullYear();

// 生成现金流数据
const generateCashFlow = (): CashFlowItem[] => {
  const cashFlow = [];
  const premiumYears = 5;  // 缴费5年
  const waitingYears = 10; // 等待10年后开始提取
  const totalYears = 30;   // 总共30年
  const yearlyPremium = 253503;   // 年缴保费（正数）
  const baseWithdrawal = 500000;  // 基础提取金额（正数）
  const inflationRate = 0.03;     // 3%通胀率
  const returnRate = 0.06;        // 6%年化收益率
  
  let balance = 0;

  for (let i = 0; i < totalYears; i++) {
    const year = currentYear + i;
    let premium = 0;
    let withdrawal = 0;
    
    // 前5年缴费期
    if (i < premiumYears) {
      premium = yearlyPremium;
    }
    
    // 第15年开始提取
    if (i >= premiumYears + waitingYears) {
      withdrawal = baseWithdrawal * Math.pow(1 + inflationRate, i - (premiumYears + waitingYears));
    }
    
    // 计算当年收益
    const yearReturn = balance * returnRate;
    
    // 更新累计余额（保费为支出所以要减，提取为支出所以要减）
    balance = balance - premium - withdrawal + yearReturn;
    
    cashFlow.push({
      year,
      premium,           // 保费支出（正数）
      withdrawal,        // 提取金额（正数）
      balance: Math.abs(Math.round(balance)), // 确保为正数
    });
  }
  console.log('Generated Cash Flow:', cashFlow); // 调试输出
  return cashFlow;
};

export const mockSolution: Solution = {
  totalWithdrawal: 18191311,
  overallIRR: 0.0642,
  totalPremium: 1267515, // 修正为年度保费总和
  recommendations: [
    {
      productId: 'CL001',
      key: 'CL001',
      productName: '裕饶传承',
      company: '中国人寿',
      premium: 21525,
      paymentTerm: 5,
      features: ['保证现金价值', '终期红利', '财富传承'],
      description: '灵活提取，稳健增值，适合长期财富积累'
    },
    {
      productId: 'GE001',
      productName: '启航财富',
      company: '忠意',
      premium: 96624,
      paymentTerm: 3,
      features: ['保证回报', '灵活提取', '财富传承'],
      description: '稳健回报，灵活运用，满足不同人生阶段需求'
    },
    {
      productId: 'AX001',
      productName: '挚汇',
      company: '安盛',
      premium: 110918,
      paymentTerm: 5,
      features: ['高潜在回报', '终期红利', '财富传承'],
      description: '追求卓越回报，实现财富增值目标'
    },
    {
      productId: 'CB001',
      productName: '传承守创',
      company: '安达',
      premium: 24436,
      paymentTerm: 3,
      features: ['保证现金价值', '灵活提取', '财富传承'],
      description: '稳健增值，灵活理财，守护财富传承'
    }
  ],
  analysis: `
    本方案通过组合四款优质储蓄险产品，在确保资金安全的同时追求稳健回报：

    1. 中国人寿「裕饶传承」作为基础配置，提供稳定的保证回报
    2. 忠意「启航财富」和安盛「挚汇」作为核心配置，兼顾回报与灵活性
    3. 安达「传承守创」作为补充，强化财富传承功能

    方案特点：
    - 预期综合回报率达6.42%
    - 总提取金额超过1,800万
    - 年度保费合理分配，降低投资压力
    - 产品组合多元化，分散风险
  `,
  cashFlow: generateCashFlow(),
};
