import { Form, InputNumber, Button } from 'antd';
import { useCalculatorStore } from '@/store/calculatorStore';
import type { CustomerNeed } from '@/types';
import { mockSolution } from '../Result/mockData';

const InputForm = () => {
  const [form] = Form.useForm();
  const { nextStep, updateFormData, setSolution } = useCalculatorStore();

  const handleFormFinish = (values: CustomerNeed) => {
    try {
      console.log('handleFormFinish triggered');
      console.log('Form values:', values);
      
      const formattedValues = {
        ...values,
        inflation: values.inflation / 100
      };
      
      console.log('Formatted values:', formattedValues);
      updateFormData('requirements', formattedValues);
      
      console.log('Setting solution');
      setSolution(mockSolution);
      console.log('Solution set successfully');
      
      console.log('Calling nextStep');
      nextStep();
      console.log('nextStep called successfully');
    } catch (error) {
      console.error('Error in form submission:', error);
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleFormFinish}
      initialValues={{
        yearlyExpense: 200000,
        inflation: 3,
        startYear: new Date().getFullYear() + 10,
        endYear: new Date().getFullYear() + 30
      }}
      className="w-full max-w-sm mx-auto px-4 sm:px-6"
    >
      <Form.Item
        label="年度开支需求"
        name="yearlyExpense"
        rules={[{ required: true, message: '请输入年度开支需求' }]}
      >
        <InputNumber
          style={{ width: '100%' }}
          formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value!.replace(/\$\s?|(,*)/g, '')}
          min={0}
        />
      </Form.Item>

      <Form.Item
        label="通胀率预期"
        name="inflation"
        rules={[{ required: true, message: '请输入通胀率预期' }]}
      >
        <InputNumber
          style={{ width: '100%' }}
          formatter={value => `${value}%`}
          parser={value => value!.replace('%', '')}
          min={1}
          max={10}
          step={0.1}
        />
      </Form.Item>

      <Form.Item
        label="最早提取年度"
        name="startYear"
        rules={[{ required: true, message: '请输入最早提取年度' }]}
      >
        <InputNumber 
          style={{ width: '100%' }} 
          min={new Date().getFullYear() + 10}
          max={new Date().getFullYear() + 20}
        />
      </Form.Item>

      <Form.Item
        label="结束年度"
        name="endYear"
        rules={[{ required: true, message: '请输入结束年度' }]}
      >
        <InputNumber 
          style={{ width: '100%' }}
          min={new Date().getFullYear() + 30}
          max={new Date().getFullYear() + 50}
        />
      </Form.Item>

      <Form.Item>
        <Button 
          type="primary" 
          htmlType="submit" 
          block
        >
          计算方案
        </Button>
      </Form.Item>
    </Form>
  );
};

export default InputForm;
