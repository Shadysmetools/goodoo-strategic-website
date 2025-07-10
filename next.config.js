/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false
const isGoogleCloud = process.env.GOOGLE_CLOUD || false

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig = {
  // Enable static export for Google Cloud if needed
  // output: isGoogleCloud ? 'export' : undefined,
  
  // Remove trailing slash for better compatibility
  trailingSlash: false,
  
  assetPrefix: assetPrefix,
  basePath: basePath,
  
  // Image optimization settings
  images: {
    unoptimized: true,
    domains: ['localhost'],
    // Add your domain for production
    // domains: ['localhost', 'your-app-id.appspot.com'],
  },
  
  // Experimental features for better performance
  experimental: {
    // Enable if you need server actions
    // serverActions: true,
  },
  
  // Compression settings
  compress: true,
  
  // Power by header
  poweredByHeader: false,
  
  // React strict mode
  reactStrictMode: true,
  
  // TypeScript settings
  typescript: {
    // Don't run TypeScript during build in production
    ignoreBuildErrors: process.env.NODE_ENV === 'production',
  },
  
  // ESLint settings
  eslint: {
    // Don't run ESLint during build in production
    ignoreDuringBuilds: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig 