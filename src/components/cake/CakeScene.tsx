import { motion } from "framer-motion";
import BirthdayCake from "./BirthdayCake";

/**
 * Complete scene with warm ambient lighting and table surface.
 * Creates an intimate, realistic environment for the cake.
 */
const CakeScene = () => {
  return (
    <div 
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        /* Dark warm ambient background */
        background: `
          radial-gradient(ellipse 80% 60% at 50% 40%, 
            hsl(30, 25%, 18%) 0%, 
            hsl(28, 28%, 12%) 50%, 
            hsl(25, 30%, 8%) 100%
          )
        `,
      }}
    >
      {/* Warm light source glow from top-left */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 25% 20%, 
              hsla(40, 60%, 70%, 0.08) 0%, 
              transparent 60%
            )
          `,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      
      {/* Secondary warm ambient from candles area */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-64 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 50% 30%, 
              hsla(38, 80%, 60%, 0.12) 0%, 
              hsla(35, 60%, 50%, 0.05) 40%, 
              transparent 70%
            )
          `,
          filter: "blur(40px)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
      />
      
      {/* Main content area with table suggestion */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Cake component */}
        <BirthdayCake />
        
        {/* Table surface hint - horizontal plane the cake sits on */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: "400px",
            height: "100px",
            background: `
              linear-gradient(180deg, 
                hsla(25, 30%, 22%, 0.6) 0%, 
                transparent 80%
              )
            `,
            borderRadius: "50% 50% 0 0 / 30% 30% 0 0",
            transform: "translateX(-50%) translateY(60px)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
      
      {/* Subtle vignette for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 70% at 50% 50%, 
              transparent 30%, 
              hsla(25, 35%, 5%, 0.4) 100%
            )
          `,
        }}
      />
      
      {/* Message text - understated, warm */}
      <motion.div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2, ease: "easeOut" }}
      >
        <h1 
          className="text-2xl md:text-3xl font-light tracking-wide"
          style={{
            color: "hsl(38, 30%, 75%)",
            textShadow: "0 2px 10px hsla(30, 40%, 10%, 0.5)",
          }}
        >
          Make a wish
        </h1>
      </motion.div>
    </div>
  );
};

export default CakeScene;
