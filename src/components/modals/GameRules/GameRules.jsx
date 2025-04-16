import {
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
} from "react-aria-components";

import { BaseButton } from "../../buttons";
import { Check } from "lucide-react";

import "./GameRules.css";
import { motion } from "motion/react";
import { useState } from "react";
import { modalAnimations, overlayAnimations } from "../animations";

const MotionModalOverlay = motion.create(ModalOverlay);
const MotionModal = motion.create(Modal);

export const GameRules = () => {
  const [animation, setAnimation] = useState("unmounted");

  const handleOpenChange = (isOpen) => {
    if (isOpen) {
      setAnimation("visible");
    } else {
      setAnimation("hidden");
    }
  };
  return (
    <DialogTrigger onOpenChange={handleOpenChange}>
      <BaseButton color="white" variant="primary" textAlign="left">
        game rules
      </BaseButton>
      <MotionModalOverlay
        className="game-rules__modal-overlay"
        isExiting={animation === "hidden"}
        onAnimationComplete={(animation) => {
          setAnimation((a) =>
            animation === "hidden" && a === "hidden" ? "unmounted" : a
          );
        }}
        variants={overlayAnimations}
        initial="hidden"
        exit="hidden"
        animate={animation}
      >
        <MotionModal className="game-rules__modal" variants={modalAnimations}>
          <Dialog className="game-rules__dialog">
            <Heading slot="title">rules</Heading>
            <div>
              <h3>objective</h3>
              <p>
                Be the first player to connect 4 of the same colored discs in a
                row (either vertically, horizontally, or diagonally).
              </p>
            </div>

            <div>
              <h3>how to play</h3>
              <ol>
                <li>Red goes first in the first game.</li>
                <li>
                  Players must alternate turns, and only one disc can be dropped
                  in each turn.
                </li>
                <li>
                  The game ends when there is a 4-in-a-row or a stalemate.
                </li>
                <li>
                  The starter of the previous game goes second on the next game.
                </li>
              </ol>
            </div>
            <BaseButton slot="close" variant="icon">
              <Check />
            </BaseButton>
          </Dialog>
        </MotionModal>
      </MotionModalOverlay>
    </DialogTrigger>
  );
};
