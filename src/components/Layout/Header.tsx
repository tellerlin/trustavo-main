import { Layout, Menu, Drawer, Button } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/img/logo.jpg'
import { useState } from 'react'

const { Header: AntHeader } = Layout

const Header = () => {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const menuItems = [
    { key: '/', label: '首页' },
    { key: '/calculator', label: '规划器' },
    { key: '/contact', label: '联系我们' }
  ]

  return (
    <AntHeader className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src={logo} 
            alt="Trustavo Logo" 
            className="h-6 md:h-8 w-auto mr-2 md:mr-3"
          />
          <span className="text-xl md:text-2xl font-bold text-blue-600 tracking-wider">
            TRUSTAVO卓信方案
          </span>
        </Link>
        
        {/* 桌面端菜单 */}
        <Menu
          mode="horizontal"
          selectedKeys={[location.pathname]}
          className="border-0 text-lg hidden md:block"
          items={menuItems.map(item => ({
            key: item.key,
            label: <Link to={item.key}>{item.label}</Link>
          }))}
        />

        {/* 移动端菜单按钮 */}
        <Button
          className="mobile-menu-button md:hidden"
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setMobileMenuOpen(true)}
        />

        {/* 移动端抽屉菜单 */}
        <Drawer
          title="菜单"
          placement="right"
          onClose={() => setMobileMenuOpen(false)}
          open={mobileMenuOpen}
          className="mobile-drawer"
          height="auto"
        >
          <Menu
            mode="vertical"
            selectedKeys={[location.pathname]}
            className="mobile-menu"
            items={menuItems.map(item => ({
              key: item.key,
              className: 'mobile-menu-item',
              label: <Link to={item.key} onClick={() => setMobileMenuOpen(false)}>{item.label}</Link>
            }))}
          />
        </Drawer>
      </div>
    </AntHeader>
  )
}

export default Header 