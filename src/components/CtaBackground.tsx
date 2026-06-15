"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

const palette = [
  [14, 165, 233],    // neon blue
  [56, 189, 248],    // sky blue
  [34, 211, 238],    // cyan
  [168, 85, 247],    // purple
  [236, 72, 153],    // pink
  [99, 102, 241],    // indigo
  [6, 182, 212],     // cyan darker
];

export default function CtaBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dots: { x: number; y: number }[] = [];

    const resize = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const spacing = 28;
      const cols = Math.ceil(w / spacing) + 2;
      const rows = Math.ceil(h / spacing) + 2;
      const offsetX = (w - (cols - 1) * spacing) / 2;
      const offsetY = (h - (rows - 1) * spacing) / 2;

      dots = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({
            x: offsetX + c * spacing,
            y: offsetY + r * spacing,
          });
        }
      }
    };

    resize();
    window.addEventListener("resize", resize);

    gsap.ticker.wake();

    const tickerFn = (time: number) => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const speed = 0.9;
      const freq1 = 0.022;
      const freq2 = 0.035;

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const wave1 = Math.sin(dot.x * freq1 + time * speed) * Math.cos(dot.y * freq1 * 0.7 + time * speed * 0.6);
        const wave2 = Math.sin(dot.x * freq2 * 0.5 - time * speed * 0.4 + dot.y * freq2 * 0.3);
        const value = wave1 * 0.65 + wave2 * 0.35;

        const size = Math.max(0.5, 2.5 + value * 2.2);
        const opacity = Math.max(0.1, 0.65 + value * 0.3);

        const colorIndex = Math.floor(((dot.x * 0.01 + dot.y * 0.008 + time * 0.05) % 1) * palette.length);
        const [r, g, b] = palette[colorIndex % palette.length];

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
        ctx.fill();
      }
    };

    gsap.ticker.add(tickerFn);

    return () => {
      window.removeEventListener("resize", resize);
      gsap.ticker.remove(tickerFn);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
