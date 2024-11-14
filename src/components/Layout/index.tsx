import { Layout as AntLayout } from 'antd';
import Header from './Header';
import Footer from './Footer';

const { Content } = AntLayout;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <AntLayout className="min-h-screen">
      <Header />
      <Content className="container mx-auto px-4 py-8">
        {children}
      </Content>
      <Footer />
    </AntLayout>
  );
};

export default Layout;
