"use client";

import { useEffect, useRef, useState } from "react";

export type TypewriterStatus = "idle" | "typing" | "done";

/**
 * 逐字打字机效果。传入多行文本（数组，元素间以换行连接），
 * active 为 true 时开始逐字输出。
 */
export function useTypewriter(lines: string[], active: boolean, speed = 55) {
  const fullText = lines.join("\n");
  const [typed, setTyped] = useState("");
  const [status, setStatus] = useState<TypewriterStatus>("idle");
  const indexRef = useRef(0);

  useEffect(() => {
    if (!active || status === "done") return;

    setStatus("typing");
    indexRef.current = 0;
    setTyped("");

    const timer = setInterval(() => {
      indexRef.current += 1;
      setTyped(fullText.slice(0, indexRef.current));

      if (indexRef.current >= fullText.length) {
        clearInterval(timer);
        setStatus("done");
      }
    }, speed);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, fullText, speed]);

  return { typed, status };
}
