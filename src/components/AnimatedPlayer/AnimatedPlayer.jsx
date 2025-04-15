import { useRef } from "react";
import "./AnimatedPlayer.css";
import player1Active from "../../assets/images/player-one.svg";
import player1Idle from "../../assets/images/player-one-win.svg";
import player1Lose from "../../assets/images/player-one-lose.svg";
import player2Idle from "../../assets/images/player-two-win.svg";
import player2Active from "../../assets/images/player-two.svg";
import player2Lose from "../../assets/images/player-two-lose.svg";
import { useMouse } from "react-use";
import { motion } from "motion/react";
import { angle, isBetween, repeat } from "../../utils";
import clsx from "clsx";

const images = {
  red: {
    idle: player1Idle,
    follow: player1Active,
    win: player1Idle,
    lose: player1Lose,
  },
  yellow: {
    idle: player2Idle,
    follow: player2Active,
    win: player2Idle,
    lose: player2Lose,
  },
};

const animationVariants = (rotation, scaleX) => ({
  follow: {
    rotate: rotation - 90,
    scaleX,
  },
  win: {
    y: repeat(["0", "-80px"], 4).concat(["0"]),
    scaleX: repeat([1.1, 1], 4).concat([1.1]),
    scaleY: repeat([(0.9, 1)], 4).concat([0.9]),
    rotate: repeat([0, 0], 3).concat([0, 0, 180, 360]),

    transition: {
      y: {
        duration: 0.8 * 4,
        repeat: Infinity,
        ease: repeat(["easeOut", "easeIn"], 4).concat(["easeOut"]),
      },
      scaleX: {
        duration: 0.8 * 4,
        repeat: Infinity,
        ease: repeat(["easeOut", "easeIn"], 4).concat(["easeOut"]),
      },
      scaleY: {
        duration: 0.8 * 4,
        repeat: Infinity,
        ease: repeat(["easeOut", "easeIn"], 4).concat(["easeOut"]),
      },
      rotate: {
        duration: 0.8 * 4,
        repeat: Infinity,
        ease: repeat(["easeOut", "easeIn"], 4).concat(["easeOut"]),
      },
    },
  },
});

export const AnimatedPlayer = ({ color, className, animation = "idle" }) => {
  const ref = useRef(null);
  const { docX, docY, posX, posY, elW, elH } = useMouse(ref);

  const anchorX = posX + elW / 2;
  const anchorY = posY + elH / 2;

  const rotation = angle(docX, docY, anchorX, anchorY);

  const shouldFlip = isBetween(rotation, 180, 360);
  const adjustedRotation = shouldFlip ? 360 - rotation : rotation;
  const scaleX = shouldFlip ? -1 : 1;

  const variants = animationVariants(adjustedRotation, scaleX);

  return (
    <div ref={ref} className={clsx(className, "animated-player")}>
      <motion.img
        src={images[color][animation]}
        alt=""
        variants={variants}
        animate={animation}
      />
    </div>
  );
};
