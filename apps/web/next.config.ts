import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 纯静态导出（一期无需后端 / Node 运行时）
  output: "export",
  // 静态导出时禁用图片优化，图片由 Nginx 直接托管
  images: {
    unoptimized: true,
  },
  // 生成 /path/index.html，便于 Nginx 静态托管
  trailingSlash: true,
};

export default nextConfig;
