export const mockSolution = {
  totalWithdrawal: 18191311,
  overallIRR: 0.0642,
  totalPremium: 253503,
  recommendations: [
    {
      productId: 'CL001',
      key: 'CL001',
      productName: '裕饶传承',
      company: '中国人寿',
      premium: 21525,
      features: ['保证现金价值', '终期红利', '财富传承'],
      description: '灵活提取，稳健增值，适合长期财富积累'
    },
    {
      productId: 'GE001',
      productName: '启航财富',
      company: '忠意',
      premium: 96624,
      features: ['保证回报', '灵活提取', '财富传承'],
      description: '稳健回报，灵活运用，满足不同人生阶段需求'
    },
    {
      productId: 'AX001',
      productName: '挚汇',
      company: '安盛',
      premium: 110918,
      features: ['高潜在回报', '终期红利', '财富传承'],
      description: '追求卓越回报，实现财富增值目标'
    },
    {
      productId: 'CB001',
      productName: '传承守创',
      company: '安达',
      premium: 24436,
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
  cashFlow: [
    { year: 2024, premium: -253503, withdrawal: 0, balance: -253503 },
    { year: 2025, premium: -253503, withdrawal: 0, balance: -507006 },
    { year: 2026, premium: -253503, withdrawal: 0, balance: -760509 },
    { year: 2027, premium: 0, withdrawal: 500000, balance: -260509 },
    { year: 2028, premium: 0, withdrawal: 520000, balance: 259491 },
    { year: 2029, premium: 0, withdrawal: 540000, balance: 799491 },
    // ... 可以继续添加更多年份的现金流数据
  ]
};
