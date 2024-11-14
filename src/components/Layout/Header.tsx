import { Layout, Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/img/logo.jpg'

const { Header: AntHeader } = Layout

const Header = () => {
  const location = useLocation()
  
  const menuItems = [
    { key: '/', label: '首页' },
    { key: '/calculator', label: '计算器' },
    { key: '/contact', label: '联系我们' }
  ]

  return (
    <AntHeader className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src={logo} 
            alt="Trustavo Logo" 
            className="h-8 w-auto mr-3"
          />
          <span className="text-3xl font-bold text-blue-600 tracking-wider">
            TRUSTAVO卓信方案
          </span>
        </Link>
        <Menu
          mode="horizontal"
          selectedKeys={[location.pathname]}
          className="border-0 text-lg"
          items={menuItems.map(item => ({
            key: item.key,
            label: <Link to={item.key}>{item.label}</Link>
          }))}
        />
      </div>
    </AntHeader>
  )
}

export default Header 