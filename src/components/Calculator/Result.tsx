import React from 'react'
import { useEffect, useState } from 'react'
import { Card, Table, Button, Spin } from 'antd'
import { Line } from '@ant-design/charts'
import { useCalculatorStore } from '../../store'
import { formatCurrency, formatPercentage } from '../../utils/format'
import { products } from '../../data/products'

interface ResultProps {
  loading?: boolean
}

const Result = ({ loading }: ResultProps) => {
  const { solution } = useCalculatorStore()
  const [chartData, setChartData] = useState<any[]>([])

  useEffect(() => {
    if (solution) {
      // 生成图表数据
      // ... 实现图表数据处理逻辑
    }
  }, [solution])

  if (!solution) {
    return null
  }

  const { totalWithdrawal, overallIRR, totalPremium, recommendations } = solution

  const productColumns = [
    {
      title: '产品名称',
      dataIndex: 'productId',
      key: 'productId',
      render: (id: string) => {
        const product = products.find(p => p.id === id)
        return product?.fullName || id
      }
    },
    {
      title: '投资金额',
      dataIndex: 'premium',
      key: 'premium',
      render: (value: number) => formatCurrency(value)
    }
  ]

  return (
    <Spin spinning={loading}>
      <div className="space-y-8">
        <Card title="方案概览">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="text-gray-500">总提取金额</div>
              <div className="text-xl font-bold">
                {formatCurrency(totalWithdrawal)}
              </div>
            </div>
            <div>
              <div className="text-gray-500">综合回报率</div>
              <div className="text-xl font-bold">
                {(overallIRR * 100).toFixed(1)}%
              </div>
            </div>
            <div>
              <div className="text-gray-500">总投资金额</div>
              <div className="text-xl font-bold">
                {formatCurrency(totalPremium)}
              </div>
            </div>
          </div>
        </Card>

        <Card title="推荐产品组合">
          <Table
            dataSource={recommendations}
            columns={productColumns}
            pagination={false}
          />
        </Card>

        <Card title="现金流分析">
          <Line
            data={chartData}
            xField="year"
            yField="amount"
            seriesField="type"
          />
        </Card>

        <Button type="primary" block onClick={() => {/* 实现PDF导出 */}}>
          导出PDF报告
        </Button>
      </div>
    </Spin>
  )
}

export default Result
