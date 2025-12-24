import { motion } from "framer-motion";

interface StreamersProps {
  visible: boolean;
}

/**
 * Subtle gold streamers with gravity-based falling motion.
 * Minimal quantity to avoid clutter while adding celebration feel.
 */
const Streamers = ({ visible }: StreamersProps) => {
  if (!visible) return null;

  // Few streamers for elegant, non-cluttered effect
  const streamers = [
    { x: 15, delay: 0, rotation: 15 },
    { x: 35, delay: 0.3, rotation: -20 },
    { x: 65, delay: 0.15, rotation: 25 },
    { x: 85, delay: 0.45, rotation: -15 },
  ];

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {streamers.map((streamer, index) => (
        <motion.div
          key={index}
          className="absolute top-0"
          style={{ left: `${streamer.x}%` }}
          initial={{ y: -100, rotate: 0, opacity: 0 }}
          animate={{ 
            y: 180, 
            rotate: streamer.rotation,
            opacity: [0, 1, 1, 0.8]
          }}
          transition={{
            duration: 2.5,
            delay: streamer.delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {/* Curled streamer ribbon */}
          <div
            className="w-1 h-32 rounded-full origin-top"
            style={{
              background: `linear-gradient(180deg, 
                hsla(42, 55%, 60%, 0.9) 0%, 
                hsla(38, 50%, 50%, 0.7) 50%,
                hsla(35, 45%, 45%, 0.5) 100%
              )`,
              boxShadow: `0 2px 8px hsla(35, 40%, 30%, 0.2)`,
              transform: `scaleX(0.8)`,
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Streamers;
