/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // ← This enables static export
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig