import { Table, Card, Button, Space, Slider, Checkbox } from 'antd';
import { useState, useEffect, useMemo } from 'react';
import { useCalculatorStore } from '@/store/calculatorStore';
import { mockProducts } from './mockData';

const ProductSelection = () => {
  const { nextStep, updateFormData, formData } = useCalculatorStore();

  const paymentTerms = [1, 3, 5, 8, 10];
  const companies = [
    '安达', '安盛', '保诚', '富通', '富卫', 
    '宏利', '万通', '永明', '友邦', '中国人寿', 
    '中银人寿', '忠意'
  ];

  const [selectedTermRange, setSelectedTermRange] = useState<[number, number]>(
    formData.selectedTermRange || [1, 5]
  );
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
  ];

  const filteredProducts = useMemo(() => {
    return mockProducts.filter(product => 
      product.paymentTerm >= selectedTermRange[0] && 
      product.paymentTerm <= selectedTermRange[1] && 
      selectedCompanies.includes(product.company)
    );
  }, [selectedTermRange, selectedCompanies]);

  useEffect(() => {
    if (!formData.selectedProducts && filteredProducts.length > 0) {
      setSelectedRowKeys(filteredProducts.map(product => product.key));
    }
  }, [filteredProducts, formData.selectedProducts]);

  const handleCompanyChange = (checkedValues: string[]) => {
    setSelectedCompanies(checkedValues);
  };

  const handleTermChange = (value: [number, number]) => {
    setSelectedTermRange(value);
    const newSelectedKeys = filteredProducts
      .filter(product => product.paymentTerm >= value[0] && product.paymentTerm <= value[1])
      .map(product => product.key);
    setSelectedRowKeys(newSelectedKeys);
  };

  const handleSelectionChange = (selectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(selectedRowKeys);
    console.log('selected products:', selectedRowKeys);
  };

  const onFinish = () => {
    const selectedProducts = filteredProducts.filter(product => 
      selectedRowKeys.includes(product.key)
    );
    updateFormData('selectedTermRange', selectedTermRange);
    updateFormData('selectedCompanies', selectedCompanies);
    updateFormData('selectedProducts', selectedProducts);
    nextStep();
  };

  return (
    <div className="space-y-1 sm:space-y-2 px-1 sm:px-2">
      <Card 
        title="筛选条件" 
        className="shadow-sm"
        styles={{
          header: { padding: '4px 12px' },
          body: { padding: '8px' }
        }}
      >
        <div className="space-y-1">
          <div>
            <div className="mb-0.5 font-medium">缴费年限</div>
            <Slider
              range
              min={1}
              max={10}
              step={null}
              marks={{
                1: '1年',
                3: '3年',
                5: '5年',
                8: '8年',
                10: '10年'
              }}
              value={selectedTermRange}
              onChange={handleTermChange}
              className="w-full sm:w-[400px]"
              included={true}
              tooltipVisible={false}
            />
          </div>

          <div>
            <div className="mb-0.5 font-medium">保险公司</div>
            <Checkbox.Group
              options={companies}
              value={selectedCompanies}
              onChange={handleCompanyChange as any}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1"
            />
          </div>
        </div>
      </Card>

      <Card 
        title="产品列表" 
        className="shadow-sm"
        styles={{
          header: { padding: '4px 12px' },
          body: { padding: '4px', overflowX: 'auto' }
        }}
      >
        <Table 
          columns={columns} 
          dataSource={filteredProducts}
          rowSelection={{
            type: 'checkbox',
            selectedRowKeys,
            onChange: handleSelectionChange,
          }}
          pagination={false}
          scroll={{ x: 'max-content' }}
          size="small"
        />
      </Card>
      
      <Button 
        type="primary" 
        onClick={onFinish} 
        block
        size="middle"
        className="mt-1"
      >
        下一步
      </Button>
    </div>
  );
};

export default ProductSelection;
