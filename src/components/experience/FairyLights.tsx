import { motion } from "framer-motion";

interface FairyLightsProps {
  visible: boolean;
}

const FairyLights = ({ visible }: FairyLightsProps) => {
  const lights = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: 8 + (i * 7.5),
    delay: i * 0.1,
    flickerDelay: Math.random() * 2,
  }));

  return (
    <motion.div
      className="absolute top-0 left-0 right-0 h-32 pointer-events-none overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {/* Cable */}
      <svg
        className="absolute top-8 left-0 w-full h-24"
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 0 8 Q 12.5 15 25 10 Q 37.5 5 50 10 Q 62.5 15 75 10 Q 87.5 5 100 8"
          fill="none"
          stroke="hsl(30 20% 30%)"
          strokeWidth="0.3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: visible ? 1 : 0, opacity: visible ? 0.6 : 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
      </svg>

      {/* Lights */}
      {lights.map((light) => (
        <motion.div
          key={light.id}
          className="absolute"
          style={{ left: `${light.x}%`, top: "2.5rem" }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: visible ? 1 : 0,
            scale: visible ? 1 : 0
          }}
          transition={{
            duration: 0.6,
            delay: visible ? light.delay + 0.5 : 0,
            ease: "easeOut"
          }}
        >
          <motion.div
            className="fairy-light w-3 h-3 md:w-4 md:h-4 rounded-full"
            animate={{
              opacity: [0.7, 1, 0.7],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              delay: light.flickerDelay,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FairyLights;