export const overlayAnimations = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const modalAnimations = {
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
