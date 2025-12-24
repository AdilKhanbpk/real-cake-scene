import { motion } from "framer-motion";
import Balloon from "./Balloon";

interface BalloonsProps {
  visible: boolean;
}

/**
 * Collection of balloons positioned along the top of the scene.
 * Staggered entry animation with varied colors for visual interest.
 */
const Balloons = ({ visible }: BalloonsProps) => {
  if (!visible) return null;

  // Balloon positions and colors for balanced composition
  const balloons: Array<{ x: number; color: "gold" | "cream" | "peach"; delay: number }> = [
    { x: 8, color: "cream", delay: 0 },
    { x: 18, color: "gold", delay: 0.15 },
    { x: 28, color: "peach", delay: 0.3 },
    { x: 72, color: "peach", delay: 0.2 },
    { x: 82, color: "gold", delay: 0.35 },
    { x: 92, color: "cream", delay: 0.1 },
  ];

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Balloons positioned at top */}
      <div className="absolute top-8 left-0 right-0 h-32">
        {balloons.map((balloon, index) => (
          <Balloon
            key={index}
            x={balloon.x}
            color={balloon.color}
            delay={balloon.delay}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Balloons;
