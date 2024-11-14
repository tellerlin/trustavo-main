import { Form, InputNumber, DatePicker, Button } from 'antd';
import { useCalculatorStore } from '@/store/calculatorStore';

const InputForm = () => {
  const { nextStep, updateFormData } = useCalculatorStore();

  const onFinish = (values: any) => {
    console.log('Requirements:', values);
    updateFormData('requirements', values);
    nextStep();
  };

  return (
    <Form
      name="requirements"
      onFinish={onFinish}
      layout="vertical"
    >
      <Form.Item
        name="yearlyExpense"
        label="年度开支需求"
        rules={[{ required: true, message: '请输入年度开支需求' }]}
      >
        <InputNumber 
          min={0} 
          formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value!.replace(/\$\s?|(,*)/g, '')}
          style={{ width: '100%' }}
        />
      </Form.Item>

      <Form.Item
        name="inflation"
        label="通胀率预期"
        rules={[{ required: true, message: '请输入通胀率预期' }]}
      >
        <InputNumber
          min={0}
          max={100}
          formatter={value => `${value}%`}
          parser={value => value!.replace('%', '')}
          style={{ width: '100%' }}
        />
      </Form.Item>

      <Form.Item
        name="period"
        label="提取期间"
        rules={[{ required: true, message: '请选择提取期间' }]}
      >
        <DatePicker.RangePicker 
          picker="year"
          style={{ width: '100%' }}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          生成方案
        </Button>
      </Form.Item>
    </Form>
  );
};

export default InputForm;
