/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // basePath: '/admin-one-react-tailwind',
  env: {
    GOOGLE_APPLICATION_CREDENTIALS: '/flowley-test-880d49cc6785.json',
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
