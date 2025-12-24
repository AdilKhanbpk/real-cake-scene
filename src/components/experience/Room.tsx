import { motion } from "framer-motion";

interface RoomProps {
  isLit: boolean;
}

const Room = ({ isLit }: RoomProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background with transition */}
      <motion.div
        className={`absolute inset-0 wall-texture ${isLit ? "room-lit" : "room-dark"}`}
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* Ambient warm light glow */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLit ? 1 : 0 }}
        transition={{ duration: 2.5 }}
        style={{
          background: "radial-gradient(ellipse at 50% 30%, hsl(40 50% 50% / 0.15) 0%, transparent 60%)",
        }}
      />

      {/* Vignette & Noise overlays */}
      <div className="vignette" />
      <div className="noise-overlay" />

      {/* Table surface suggestion (from existing setup, kept for cake) */}
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
    </div>
  );
};

export default Room;
