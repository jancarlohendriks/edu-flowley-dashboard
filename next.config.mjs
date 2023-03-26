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
    GSA_CLIENT_EMAIL: process.env.GSA_CLIENT_EMAIL,
    GSA_PRIVATE_KEY: process.env.GSA_PRIVATE_KEY,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY,
    FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
    FIREBASE_DB_URL: process.env.FIREBASE_DB_URL,
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
