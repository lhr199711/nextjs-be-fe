import type { NextConfig } from 'next';
const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return isDev
      ? [
          {
            source: '/api/:path*',
            destination: 'http://localhost:3005/api/:path*'
            // destination: 'https://mock.apifox.cn/m1/2398938-0-default/api/:path*'
            // basePath: false
          }
        ]
      : [];
  }
};

export default nextConfig;
