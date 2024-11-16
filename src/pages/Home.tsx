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
            backgroundImage: `url(${heroImage})`,
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
                  Trustavo运用最新的AI技术，为香港理财师打造智能规划工具。基于深度学习和大数据分析，15分钟内为您生成专业的理财规划方案，让规划更智能、更精准、更高效。
                </p>
                <div className="mt-8">
                  <a
                    href="/calculator"
                    className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-base px-8 py-3 rounded-lg shadow-md hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                  >
                    立即体验
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="pb-20 bg-gray-300 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-robot"></i>
                  </div>
                  <h6 className="text-xl font-semibold">AI智能分析</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    采用最新的深度学习技术，智能分析客户需求，提供数据驱动的专业建议，让规划更科学。
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    <i className="fas fa-brain"></i>
                  </div>
                  <h6 className="text-xl font-semibold">智能产品匹配</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    基于机器学习算法，从海量产品中智能筛选最优组合，为客户定制专属理财方案。
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <h6 className="text-xl font-semibold">专业报告生成</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    自动生成包含AI分析洞察的专业报告，提供现金流分析、收益预测等多维度分析。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Introduction */}
          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-6/12 px-4">
              <h2 className="text-4xl font-semibold">关于Trustavo</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Trustavo是一款融合AI技术的智能理财规划平台。我们运用深度学习和大数据分析技术，为香港理财师提供智能化的规划工具，帮助他们更高效地完成方案规划工作。
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                我们的AI引擎基于海量数据训练，能精准分析客户需求，智能匹配最优产品组合，并生成专业的分析报告，让理财规划更智能、更专业。
              </p>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <h2 className="text-4xl font-semibold">我们的使命</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                我们致力于用AI技术重新定义理财规划流程，让每位理财师都能借助智能工具，为客户提供更专业、更高效的理财服务。
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                通过不断优化AI算法和产品功能，Trustavo将持续引领行业创新，推动香港理财行业迈向智能化新时代。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
