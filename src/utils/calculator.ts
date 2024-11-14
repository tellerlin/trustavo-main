import { CustomerNeed, Solution, ProductIRR } from '../types'
import { products, irrData } from '../data/products'

export const calculateYearlyExpense = (
  baseExpense: number,
  inflation: number,
  year: number
): number => {
  return baseExpense * Math.pow(1 + inflation, year - 1)
}

export const calculateTotalNeeds = (need: CustomerNeed): number => {
  let total = 0
  for (let year = need.startYear; year <= need.endYear; year++) {
    total += calculateYearlyExpense(need.yearlyExpense, need.inflation, year)
  }
  return total
}

export const findOptimalProducts = (
  need: CustomerNeed
): ProductIRR[] => {
  const duration = need.endYear - need.startYear + 1
  return irrData
    .filter((product: ProductIRR) => {
      const maxIrrYear = Math.max(...product.irrTable.map((t: { surrenderYear: number }) => t.surrenderYear))
      return maxIrrYear >= duration
    })
    .sort((a: ProductIRR, b: ProductIRR) => {
      const aIrr = getIRRForYear(a, duration)
      const bIrr = getIRRForYear(b, duration)
      return bIrr - aIrr
    })
}

export const getIRRForYear = (product: ProductIRR, year: number): number => {
  const closest = product.irrTable
    .filter((t: { surrenderYear: number }) => t.surrenderYear <= year)
    .sort((a: { surrenderYear: number }, b: { surrenderYear: number }) => b.surrenderYear - a.surrenderYear)[0]
  return closest ? closest.irr : 0
} 