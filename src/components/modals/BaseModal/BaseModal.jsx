import { AnimatePresence, motion } from "motion/react";
import { Dialog, Heading, Modal, ModalOverlay } from "react-aria-components";
import clsx from "clsx";

import "./BaseModal.css";

const overlayAnimations = {
  hidden: { opacity: 0 },
  exit: { opacity: 0 },
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

export const BaseModal = ({ children, color = "white", heading, ...props }) => {
  return (
    <AnimatePresence>
      {props.isOpen && (
        <MotionModalOverlay
          {...props}
          isOpen
          className="base-modal-overlay"
          isDismissable
          variants={overlayAnimations}
          initial="hidden"
          animate="visible"
          exit="hidden"
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
      )}
    </AnimatePresence>
  );
};
