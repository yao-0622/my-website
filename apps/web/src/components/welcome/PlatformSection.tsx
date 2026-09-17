"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { platforms, wechatPublic } from "@/lib/platforms";
import { PlatformIcon } from "./PlatformIcon";
import { WechatQRButton } from "./WechatQRButton";
import { QRCodeModal } from "./QRCodeModal";

/**
 * 平台引流区域：标题 + 平台图标网格 + 微信公众号按钮
 */
export function PlatformSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="find-me" className="relative mx-auto max-w-5xl px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="mb-12 flex items-center justify-center gap-4"
      >
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-accent-cool md:w-16" aria-hidden />
        <h2 className="text-2xl font-semibold text-text-primary md:text-3xl">找到我</h2>
        <span className="h-px w-10 bg-gradient-to-l from-transparent to-accent-warm md:w-16" aria-hidden />
      </motion.div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
        {platforms.map((platform, index) => (
          <PlatformIcon key={platform.id} platform={platform} index={index} />
        ))}
      </div>

      <div className="mt-10 flex justify-center md:mt-12">
        <WechatQRButton onClick={() => setIsOpen(true)} />
      </div>

      <QRCodeModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        qrcodeSrc={wechatPublic.qrcodePath}
      />
    </section>
  );
}
