"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { wechatPublic } from "@/lib/platforms";

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  qrcodeSrc: string;
}

/**
 * 二维码模态框：遮罩毛玻璃 + 缩放弹入。
 * 支持点击遮罩 / ESC / 关闭按钮关闭；移动端为底部抽屉式。
 */
export function QRCodeModal({ isOpen, onClose, qrcodeSrc }: QRCodeModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
          {/* 遮罩 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            aria-hidden
          />

          {/* 内容（移动端底部抽屉，桌面端居中卡片） */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${wechatPublic.name}二维码`}
            initial={{ opacity: 0, y: 48, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 48, scale: 0.9 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex w-full flex-col items-center gap-5 rounded-t-3xl border border-border bg-bg-secondary p-8 pb-10 sm:max-w-sm sm:rounded-3xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="关闭"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-text-secondary transition-colors hover:bg-bg-tertiary hover:text-text-primary"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <span className="h-1 w-10 rounded-full bg-bg-tertiary sm:hidden" aria-hidden />

            <div className="rounded-2xl bg-white p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={qrcodeSrc}
                alt={`${wechatPublic.name}二维码`}
                width={220}
                height={220}
                className="h-52 w-52 object-contain"
              />
            </div>

            <div className="text-center">
              <p className="text-base font-medium text-text-primary">{wechatPublic.name}</p>
              <p className="mt-1 text-sm text-text-secondary">长按或截图扫码，关注「曜」</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
