import React from 'react'
import { Typography, Button, Card, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import { 
  SafetyOutlined, 
  DollarOutlined, 
  TeamOutlined 
} from '@ant-design/icons'

const { Title, Paragraph } = Typography

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <Title>为香港理财顾问打造的智能工具</Title>
        <Paragraph className="text-lg text-gray-600">
          帮助您为客户制定最优的理财方案
        </Paragraph>
        <Link to="/calculator">
          <Button type="primary" size="large">
            开始使用
          </Button>
        </Link>
      </div>

      {/* Features Section */}
      <Row gutter={[24, 24]} className="mt-12">
        <Col xs={24} md={8}>
          <Card className="h-full">
            <SafetyOutlined className="text-3xl text-blue-500 mb-4" />
            <Title level={4}>安全可靠</Title>
            <Paragraph>
              采用最新技术，确保您的数据安全
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card className="h-full">
            <DollarOutlined className="text-3xl text-green-500 mb-4" />
            <Title level={4}>精准计算</Title>
            <Paragraph>
              智能算法，为客户提供最优建议
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card className="h-full">
            <TeamOutlined className="text-3xl text-purple-500 mb-4" />
            <Title level={4}>专业支持</Title>
            <Paragraph>
              专业团队提供全方位服务支持
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Home
