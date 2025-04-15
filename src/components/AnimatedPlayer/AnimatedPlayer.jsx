import { useRef } from "react";
import "./AnimatedPlayer.css";
import player1Active from "../../assets/images/player-one.svg";
import player1Idle from "../../assets/images/player-one-win.svg";
import player1Lose from "../../assets/images/player-one-lose.svg";
import player2Idle from "../../assets/images/player-two-win.svg";
import player2Active from "../../assets/images/player-two.svg";
import player2Lose from "../../assets/images/player-two-lose.svg";
import { useMedia, useMouse } from "react-use";
import { motion } from "motion/react";
import { angle, isBetween } from "../../utils";
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
    win: player1Idle,
    lose: player2Lose,
  },
};

export const AnimatedPlayer = ({
  color,
  follow,
  className,
  animation = "idle",
}) => {
  const ref = useRef(null);
  const { docX, docY, posX, posY, elW, elH } = useMouse(ref);
  const isMouse = useMedia("(pointer: fine)");

  const anchorX = posX + elW / 2;
  const anchorY = posY + elH / 2;

  const shouldFollowMouse = follow && isMouse && animation === "follow";

  const rotation = angle(docX, docY, anchorX, anchorY);

  const shouldFlip = isBetween(rotation, 180, 360);
  const adjustedRotation = shouldFlip ? 360 - rotation : rotation;
  const scaleX = shouldFlip ? -1 : 1;

  // todo: Make winning animation 'bouncy/happy'
  // todo: Make lose animation 'looking down/unhappy/shaking its head'
  // todo: Idle when pressing it should scale down and then jump/bounce

  return (
    <motion.div
      ref={ref}
      className={clsx(className, "animated-player")}
      animate={{
        rotate: shouldFollowMouse ? adjustedRotation - 90 : undefined,
        scaleX: shouldFollowMouse ? scaleX : undefined,
      }}
    >
      <img src={images[color][animation]} alt="" />
    </motion.div>
  );
};
