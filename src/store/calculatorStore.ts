import { create } from 'zustand'

interface CalculatorState {
  currentStep: number
  setCurrentStep: (step: number) => void
  nextStep: () => void
  prevStep: () => void
  formData: {
    userInfo: any
    products: any[]
    requirements: any
  }
  updateFormData: (key: string, data: any) => void
}

export const useCalculatorStore = create<CalculatorState>((set) => ({
  currentStep: 0,
  setCurrentStep: (step) => set({ currentStep: step }),
  nextStep: () => set((state) => ({ 
    currentStep: Math.min(state.currentStep + 1, 4) 
  })),
  prevStep: () => set((state) => ({ 
    currentStep: Math.max(state.currentStep - 1, 0) 
  })),
  formData: {
    userInfo: {},
    products: [],
    requirements: {}
  },
  updateFormData: (key, data) => set((state) => ({
    formData: {
      ...state.formData,
      [key]: data
    }
  }))
}))
