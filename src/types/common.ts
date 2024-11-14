// 通用类型定义
export type Currency = 'HKD' | 'USD';

export interface SelectOption {
  label: string;
  value: string | number;
}

export interface TablePagination {
  current: number;
  pageSize: number;
  total: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
