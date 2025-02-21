/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.youtube.com', 'rsschoolportalassets.blr1.cdn.digitaloceanspaces.com', 'blogs.ramagyaschool.com', 'www.facebook.com', 's3.ap-south-1.amazonaws.com', 'ags-qa-bucket.s3.ap-south-1.amazonaws.com'],
  },
};

export default nextConfig;
