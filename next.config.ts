import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.GITHUB_PAGES === 'true' ? '/rohit-patil-portfolio' : undefined,
  typedRoutes: true,
};

export default nextConfig;
