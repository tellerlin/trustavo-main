import React from 'react'
import { Form, InputNumber, Button } from 'antd'
import { CustomerNeed } from '../../types'
import { useCalculatorStore } from '../../store'
import { Rule } from 'antd/es/form'

interface InputFormProps {
  onCalculate: (values: CustomerNeed) => void
}

const rules: Record<string, Rule[]> = {
  yearlyExpense: [
    { required: true, message: '请输入年度开支需求' }
  ],
  inflation: [
    { required: true, message: '请输入通胀率预期' }
  ],
  startYear: [
    { required: true, message: '请输入最早提取年度' }
  ],
  endYear: [
    { required: true, message: '请输入结束年度' }
  ]
}

const InputForm = ({ onCalculate }: InputFormProps) => {
  const [form] = Form.useForm()
  const { setCustomerNeed } = useCalculatorStore()

  const handleFinish = (values: CustomerNeed) => {
    const formattedValues = {
      ...values,
      inflation: values.inflation / 100
    }
    setCustomerNeed(formattedValues)
    onCalculate(formattedValues)
  }

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleFinish}
    >
      <Form.Item
        label="年度开支需求"
        name="yearlyExpense"
        rules={rules.yearlyExpense}
      >
        <InputNumber
          style={{ width: '100%' }}
          formatter={(value: string | number | undefined) => `$ ${value || ''}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={(value: string | undefined) => (value ? value.replace(/\$\s?|(,*)/g, '') : '')}
        />
      </Form.Item>

      <Form.Item
        label="通胀率预期"
        name="inflation"
        rules={rules.inflation}
        initialValue={3}
      >
        <InputNumber
          style={{ width: '100%' }}
          formatter={(value: string | number | undefined) => `${value || ''}%`}
          parser={(value: string | undefined) => (value ? value.replace('%', '') : '')}
          step={0.1}
        />
      </Form.Item>

      <Form.Item
        label="最早提取年度"
        name="startYear"
        rules={rules.startYear}
      >
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="结束年度"
        name="endYear"
        rules={rules.endYear}
      >
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          计 算
        </Button>
      </Form.Item>
    </Form>
  )
}

export default InputForm
