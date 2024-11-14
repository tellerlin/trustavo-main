import { useState } from 'react'
import { Card } from 'antd'
import InputForm from '../components/Calculator/InputForm'
import Result from '../components/Calculator/Result'
import { CustomerNeed } from '../types'
import { useCalculatorStore } from '../store'

const Calculator = () => {
  const [loading, setLoading] = useState(false)
  const { calculateSolution } = useCalculatorStore()

  const handleCalculate = async (need: CustomerNeed) => {
    setLoading(true)
    try {
      await calculateSolution()
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      <h2 className="section-title">理财方案计算器</h2>
      <Card title="需求输入">
        <InputForm onCalculate={handleCalculate} />
      </Card>
      <Result loading={loading} />
    </div>
  )
}

export default Calculator
