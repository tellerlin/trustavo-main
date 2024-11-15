import { Card, Table, Button, Spin, Typography } from 'antd';
import { Line } from '@ant-design/charts';
import { formatCurrency } from '@/utils/format';
import { useCalculatorStore } from '@/store/calculatorStore';
import { useMemo } from 'react';

const { Title, Paragraph } = Typography;

const Result = ({ loading = false }) => {
  console.log('Rendering Result component');
  const solution = useCalculatorStore((state) => state.solution);
  console.log('Solution data:', solution);

  // 为推荐产品添加唯一 key
  const recommendationsWithKeys = useMemo(() => {
    return solution?.recommendations.map((rec, index) => ({
      ...rec,
      key: rec.productId || `rec-${index}` // 使用 productId 作为 key，如果没有则使用索引
    }));
  }, [solution?.recommendations]);

  const productColumns = [
    {
      title: '产品名称',
      key: 'fullName',
      render: (_, record) => `${record.company}-${record.productName}`
    },
    {
      title: '年度保费',
      dataIndex: 'premium',
      key: 'premium',
      render: (value: number) => formatCurrency(value)
    },
    {
      title: '产品特点',
      dataIndex: 'features',
      key: 'features',
      render: (features: string[]) => (
        <div className="space-x-2">
          {features?.map((feature, index) => (
            <span 
              key={`${feature}-${index}`} // 使用更好的 key
              className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded"
            >
              {feature}
            </span>
          ))}
        </div>
      )
    }
  ];

  // 现金流图表配置
  const chartConfig = {
    data: solution?.cashFlow || [],
    xField: 'year',
    yField: 'balance',
    smooth: true,
    point: {
      size: 5,
      shape: 'diamond',
    },
    tooltip: {
      formatter: (datum: any) => {
        return {
          name: '累计余额',
          value: formatCurrency(datum.balance)
        };
      }
    }
  };

  return (
    <Spin spinning={loading}>
      {solution ? (
        <div className="space-y-8">
          <Title level={2} className="text-center">储蓄险理财方案</Title>

          {/* 方案概览 */}
          <Card title="方案概览">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-gray-500">总提取金额</div>
                <div className="text-xl font-bold">
                  {formatCurrency(solution.totalWithdrawal)}
                </div>
              </div>
              <div>
                <div className="text-gray-500">综合回报率</div>
                <div className="text-xl font-bold text-red-600">
                  {(solution.overallIRR * 100).toFixed(2)}%
                </div>
              </div>
              <div>
                <div className="text-gray-500">合计年度保费</div>
                <div className="text-xl font-bold">
                  {formatCurrency(solution.totalPremium)}
                </div>
              </div>
            </div>
          </Card>

          {/* 推荐产品组合 */}
          <Card title="推荐产品组合">
            <Table
              dataSource={recommendationsWithKeys}
              columns={productColumns}
              pagination={false}
              rowKey="key" // 明确指定 rowKey
            />
          </Card>

          {/* 方案解读 */}
          <Card title="方案解读">
            <Paragraph className="whitespace-pre-line">
              {solution.analysis}
            </Paragraph>
          </Card>

          {/* 现金流分析 */}
          <Card title="现金流分析">
            <Line {...chartConfig} />
          </Card>

          <Button type="primary" block size="large">
            导出PDF报告
          </Button>
        </div>
      ) : (
        <div>加载中...</div>
      )}
    </Spin>
  );
};

export default Result;
