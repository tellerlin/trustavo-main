import { Card, Table, Button, Spin, Typography, Descriptions } from 'antd';
import { Line } from '@ant-design/charts';
import { formatCurrency } from '@/utils/format';
import { useCalculatorStore } from '@/store/calculatorStore';
import { useMemo, useEffect } from 'react';

const { Title, Paragraph } = Typography;

const Result = ({ loading = false }) => {
  const { solution, formData } = useCalculatorStore();
  const { userInfo, requirements } = formData;

  // 定义表格列配置
  const productColumns = [
    {
      title: '保险公司',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: '产品名称',
      dataIndex: 'productName',
      key: 'productName',
    },
    {
      title: '年度保费',
      dataIndex: 'premium',
      key: 'premium',
      render: (value: number) => formatCurrency(value),
    },
    {
      title: '产品特点',
      dataIndex: 'features',
      key: 'features',
      render: (features: string[]) => features.join('、'),
    },
  ];

  // 为推荐产品添加唯一 key
  const recommendationsWithKeys = useMemo(() => {
    return solution?.recommendations.map((rec, index) => ({
      ...rec,
      key: rec.productId || `rec-${index}`
    }));
  }, [solution?.recommendations]);

  // 图表配置优化
  const chartConfig = {
    data: solution?.cashFlow || [],
    xField: 'year',
    yField: 'balance',
    seriesField: 'type',
    smooth: true,
    animation: {
      appear: {
        animation: 'path-in',
        duration: 1000,
      },
    },
    legend: {
      position: 'top',
    },
    xAxis: {
      title: { text: '年份' },
    },
    yAxis: {
      title: { text: '金额' },
      label: {
        formatter: (v: number) => `${formatCurrency(v)}`,
      },
    },
    tooltip: {
      formatter: (datum: any) => {
        return { name: datum.type, value: formatCurrency(datum.balance) };
      },
    },
  };

  // 处理打印功能
  const handlePrint = () => {
    window.print();
  };

  // 添加打印样式
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @media print {
        @page { 
          size: A4; 
          margin: 2cm; 
        }
        body * { 
          visibility: hidden; 
        }
        #report-content, #report-content * { 
          visibility: visible; 
        }
        #report-content { 
          position: absolute; 
          left: 0; 
          top: 0; 
          width: 100%; 
        }
        .no-print { 
          display: none !important; 
        }
        .ant-card { 
          break-inside: avoid; 
          margin-bottom: 20px; 
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Spin spinning={loading}>
      {solution ? (
        <>
          <div id="report-content" className="space-y-8">
            <Title level={2} className="text-center">储蓄险理财方案</Title>

            {/* 客户信息 */}
            <Card title="客户信息">
              <Descriptions 
                column={{ xs: 1, sm: 2 }}
                className="w-full"
              >
                <Descriptions.Item label="姓名">{userInfo?.name}</Descriptions.Item>
                <Descriptions.Item label="性别">
                  {userInfo?.gender === 'male' ? '男' : '女'}
                </Descriptions.Item>
                <Descriptions.Item label="年龄">{userInfo?.age}岁</Descriptions.Item>
                {userInfo?.familyMembers?.length > 0 && (
                  <Descriptions.Item label="家庭成员">
                    {userInfo.familyMembers.map((member: any, index: number) => (
                      <span key={index}>
                        {index > 0 && '、'}
                        {member.relationship === 'spouse' ? '配偶' : 
                         member.relationship === 'child' ? '子女' : '父母'}
                        : {member.age}岁
                      </span>
                    ))}
                  </Descriptions.Item>
                )}
              </Descriptions>
            </Card>

            {/* 需求信息 */}
            <Card title="理财需求">
              <Descriptions 
                column={{ xs: 1, sm: 2 }}
                className="w-full"
              >
                <Descriptions.Item label="年度开支需求">
                  {formatCurrency(requirements?.yearlyExpense)}
                </Descriptions.Item>
                <Descriptions.Item label="通胀率预期">
                  {(requirements?.inflation * 100).toFixed(1)}%
                </Descriptions.Item>
                <Descriptions.Item label="提取期间">
                  {requirements?.startYear} - {requirements?.endYear}
                </Descriptions.Item>
              </Descriptions>
            </Card>

            {/* 方案概览 */}
            <Card title="方案概览">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
                rowKey="key"
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
          </div>

          <Button 
            type="primary" 
            block 
            size="large" 
            onClick={handlePrint}
            className="no-print mt-8"
          >
            导出PDF报告
          </Button>
        </>
      ) : (
        <div>加载中...</div>
      )}
    </Spin>
  );
};

export default Result;
