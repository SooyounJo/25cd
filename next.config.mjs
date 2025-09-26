import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  
  // HMR 설정 최적화
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // HMR 폴링 간격 조정 (기본 1000ms -> 3000ms)
      config.watchOptions = {
        poll: 3000,
        aggregateTimeout: 500,
        ignored: [
          '**/node_modules/**',
          '**/.git/**',
          '**/.next/**',
          '**/public/**'
        ]
      };
      
      // 파일 변경 감지 최적화
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // HMR 관련 청크 분리
            hmr: {
              name: 'hmr',
              chunks: 'all',
              test: /[\\/]node_modules[\\/].*\.(js|jsx|ts|tsx)$/,
              priority: 10,
              reuseExistingChunk: true
            }
          }
        }
      };
    }
    
    return config;
  },
  
  // 개발 서버 설정
  devIndicators: {
    buildActivity: false, // 빌드 활동 표시기 비활성화
    buildActivityPosition: 'bottom-right'
  },
  
  // 파일 시스템 감시 최적화
  experimental: {
    optimizeCss: false, // CSS 최적화 비활성화 (개발 중)
    optimizePackageImports: ['react', 'react-dom']
  }
};

export default nextConfig;
