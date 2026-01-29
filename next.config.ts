import type { NextConfig } from 'next';
const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return isDev
      ? [
          {
            source: '/api/:path*',
            destination: 'http://127.0.0.1:4523/m1/2411127-2980161-default/:path*'
            // basePath: false
          }
        ]
      : [];
  }
};

export default nextConfig;
