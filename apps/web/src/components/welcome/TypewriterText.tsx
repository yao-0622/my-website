"use client";

import { useScrollTrigger } from "@/hooks/useScrollTrigger";
import { useTypewriter } from "@/hooks/useTypewriter";

interface TypewriterTextProps {
  lines: string[];
  speed?: number;
}

/**
 * 打字机效果文本：滚动到视口后逐字呈现 + 光标闪烁
 */
export function TypewriterText({ lines, speed = 55 }: TypewriterTextProps) {
  const { ref, inView } = useScrollTrigger<HTMLDivElement>();
  const { typed, status } = useTypewriter(lines, inView, speed);

  return (
    <div
      ref={ref}
      className="whitespace-pre-line text-xl leading-relaxed text-text-primary md:text-3xl md:leading-relaxed"
    >
      {typed}
      <span
        aria-hidden
        className="caret-blink ml-1 inline-block h-[1em] w-[2px] translate-y-[0.18em] rounded-full bg-accent-warm"
        style={{ opacity: status === "done" ? 0 : 1 }}
      />
    </div>
  );
}
