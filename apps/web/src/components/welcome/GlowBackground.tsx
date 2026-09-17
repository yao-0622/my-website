"use client";

import { useEffect, useRef } from "react";

interface GlowBackgroundProps {
  colorWarm?: string;
  colorCool?: string;
}

interface Blob {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  isWarm: boolean;
  phase: number;
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const n = parseInt(hex.slice(1), 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

/**
 * 全屏 Canvas 流动光晕：暖金 + 冷青在暗黑底上缓慢漂浮，
 * 鼠标靠近时产生微弱的吸引响应。移动端粒子数量减半。
 */
export function GlowBackground({
  colorWarm = "#d4a574",
  colorCool = "#5eead4",
}: GlowBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const mouse = { x: -9999, y: -9999 };
    let blobs: Blob[] = [];

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const warm = hexToRgb(colorWarm);
    const cool = hexToRgb(colorCool);

    const buildBlobs = () => {
      const mobile = w < 768;
      const count = mobile ? 4 : 7;
      blobs = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: (mobile ? 130 : 240) + Math.random() * 180,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        isWarm: i % 2 === 0,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildBlobs();
    };

    const onMouse = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const step = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";

      for (const b of blobs) {
        b.x += b.vx;
        b.y += b.vy;

        // 鼠标靠近的微弱吸引
        const dx = mouse.x - b.x;
        const dy = mouse.y - b.y;
        const dist = Math.hypot(dx, dy) || 1;
        const influence = Math.max(0, 1 - dist / 640);
        b.x += (dx / dist) * influence * 0.55;
        b.y += (dy / dist) * influence * 0.55;

        // 越界回卷
        if (b.x < -b.r) b.x = w + b.r;
        else if (b.x > w + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = h + b.r;
        else if (b.y > h + b.r) b.y = -b.r;

        const c = b.isWarm ? warm : cool;
        const pulse = 0.72 + Math.sin(b.phase) * 0.28;
        const alpha = 0.05 + pulse * 0.05;
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, `rgba(${c.r}, ${c.g}, ${c.b}, ${alpha})`);
        g.addColorStop(1, `rgba(${c.r}, ${c.g}, ${c.b}, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
        b.phase += 0.004;
      }

      ctx.globalCompositeOperation = "source-over";
      if (!reducedMotion) raf = requestAnimationFrame(step);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouse);

    if (reducedMotion) {
      step();
    } else {
      raf = requestAnimationFrame(step);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, [colorWarm, colorCool]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
