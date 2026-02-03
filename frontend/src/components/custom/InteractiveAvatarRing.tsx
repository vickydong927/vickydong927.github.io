import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Props = {
  src: string;
  alt?: string;
  ringSize?: number; // 外圈直径（默认 460）
  avatarSize?: number; // 头像直径（默认 320）
  alwaysOnGlow?: boolean; // 背后光晕是否一直显示（默认 true）
};

export default function InteractiveAvatarRing({
  src,
  alt,
  ringSize = 460,
  avatarSize = 320,
  alwaysOnGlow = true,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  // 鼠标相对中心的位置
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // 更稳的 spring（适合照片）
  const sx = useSpring(mx, { stiffness: 160, damping: 24, mass: 0.75 });
  const sy = useSpring(my, { stiffness: 160, damping: 24, mass: 0.75 });

  // 倾斜角度（克制，不会“扭曲头像”）
  const rotateY = useTransform(sx, [-120, 120], [-7, 7]);
  const rotateX = useTransform(sy, [-120, 120], [7, -7]);

  // 轻微磁吸位移
  const tx = useTransform(sx, [-120, 120], [-10, 10]);
  const ty = useTransform(sy, [-120, 120], [-10, 10]);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);

    mx.set(Math.max(-120, Math.min(120, x)));
    my.set(Math.max(-120, Math.min(120, y)));
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  // 能量环层配置：3 层不同延迟，形成“持续凝聚”错觉
  const rings = [
    { border: 18, alpha: 0.55, delay: 0.0 },
    { border: 10, alpha: 0.32, delay: 0.35 },
    { border: 6, alpha: 0.20, delay: 0.7 },
  ];

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative flex items-center justify-center"
      style={{ perspective: 900 }}
    >
      {/* 背后光晕：高级托底（可设置 alwaysOnGlow=false 改为 hover 才亮） */}
      <motion.div
        className="absolute rounded-full blur-[85px]"
        initial={{ opacity: alwaysOnGlow ? 0.35 : 0.12 }}
        whileHover={{ opacity: 0.85 }}
        transition={{ duration: 0.25 }}
        style={{
          width: ringSize + 110,
          height: ringSize + 110,
          translateX: tx,
          translateY: ty,
          background:
            "radial-gradient(circle, rgba(45,212,191,0.24) 0%, rgba(45,212,191,0.10) 40%, rgba(0,0,0,0) 72%)",
        }}
      />

      {/* ✅ 动态凝聚能量环（一直在动） */}
      <div className="absolute" style={{ width: ringSize, height: ringSize }}>
        {rings.map((r, idx) => (
          <motion.div
            key={idx}
            className="absolute inset-0 rounded-full"
            style={{
              rotateX,
              rotateY,
              translateX: tx,
              translateY: ty,
              transformStyle: "preserve-3d",
              border: `${r.border}px solid rgba(45,212,191,${r.alpha})`,
              boxShadow: `0 0 90px rgba(45,212,191,${0.10 + r.alpha * 0.10})`,
            }}
            animate={{
              // “凝聚”核心：向内收缩 -> 亮度增强 -> 回弹扩散，循环
              scale: [1.16, 0.95, 1.06, 0.99, 1.16],
              opacity: [0.22, 0.88, 0.42, 0.70, 0.22],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: r.delay,
            }}
          />
        ))}

        {/* 一层非常淡的“能量流”扫光：让凝聚更像在汇聚 */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            rotateX,
            rotateY,
            translateX: tx,
            translateY: ty,
            transformStyle: "preserve-3d",
            background:
              "conic-gradient(from 180deg, rgba(45,212,191,0) 0deg, rgba(45,212,191,0.22) 70deg, rgba(45,212,191,0) 140deg)",
            maskImage:
              "radial-gradient(circle, transparent 62%, black 64%, black 100%)",
            WebkitMaskImage:
              "radial-gradient(circle, transparent 62%, black 64%, black 100%)",
            filter: "blur(0.6px)",
            opacity: 0.26,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* 头像：轻微视差，不夸张（照片友好） */}
      <motion.div
        className="relative z-10 rounded-full overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl
                   shadow-[0_30px_120px_rgba(0,0,0,0.55)]"
        style={{
          width: avatarSize,
          height: avatarSize,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.015 }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
      >
        <img
          src={src}
          alt={alt ?? "avatar"}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </motion.div>
    </motion.div>
  );
}
