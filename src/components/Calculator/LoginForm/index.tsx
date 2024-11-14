import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useCalculatorStore } from '@/store/calculatorStore';

const LoginForm = () => {
  const { nextStep } = useCalculatorStore();

  const onFinish = (values: any) => {
    console.log('Login values:', values);
    // TODO: 实现登录逻辑
    nextStep();
  };

  return (
    <Form
      name="login"
      onFinish={onFinish}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="用户名" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="密码" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
