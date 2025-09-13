/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Performance optimizations
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP'],
  },
  
  // Faster builds (swcMinify is now default in Next.js 15)
  
  // Enable webpack build cache
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // Enable webpack build cache in development
      config.cache = {
        type: 'filesystem',
        buildDependencies: {
          config: [__filename],
        },
      }
      
      // Reduce bundle analysis in dev
      config.optimization = {
        ...config.optimization,
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
      }
    }
    
    return config
  },
  
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig