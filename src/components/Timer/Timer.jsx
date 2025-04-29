/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from "motion/react";
import { useEffect } from "react";
import { AnimatedNumber } from "../AnimatedNumber/AnimatedNumber";

import "./Timer.css";
import clsx from "clsx";
import { useCountdown } from "usehooks-ts";

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

export const Timer = ({ label, onTimerEnd, color, className, isPaused }) => {
  const [count, { startCountdown, stopCountdown, resetCountdown }] =
    useCountdown({
      countStart: 30,
      intervalMs: 1000,
    });

  useEffect(() => {
    if (count <= 0) {
      onTimerEnd();
    }
  }, [count, onTimerEnd]);

  useEffect(() => {
    resetCountdown();
    if (!isPaused) {
      startCountdown();
    }
  }, [color, resetCountdown, startCountdown]);

  useEffect(() => {
    if (isPaused) {
      stopCountdown();
    } else {
      startCountdown();
    }
  }, [isPaused, startCountdown, stopCountdown]);

  let animation = "normal";
  if (count === 0) animation = "shake";
  else if (count <= 5) animation = "pulse";

  return (
    <motion.div
      aria-live="polite"
      aria-label={count}
      className={clsx(`timer timer-${color}`, className)}
      variants={variants}
      animate={animation}
    >
      <span className="timer__label">{label}</span>
      <div className="timer__value">
        <AnimatedNumber value={count} padding={1} />
        {"s"}
      </div>
    </motion.div>
  );
};
