import { motion } from "framer-motion";

interface FairyLightsProps {
  visible: boolean;
}

/**
 * Warm fairy lights with realistic cable curve and organic glow.
 * Each bulb has subtle independent flicker for life-like effect.
 */
const FairyLights = ({ visible }: FairyLightsProps) => {
  if (!visible) return null;

  // Light positions along a gentle curve
  const lights = Array.from({ length: 12 }, (_, i) => {
    const t = i / 11;
    // Catenary-like curve for natural cable droop
    const x = 10 + t * 80;
    const y = 8 + Math.sin(t * Math.PI) * 6;
    return { x, y, delay: i * 0.08 };
  });

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Cable connecting lights */}
      <svg
        className="absolute top-0 left-0 w-full h-24"
        viewBox="0 0 100 24"
        preserveAspectRatio="none"
      >
        <path
          d={`M 10 8 Q 50 20 90 8`}
          fill="none"
          stroke="hsla(30, 20%, 25%, 0.6)"
          strokeWidth="0.3"
        />
      </svg>

      {/* Individual fairy lights */}
      {lights.map((light, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${light.x}%`,
            top: `${light.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: light.delay,
            ease: "easeOut",
          }}
        >
          {/* Glow halo */}
          <motion.div
            className="absolute -inset-4 rounded-full"
            style={{
              background: `radial-gradient(circle, 
                hsla(45, 90%, 75%, 0.4) 0%, 
                hsla(42, 85%, 65%, 0.1) 40%, 
                transparent 70%
              )`,
            }}
            animate={{
              opacity: [0.6, 1, 0.6],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
          
          {/* Bulb */}
          <div
            className="w-2 h-2 rounded-full relative"
            style={{
              background: `radial-gradient(circle at 40% 40%, 
                hsl(45, 95%, 85%) 0%, 
                hsl(42, 90%, 70%) 50%, 
                hsl(38, 80%, 55%) 100%
              )`,
              boxShadow: `
                0 0 8px hsla(45, 90%, 70%, 0.8),
                0 0 20px hsla(42, 85%, 60%, 0.4)
              `,
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FairyLights;
