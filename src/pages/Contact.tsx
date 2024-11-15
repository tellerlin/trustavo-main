import { Form, Input, Button, Card } from 'antd'
import { UserOutlined, MailOutlined, MessageOutlined } from '@ant-design/icons'

const { TextArea } = Input

const Contact = () => {
  const onFinish = (values: any) => {
    console.log('Received values:', values)
  }

  return (
    <div className="space-y-6 p-4">
      <h2 className="text-lg md:text-2xl font-bold text-center">联系我们</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 联系信息 */}
        <Card title="联系方式" className="h-fit">
          <div className="space-y-4">
            <p>
              <strong>地址：</strong> 香港中环金融街1号
            </p>
            <p>
              <strong>电话：</strong> +852 1234 5678
            </p>
            <p>
              <strong>邮箱：</strong> info@trustavo.com
            </p>
            <p>
              <strong>工作时间：</strong> 周一至周五 9:00-18:00
            </p>
            <div className="pt-4 border-t">
              <p className="mb-4"><strong>社交媒体：</strong></p>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl text-gray-600 hover:text-blue-500">
                  <i className="fab fa-weixin"></i>
                </a>
                <a href="#" className="text-2xl text-gray-600 hover:text-green-500">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </Card>

        {/* 联系表单 */}
        <Card title="在线咨询">
          <Form
            name="contact"
            onFinish={onFinish}
            layout="vertical"
            className="space-y-4"
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: '请输入您的姓名' }]}
            >
              <Input 
                prefix={<UserOutlined />} 
                placeholder="您的姓名"
                className="mobile-input" 
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                { required: true, message: '请输入您的邮箱' },
                { type: 'email', message: '请输入有效的邮箱地址' }
              ]}
            >
              <Input 
                prefix={<MailOutlined />} 
                placeholder="您的邮箱" 
                className="mobile-input"
              />
            </Form.Item>

            <Form.Item
              name="message"
              rules={[{ required: true, message: '请输入留言内容' }]}
            >
              <TextArea 
                prefix={<MessageOutlined />}
                placeholder="请输入留言内容" 
                rows={4}
                className="mobile-input"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block className="mobile-button">
                提交
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  )
}

export default Contact 