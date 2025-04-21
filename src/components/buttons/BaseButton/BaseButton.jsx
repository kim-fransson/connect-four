import clsx from "clsx";
import { Button } from "react-aria-components";

import "./BaseButton.css";
import { useState } from "react";
import { motion } from "motion/react";

const createVariant = (height) => ({
  pressed: {
    y: height,
    boxShadow: "none",
    transition: {
      y: { duration: 0.15, ease: "easeOut" },
      boxShadow: { duration: 0.05, ease: "easeIn" },
    },
  },
  initial: {
    y: 0,
    boxShadow: `0px ${height}px 0px var(--black)`,
    transition: {
      y: { duration: 0.2, ease: "easeOut" },
      boxShadow: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] },
    },
  },
});

const variantAnimations = {
  icon: createVariant(4),
  primary: createVariant(8),
  subtle: {
    initial: {
      background: "var(--purple-500)",
    },
    hovered: {
      background: "var(--red)",
      rotate: [0, -8, 8, -5, 2.5, -2.5, 0],
    },
    pressed: {
      background: "var(--red)",
      scale: 0.9,
    },
  },
};

const MotionButton = motion.create(Button);

export const BaseButton = ({
  variant,
  className,
  children,
  color = "red",
  textAlign = "center",
  ...props
}) => {
  const [animation, setAnimation] = useState("initial");
  const variants = variantAnimations[variant];

  const handleOnPress = (isPressed) => {
    setAnimation(isPressed ? "pressed" : "initial");
  };
  const handleOnHovered = (isHovered) => {
    setAnimation(isHovered ? "hovered" : "initial");
  };

  return (
    <MotionButton
      {...props}
      className={clsx(
        className,
        `base-button base-button-${variant} base-button-${color} ${textAlign}`
      )}
      onPressChange={handleOnPress}
      onHoverChange={handleOnHovered}
      initial="initial"
      animate={animation}
      variants={variants}
    >
      {children}
    </MotionButton>
  );
};
