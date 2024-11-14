import { Layout } from 'antd'

const { Footer: AntFooter } = Layout

const Footer = () => {
  return (
    <AntFooter className="text-center bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <p>© 2024 Trustavo. All rights reserved.</p>
      </div>
    </AntFooter>
  )
}

export default Footer
