/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      { source: "/upper_limb/bones", destination: "/bones", permanent: true },
      { source: "/upper_limb/bones/", destination: "/bones", permanent: true },
      { source: "/upper_limb/bones/humerus", destination: "/bones/humerus", permanent: true },
      { source: "/upper_limb/bones/humerus/", destination: "/bones/humerus", permanent: true },
    ];
  },
};

module.exports = nextConfig;
