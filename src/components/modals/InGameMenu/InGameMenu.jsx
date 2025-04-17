import {
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
} from "react-aria-components";

import { BaseButton } from "../../buttons";

import "./InGameMenu.css";
import { motion } from "motion/react";
import { useState } from "react";
import { modalAnimations, overlayAnimations } from "../animations";

const MotionModalOverlay = motion.create(ModalOverlay);
const MotionModal = motion.create(Modal);

export const InGameMenu = () => {
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
      <BaseButton variant="subtle">menu</BaseButton>
      <MotionModalOverlay
        className="in-game-menu__modal-overlay"
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
        <MotionModal className="in-game-menu__modal" variants={modalAnimations}>
          <Dialog className="in-game-menu__dialog">
            <Heading slot="title">pause</Heading>
            <div className="in-game-menu__button-group">
              <BaseButton slot="close" color="white" variant="primary">
                continue game
              </BaseButton>
              <BaseButton color="white" variant="primary">
                restart
              </BaseButton>
              <BaseButton color="pink" variant="primary">
                quit game
              </BaseButton>
            </div>
          </Dialog>
        </MotionModal>
      </MotionModalOverlay>
    </DialogTrigger>
  );
};
