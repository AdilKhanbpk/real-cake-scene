import { motion } from "framer-motion";

interface BalloonProps {
  delay?: number;
  x: number;
  color: "gold" | "cream" | "peach";
}

/**
 * Realistic latex balloon with light reflection and slow floating motion.
 * Uses CSS gradients to simulate 3D curvature and light hitting the surface.
 */
const Balloon = ({ delay = 0, x, color }: BalloonProps) => {
  // Color variations for realism
  const colorStyles = {
    gold: {
      base: "hsl(42, 55%, 55%)",
      highlight: "hsl(45, 60%, 75%)",
      shadow: "hsl(38, 50%, 40%)",
    },
    cream: {
      base: "hsl(38, 35%, 82%)",
      highlight: "hsl(40, 40%, 92%)",
      shadow: "hsl(35, 30%, 68%)",
    },
    peach: {
      base: "hsl(25, 45%, 72%)",
      highlight: "hsl(28, 50%, 85%)",
      shadow: "hsl(22, 40%, 58%)",
    },
  };

  const colors = colorStyles[color];

  // Unique animation values for natural variation
  const floatDuration = 4 + Math.random() * 2;
  const driftDuration = 5 + Math.random() * 3;
  const floatOffset = Math.random() * Math.PI * 2;

  return (
    <motion.div
      className="absolute bottom-0"
      style={{ left: `${x}%` }}
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easeOut
      }}
    >
      {/* Balloon string */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-px h-24 origin-top"
        style={{
          background: `linear-gradient(to bottom, 
            hsla(35, 20%, 50%, 0.6) 0%, 
            hsla(35, 20%, 40%, 0.3) 100%
          )`,
          top: "100%",
        }}
        animate={{
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: driftDuration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Balloon body - layered for depth */}
      <motion.div
        className="relative"
        animate={{
          y: [-6, 6, -6],
          x: [-3, 3, -3],
        }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatOffset,
        }}
      >
        {/* Main balloon shape */}
        <div
          className="w-16 h-20 rounded-full relative"
          style={{
            background: `
              radial-gradient(ellipse 60% 50% at 35% 30%, 
                ${colors.highlight} 0%, 
                transparent 50%
              ),
              radial-gradient(ellipse 100% 100% at 50% 45%, 
                ${colors.base} 0%, 
                ${colors.shadow} 100%
              )
            `,
            boxShadow: `
              inset -8px -8px 20px hsla(30, 30%, 20%, 0.15),
              0 8px 20px hsla(30, 40%, 10%, 0.2)
            `,
          }}
        >
          {/* Subtle light reflection */}
          <div
            className="absolute w-4 h-6 rounded-full"
            style={{
              top: "15%",
              left: "20%",
              background: `radial-gradient(ellipse at 50% 50%, 
                hsla(0, 0%, 100%, 0.4) 0%, 
                transparent 70%
              )`,
            }}
          />
        </div>

        {/* Balloon knot */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-3 h-2 rounded-b-full"
          style={{
            bottom: "-4px",
            background: colors.shadow,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Balloon;
