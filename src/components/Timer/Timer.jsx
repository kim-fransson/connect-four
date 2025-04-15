import { useHarmonicIntervalFn } from "react-use";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { AnimatedNumber } from "../AnimatedNumber/AnimatedNumber";

import "./Timer.css";

const variants = {
  normal: {
    rotate: [0],
    scale: 1,
  },
  pulse: {
    rotate: [0],
    scale: [1, 1.1, 1],
    transition: {
      scale: {
        repeat: Infinity,
        duration: 1,
      },
    },
  },
  shake: {
    rotate: [0, 10, -10, 10, -2.5, 2.5, -1.25, 1.25, 0],
    scale: 1,
    transition: {
      rotate: {
        delay: 1,
        repeat: Infinity,
        repeatDelay: 0.5,
        duration: 0.8,
      },
    },
  },
};

export const Timer = ({ label, from, onTimerEnd, color }) => {
  const [timeLeft, setTimeLeft] = useState(from);
  const isRunningRef = useRef(true);
  useHarmonicIntervalFn(
    () => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          if (isRunningRef.current) {
            isRunningRef.current = false;
            onTimerEnd?.();
          }
          return 0;
        }
        return prev - 1;
      });
    },
    isRunningRef.current ? 1000 : null
  );

  let animation = "normal";
  if (timeLeft === 0) animation = "shake";
  else if (timeLeft <= 5) animation = "pulse";

  return (
    <motion.div
      aria-live="polite"
      aria-label={timeLeft}
      className={`timer timer-${color}`}
      variants={variants}
      animate={animation}
    >
      <span className="timer__label">{label}</span>
      <div className="timer__value">
        <AnimatedNumber value={timeLeft} padding={1} />
        {"s"}
      </div>
    </motion.div>
  );
};
