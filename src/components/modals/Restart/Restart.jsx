import {
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
} from "react-aria-components";

import { BaseButton } from "../../buttons";

import "./Restart.css";
import { motion } from "motion/react";
import { useState } from "react";
import { modalAnimations, overlayAnimations } from "../animations";

const MotionModalOverlay = motion.create(ModalOverlay);
const MotionModal = motion.create(Modal);

export const Restart = ({ btnVariant = "primary", btnColor = "white" }) => {
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
      <BaseButton variant={btnVariant} color={btnColor}>
        restart
      </BaseButton>
      <MotionModalOverlay
        className="restart__modal-overlay"
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
        <MotionModal className="restart__modal" variants={modalAnimations}>
          <Dialog className="restart__dialog">
            <Heading slot="title">Are you sure?</Heading>
            <div className="restart__button-group">
              <BaseButton slot="close" color="white" variant="primary">
                never mind
              </BaseButton>
              <BaseButton color="pink" variant="primary">
                restart
              </BaseButton>
            </div>
          </Dialog>
        </MotionModal>
      </MotionModalOverlay>
    </DialogTrigger>
  );
};
