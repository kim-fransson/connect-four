import { Check } from "lucide-react";
import { BaseButton } from "../BaseButton/BaseButton";

import "./CheckButton.css";
import { motion } from "motion/react";
import { useState } from "react";

const MotionBaseButton = motion.create(BaseButton);

const variants = {
  pressed: {
    y: 4,
    boxShadow: "none",
    transition: {
      y: { duration: 0.15, ease: "easeOut" },
      boxShadow: { duration: 0.05, ease: "easeIn" },
    },
  },
  initial: {
    y: 0,
    boxShadow: "0px 4px 0px var(--black)",
    transition: {
      y: { duration: 0.2, ease: "easeOut" },
      boxShadow: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] },
    },
  },
};

export const CheckButton = (props) => {
  const [animation, setAnimation] = useState("initial");

  const handleOnPress = (isPressed) => {
    setAnimation(isPressed ? "pressed" : "initial");
  };

  return (
    <MotionBaseButton
      {...props}
      className="check-button"
      onPressChange={handleOnPress}
      initial="initial"
      animate={animation}
      variants={variants}
    >
      <Check size={36} />
    </MotionBaseButton>
  );
};
