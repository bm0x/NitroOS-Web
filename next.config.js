/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/NitroOS-Web' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/NitroOS-Web' : '',
}

export default nextConfig;
