import { Form, Input, Select, InputNumber, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useCalculatorStore } from '@/store/calculatorStore';

const { Option } = Select;

const UserInfoForm = () => {
  const { nextStep, updateFormData, formData } = useCalculatorStore();

  const onFinish = (values: any) => {
    console.log('UserInfo values:', values);
    updateFormData('userInfo', values);
    nextStep();
  };

  return (
    <Form
      name="userInfo"
      onFinish={onFinish}
      layout="vertical"
      initialValues={formData.userInfo}
    >
      <Form.Item
        name="name"
        label="客户姓名"
        rules={[{ required: true, message: '请输入客户姓名' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="gender"
        label="性别"
        rules={[{ required: true, message: '请选择性别' }]}
      >
        <Select>
          <Option value="male">男</Option>
          <Option value="female">女</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="age"
        label="年龄"
        rules={[{ required: true, message: '请输入年龄' }]}
      >
        <InputNumber min={0} max={100} />
      </Form.Item>

      <Form.List name="familyMembers">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space key={key} align="baseline">
                <Form.Item
                  {...restField}
                  name={[name, 'relationship']}
                  rules={[{ required: true, message: '请选择关系' }]}
                >
                  <Select placeholder="选择关系" style={{ width: 120 }}>
                    <Option value="spouse">配偶</Option>
                    <Option value="child">子女</Option>
                    <Option value="parent">父母</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  {...restField}
                  name={[name, 'age']}
                  rules={[{ required: true, message: '请输入年龄' }]}
                >
                  <InputNumber min={0} max={100} placeholder="年龄" />
                </Form.Item>

                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button 
                type="dashed" 
                onClick={() => add()} 
                block 
                icon={<PlusOutlined />}
              >
                添加家庭成员
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          下一步
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserInfoForm;