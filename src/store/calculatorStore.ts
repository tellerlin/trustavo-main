import { create } from 'zustand';

interface CalculatorStore {
  currentStep: number;
  formData: {
    loginInfo?: any;
    userInfo?: any;
    selectedTerm?: number;
    selectedCompanies?: string[];
    selectedProducts?: any[];
    requirements?: any;
  };
  solution: any | null;
  setCurrentStep: (step: number) => void;
  updateFormData: (key: string, value: any) => void;
  setSolution: (solution: any) => void;
  nextStep: () => void;
}

export const useCalculatorStore = create<CalculatorStore>((set) => ({
  currentStep: 0,
  formData: {},
  solution: null,
  setCurrentStep: (step) => {
    set({ currentStep: step });
  },
  updateFormData: (key, value) => 
    set((state) => ({
      formData: { ...state.formData, [key]: value }
    })),
  setSolution: (solution) => set({ solution }),
  nextStep: () => 
    set((state) => ({
      currentStep: state.currentStep + 1
    })),
}));
