import { Steps, Card } from 'antd'
import { useCalculatorStore } from '@/store/calculatorStore'
import LoginForm from '@/components/Calculator/LoginForm'
import UserInfoForm from '@/components/Calculator/UserInfoForm'
import ProductSelection from '@/components/Calculator/ProductSelection'
import InputForm from '@/components/Calculator/InputForm'
import Result from '@/components/Calculator/Result'

const Calculator = () => {
  const { currentStep, setCurrentStep } = useCalculatorStore()
  console.log('Current step in Calculator:', currentStep)

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

  const renderStepContent = () => {
    console.log('Rendering step:', currentStep)
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
        console.log('Rendering Result component')
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
        onChange={setCurrentStep}
      />
      
      <Card className="mt-8">
        {renderStepContent()}
      </Card>
    </div>
  )
}

export default Calculator
