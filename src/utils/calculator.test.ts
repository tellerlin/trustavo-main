import { calculateYearlyExpense, calculateTotalNeeds } from './calculator'

describe('Calculator Utils', () => {
  describe('calculateYearlyExpense', () => {
    it('should calculate yearly expense with inflation correctly', () => {
      const baseExpense = 100000
      const inflation = 0.03
      const year = 5

      const result = calculateYearlyExpense(baseExpense, inflation, year)
      
      // 100000 * (1 + 0.03)^4 ≈ 112550.88
      expect(result).toBeCloseTo(112550.88, 2)
    })

    it('should return base expense for year 1', () => {
      const baseExpense = 100000
      const inflation = 0.03
      const year = 1

      const result = calculateYearlyExpense(baseExpense, inflation, year)
      
      expect(result).toBe(baseExpense)
    })
  })

  describe('calculateTotalNeeds', () => {
    it('should calculate total needs correctly', () => {
      const need = {
        yearlyExpense: 100000,
        inflation: 0.03,
        startYear: 1,
        endYear: 3
      }

      const result = calculateTotalNeeds(need)
      
      // 100000 + 103000 + 106090 = 309090
      expect(result).toBeCloseTo(309090, 2)
    })
  })
})
