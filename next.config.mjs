/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "*.cloudfront.net", // Allow all subdomains of Cloudfront
        port: '',
      },
    ],
  },
}

export default nextConfig;
