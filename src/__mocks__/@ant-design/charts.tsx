import React from 'react'

export const Line = ({ data }: { data: any[] }) => (
  <div data-testid="mock-line-chart">
    {JSON.stringify(data)}
  </div>
)

// 如果还需要 mock 其他图表类型，可以在这里添加
export const Bar = ({ data }: { data: any[] }) => (
  <div data-testid="mock-bar-chart">
    {JSON.stringify(data)}
  </div>
) 