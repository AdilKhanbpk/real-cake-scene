import { motion } from "framer-motion";

interface CakeLayerProps {
  type: "sponge" | "cream" | "frosting-top";
  width: number;
  height: number;
  delay?: number;
}

/**
 * Individual cake layer with realistic gradients and shadows.
 * Each layer type has distinct material properties.
 */
const CakeLayer = ({ type, width, height, delay = 0 }: CakeLayerProps) => {
  const getLayerStyles = () => {
    switch (type) {
      case "sponge":
        return {
          /* Sponge cake: warm vanilla with subtle texture simulation */
          background: `
            linear-gradient(180deg, 
              hsl(38, 38%, 72%) 0%, 
              hsl(35, 35%, 65%) 40%, 
              hsl(32, 32%, 58%) 100%
            )
          `,
          boxShadow: `
            inset 0 2px 8px hsla(40, 40%, 80%, 0.4),
            inset 0 -3px 6px hsla(30, 40%, 40%, 0.15),
            0 4px 8px hsla(25, 40%, 15%, 0.25)
          `,
        };
      case "cream":
        return {
          /* Cream filling: lighter, softer appearance */
          background: `
            linear-gradient(180deg, 
              hsl(42, 45%, 90%) 0%, 
              hsl(40, 42%, 86%) 50%, 
              hsl(38, 38%, 82%) 100%
            )
          `,
          boxShadow: `
            inset 0 1px 4px hsla(45, 50%, 95%, 0.5),
            inset 0 -2px 4px hsla(35, 35%, 70%, 0.2),
            0 2px 4px hsla(25, 40%, 15%, 0.15)
          `,
        };
      case "frosting-top":
        return {
          /* Top frosting: smooth, slightly glossy surface */
          background: `
            linear-gradient(180deg, 
              hsl(40, 35%, 94%) 0%, 
              hsl(38, 32%, 90%) 50%, 
              hsl(36, 30%, 86%) 100%
            )
          `,
          boxShadow: `
            inset 0 2px 12px hsla(45, 50%, 98%, 0.6),
            inset 0 -2px 6px hsla(35, 30%, 75%, 0.2),
            0 3px 6px hsla(25, 40%, 15%, 0.2)
          `,
        };
    }
  };

  return (
    <motion.div
      className="relative"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: "4px",
        ...getLayerStyles(),
      }}
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      transition={{ 
        duration: 0.5, 
        delay, 
        ease: "easeOut",
        scaleY: { duration: 0.4, delay }
      }}
    />
  );
};

export default CakeLayer;
