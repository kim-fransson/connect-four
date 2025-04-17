import clsx from "clsx";
import { motion } from "motion/react";

import "./AnimatedBackgroundBlob.css";

const animations = {
  hidden: {
    y: "100%",
  },
  show: {
    y: "50%",
    transition: {
      y: {
        type: "spring",
        stiffness: 100, // lower = more stretchy
        damping: 10, // lower = more bouncy
        bounce: 0.6, // optional, you can fine-tune this
      },
    },
  },
};

export const AnimatedBackgroundBlob = ({ color, animation }) => {
  return (
    <motion.div
      className={clsx("background-blob", color)}
      variants={animations}
      animate={animation}
      initial="hidden"
    ></motion.div>
  );
};
