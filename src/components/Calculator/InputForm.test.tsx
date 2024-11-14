import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import InputForm from './InputForm'

describe('InputForm', () => {
  const mockOnCalculate = jest.fn()

  beforeEach(() => {
    mockOnCalculate.mockClear()
  })

  it('should submit form with valid data', async () => {
    render(<InputForm onCalculate={mockOnCalculate} />)

    // 等待表单加载完成
    await waitFor(() => {
      expect(screen.getByLabelText(/年度开支需求/)).toBeInTheDocument()
    })

    // 输入值
    await userEvent.clear(screen.getByLabelText(/年度开支需求/))
    await userEvent.type(screen.getByLabelText(/年度开支需求/), '100000')
    
    await userEvent.clear(screen.getByLabelText(/通胀率预期/))
    await userEvent.type(screen.getByLabelText(/通胀率预期/), '3')
    
    await userEvent.clear(screen.getByLabelText(/最早提取年度/))
    await userEvent.type(screen.getByLabelText(/最早提取年度/), '5')
    
    await userEvent.clear(screen.getByLabelText(/结束年度/))
    await userEvent.type(screen.getByLabelText(/结束年度/), '10')

    // 提交表单
    const submitButton = screen.getByRole('button', { name: /计 算/i })
    await userEvent.click(submitButton)

    // 验证回调
    await waitFor(() => {
      expect(mockOnCalculate).toHaveBeenCalledWith({
        yearlyExpense: 100000,
        inflation: 0.03,
        startYear: 5,
        endYear: 10
      })
    })
  })
})
