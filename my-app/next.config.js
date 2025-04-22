/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables React Strict Mode for better debugging
  swcMinify: true, // Enables the SWC compiler for faster builds
  // Add support for SCSS
  sassOptions: {
    includePaths: ['./styles'], // Specifies the path for SCSS files
  },
};

module.exports = nextConfig;