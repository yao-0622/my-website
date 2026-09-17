"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * 首屏标题：主标题渐入 + 分隔符 + 副标题金色→蓝色流光
 */
export function AnimatedTitle() {
  return (
    <div className="flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="text-6xl font-bold tracking-tight text-text-primary drop-shadow-[0_0_40px_rgba(212,165,116,0.15)] md:text-8xl"
      >
        曜
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
        className="mt-6 flex items-center gap-3 text-text-secondary"
        aria-hidden
      >
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-accent-warm md:w-14" />
        <span className="text-base text-accent-warm md:text-lg">✦</span>
        <span className="h-px w-10 bg-gradient-to-l from-transparent to-accent-cool md:w-14" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-gradient-flow mt-6 text-xl font-medium tracking-wide md:text-2xl"
      >
        财务 AI 化 × 生活旅游
      </motion.p>
    </div>
  );
}
