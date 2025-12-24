import { motion } from "framer-motion";
import { useState } from "react";

interface ActionButtonProps {
  label: string;
  onClick: () => void;
  visible: boolean;
  delay?: number;
}

/**
 * Elegant action button with warm glow on hover.
 * Prevents double-clicking and provides smooth transitions.
 */
const ActionButton = ({ label, onClick, visible, delay = 0 }: ActionButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) return;
    setIsClicked(true);
    onClick();
  };

  if (!visible) return null;

  return (
    <motion.button
      className="relative px-8 py-4 font-cormorant text-lg tracking-wide rounded-full border transition-colors disabled:pointer-events-none"
      style={{
        color: "hsl(38, 30%, 88%)",
        borderColor: "hsla(38, 35%, 55%, 0.4)",
        background: "hsla(30, 20%, 12%, 0.8)",
        backdropFilter: "blur(8px)",
      }}
      onClick={handleClick}
      disabled={isClicked}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        boxShadow: "0 0 30px hsla(40, 60%, 55%, 0.25), inset 0 0 20px hsla(40, 50%, 60%, 0.1)",
        borderColor: "hsla(42, 50%, 60%, 0.6)",
      }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10">{label}</span>
      
      {/* Subtle glow behind text */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, 
            hsla(42, 60%, 60%, 0.15) 0%, 
            transparent 70%
          )`,
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default ActionButton;
