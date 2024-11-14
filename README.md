# Trustavo 理财方案规划工具

## 文档说明
本文档面向开发人员，主要说明项目的技术架构、文件结构、数据结构和业务流程等开发相关内容。项目包含公司官网展示和理财方案规划工具两大部分，一期主要聚焦储蓄险产品的规划工具开发。

## 业务描述

### 项目概述
本项目是面向香港理财师的专业理财方案规划工具，通过标准化的流程和AI辅助分析，帮助理财师快速生成专业的储蓄险规划方案。

### 核心功能
1. **公司官网**
   - 展示公司价值主张和核心功能
   - 提供在线咨询和联系方式
   - 理财师登录入口

2. **理财方案规划工具**
   - 理财师账户管理
   - 客户信息管理
   - 储蓄险产品筛选
   - 方案计算和生成
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

## 已完成页面

### 公司官网
1. **首页 (Home.tsx)**
   - Hero 区块：展示产品价值主张
   - 功能特点：AI分析、方案对比、产品优化
   - 公司介绍：关于我们和使命愿景

2. **联系页面 (Contact.tsx)**
   - 公司联系信息
   - 在线咨询表单
   - 社交媒体链接

### 理财工具
1. **计算器页面 (Calculator.tsx)**
   - 多步骤表单流程
   - 进度展示
   - 方案生成

## 业务流程

### 理财方案规划流程
1. **登录验证**
   - 理财师账号登录
   - 权限验证

2. **客户信息录入**
   - 基本信息（姓名、性别、年龄）
   - 家庭成员信息

3. **产品筛选**
   - 储蓄险产品列表
   - 产品详情查看
   - 候选产品选择

4. **需求设置**
   - 年度开支需求
   - 通胀率预期
   - 提取期间设置

5. **方案生成**
   - 产品组合建议
   - 现金流分析
   - PDF报告导出

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
  fullName: string;
  minInvestment: number;
  maxInvestment: number;
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
    premium: number;
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
- [ ] 产品服务页面开发
- [ ] 理财师功能完善
  * 登录注册
  * 个人中心
  * 客户管理
- [ ] 计算器功能
  * 用户信息表单完善
  * 产品选择界面开发
  * 需求录入表单
  * PDF导出功能
- [ ] 系统优化
  * 表单验证增强
  * 响应式适配优化
  * 错误处理完善
  * 单元测试覆盖
