import { Layout as AntLayout } from 'antd'
import Header from './Header'

const { Content } = AntLayout

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AntLayout className="min-h-screen">
      <Header />
      <Content className="pt-16">
        {children}
      </Content>
    </AntLayout>
  )
}

export default Layout 