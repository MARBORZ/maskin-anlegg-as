import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Midlertidige plassholderbilder hentes eksternt. Når ekte bilder legges
    // i src/assets/job_example, importeres de statisk og dette kan fjernes.
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "i.picsum.photos" },
    ],
  },
};

export default nextConfig;
