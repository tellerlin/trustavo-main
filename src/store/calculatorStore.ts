import { create } from 'zustand';
import { mockSolution } from '@/components/Calculator/Result/mockData';

interface CalculatorState {
  currentStep: number;
  formData: {
    userInfo?: any;
    selectedProducts?: string[];
    requirements?: any;
  };
  solution: typeof mockSolution | null;
  nextStep: () => void;
  updateFormData: (key: string, value: any) => void;
  setSolution: (solution: typeof mockSolution) => void;
}

export const useCalculatorStore = create<CalculatorState>((set) => ({
  currentStep: 0,
  formData: {},
  solution: null,
  nextStep: () => set((state) => {
    console.log('nextStep called, current step:', state.currentStep);
    const newStep = Math.min(state.currentStep + 1, 4);
    console.log('New step will be:', newStep);
    return { currentStep: newStep };
  }),
  updateFormData: (key: string, value: any) => set((state) => {
    console.log('Updating form data:', key, value);
    return {
      formData: { ...state.formData, [key]: value }
    };
  }),
  setSolution: (solution: typeof mockSolution) => set({ solution }),
}));
