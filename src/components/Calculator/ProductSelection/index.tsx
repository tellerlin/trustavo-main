import { Table, Card, Button, Space } from 'antd';
import { useCalculatorStore } from '@/store/calculatorStore';

const ProductSelection = () => {
  const { nextStep, updateFormData } = useCalculatorStore();

  const columns = [
    {
      title: '产品名称',
      dataIndex: 'productName',
      key: 'productName',
    },
    {
      title: '保险公司',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: '最低投资',
      dataIndex: 'minInvestment',
      key: 'minInvestment',
    },
    {
      title: '货币',
      dataIndex: 'currency',
      key: 'currency',
    },
    {
      title: '缴费年期',
      dataIndex: 'paymentTerm',
      key: 'paymentTerm',
    },
  ];

  // TODO: 从 API 获取产品数据
  const products = [];

  const onFinish = () => {
    updateFormData('products', products);
    nextStep();
  };

  return (
    <div className="space-y-4">
      <Table 
        columns={columns} 
        dataSource={products}
        rowSelection={{
          type: 'checkbox',
          onChange: (selectedRowKeys) => {
            console.log('selected:', selectedRowKeys);
          },
        }}
      />
      
      <Button type="primary" onClick={onFinish} block>
        下一步
      </Button>
    </div>
  );
};

export default ProductSelection;
