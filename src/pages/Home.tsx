import { Button } from 'antd'
import { CalculatorOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import '../styles/home.css'

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <section className="hero-pattern">
        <div className="grid max-w-screen-xl px-4 pt-12 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-8">
            <p className="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl">
              为香港理财顾问打造的专业规划工具，快速生成最优投资组合方案
            </p>
            <div className="space-x-4">
              <Link to="/calculator">
                <Button 
                  type="primary" 
                  size="large"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-center"
                >
                  开始使用
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-4 lg:flex">
            <img 
              src="/hero.jpg" 
              alt="Hero" 
              className="w-full h-auto max-h-[300px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="bg-white">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-12">
          <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
              强大的功能特性
            </h2>
            <p className="mb-5 font-light text-gray-600 sm:text-lg">
              专业的理财规划工具，助您提供最优质的服务
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {/* Feature 1 */}
            <div className="flex flex-col max-w-lg p-4 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow hover:shadow-xl transition-shadow">
              <div className="flex justify-center items-center mb-3">
                <span className="p-2 rounded-full bg-blue-50 text-blue-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                </span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">快速计算</h3>
              <p className="font-light text-gray-600 text-sm">秒级生成专业理财方案，提升工作效率</p>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col max-w-lg p-4 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow hover:shadow-xl transition-shadow">
              <div className="flex justify-center items-center mb-3">
                <span className="p-2 rounded-full bg-blue-50 text-blue-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">安全可靠</h3>
              <p className="font-light text-gray-600 text-sm">数据安全加密，保护客户隐私</p>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col max-w-lg p-4 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow hover:shadow-xl transition-shadow">
              <div className="flex justify-center items-center mb-3">
                <span className="p-2 rounded-full bg-blue-50 text-blue-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">专业分析</h3>
              <p className="font-light text-gray-600 text-sm">智能优化算法，提供最佳投资组合</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-12 lg:px-6">
          <div className="max-w-screen-sm mx-auto text-center">
            <h2 className="mb-4 text-2xl font-bold leading-tight tracking-tight text-gray-900">
              立即开始使用
            </h2>
            <p className="mb-6 font-light text-gray-600 md:text-lg">
              体验智能理财方案规划工具，提升您的工作效率
            </p>
            <Link to="/calculator">
              <Button 
                type="primary" 
                size="large"
                className="inline-flex items-center justify-center px-6 py-2 text-base font-medium text-center"
                icon={<CalculatorOutlined />}
              >
                开始使用
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
