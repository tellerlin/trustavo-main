# Trustavo 理财方案规划工具

## 文档说明
本文档面向开发人员，主要说明项目的技术架构、文件结构、数据结构和业务流程等开发相关内容。项目包含公司官网展示和理财方案规划工具两大部分，一期主要聚焦储蓄险产品的规划工具开发。

## 业务描述

### 项目概述
本项目是面向香港理财师的专业理财方案规划工具，通过标准化的流程和AI辅助分析，帮助理财师快速生成专业的储蓄险规划方案。主要特点：
- 产品筛选：支持按缴费年限和保险公司筛选
- 需求分析：支持设置年度开支、通胀率等参数
- 方案生成：自动生成产品组合建议和现金流分析

### 核心功能
1. **公司官网**
   - 展示公司价值主张和核心功能
   - 提供在线咨询和联系方式
   - 理财师登录入口

2. **理财方案规划工具**
   - 产品筛选和对比
   - 需求参数设置
   - 方案计算和生成
   - 现金流分析
   - PDF报告导出

### 目标用户
- **主要用户**：香港理财师
- **最终受益**：理财师的客户
- **使用场景**：理财师为客户规划储蓄险方案时使用

## 技术栈
- **核心框架**: React 18 + TypeScript 5
- **UI框架**: Ant Design 5
- **状态管理**: Zustand
- **样式方案**: TailwindCSS
- **构建工具**: Vite
- **开发工具**: ESLint + Prettier

## 项目结构
```
src/
├── components/          
│   ├── Calculator/     # 计算器相关组件
│   │   ├── LoginForm/      # 登录表单
│   │   ├── UserInfoForm/   # 用户信息表单
│   │   ├── ProductSelection/ # 产品选择
│   │   ├── InputForm/      # 需求输入表单
│   │   └── Result/         # 结果展示
│   └── Layout/         # 布局组件
│       ├── Navbar.tsx      # 导航栏
│       └── Footer.tsx      # 页脚
├── pages/              # 页面组件
│   ├── Home.tsx           # 公司主页
│   ├── Contact.tsx        # 联系我们
│   └── Calculator.tsx     # 计算器页面
├── store/              # 状态管理
│   └── calculatorStore.ts  # 计算器状态
├── styles/             # 样式文件
│   ├── tailwind.css       # Tailwind 样式
│   └── landing.css        # 落地页样式
├── assets/             # 静态资源
│   └── img/               # 图片资源
├── types/              # 类型定义
│   └── index.ts          # 类型声明文件
└── utils/              # 工具函数
    ├── calculator.ts      # 计算相关
    └── format.ts          # 格式化工具
```

## 已完成功能

### 导航功能
- 简化步骤说明为：登录、个人信息、产品筛选、需求录入、推荐方案
- 支持步骤间自由切换
- 保留已填写数据
- 防止跳过必要步骤
- 移动端优化的步骤导航栏

### 产品筛选模块
1. **筛选功能**
   - 缴费年限：1年、3年、5年、8年、10年
   - 保险公司：12家主流保险公司
   - 响应式网格布局的公司选择
   - 移动端适配的产品表格，支持横向滚动
   - **默认全选符合条件的产品**

2. **需求设置**
   - 移动端友好的表单布局
   - 年度开支需求输入，默认值为20万
   - 通胀率预期设置，范围为1%到10%
   - 提取期间选择，默认范围为10年到30年

3. **方案展示**
   - 响应式方案概览布局
     * 总提取金额
     * 综合回报率
     * 合计年度保费
   - 移动端优化的产品组合表格
   - 自适应的现金流分析图表
   - PDF报告导出功能（使用html2pdf.js实现）
   - 响应式的客户信息展示
   - 移动端友好的需求参数展示

4. **用户信息**
   - 默认性别设置为男性
   - 支持添加家庭成员信息
   - 表单数据持久化，支持返回修改

### 依赖说明
```json
{
  "dependencies": {
    "@ant-design/charts": "^1.4.2",
    "antd": "^5.0.0",
    "html2pdf.js": "^0.10.1",
    "react": "^18.2.0",
    "zustand": "^4.4.1"
  }
}
```

## 业务流程

### 理财方案规划流程
1. **产品筛选**
   - 选择缴费年限
   - 选择保险公司
   - 查看产品详情
   - 选择目标产品

2. **需求设置**
   - 输入年度开支需求
   - 设置通胀率预期
   - 设置提取期间

3. **方案生成**
   - 显示方案概览
   - 展示推荐产品组合
   - 提供方案解读
   - 展示现金流分析

## 数据结构

### 用户信息 (UserInfo)
```typescript
interface UserInfo {
  name: string;
  gender: 'male' | 'female';
  age: number;
  familyMembers: FamilyMember[];
}
```

### 保险产品 (InsuranceProduct)
```typescript
interface InsuranceProduct {
  id: string;
  company: string;
  productName: string;
  minInvestment: number;
  currency: 'HKD' | 'USD';
  paymentTerm: number;
  description: string;
  features: string[];
}
```

### 客户需求 (CustomerNeed)
```typescript
interface CustomerNeed {
  yearlyExpense: number;
  inflation: number;
  startYear: number;
  endYear: number;
}
```

### 方案结果 (Solution)
```typescript
interface Solution {
  totalWithdrawal: number;
  overallIRR: number;
  totalPremium: number;
  recommendations: {
    productId: string;
    productName: string;
    company: string;
    premium: number;
    features: string[];
    description: string;
  }[];
  analysis: string;
  cashFlow: {
    year: number;
    premium: number;
    withdrawal: number;
    balance: number;
  }[];
}
```

## 开发规范

### Git 提交规范
- feat: 新功能
- fix: 修复问题
- docs: 文档修改
- style: 代码格式修改
- refactor: 代码重构
- test: 测试用例修改
- chore: 其他修改

### 开发规范
- 使用 TypeScript 严格模式
- 组件使用函数组件和 Hooks
- 组件文件使用 PascalCase 命名
- 工具函数使用 camelCase 命名
- 使用 Tailwind CSS 进行样式开发
- 组件保持纯展示，逻辑放在 hooks 中
- 所有金额计算保留两位小数
- 百分比显示保留一位小数

## 待开发功能
- [x] 移动端适配
  * 响应式布局优化
  * 表格横向滚动
  * 步骤导航优化
  * 图表自适应
- [x] 方案功能
  * PDF报告生成
  * 方案存档
  * 方案分享
- [ ] 用户系统
  * 理财师登录注册
  * 个人中心
  * 客户管理
- [ ] 产品管理
  * 产品数据管理
  * 产品详情页面
  * 产品对比功能
- [ ] 系统优化
  * 性能优化
  * 单元测试
  * 图表样式优化
