import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
  const navigate = useNavigate()

  return (
    <div className="text-center space-y-8 py-16">
      <h1 className="text-4xl font-bold">
        智能理财方案规划工具
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        为香港理财顾问打造的专业工具，快速生成最优理财方案
      </p>
      <Button 
        type="primary" 
        size="large"
        onClick={() => navigate('/calculator')}
      >
        开始使用
      </Button>
    </div>
  )
}

export default Banner
