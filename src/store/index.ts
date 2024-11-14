import { create } from 'zustand'
import { CustomerNeed, Solution } from '../types'

interface CalculatorStore {
  customerNeed: any
  solution: any
  setCustomerNeed: (need: any) => void
  setSolution: (solution: any) => void
  calculateSolution: () => Promise<void>
}

export const useCalculatorStore = create<CalculatorStore>((set) => ({
  customerNeed: null,
  solution: null,
  setCustomerNeed: (need) => set({ customerNeed: need }),
  setSolution: (solution) => set({ solution }),
  calculateSolution: async () => {
    // 实现计算逻辑
  }
}))
