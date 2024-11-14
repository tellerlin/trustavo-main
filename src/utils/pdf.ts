import { jsPDF } from 'jspdf'
import 'jspdf-autotable'
import { Solution } from '../types'
import { formatCurrency, formatPercentage } from './format'
import { products } from '../data/products'

export const generatePDF = (solution: Solution) => {
  const doc = new jsPDF()

  // 添加标题
  doc.setFontSize(20)
  doc.text('理财方案报告', 105, 20, { align: 'center' })

  // 添加方案概览
  doc.setFontSize(16)
  doc.text('方案概览', 20, 40)
  
  doc.setFontSize(12)
  doc.text(`总提取金额: ${formatCurrency(solution.totalWithdrawal)}`, 30, 50)
  doc.text(`综合回报率: ${formatPercentage(solution.overallIRR)}`, 30, 60)
  doc.text(`总投资金额: ${formatCurrency(solution.totalPremium)}`, 30, 70)

  // 添加产品组合表格
  doc.setFontSize(16)
  doc.text('推荐产品组合', 20, 90)

  const tableData = solution.recommendations.map(rec => {
    const product = products.find(p => p.id === rec.productId)
    return [
      product?.fullName || rec.productId,
      formatCurrency(rec.premium)
    ]
  })

  doc.autoTable({
    startY: 100,
    head: [['产品名称', '投资金额']],
    body: tableData
  })

  // 保存PDF
  doc.save('理财方案报告.pdf')
}
