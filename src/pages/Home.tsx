import React from 'react';
import heroImage from '@/assets/img/hero.jpg';

const Home: React.FC = () => {
  return (
    <>
      {/* Banner Section */}
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{ minHeight: '75vh' }}
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url(${heroImage})`, // 使用本地背景图片
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  理财规划大师
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  Trustavo 融合人工智能技术，为理财顾问提供智能化的方案规划工具。通过AI动的数据分析，助您制定更精准、更专业的理财方案。
                </p>
                <div className="mt-8">
                  <a
                    href="/calculator"
                    className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-base px-8 py-3 rounded-lg shadow-md hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                  >
                    开始试用
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: '70px' }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>

      {/* Features Section */}
      <section className="pb-20 bg-gray-300 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            {/* Feature 1 */}
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-robot"></i>
                  </div>
                  <h6 className="text-xl font-semibold">AI智能分析</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    运用人工智能技术，智能分析客户需求，提供更精准的理财建议。
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    <i className="fas fa-clipboard-list"></i>
                  </div>
                  <h6 className="text-xl font-semibold">方案对比</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    提供多方案对比分析，帮助您为客户选择最优的理财组合。
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                    <i className="fas fa-clipboard-check"></i>
                  </div>
                  <h6 className="text-xl font-semibold">产品优化</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    根据市场变化和客户需求，实时优化产组合，确保方案的持续有效。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction Section */}
      <section className="pb-20 bg-gray-300 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            {/* Company Description */}
            <div className="w-full md:w-6/12 px-4">
              <h2 className="text-4xl font-semibold">关于我们</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Trustavo 将人工智能技术与理财规划完美结合，为香港理财顾问打造新一代智能规划工具。我们的AI引擎能够快速分析海量数据，帮助您制定更精准的投资策略，大幅提升服务效率和专业水平。
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                借助 Trustavo 的AI分析能力，您可以更快速地理解客户需求，生成个性化的理财方案，并通过数据驱动的方式持续优化投资组合，为客户创造更大的价值。
              </p>
            </div>

            {/* Company Mission */}
            <div className="w-full md:w-6/12 px-4">
              <h2 className="text-4xl font-semibold">我们的使命</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                我们致力于AI技术赋能理财顾问，让每一位专业人士都能借助人工智能的力量，提供更专业、更精准的理财服务。Trustavo 将成为您的智能助手，助力您在数字化时代保持竞争优势。
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                我们相信，AI与人类专业知识的结合将重新定义理财服务的未来。通过不断创新和优化我们的AI算法，Trustavo 将持续为香港理财顾问提供领先的技术支持，推动行业向更智能化的方向发展。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
