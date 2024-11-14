import { Button, Form, Input, message } from 'antd'

interface ContactForm {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const [form] = Form.useForm()

  const onFinish = (values: ContactForm) => {
    console.log('Form values:', values)
    message.success('消息已发送')
    form.resetFields()
  }

  return (
    <div className="text-center space-y-8">
      <h2 className="text-3xl font-bold">联系我们</h2>
      <div className="max-w-xl mx-auto">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            name="name"
            label="姓名"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="邮箱"
            rules={[{ required: true, type: 'email' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="message"
            label="留言"
            rules={[{ required: true }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              发送
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Contact
