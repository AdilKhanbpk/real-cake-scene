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

  // Balloon positions and colors for balanced composition from warmth-glimmer
  const balloons: Array<{ x: number; y: number; color: "gold" | "cream" | "peach"; delay: number }> = [
    { x: 8, y: 15, color: "peach", delay: 0 },
    { x: 18, y: 25, color: "gold", delay: 0.2 },
    { x: 28, y: 12, color: "cream", delay: 0.4 },
    { x: 72, y: 18, color: "peach", delay: 0.3 },
    { x: 82, y: 28, color: "gold", delay: 0.5 },
    { x: 92, y: 15, color: "cream", delay: 0.1 },
  ];

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Balloons positioned at top */}
      <div className="absolute top-0 left-0 right-0 h-full">
        {balloons.map((balloon, index) => (
          <Balloon
            key={index}
            x={balloon.x}
            y={balloon.y}
            color={balloon.color}
            delay={balloon.delay}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Balloons;
