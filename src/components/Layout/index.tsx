import React from 'react';
import { Layout as AntLayout } from 'antd';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const { Content } = AntLayout;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Content className="flex-grow mt-16 md:mt-20">
        {children}
      </Content>
      <Footer />
    </div>
  );
};

export default Layout; 