/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript:{
    ignoreBuildErrors:true,
  },
  reactStrictMode: true,
  images:{
    domains:['lh3.googleusercontent.com','i.im.ge'],
  }
}

module.exports = nextConfig
