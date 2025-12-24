import { motion } from "framer-motion";
import { useMemo } from "react";

interface ConfettiProps {
  visible: boolean;
}

/**
 * Soft, elegant confetti for celebration moment.
 * Limited quantity with warm gold/cream colors.
 */
const Confetti = ({ visible }: ConfettiProps) => {
  // Generate confetti pieces with stable positions
  const pieces = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
      size: 4 + Math.random() * 4,
      rotation: Math.random() * 360,
      isGold: Math.random() > 0.5,
    }));
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute rounded-sm"
          style={{
            left: `${piece.x}%`,
            width: `${piece.size}px`,
            height: `${piece.size * 0.6}px`,
            background: piece.isGold
              ? `linear-gradient(135deg, 
                  hsl(45, 70%, 60%) 0%, 
                  hsl(42, 60%, 50%) 100%
                )`
              : `linear-gradient(135deg, 
                  hsl(38, 35%, 88%) 0%, 
                  hsl(35, 30%, 78%) 100%
                )`,
            boxShadow: `0 1px 3px hsla(30, 30%, 20%, 0.2)`,
          }}
          initial={{
            y: -20,
            rotate: piece.rotation,
            opacity: 0,
          }}
          animate={{
            y: "100vh",
            rotate: piece.rotation + 720,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            ease: "linear",
          }}
        />
      ))}
    </motion.div>
  );
};

export default Confetti;
