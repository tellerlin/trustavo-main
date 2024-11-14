import React from 'react'
import { Form, Input, InputNumber, Select, Button, Card, Typography } from 'antd'
import type { CustomerInfo } from '../../types'

const { Title } = Typography

const Calculator: React.FC = () => {
  const [form] = Form.useForm()

  const onFinish = (values: CustomerInfo) => {
    console.log('Received values:', values)
    // TODO: 实现计算逻辑
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Title level={2} className="text-center mb-8">
        理财计算器
      </Title>

      <Card>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="年龄"
            name="age"
            rules={[{ required: true, message: '请输入年龄' }]}
          >
            <InputNumber min={18} max={100} className="w-full" />
          </Form.Item>

          <Form.Item
            label="月收入 (HKD)"
            name="monthlyIncome"
            rules={[{ required: true, message: '请输入月收入' }]}
          >
            <InputNumber
              min={0}
              step={1000}
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value!.replace(/\$\s?|(,*)/g, '')}
              className="w-full"
            />
          </Form.Item>

          <Form.Item
            label="投资目标"
            name="investmentGoal"
            rules={[{ required: true, message: '请选择投资目标' }]}
          >
            <Select>
              <Select.Option value="retirement">退休规划</Select.Option>
              <Select.Option value="education">子女教育</Select.Option>
              <Select.Option value="wealth">财富累积</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="风险承受能力"
            name="riskTolerance"
            rules={[{ required: true, message: '请选择风险承受能力' }]}
          >
            <Select>
              <Select.Option value="low">保守</Select.Option>
              <Select.Option value="medium">适中</Select.Option>
              <Select.Option value="high">进取</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              生成建议方案
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Calculator
