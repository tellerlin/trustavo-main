# Trustavo 网站开发 - README

本 README 文档概述了 Trustavo 网站的开发流程。Trustavo 是一款旨在帮助香港的理财顾问为客户制定理财方案的工具。项目的第一期将专注于香港储蓄险产品的实现。

## 项目概述

### 目标

1. **推广主页**：创建一个简单且美观的主页，用于推广 Trustavo，介绍公司及产品功能。
2. **理财规划工具**：让理财顾问能够输入客户信息，并基于预设的保险产品数据提供建议。

**注**：用户注册和登录部分将在后期版本中实现。

### 技术栈

- **前端**：React 和 TypeScript（使用 Cloudflare Pages 构建）
- **后端**：Cloudflare Workers，参考 Express.js 的组织模式
- **数据库**：Cloudflare D1，使用本地 SQLite 数据库进行本地开发

## 开发环境设置

### 前端开发

#### 技术选型

- **框架**：React（使用 TypeScript）
- **UI 组件库**：Ant Design

#### 本地开发

在本地开发环境中，使用以下命令启动开发服务器：
1. 安装依赖：`npm install`
2. 启动开发服务器：`npm run dev`

### 后端开发

#### 理财规划逻辑

- 开发逻辑以处理用户输入（如年收入、年龄等）并推荐简单的保险产品配置。

#### 数据库设置

- 使用 Cloudflare D1 存储保险产品数据。
- 本地开发时使用 SQLite 进行数据库测试。

## 构建和部署说明

### 构建

使用 Vite 作为构建工具：
1. 构建项目：`npm run build`
2. 构建完成后，生产文件将输出到 `dist` 目录。

### 部署

Cloudflare Pages 配置：
- **Framework Preset**: React (Vite)
- **Build Output Directory**: dist

### 环境变量

配置必要的环境变量以进行身份验证和数据库访问。

## 本地开发和测试

### 先决条件

- 拥有 Cloudflare 帐户并访问 Pages、Workers 和 D1。
- 熟悉 HTML、CSS、JavaScript 及 SQL 数据库管理。
- 在本地安装 SQLite 用于数据库测试。

### 安装

克隆代码库：
1. `git clone https://github.com/yourusername/trustavo.git`
2. 进入项目文件夹：`cd trustavo`

### 配置

- **Cloudflare Pages**：将前端代码部署到 Cloudflare Pages，分别为 trustavo.com 和 login.trustavo.com。
- **Workers 和 D1**：配置 Workers 脚本以实现后端逻辑，设置并填充 D1 数据库。

### 本地运行

使用 Cloudflare Wrangler CLI 工具在本地进行测试。

## 联系方式

如有任何问题或需要支持，请联系开发团队：support@trustavo.com。
