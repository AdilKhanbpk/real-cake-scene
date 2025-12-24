import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface MessageSequenceProps {
  active: boolean;
  onComplete: () => void;
}

/**
 * Emotional message sequence with gentle fade transitions.
 * Each message appears, holds, then fades to the next.
 */
const MessageSequence = ({ active, onComplete }: MessageSequenceProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const messages = [
    "I made this for you…",
    "Because today matters.",
  ];

  useEffect(() => {
    if (!active) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= messages.length - 1) {
          clearInterval(timer);
          setTimeout(onComplete, 3000);
          return prev;
        }
        return prev + 1;
      });
    }, 2500);

    return () => clearInterval(timer);
  }, [active, messages.length, onComplete]);

  if (!active) return null;

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center -translate-y-[5%] md:-translate-y-[10%] z-50 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Subtle dim overlay */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        style={{
          background: "hsl(30, 20%, 4%)",
        }}
      />

      {/* Message display */}
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          className="relative font-cormorant text-2xl md:text-4xl text-center px-8 italic"
          style={{
            color: "hsl(38, 30%, 88%)",
            textShadow: "0 2px 20px hsla(30, 40%, 10%, 0.5)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {messages[currentIndex]}
        </motion.p>
      </AnimatePresence>
    </motion.div>
  );
};

export default MessageSequence;
