import { motion } from "framer-motion";

/**
 * Realistic candle flame built from layered divs with gradients.
 * Uses CSS animations for subtle, natural flicker movement.
 */
const CandleFlame = () => {
  return (
    <motion.div
      className="relative flex items-end justify-center"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
    >
      {/* Outer glow - soft ambient light from flame */}
      <div 
        className="absolute -inset-4 rounded-full glow-animate"
        style={{
          background: "radial-gradient(circle, hsla(40, 100%, 60%, 0.3) 0%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />
      
      {/* Mid glow - closer warmth */}
      <div 
        className="absolute -inset-2 rounded-full glow-animate"
        style={{
          background: "radial-gradient(circle, hsla(35, 100%, 55%, 0.4) 0%, transparent 60%)",
          filter: "blur(4px)",
          animationDelay: "0.3s",
        }}
      />
      
      {/* Flame body - teardrop shape using border-radius manipulation */}
      <div 
        className="relative w-3 h-6 flame-animate"
        style={{
          borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
          background: `
            radial-gradient(ellipse 60% 80% at 50% 70%, 
              hsl(45, 100%, 85%) 0%, 
              hsl(45, 100%, 70%) 20%, 
              hsl(35, 100%, 55%) 50%, 
              hsl(25, 100%, 45%) 80%, 
              transparent 100%
            )
          `,
          boxShadow: "0 0 6px 2px hsla(40, 100%, 60%, 0.5)",
        }}
      >
        {/* Inner core - brightest part of flame */}
        <div 
          className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-3"
          style={{
            borderRadius: "50% 50% 50% 50% / 70% 70% 30% 30%",
            background: `
              radial-gradient(ellipse at 50% 80%, 
                hsl(60, 100%, 95%) 0%, 
                hsl(50, 100%, 80%) 40%, 
                transparent 80%
              )
            `,
          }}
        />
      </div>
    </motion.div>
  );
};

export default CandleFlame;
