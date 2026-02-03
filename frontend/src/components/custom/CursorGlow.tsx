import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  // raw cursor position
  const mx = useMotionValue(-9999);
  const my = useMotionValue(-9999);

  // 主光晕：稍微滞后（更高级）
  const gx = useSpring(mx, { stiffness: 140, damping: 22, mass: 0.6 });
  const gy = useSpring(my, { stiffness: 140, damping: 22, mass: 0.6 });

  // 拖尾：从“快 → 慢”一串 spring（每个都更滞后）
  const t1x = useSpring(mx, { stiffness: 220, damping: 24, mass: 0.35 });
  const t1y = useSpring(my, { stiffness: 220, damping: 24, mass: 0.35 });

  const t2x = useSpring(t1x, { stiffness: 180, damping: 25, mass: 0.45 });
  const t2y = useSpring(t1y, { stiffness: 180, damping: 25, mass: 0.45 });

  const t3x = useSpring(t2x, { stiffness: 150, damping: 26, mass: 0.55 });
  const t3y = useSpring(t2y, { stiffness: 150, damping: 26, mass: 0.55 });

  const t4x = useSpring(t3x, { stiffness: 120, damping: 27, mass: 0.7 });
  const t4y = useSpring(t3y, { stiffness: 120, damping: 27, mass: 0.7 });

  const t5x = useSpring(t4x, { stiffness: 100, damping: 28, mass: 0.8 });
  const t5y = useSpring(t4y, { stiffness: 100, damping: 28, mass: 0.8 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  // 统一：让中心对齐鼠标（用 translate）
  const centerStyle = {
    translateX: "-50%",
    translateY: "-50%",
  } as const;

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {/* 主大光晕（更亮一点 + 更柔） */}
      <motion.div
        className="absolute rounded-full blur-[80px]"
        style={{
          left: gx,
          top: gy,
          width: 540,
          height: 540,
          ...centerStyle,
          background:
            "radial-gradient(circle, rgba(45,212,191,0.34) 0%, rgba(45,212,191,0.14) 38%, rgba(0,0,0,0) 72%)",
        }}
      />

      {/* 内核亮点（增强“聚焦感”） */}
      <motion.div
        className="absolute rounded-full blur-[22px]"
        style={{
          left: gx,
          top: gy,
          width: 170,
          height: 170,
          ...centerStyle,
          background:
            "radial-gradient(circle, rgba(45,212,191,0.48) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      {/* 拖尾粒子（从近到远逐渐变小、变淡） */}
      <TrailDot x={t1x} y={t1y} size={26} opacity={0.22} blur={10} />
      <TrailDot x={t2x} y={t2y} size={22} opacity={0.18} blur={10} />
      <TrailDot x={t3x} y={t3y} size={18} opacity={0.14} blur={10} />
      <TrailDot x={t4x} y={t4y} size={14} opacity={0.11} blur={10} />
      <TrailDot x={t5x} y={t5y} size={12} opacity={0.09} blur={10} />
    </div>
  );
}

function TrailDot({
  x,
  y,
  size,
  opacity,
  blur,
}: {
  x: any;
  y: any;
  size: number;
  opacity: number;
  blur: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        translateX: "-50%",
        translateY: "-50%",
        filter: `blur(${blur}px)`,
        background: `rgba(45,212,191,${opacity})`,
      }}
    />
  );
}
