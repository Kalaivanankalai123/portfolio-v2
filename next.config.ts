import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add your newly assigned IP address here
  allowedDevOrigins: [
    '172.168.107.207', 
    '172.168.253.81', 
    '192.168.0.177'
  ],
};

export default nextConfig;