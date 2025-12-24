import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Room from "./Room";
import Balloons from "./Balloons";
import FairyLights from "./FairyLights";
import Streamers from "./Streamers";
import Confetti from "./Confetti";
import ActionButton from "./ActionButton";
import MessageSequence from "./MessageSequence";
import BirthdayCake from "../cake/BirthdayCake";

type Step = "dark" | "lit" | "decorated" | "cake" | "candles" | "celebration" | "messages";

/**
 * Main birthday experience orchestrator.
 * Controls the step-based flow from dark room to full celebration.
 */
const BirthdayExperience = () => {
  const [step, setStep] = useState<Step>("dark");

  const isRoomLit = step !== "dark";
  const showDecorations = ["decorated", "cake", "candles", "celebration", "messages"].includes(step);
  const showCake = ["cake", "candles", "celebration", "messages"].includes(step);
  const candlesLit = ["candles", "celebration", "messages"].includes(step);
  const showCelebration = ["celebration", "messages"].includes(step);
  const showMessages = step === "messages";

  const handleLightCandles = () => {
    setStep("candles");
    // Automatically transition to celebration after candles are lit
    setTimeout(() => setStep("celebration"), 2000);
    // Then show messages
    setTimeout(() => setStep("messages"), 4000);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Room background */}
      <Room isLit={isRoomLit} />

      {/* Decorations layer */}
      <FairyLights visible={isRoomLit} />
      <Balloons visible={showDecorations} />
      <Streamers visible={showDecorations} />

      {/* Celebration effects */}
      <Confetti visible={showCelebration} />

      {/* Cake in lower half */}
      <div className="absolute inset-0 flex items-center justify-center translate-y-[15%] md:translate-y-[20%]">
        <BirthdayCake visible={showCake} candlesLit={candlesLit} />
      </div>

      {/* Warm glow when candles are lit */}
      <AnimatePresence>
        {candlesLit && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            style={{
              background: `radial-gradient(ellipse 50% 40% at 50% 65%, 
                hsla(40, 80%, 60%, 0.08) 0%, 
                transparent 60%
              )`,
            }}
          />
        )}
      </AnimatePresence>

      {/* Celebration text */}
      <AnimatePresence>
        {step === "celebration" && (
          <motion.h1
            className="absolute top-[15%] md:top-[20%] left-1/2 -translate-x-1/2 font-playfair text-3xl md:text-5xl text-center"
            style={{ color: "hsl(42, 50%, 75%)", textShadow: "0 4px 20px hsla(30, 40%, 10%, 0.5)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Happy Birthday 🎉
          </motion.h1>
        )}
      </AnimatePresence>

      {/* Message sequence */}
      <MessageSequence active={showMessages} onComplete={() => { }} />

      {/* Action buttons - centered at bottom */}
      <div className="absolute bottom-12 md:bottom-20 left-1/2 -translate-x-1/2 z-40">
        <AnimatePresence mode="wait">
          {step === "dark" && (
            <ActionButton
              key="lights"
              label="Turn on the lights"
              onClick={() => setStep("lit")}
              visible={true}
              delay={0.5}
            />
          )}
          {step === "lit" && (
            <ActionButton
              key="decorate"
              label="Let's decorate"
              onClick={() => setStep("decorated")}
              visible={true}
              delay={1.5}
            />
          )}
          {step === "decorated" && (
            <ActionButton
              key="cake"
              label="Bring the cake"
              onClick={() => setStep("cake")}
              visible={true}
              delay={1}
            />
          )}
          {step === "cake" && (
            <ActionButton
              key="candles"
              label="Light the candles"
              onClick={handleLightCandles}
              visible={true}
              delay={1.5}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BirthdayExperience;
