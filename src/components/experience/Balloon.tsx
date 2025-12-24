import { motion } from "framer-motion";

interface BalloonProps {
  color: "peach" | "gold" | "cream";
  delay: number;
  x: number;
  y: number;
}

const colorClasses = {
  peach: "balloon-latex",
  gold: "balloon-gold",
  cream: "balloon-cream",
};

const Balloon = ({ color, delay, x, y }: BalloonProps) => {
  const floatDuration = 5 + Math.random() * 3;
  const driftDuration = 7 + Math.random() * 4;

  return (
    <motion.div
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0, y: 200, scale: 0.5 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      <motion.div
        animate={{
          y: [-8, 8, -8],
          x: [-4, 4, -4],
        }}
        transition={{
          y: { duration: floatDuration, repeat: Infinity, ease: "easeInOut" },
          x: { duration: driftDuration, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        {/* Balloon body */}
        <div
          className={`w-16 h-20 md:w-20 md:h-24 rounded-full ${colorClasses[color]}`}
          style={{
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
          }}
        />

        {/* Balloon knot */}
        <div
          className="w-2 h-2 mx-auto -mt-1 rounded-b-full"
          style={{
            background: `hsl(var(--${color === "gold" ? "muted-gold" : color === "cream" ? "warm-beige" : "soft-peach"}))`,
          }}
        />

        {/* String */}
        <div
          className="w-px h-20 md:h-28 mx-auto opacity-40"
          style={{
            background: "linear-gradient(to bottom, hsl(var(--muted-gold)), transparent)",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Balloon;
