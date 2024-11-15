import { Table, Card, Button, Space, Select, Checkbox } from 'antd';
import { useState, useEffect, useMemo } from 'react';
import { useCalculatorStore } from '@/store/calculatorStore';
import { mockProducts } from './mockData';

const { Option } = Select;

const ProductSelection = () => {
  const { nextStep, updateFormData, formData } = useCalculatorStore();

  const paymentTerms = [1, 3, 5, 8, 10];
  const companies = [
    '安达', '安盛', '保诚', '富通', '富卫', 
    '宏利', '万通', '永明', '友邦', '中国人寿', 
    '中银人寿', '忠意'
  ];

  const [selectedTerm, setSelectedTerm] = useState<number>(formData.selectedTerm || 1);
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>(formData.selectedCompanies || companies);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>(formData.selectedProducts?.map(p => p.key) || []);

  const columns = [
    {
      title: '产品名称',
      dataIndex: 'productName',
      key: 'productName',
      width: 200,
    },
    {
      title: '保险公司',
      dataIndex: 'company',
      key: 'company',
      width: 100,
    },
    {
      title: '最低投资',
      dataIndex: 'minInvestment',
      key: 'minInvestment',
      width: 120,
      render: (value: number, record: any) => 
        `${record.currency} ${value.toLocaleString()}`,
    },
    {
      title: '缴费年期',
      dataIndex: 'paymentTerm',
      key: 'paymentTerm',
      width: 100,
      render: (value: number) => `${value}年`,
    },
    {
      title: '产品特点',
      dataIndex: 'features',
      key: 'features',
      render: (features: string[]) => (
        <div className="space-x-2">
          {features.map((feature, index) => (
            <span 
              key={index}
              className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded"
            >
              {feature}
            </span>
          ))}
        </div>
      ),
    },
    {
      title: '描述',
      dataIndex: 'description',
      key: 'description',
    },
  ];

  const filteredProducts = useMemo(() => {
    return mockProducts.filter(product => 
      product.paymentTerm === selectedTerm && 
      selectedCompanies.includes(product.company)
    );
  }, [selectedTerm, selectedCompanies]);

  useEffect(() => {
    if (!formData.selectedProducts && filteredProducts.length > 0) {
      setSelectedRowKeys(filteredProducts.map(product => product.key));
    }
  }, [filteredProducts, formData.selectedProducts]);

  const handleCompanyChange = (checkedValues: string[]) => {
    setSelectedCompanies(checkedValues);
  };

  const handleTermChange = (value: number) => {
    setSelectedTerm(value);
  };

  const handleSelectionChange = (selectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(selectedRowKeys);
    console.log('selected products:', selectedRowKeys);
  };

  const onFinish = () => {
    const selectedProducts = filteredProducts.filter(product => 
      selectedRowKeys.includes(product.key)
    );
    updateFormData('selectedTerm', selectedTerm);
    updateFormData('selectedCompanies', selectedCompanies);
    updateFormData('selectedProducts', selectedProducts);
    nextStep();
  };

  return (
    <div className="space-y-6">
      <Card title="筛选条件" className="shadow-sm">
        <div className="space-y-4">
          <div>
            <div className="mb-2 font-medium">缴费年限</div>
            <Select
              value={selectedTerm}
              onChange={handleTermChange}
              style={{ width: 200 }}
            >
              {paymentTerms.map(term => (
                <Option key={term} value={term}>{`${term}年`}</Option>
              ))}
            </Select>
          </div>

          <div>
            <div className="mb-2 font-medium">保险公司</div>
            <Checkbox.Group
              options={companies}
              value={selectedCompanies}
              onChange={handleCompanyChange as any}
              className="grid grid-cols-2 md:grid-cols-4 gap-2"
            />
          </div>
        </div>
      </Card>

      <Card title="产品列表" className="shadow-sm">
        <Table 
          columns={columns} 
          dataSource={filteredProducts}
          rowSelection={{
            type: 'checkbox',
            selectedRowKeys,
            onChange: handleSelectionChange,
          }}
          pagination={false}
        />
      </Card>
      
      <Button type="primary" onClick={onFinish} block>
        下一步
      </Button>
    </div>
  );
};

export default ProductSelection;
