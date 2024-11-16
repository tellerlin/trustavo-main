import { Steps, Card } from 'antd'
import { useCalculatorStore } from '@/store/calculatorStore'
import LoginForm from '@/components/Calculator/LoginForm'
import UserInfoForm from '@/components/Calculator/UserInfoForm'
import ProductSelection from '@/components/Calculator/ProductSelection'
import InputForm from '@/components/Calculator/InputForm'
import Result from '@/components/Calculator/Result'

const Calculator = () => {
  const { currentStep, setCurrentStep, formData } = useCalculatorStore()

  const steps = [
    { title: '登录' },
    { title: '客户' },
    { title: '产品' },
    { title: '需求' },
    { title: '方案' }
  ]

  // 检查是否可以跳转到目标步骤
  const canJumpToStep = (targetStep: number) => {
    // 允许回退到任何步骤
    if (targetStep < currentStep) {
      return true;
    }

    // 不允许跳过步骤
    if (targetStep > currentStep + 1) {
      return false;
    }

    return true;
  };

  const handleStepChange = (step: number) => {
    if (canJumpToStep(step)) {
      setCurrentStep(step);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <LoginForm />
      case 1:
        return <UserInfoForm />
      case 2:
        return <ProductSelection />
      case 3:
        return <InputForm />
      case 4:
        return <Result />
      default:
        return null
    }
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-4 space-y-4 md:space-y-6">
      <h2 className="text-lg md:text-2xl font-bold text-center">理财方案计算器</h2>
      
      <Steps 
        current={currentStep} 
        items={steps}
        onChange={handleStepChange}
        type="navigation"
        size="small"
        className="px-2 overflow-x-auto min-w-[300px] sm:min-w-full"
        responsive={false}
      />
      
      <Card className="mt-4">
        {renderStepContent()}
      </Card>
    </div>
  )
}

export default Calculator
