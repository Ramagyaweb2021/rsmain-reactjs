/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "rsschoolportalassets.blr1.cdn.digitaloceanspaces.com",
      },
      {
        protocol: "https",
        hostname: "blogs.ramagyaschool.com",
      },
      {
        protocol: "https",
        hostname: "www.facebook.com",
      },
      {
        protocol: "https",
        hostname: "s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "ags-qa-bucket.s3.ap-south-1.amazonaws.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/blogs/:path*',  // matches /blogs and everything under it
        destination: 'https://blogs.ramagyaschool.com/:path*',
        permanent: true,
      },
      // {
      //   source: '/greater-noida/brand-story',       
      //   destination: '/brand-story', 
      //   permanent: true,          
      // },
      // {
      //   source: '/recommend-a-student',       
      //   destination: '/noida/recommend-a-student', 
      //   permanent: true,          
      // },
      // {
      //   source: '/parents',       
      //   destination: '/dadri/parents', 
      //   permanent: true,          
      // },
    ];
  },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['img.youtube.com', 'rsschoolportalassets.blr1.cdn.digitaloceanspaces.com', 'blogs.ramagyaschool.com', 'www.facebook.com', 's3.ap-south-1.amazonaws.com', 'ags-qa-bucket.s3.ap-south-1.amazonaws.com'],
//   },
// };

// export default nextConfig;
