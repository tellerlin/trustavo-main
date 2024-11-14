import { CustomerNeed, Solution, ProductIRR } from '../types'
import { calculateTotalNeeds, findOptimalProducts } from './calculator'

export const optimizePortfolio = (
  need: CustomerNeed,
  products: ProductIRR[]
): Solution => {
  const totalNeed = calculateTotalNeeds(need)
  const optimalProducts = findOptimalProducts(need)
  
  // 简单实现：选择IRR最高的产品
  const bestProduct = optimalProducts[0]
  if (!bestProduct) {
    throw new Error('No suitable products found')
  }

  const premium = totalNeed / Math.pow(
    1 + getMaxIRR(bestProduct),
    need.endYear - need.startYear
  )

  return {
    totalWithdrawal: totalNeed,
    overallIRR: getMaxIRR(bestProduct),
    totalPremium: premium,
    recommendations: [{
      productId: bestProduct.productId,
      premium: premium
    }]
  }
}

const getMaxIRR = (product: ProductIRR): number => {
  return Math.max(...product.irrTable.map(t => t.irr))
}
