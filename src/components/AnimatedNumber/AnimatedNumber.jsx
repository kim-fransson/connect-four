import { motion, AnimatePresence } from "motion/react";

import "./AnimatedNumber.css";

export const AnimatedNumber = ({ value, padding = 2 }) => {
  const displayValues = value.toString().padStart(padding, "0").split("");

  return (
    <div style={{ display: "inline-flex" }}>
      <AnimatePresence mode="popLayout">
        {displayValues.map((n, i) => (
          <motion.span
            className="animated-number"
            key={n + i}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
          >
            {n}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
};
