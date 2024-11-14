import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom' // 确保 jest-dom 被正确导入
import Result from './Result'
import { useCalculatorStore } from '@/store'

// Mock store
jest.mock('@/store', () => ({
  useCalculatorStore: () => ({
    solution: {
      totalWithdrawal: 1200000,
      overallIRR: 0.055,
      totalPremium: 800000,
      recommendations: [
        { productId: 'A', premium: 500000 },
        { productId: 'B', premium: 300000 }
      ]
    }
  })
}))

// Mock charts
jest.mock('@ant-design/charts', () => ({
  Line: ({ data }: { data: any[] }) => (
    <div data-testid="mock-line-chart">{JSON.stringify(data)}</div>
  )
}))

describe('Result', () => {
  it('should render calculation results', () => {
    render(<Result />)
    
    expect(screen.getByText(/总提取金额/)).toBeInTheDocument()
    expect(screen.getByText(/\$1,200,000/)).toBeInTheDocument()
    expect(screen.getByText('5.5%')).toBeInTheDocument()
  })

  it('should render recommendations table', () => {
    render(<Result />)
    
    expect(screen.getByText('A')).toBeInTheDocument()
    expect(screen.getByText('B')).toBeInTheDocument()
    expect(screen.getByText(/\$500,000/)).toBeInTheDocument()
    expect(screen.getByText(/\$300,000/)).toBeInTheDocument()
  })

  it('should render chart', () => {
    render(<Result />)
    
    expect(screen.getByTestId('mock-line-chart')).toBeInTheDocument()
  })
})
