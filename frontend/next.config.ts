import type { NextConfig } from 'next';

function normalizeApiOrigin(raw?: string): string {
  const value = (raw || '').trim();
  if (!value) return '';
  const trimmed = value.replace(/\/+$/, '');
  if (trimmed.endsWith('/api')) return trimmed.slice(0, -4);
  return trimmed;
}

const proxiedApiOrigin = normalizeApiOrigin(
  process.env.NEXT_PUBLIC_API_ROOT || process.env.NEXT_PUBLIC_API_URL,
);

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.easybroker.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.directus.app',
        pathname: '/assets/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async rewrites() {
    if (!proxiedApiOrigin) return [];
    return [
      {
        source: '/api/:path*',
        destination: `${proxiedApiOrigin}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
