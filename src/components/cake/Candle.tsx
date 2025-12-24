import { motion } from "framer-motion";
import CandleFlame from "./CandleFlame";

interface CandleProps {
  delay?: number;
  height?: number;
  isLit?: boolean;
  lightDelay?: number;
}

/**
 * Realistic candle with cylindrical wax body and flame.
 * Gradient simulates roundness and light hitting the surface.
 */
const Candle = ({ delay = 0, height = 32, isLit = true, lightDelay = 0 }: CandleProps) => {
  return (
    <motion.div
      className="relative flex flex-col items-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay + 0.8, ease: "easeOut" }}
    >
      {/* Flame positioned above candle */}
      <div className="mb-0.5">
        <CandleFlame isLit={isLit} delay={lightDelay} />
      </div>
      
      {/* Wick - thin dark element connecting flame to candle */}
      <div 
        className="w-0.5 h-2 rounded-full"
        style={{
          background: "linear-gradient(to bottom, hsl(25, 30%, 20%) 0%, hsl(25, 25%, 35%) 100%)",
        }}
      />
      
      {/* Candle body - cylindrical appearance through gradient */}
      <div 
        className="relative rounded-sm"
        style={{
          width: "8px",
          height: `${height}px`,
          /* Left-to-right gradient simulates cylindrical form with light from top-left */
          background: `
            linear-gradient(90deg, 
              hsl(40, 20%, 70%) 0%, 
              hsl(45, 25%, 88%) 30%, 
              hsl(45, 25%, 92%) 50%, 
              hsl(45, 25%, 85%) 70%, 
              hsl(40, 20%, 72%) 100%
            )
          `,
          boxShadow: `
            inset 0 -4px 8px hsla(35, 30%, 50%, 0.2),
            0 2px 4px hsla(25, 40%, 10%, 0.3)
          `,
        }}
      >
        {/* Subtle wax drip detail */}
        <div 
          className="absolute -left-0.5 top-3 w-1 h-2 rounded-full"
          style={{
            background: "linear-gradient(180deg, hsl(45, 25%, 90%) 0%, hsl(40, 20%, 80%) 100%)",
          }}
        />
      </div>
      
      {/* Shadow where candle meets cake surface */}
      <div 
        className="absolute -bottom-1 w-3 h-1 rounded-full"
        style={{
          background: "radial-gradient(ellipse, hsla(25, 40%, 15%, 0.4) 0%, transparent 70%)",
        }}
      />
    </motion.div>
  );
};

export default Candle;
