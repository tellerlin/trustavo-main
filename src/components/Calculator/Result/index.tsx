import { Card, Table, Button, Spin, Typography, Descriptions } from 'antd';
import { Line } from '@ant-design/charts';
import { formatCurrency } from '@/utils/format';
import { useCalculatorStore } from '@/store/calculatorStore';
import { useMemo, useEffect } from 'react';

const { Title, Paragraph } = Typography;

// 定义颜色常量
const COLORS = {
  PREMIUM: '#ff4d4f',    // 红色 - 保费支出
  WITHDRAWAL: '#52c41a', // 绿色 - 提取金额
  BALANCE: '#1890ff',    // 蓝色 - 累计余额
};

const Result = ({ loading = false }) => {
  const { solution, formData } = useCalculatorStore();
  const { userInfo, requirements } = formData;

  // 定义表格列配置
  const productColumns = [
    {
      title: '产品名称',
      dataIndex: 'productName',
      key: 'productName',
      fixed: 'left',
      width: 150,
    },
    {
      title: '保险公司',
      dataIndex: 'company',
      key: 'company',
      responsive: ['sm'],
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

  // 修改数据转换函数
  const transformCashFlowData = (cashFlow: any[]) => {
    if (!cashFlow) return [];
    
    return cashFlow.flatMap(item => [
      {
        year: item.year,
        type: '保费支出',
        value: item.premium,
      },
      {
        year: item.year,
        type: '提取金额',
        value: item.withdrawal,
      },
      {
        year: item.year,
        type: '累计余额',
        value: item.balance,
      },
    ]);
  };

  const chartConfig = {
    data: transformCashFlowData(solution?.cashFlow || []),
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
    smooth: true,
    color: (type: string) => {
      switch(type) {
        case '保费支出':
          return COLORS.PREMIUM;
        case '提取金额':
          return COLORS.WITHDRAWAL;
        case '累计余额':
          return COLORS.BALANCE;
        default:
          return '#000';
      }
    },
    tooltip: {
      showMarkers: true,
      domStyles: {
        'g2-tooltip': {
          backgroundColor: 'rgba(0,0,0,0.85)',
          padding: '12px 16px',
          border: 'none',
          borderRadius: '6px',
          boxShadow: '0 3px 6px -4px rgba(0,0,0,.12)',
        },
        'g2-tooltip-title': {
          color: '#fff',
          fontWeight: 600,
          marginBottom: '8px',
        },
        'g2-tooltip-list-item': {
          color: '#fff',
          marginBottom: '4px',
        },
      },
      formatter: (datum: any) => {
        if (datum && datum.value !== undefined) {
          return {
            title: `${datum.year}年`,
            items: [
              {
                name: datum.type,
                value: formatCurrency(datum.value),
              },
            ],
          };
        }
        return null;
      },
    },
    legend: {
      position: 'top',
      itemName: {
        style: {
          fontSize: 14,
          fontWeight: 500,
        },
      },
      marker: {
        symbol: 'line',
        style: ({ type }: { type: string }) => {
          const colors = {
            '保费支出': COLORS.PREMIUM,
            '提取金额': COLORS.WITHDRAWAL,
            '累计余额': COLORS.BALANCE,
          };
          return {
            lineWidth: 3,
            stroke: colors[type],
          };
        },
      },
    },
    xAxis: {
      title: { 
        text: '年份',
        style: {
          fontSize: 14,
          fontWeight: 500,
        }
      },
      grid: {
        line: {
          style: {
            stroke: '#E5E7EB',
            lineWidth: 1,
            lineDash: [4, 4],
          },
        },
      },
    },
    yAxis: {
      title: { 
        text: '金额',
        style: {
          fontSize: 14,
          fontWeight: 500,
        }
      },
      label: {
        formatter: (v: number) => `${formatCurrency(v)}`,
        style: {
          opacity: 0.8,
        },
      },
      grid: {
        line: {
          style: {
            stroke: '#E5E7EB',
            lineWidth: 1,
            lineDash: [4, 4],
          },
        },
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
      {
        type: 'legend-active',
      },
    ],
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
          <div id="report-content" className="space-y-4 sm:space-y-8 px-4 sm:px-6">
            <Title level={2} className="text-center text-xl sm:text-2xl">储蓄险理财方案</Title>

            {/* 客户信息 */}
            <Card 
              title="客户信息"
              className="shadow-sm"
              bodyStyle={{ padding: '12px 16px' }}
            >
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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
            <Card 
              title="推荐产品组合"
              className="overflow-x-auto"
            >
              <Table
                dataSource={recommendationsWithKeys}
                columns={productColumns}
                pagination={false}
                scroll={{ x: 'max-content' }}
                size="small"
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

