"use client";

import { motion } from "framer-motion";
import { AnimatedTitle } from "./AnimatedTitle";

/**
 * 首屏容器：Logo + 标题 + 向下滚动提示
 */
export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mb-10"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-accent-warm/40 to-accent-cool/40 blur-2xl"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo.svg"
          alt="曜的头像"
          width={128}
          height={128}
          className="h-24 w-24 rounded-full border border-border bg-bg-secondary object-cover md:h-32 md:w-32"
        />
      </motion.div>

      <AnimatedTitle />

      <motion.a
        href="#intro"
        aria-label="向下滚动查看自我介绍"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-secondary transition-colors hover:text-text-primary"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.div>
      </motion.a>
    </section>
  );
}
