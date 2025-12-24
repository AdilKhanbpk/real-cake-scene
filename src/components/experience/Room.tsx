import { motion } from "framer-motion";

interface RoomProps {
  isLit: boolean;
}

/**
 * Realistic indoor room background with wall texture and ambient lighting.
 * Transitions from dark to warmly lit state.
 */
const Room = ({ isLit }: RoomProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base dark room */}
      <div
        className="absolute inset-0"
        style={{
          background: `hsl(30, 20%, 4%)`,
        }}
      />

      {/* Wall texture - subtle plaster effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLit ? 1 : 0.05 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        style={{
          background: `
            radial-gradient(ellipse 120% 100% at 50% 30%, 
              hsl(35, 18%, 24%) 0%, 
              hsl(32, 15%, 16%) 60%, 
              hsl(30, 12%, 10%) 100%
            )
          `,
        }}
      />

      {/* Warm light source from top-left */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLit ? 1 : 0 }}
        transition={{ duration: 3, ease: "easeOut", delay: 0.5 }}
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 25% 20%, 
              hsla(40, 70%, 70%, 0.12) 0%, 
              transparent 60%
            )
          `,
        }}
      />

      {/* Secondary ambient glow from right */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLit ? 1 : 0 }}
        transition={{ duration: 3, ease: "easeOut", delay: 1 }}
        style={{
          background: `
            radial-gradient(ellipse 50% 60% at 80% 40%, 
              hsla(38, 60%, 65%, 0.06) 0%, 
              transparent 50%
            )
          `,
        }}
      />

      {/* Table surface suggestion at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1/3"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLit ? 1 : 0 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.8 }}
        style={{
          background: `
            linear-gradient(180deg, 
              transparent 0%, 
              hsla(28, 22%, 14%, 0.8) 40%,
              hsl(25, 25%, 12%) 100%
            )
          `,
        }}
      />

      {/* Subtle vignette for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 70% at 50% 50%, 
              transparent 40%, 
              hsla(25, 30%, 4%, 0.5) 100%
            )
          `,
        }}
      />

      {/* Very subtle grain texture */}
      <motion.div
        className="absolute inset-0 pointer-events-none mix-blend-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLit ? 0.03 : 0.01 }}
        transition={{ duration: 2 }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default Room;
