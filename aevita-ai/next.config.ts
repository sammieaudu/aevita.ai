import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Legacy Getbeta.ai routes → their Aevita.ai equivalents.
    return [
      { source: "/services", destination: "/solutions", permanent: true },
      {
        source: "/services/automation",
        destination: "/solutions#workflow-automation",
        permanent: true,
      },
      {
        source: "/services/automation/:path*",
        destination: "/workflows",
        permanent: true,
      },
      {
        source: "/services/digital-transformation",
        destination: "/solutions#digital-transformation",
        permanent: true,
      },
      {
        source: "/services/cloud",
        destination: "/solutions#custom-platforms",
        permanent: true,
      },
      {
        source: "/services/web",
        destination: "/solutions#generative-ai",
        permanent: true,
      },
      { source: "/services/support", destination: "/contact", permanent: true },
      { source: "/services/:path*", destination: "/solutions", permanent: true },
    ];
  },
};

export default nextConfig;
