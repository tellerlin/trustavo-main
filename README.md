# Trustavo 理财方案规划工具

## 业务需求分析

### 客户画像
- **目标用户**：香港理财顾问
- **使用场景**：
  * 客户咨询时快速生成方案
  * 多方案对比分析
  * 产品组合优化调整
- **核心痛点**：
  * 手动计算方案耗时
  * 产品组合优化复杂
  * 方案展示不够直观

### 核心功能
1. **公司主页**
   - 公司简介和价值主张
   - 产品功能介绍
   - 计算器功能入口
   - 联系方式

2. **基础理财计算器**
   - **客户需求输入**
     * 年度开支需求（范围：10万-1000万）
     * 通胀率预期（范围：0-10%）
     * 最早提取年度（范围：1-30年）
     * 结束年度（范围：5-50年）
   - **产品匹配计算**
     * 读取预设的产品IRR表
     * 按年度筛选最优IRR产品
     * 根据客户提取需求匹配产品组合
   - **方案展示**
     * 总提取金额（表格+图表）
     * 综合回报率分析
     * 合计年度保费明细
     * 推荐产品组合（含投保金额）
     * PDF报告导出功能

### 暂不实现的功能
- 用户注册和登��系统
- 复杂的产品比较功能
- 个性化推荐算法
- 数据库存储用户信息

## 技术方案设计

### 技术栈
- **前端框架**：
  * React 18 + TypeScript 5
  * React Router DOM 6.x
- **UI框架**：
  * Ant Design 5.x
  * @ant-design/icons
  * @ant-design/charts（图表组件）
  * @ant-design/pro-components
- **状态管理**：
  * Zustand 4.x
- **样式方案**：
  * TailwindCSS 3.x
  * CSS Modules
- **构建工具**：
  * Vite 5.x
  * TypeScript 5.x
- **部署平台**：
  * Cloudflare Pages
- **数据存储**：
  * 静态 JSON
  * LocalStorage 缓存
- **测试框架**：
  * Jest 29.x
  * React Testing Library
  * @testing-library/jest-dom
  * @testing-library/user-event
  * jest-axe（可访问性测试）
  * MSW（API Mock）
  * Cypress（E2E测试）
- **开发工具**：
  * ESLint 8.x
  * Prettier 3.x
  * pnpm
  * Git + GitHub
  * VS Code

### 项目结构
```
src/
├── __mocks__/           # Jest mock 文件
│   └── @ant-design/     # 第三方库 mock
│       └── charts.tsx   
├── components/          
│   ├── Layout/         # 布局组件
│   │   └── Header.tsx  # 页头组件
│   ├── Home/           # 主页相关组件
│   │   ├── Banner/     # 主页横幅
│   │   └── Features/   # 功能特点展示
│   ├── Calculator/     # 计算器相关组件
│   │   ├── InputForm/  # 需求输入表单
│   │   └── Result/     # 结果展示组件
│   └── Contact/        # 联系我们组件
│       ├── ContactForm/    # 联系表单
│       └── ContactInfo/    # 联系信息
├── pages/              
│   ├── Home.tsx        # 首页
│   ├── Calculator.tsx  # 计算器页面
│   └── Contact.tsx     # 联系我们页面
├── store/              # 状态管理
├── utils/              
│   ├── calculator/     # 计算相关工具函数
│   ├── optimization/   # 优化算法
│   └── format/         # 格式化工具
├── data/               # 静态数据
├── types/              # TypeScript 类型定义
├── styles/             # 样式文件
└── test/               # 测试相关文件
    ├── setup/          # 测试环境配置
    └── helpers/        # 测试辅助函数
```

## 数据结构设计

1. **IRR数据结构**
```typescript
interface ProductIRR {
  productId: string;
  fullName: string;      
  currency: string;      
  paymentTerm: number;   
  irrTable: {
    surrenderYear: number;
    irr: number;
  }[];
}
```

2. **产品数据结构**
```typescript
interface InsuranceProduct {
  id: string;
  company: string;         
  productName: string;     
  fullName: string;        
  minInvestment: number;   
  maxInvestment: number;   
  currency: 'HKD' | 'USD'; 
  paymentTerm: number;     
  description: string;     
  features: string[];      
}
```

3. **计算相关接口**
```typescript
interface CustomerNeed {
  yearlyExpense: number;    
  inflation: number;        
  startYear: number;        
  endYear: number;         
}

interface Solution {
  totalWithdrawal: number;  
  overallIRR: number;       
  totalPremium: number;     
  recommendations: {        
    productId: string;
    premium: number;
  }[];
}
```

## 核心算法设计

### IRR计算引擎
- 现金流计算模型
- 通胀影响计算
- 复利效应处理
- 异常情况处理机制

### 产品匹配算法
- 多维度评分机制
- 产品筛选规则
- 组合优化策略
- 约束条件处理

### 投资组合优化
- 风险平衡策略
- 收益最大化算法
- 投资限额处理
- 动态调整机制

## 计算流程设计

### 需求处理流程
1. 输入验证和标准化
2. 通胀影响计算
3. 年度现金流需求表生成
4. 总资金需求评估

### 产品匹配流程
1. IRR数据筛选和排序
2. 产品组合初筛
3. 投资金额计算和验证
4. 最优组合生成

### 结果输出流程
1. 方案数据汇总
2. 收益率计算
3. 现金流分析
4. 报告生成

## 错误处理策略

### 输入验证
- 数值范围检查
- 逻辑关系验证
- 数据类型校验
- 必填项检查

### 计算异常处理
- 无匹配产品处理
- 数据异常处理
- 计算超时处理
- 内存溢出防护

## 性能优化策略

### 数据处理优化
- 数据预加载机制
- 缓存策略设计
- 增量更新机制
- 懒加载实现

### 计算性能优化
- 并行计算处理
- 内存使用优化
- 计算任务分片
- 结果缓存机制

### 页面性能优化
- 组件按需加载
- 资源优化加载
- 渲染性能优化
- 网络请求优化

## 扩展性设计

### 产品扩展机制
- 产品接口标准化
- 计算规则配置化
- 动态加载支持
- 版本兼容处理

### 功能扩展接口
- 模块化设计
- 插件机制
- API版本控制
- 配置化支持

## 测试策略

### 单元测试
- 计算逻辑测试
- 数据处理测试
- 工具函数测试
- 组件渲染测试

### 集成测试
- 流程完整性测试
- 数据一致性测试
- 性能指标测试
- 异常处理测试

### 兼容性测试
- 浏览器兼容测试
- 设备适配测试
- 网络环境测试
- 性能阈值测试
