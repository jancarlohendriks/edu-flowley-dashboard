/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // basePath: '/admin-one-react-tailwind',
  env: {
    HOST: process.env.HOST,
    CLIENT_EMAIL: process.env.CLIENT_EMAIL,
    PRIVATE_KEY: process.env.PRIVATE_KEY,
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/admin-one-react-tailwind',
  //       basePath: false,
  //       permanent: false,
  //     },
  //   ]
  // },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.justboil.me',
      },
    ],
  },
}

export default nextConfig
