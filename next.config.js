/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // ← This enables static export
  trailingSlash: true,
  basePath: '/tgpwebsitefinal',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig