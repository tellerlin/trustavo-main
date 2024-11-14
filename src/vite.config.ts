import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',          // 确保输出目录为 dist
    emptyOutDir: true,       // 每次构建前清空输出目录
    sourcemap: false,        // 根据需要启用或禁用源码映射
    minify: 'esbuild',       // 使用 esbuild 进行压缩（默认）
    target: 'es2015',        // 构建目标环境
  },
}); 