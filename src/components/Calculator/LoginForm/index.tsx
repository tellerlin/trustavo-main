import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useCalculatorStore } from '@/store/calculatorStore';

const LoginForm = () => {
  const { nextStep, updateFormData, formData } = useCalculatorStore();

  const onFinish = (values: any) => {
    console.log('Login values:', values);
    updateFormData('loginInfo', values);
    nextStep();
  };

  return (
    <Form
      name="login"
      onFinish={onFinish}
      autoComplete="off"
      layout="vertical"
      initialValues={formData.loginInfo}
      className="w-full max-w-sm mx-auto px-4 sm:px-6"
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
