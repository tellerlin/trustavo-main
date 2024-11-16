import React from "react";
import logo from '@/assets/img/logo.jpg';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-300 pt-8 pb-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap justify-center md:justify-start">
              <div className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 mb-6">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  其他产品
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://www.trustavo.com/free-products"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      重疾险方案规划
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 mb-6">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  其他信息
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://www.trustavo.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      隐私政策
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="text-center">
          <div className="text-sm text-gray-600 font-semibold py-1">
            Copyright © {new Date().getFullYear()}{" "}
            Trustavo卓信方案有限公司. 版权所有.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
