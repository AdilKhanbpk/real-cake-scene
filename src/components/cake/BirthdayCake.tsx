import { motion } from "framer-motion";
import CakeLayer from "./CakeLayer";
import Candle from "./Candle";

interface BirthdayCakeProps {
  visible?: boolean;
  candlesLit?: boolean;
}

/**
 * Complete birthday cake assembly with realistic layered construction.
 * Simulates a physical cake placed on a table with warm indoor lighting.
 */
const BirthdayCake = ({ visible = true, candlesLit = true }: BirthdayCakeProps) => {
  const cakeWidth = 220;

  if (!visible) return null;
  
  return (
    <motion.div
      className="relative flex flex-col items-center"
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 1.5, 
        ease: [0.25, 0.1, 0.25, 1], // Smooth ease-out curve
      }}
    >
      {/* Candles positioned on top of cake */}
      <div className="relative flex items-end justify-center gap-8 mb-1 z-10">
        <Candle delay={0} height={28} isLit={candlesLit} lightDelay={0} />
        <Candle delay={0.1} height={32} isLit={candlesLit} lightDelay={0.15} />
        <Candle delay={0.2} height={30} isLit={candlesLit} lightDelay={0.3} />
        <Candle delay={0.15} height={34} isLit={candlesLit} lightDelay={0.45} />
        <Candle delay={0.05} height={29} isLit={candlesLit} lightDelay={0.6} />
      </div>
      
      {/* Cake body - stacked layers from top to bottom */}
      <div className="relative flex flex-col items-center">
        
        {/* Top frosting surface with gloss */}
        <div 
          className="relative z-10"
          style={{
            width: `${cakeWidth}px`,
            height: "12px",
            borderRadius: "6px 6px 2px 2px",
            background: `
              linear-gradient(180deg, 
                hsl(42, 40%, 96%) 0%, 
                hsl(40, 38%, 92%) 40%, 
                hsl(38, 35%, 88%) 100%
              )
            `,
            boxShadow: `
              inset 0 2px 8px hsla(50, 60%, 98%, 0.7),
              inset 0 -1px 3px hsla(35, 30%, 70%, 0.3),
              0 2px 4px hsla(25, 40%, 15%, 0.15)
            `,
          }}
        >
          {/* Glossy highlight from warm light source (top-left) */}
          <div 
            className="absolute top-1 left-4 w-16 h-2 rounded-full"
            style={{
              background: "linear-gradient(90deg, hsla(50, 60%, 98%, 0.6), transparent)",
            }}
          />
        </div>
        
        {/* Outer frosting coat wrapping the cake */}
        <motion.div
          className="relative -mt-1"
          style={{
            width: `${cakeWidth + 8}px`,
            padding: "0 4px 4px 4px",
            background: `
              linear-gradient(180deg, 
                hsl(40, 35%, 93%) 0%, 
                hsl(38, 32%, 88%) 30%, 
                hsl(36, 30%, 84%) 70%, 
                hsl(34, 28%, 80%) 100%
              )
            `,
            borderRadius: "4px 4px 8px 8px",
            boxShadow: `
              inset 2px 0 8px hsla(45, 40%, 95%, 0.4),
              inset -4px 0 8px hsla(30, 30%, 60%, 0.15),
              0 6px 16px hsla(25, 40%, 12%, 0.3)
            `,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Interior layers visible through slight transparency */}
          <div className="flex flex-col items-center pt-2 gap-0.5">
            {/* Top sponge layer */}
            <CakeLayer type="sponge" width={cakeWidth - 4} height={28} delay={0.2} />
            
            {/* Cream filling */}
            <CakeLayer type="cream" width={cakeWidth - 2} height={10} delay={0.25} />
            
            {/* Middle sponge layer */}
            <CakeLayer type="sponge" width={cakeWidth - 4} height={26} delay={0.3} />
            
            {/* Bottom cream filling */}
            <CakeLayer type="cream" width={cakeWidth - 2} height={10} delay={0.35} />
            
            {/* Bottom sponge layer - slightly larger for stability */}
            <CakeLayer type="sponge" width={cakeWidth} height={30} delay={0.4} />
          </div>
        </motion.div>
        
        {/* Frosting edge detail at bottom */}
        <motion.div
          className="relative -mt-1"
          style={{
            width: `${cakeWidth + 16}px`,
            height: "8px",
            borderRadius: "0 0 10px 10px",
            background: `
              linear-gradient(180deg, 
                hsl(36, 30%, 84%) 0%, 
                hsl(34, 28%, 78%) 100%
              )
            `,
            boxShadow: `
              inset 0 2px 4px hsla(40, 35%, 90%, 0.3),
              0 4px 8px hsla(25, 40%, 12%, 0.25)
            `,
          }}
          initial={{ opacity: 0, scaleX: 0.9 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        />
      </div>
      
      {/* Cake plate/stand */}
      <motion.div
        className="relative mt-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {/* Plate top surface */}
        <div
          style={{
            width: `${cakeWidth + 60}px`,
            height: "10px",
            borderRadius: "50%",
            background: `
              linear-gradient(180deg, 
                hsl(38, 15%, 92%) 0%, 
                hsl(35, 12%, 85%) 50%, 
                hsl(32, 10%, 78%) 100%
              )
            `,
            boxShadow: `
              inset 0 2px 6px hsla(45, 30%, 98%, 0.5),
              inset 0 -2px 4px hsla(30, 20%, 60%, 0.2),
              0 2px 8px hsla(25, 40%, 12%, 0.2)
            `,
          }}
        />
        
        {/* Plate rim/edge */}
        <div
          className="-mt-1 mx-auto"
          style={{
            width: `${cakeWidth + 50}px`,
            height: "6px",
            borderRadius: "0 0 50% 50% / 0 0 100% 100%",
            background: `
              linear-gradient(180deg, 
                hsl(32, 10%, 78%) 0%, 
                hsl(30, 8%, 70%) 100%
              )
            `,
            boxShadow: "0 3px 6px hsla(25, 40%, 12%, 0.25)",
          }}
        />
      </motion.div>
      
      {/* Table shadow directly beneath cake - grounds the object */}
      <motion.div
        className="absolute -bottom-4"
        style={{
          width: `${cakeWidth + 80}px`,
          height: "20px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, hsla(25, 40%, 8%, 0.4) 0%, hsla(25, 40%, 8%, 0.2) 40%, transparent 70%)",
          filter: "blur(6px)",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
    </motion.div>
  );
};

export default BirthdayCake;
