"use client";

import { TypewriterText } from "./TypewriterText";

const LINES = [
  "Hey，我是曜 👋",
  "",
  "一名深耕财务、拥抱 AI 的实践者。",
  "",
  "在这里，我会分享财务 AI 化的实战经验，",
  "也会带你去看山川湖海的风景。",
  "",
  "让工作更高效、让生活更有趣，",
  "我们一起。",
];

/**
 * 自我介绍区域：监听滚动，触发打字机
 */
export function IntroSection() {
  return (
    <section
      id="intro"
      className="relative mx-auto flex min-h-screen max-w-3xl items-center px-6 py-24"
    >
      <TypewriterText lines={LINES} speed={55} />
    </section>
  );
}
