import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import heroImage from '../assets/img/hero.jpg'; // 引入本地背景图片
import '../styles/tailwind.css';
import '../styles/landing.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // 引入 Font Awesome CSS

const Home: React.FC = () => {
  return (
    <>
      <Navbar transparent />
      <main>
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
                    专业的理财方案规划工具
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    Trustavo 理财方案规划工具，助您为客户提供高效、精准的理财方案，简化财务规划流程，提升专业服务水平。
                  </p>
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
                      <i className="fas fa-chart-line"></i>
                    </div>
                    <h6 className="text-xl font-semibold">高效计算</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      自动化处理复杂的理财计算，节省您的时间，提高工作效率。
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
                      根据市场变化和客户需求，实时优化产品组合，确保方案的持续有效性。
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
                  Trustavo 专注于为香港理财顾问提供先进的理财方案规划工具。我们的平台集成了高效的计算引擎、多方案对比分析及产品组合优化功能，旨在简化复杂的理财规划流程，提升顾问的专业服务能力。
                </p>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  通过使用 Trustavo，您可以快速生成符合客户需求的理财方案，进行多维度的方案对比分析，并根据市场动态实时优化产品组合，确保为客户提供最优质的理财建议。
                </p>
              </div>

              {/* Company Mission */}
              <div className="w-full md:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">我们的使命</h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  我们的使命是通过技术创新，帮助理财顾问提升工作效率，优化客户体验，实现客户财务目标。Trustavo 致力于成为您值得信赖的合作伙伴，为您和您的客户带来卓越的理财规划解决方案。
                </p>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  我们相信，精准、高效的理财规划是帮助客户实现财务自由的关键。通过持续优化我们的工具和服务，Trustavo 希望为香港理财顾问提供最强有力的支持，共同推动理财行业的发展。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
