import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import '../styles/layout.css';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[calc(100vh-120px)] flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white hero-pattern"></div>
      </section>

      {/* Features */}
      <section className="relative mt-32 py-16 sm:py-24">
        <div className="max-w-screen-lg mx-auto px-8">
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-3xl font-medium tracking-tight text-gray-900">
              强大的功能特性
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              专业的理财规划工具，助您提供最优质的服务
            </p>
          </div>
          <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3 lg:gap-x-12">
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900">快速计算</h3>
              <p className="mt-2 text-base text-gray-600">秒级生成专业理财方案</p>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900">安全可靠</h3>
              <p className="mt-2 text-base text-gray-600">数据安全加密存储</p>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900">专业分析</h3>
              <p className="mt-2 text-base text-gray-600">智能优化投资组合</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 bg-gray-50">
        <div className="max-w-screen-lg mx-auto px-8 text-center">
          <h2 className="text-3xl font-medium text-gray-900">
            立即开始使用
          </h2>
          <p className="mt-4 mb-8 text-lg text-gray-600">
            体验智能理财方案规划工具，提升您的工作效率
          </p>
          <Link to="/calculator">
            <Button 
              type="primary" 
              size="large"
              className="px-8 h-12 text-base rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              开始使用
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
