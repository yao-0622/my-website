"use client";

import { motion } from "framer-motion";
import { ACCENT } from "@/lib/constants";
import { wechatPublic } from "@/lib/platforms";

interface WechatQRButtonProps {
  onClick: () => void;
}

/**
 * 微信公众号引流按钮（胶囊样式），点击打开二维码模态框
 */
export function WechatQRButton({ onClick }: WechatQRButtonProps) {
  const accent = ACCENT[wechatPublic.color];

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{ scale: 1.03, boxShadow: `0 0 24px ${accent.glow}` }}
      whileTap={{ scale: 0.97 }}
      style={{ borderColor: accent.fg }}
      className="flex w-full max-w-sm items-center justify-center gap-3 rounded-full border bg-bg-secondary/70 px-8 py-4 backdrop-blur-sm transition-colors"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ color: accent.fg }}
        className="h-6 w-6"
        aria-hidden
      >
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <path d="M14 14h3v3h-3z" />
        <path d="M20 14h1v1h-1z" />
        <path d="M14 20h1v1h-1z" />
        <path d="M20 20h1v1h-1z" />
      </svg>
      <span className="flex flex-col items-start text-left">
        <span className="text-sm font-medium text-text-primary md:text-base">
          {wechatPublic.name}
        </span>
        <span className="text-xs text-text-secondary">{wechatPublic.label} · 点击查看二维码</span>
      </span>
    </motion.button>
  );
}
