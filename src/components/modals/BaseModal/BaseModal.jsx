import { motion } from "motion/react";
import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import "./BaseModal.css";
import clsx from "clsx";

const overlayAnimations = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalAnimations = {
  hidden: { opacity: 0, scale: 1 },
  exit: { opacity: 0, scale: 1 },
  visible: {
    opacity: 1,
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.3,
    },
  },
};

const MotionModalOverlay = motion.create(ModalOverlay);
const MotionModal = motion.create(Modal);

export const BaseModal = ({
  children,
  trigger,
  color = "white",
  heading,
  onOpen = () => {},
  onClose = () => {},
  ...props
}) => {
  const [animation, setAnimation] = useState("unmounted");

  const handleOpenChange = (isOpen) => {
    if (isOpen) {
      onOpen();
      setAnimation("visible");
    } else {
      onClose();
      setAnimation("hidden");
    }
  };

  return (
    <DialogTrigger onOpenChange={handleOpenChange}>
      {trigger}
      <MotionModalOverlay
        {...props}
        className="base-modal-overlay"
        isExiting={animation === "hidden"}
        onAnimationComplete={(animation) => {
          setAnimation((a) =>
            animation === "hidden" && a === "hidden" ? "unmounted" : a
          );
        }}
        isDismissable
        variants={overlayAnimations}
        initial="hidden"
        exit="hidden"
        animate={animation}
      >
        <MotionModal
          className={clsx("base-modal__modal", color)}
          variants={modalAnimations}
        >
          <Dialog className="base-modal__dialog">
            <Heading slot="title">{heading}</Heading>
            {children}
          </Dialog>
        </MotionModal>
      </MotionModalOverlay>
    </DialogTrigger>
  );
};
