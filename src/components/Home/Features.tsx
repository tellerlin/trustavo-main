import { Card, Row, Col } from 'antd'
import { 
  CalculatorOutlined, 
  LineChartOutlined, 
  SafetyOutlined 
} from '@ant-design/icons'

const features = [
  {
    icon: <CalculatorOutlined className="text-4xl" />,
    title: '快速计算',
    description: '秒级生成专业理财方案'
  },
  {
    icon: <LineChartOutlined className="text-4xl" />,
    title: '优化分析',
    description: '智能优化产品组合'
  },
  {
    icon: <SafetyOutlined className="text-4xl" />,
    title: '安全可靠',
    description: '准确的IRR计算模型'
  }
]

const Features = () => {
  return (
    <div className="text-center space-y-8">
      <h2 className="text-3xl font-bold">核心功能</h2>
      <Row gutter={[32, 32]}>
        {features.map((feature, index) => (
          <Col key={index} xs={24} md={8}>
            <Card className="h-full">
              <div className="space-y-4">
                {feature.icon}
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Features
