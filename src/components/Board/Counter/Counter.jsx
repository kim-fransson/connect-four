import { motion } from "motion/react";
import "./Counter.css";

export const Counter = ({ color, highlight }) => {
  return (
    <div className={`counter ${color}`}>
      {highlight && (
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="counter__highlight"
        ></motion.div>
      )}
    </div>
  );
};
