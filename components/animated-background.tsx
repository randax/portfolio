"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  o: number;
};

const NODE_COUNT = 50;
const MAX_CONNECTION_DISTANCE = 150;
const PRIMARY_HSL = "210, 100%, 60%";

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const nodesRef = useRef<Node[]>([]);
  const sizeRef = useRef({ width: 0, height: 0 });
  const dprRef = useRef(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const resize = () => {
      const prevWidth = sizeRef.current.width;
      const prevHeight = sizeRef.current.height;
      const prevDpr = dprRef.current;

      const nextWidth = window.innerWidth;
      const nextHeight = window.innerHeight;
      const nextDpr = window.devicePixelRatio || 1;

      const didSizeChange = nextWidth !== prevWidth || nextHeight !== prevHeight;
      const didDprChange = nextDpr !== prevDpr;
      if (!didSizeChange && !didDprChange) return;

      canvas.width = Math.round(nextWidth * nextDpr);
      canvas.height = Math.round(nextHeight * nextDpr);
      canvas.style.width = `${nextWidth}px`;
      canvas.style.height = `${nextHeight}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(nextDpr, nextDpr);

      sizeRef.current = { width: nextWidth, height: nextHeight };
      dprRef.current = nextDpr;

      const nodes = nodesRef.current;

      if (nodes.length === 0) {
        nodesRef.current = Array.from({ length: NODE_COUNT }, () => ({
          x: Math.random() * nextWidth,
          y: Math.random() * nextHeight,
          vx: randomBetween(-0.3, 0.3),
          vy: randomBetween(-0.3, 0.3),
          r: randomBetween(2, 4),
          o: randomBetween(0.3, 0.6),
        }));
        return;
      }

      if (didSizeChange && prevWidth > 0 && prevHeight > 0) {
        const scaleX = nextWidth / prevWidth;
        const scaleY = nextHeight / prevHeight;

        for (const node of nodes) {
          node.x *= scaleX;
          node.y *= scaleY;
        }
      }
    };

    const tick = () => {
      const { width, height } = sizeRef.current;
      if (width === 0 || height === 0) {
        animationFrameRef.current = requestAnimationFrame(tick);
        return;
      }

      const nodes = nodesRef.current;

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0) node.x = width;
        if (node.x > width) node.x = 0;
        if (node.y < 0) node.y = height;
        if (node.y > height) node.y = 0;
      }

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > MAX_CONNECTION_DISTANCE) continue;

          const alpha = ((MAX_CONNECTION_DISTANCE - dist) / MAX_CONNECTION_DISTANCE) * 0.15;
          ctx.strokeStyle = `hsla(${PRIMARY_HSL}, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      for (const node of nodes) {
        ctx.fillStyle = `hsla(${PRIMARY_HSL}, ${node.o})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameRef.current = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);
    animationFrameRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
}
