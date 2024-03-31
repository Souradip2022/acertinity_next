/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    //domains: ["images.unsplash.com"] //Deprecated
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: '',
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "unsplash.com",
        port: '',
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
