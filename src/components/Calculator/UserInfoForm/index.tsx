import { Form, Input, Radio, InputNumber, Button, Space, Select } from 'antd';
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
      initialValues={{
        gender: 'male',
        ...formData.userInfo
      }}
      className="w-full max-w-lg mx-auto px-4 sm:px-6"
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
        <Radio.Group>
          <Radio value="male">男</Radio>
          <Radio value="female">女</Radio>
        </Radio.Group>
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
              <div 
                key={key} 
                className="flex flex-col sm:flex-row gap-2 mb-4"
              >
                <Form.Item
                  {...restField}
                  name={[name, 'relationship']}
                  rules={[{ required: true, message: '请选择关系' }]}
                  className="w-full sm:w-[200px] mb-2 sm:mb-0"
                >
                  <Select placeholder="选择关系">
                    <Option value="spouse">配偶</Option>
                    <Option value="child">子女</Option>
                    <Option value="parent">父母</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  {...restField}
                  name={[name, 'age']}
                  rules={[{ required: true, message: '请输入年龄' }]}
                  className="w-full sm:w-[120px] mb-2 sm:mb-0"
                >
                  <InputNumber min={0} max={100} placeholder="年龄" />
                </Form.Item>

                <Button 
                  type="text" 
                  danger 
                  icon={<MinusCircleOutlined />} 
                  onClick={() => remove(name)}
                  className="self-start sm:self-center"
                />
              </div>
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
