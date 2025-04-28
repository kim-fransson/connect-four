import { useHarmonicIntervalFn } from "react-use";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { AnimatedNumber } from "../AnimatedNumber/AnimatedNumber";

import "./Timer.css";
import clsx from "clsx";
import { create } from "zustand";

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

const useTimerStore = create((set) => ({
  secondsLeft: 30,
  dec: () => set((state) => ({ secondsLeft: state.secondsLeft - 1 })),
  reset: (value = 30) => set(() => ({ secondsLeft: value })),
}));

export const Timer = ({ label, onTimerEnd, color, className }) => {
  const secondsLeft = useTimerStore((state) => state.secondsLeft);
  const reset = useTimerStore((state) => state.reset);
  const dec = useTimerStore((state) => state.dec);

  const isRunningRef = useRef(true);
  useHarmonicIntervalFn(
    () => {
      if (secondsLeft <= 0) {
        if (isRunningRef.current) {
          isRunningRef.current = false;
          onTimerEnd?.();
        }
      } else {
        dec();
      }
    },
    isRunningRef.current ? 1000 : null
  );

  useEffect(() => {
    reset();
    isRunningRef.current = true;
  }, [color, reset]);

  let animation = "normal";
  if (secondsLeft === 0) animation = "shake";
  else if (secondsLeft <= 5) animation = "pulse";

  return (
    <motion.div
      aria-live="polite"
      aria-label={secondsLeft}
      className={clsx(`timer timer-${color}`, className)}
      variants={variants}
      animate={animation}
    >
      <span className="timer__label">{label}</span>
      <div className="timer__value">
        <AnimatedNumber value={secondsLeft} padding={1} />
        {"s"}
      </div>
    </motion.div>
  );
};
