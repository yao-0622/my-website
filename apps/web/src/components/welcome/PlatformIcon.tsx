"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ACCENT } from "@/lib/constants";
import type { Platform, PlatformIconType } from "@/types";

function Glyph({ icon }: { icon: PlatformIconType }): ReactNode {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (icon) {
    case "video":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <rect x="2" y="6" width="14" height="12" rx="3" />
          <path d="M16 10l6-3v10l-6-3" />
        </svg>
      );
    case "music":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      );
    case "tv":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <rect x="2" y="7" width="20" height="13" rx="2" />
          <path d="M8 3l4 4 4-4" />
        </svg>
      );
    case "book":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      );
  }
}

interface PlatformIconProps {
  platform: Platform;
  index: number;
}

/**
 * 单个平台图标卡片：进入视口依次弹入，hover 缩放 + 外发光 + 边框变亮
 * 无链接的平台（url 缺省）置灰展示：降低透明度、移除悬浮动效、不可点击
 */
export function PlatformIcon({ platform, index }: PlatformIconProps) {
  const accent = ACCENT[platform.color];

  const className =
    "group flex min-h-[10rem] flex-col items-center justify-center gap-3 rounded-2xl border bg-bg-secondary/60 px-4 py-7 backdrop-blur-sm";

  const content = (
    <>
      <span
        style={{ color: accent.fg }}
        className="flex h-12 w-12 items-center justify-center [&>svg]:h-9 [&>svg]:w-9"
        aria-hidden
      >
        <Glyph icon={platform.icon} />
      </span>
      <span className="text-sm font-medium text-text-primary md:text-base">
        {platform.name}
      </span>
      <span className="text-xs text-text-secondary">{platform.label}</span>
    </>
  );

  if (!platform.url) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.92 }}
        whileInView={{ opacity: 0.45, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: index * 0.1,
        }}
        aria-disabled="true"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
        className={className}
      >
        {content}
      </motion.div>
    );
  }

  return (
    <motion.a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: index * 0.1,
      }}
      whileHover={{
        scale: 1.08,
        boxShadow: `0 0 28px ${accent.glow}`,
        borderColor: accent.fg,
      }}
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
      className={className}
    >
      {content}
    </motion.a>
  );
}
