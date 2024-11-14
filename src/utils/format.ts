export const formatCurrency = (
  amount: number,
  currency: string = 'USD',
  decimals: number = 2
): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(amount)
}

export const formatPercentage = (
  value: number,
  decimals: number = 2
): string => {
  return `${(value * 100).toFixed(decimals)}%`
}
