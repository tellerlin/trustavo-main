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
    {
      title: '登录',
      description: '用户验证',
    },
    {
      title: '个人信息',
      description: '基本信息录入',
    },
    {
      title: '产品筛选',
      description: '选择合适产品',
    },
    {
      title: '需求录入',
      description: '设置理财目标',
    },
    {
      title: '推荐方案',
      description: '查看方案详情',
    },
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
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <h2 className="text-2xl font-bold text-center">理财方案计算器</h2>
      
      <Steps 
        current={currentStep} 
        items={steps}
        onChange={handleStepChange}
        type="navigation"
      />
      
      <Card className="mt-8">
        {renderStepContent()}
      </Card>
    </div>
  )
}

export default Calculator
