import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The counsellor guide was merged into the Clearshore Assist page.
      { source: "/counsellor-guide", destination: "/assist", permanent: true },
    ];
  },
};

export default nextConfig;
