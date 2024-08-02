export const showLetters = {
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.05,
    },
  }),
};

export const showItems = {
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.3,
    },
  }),
};

export const slideOut = {
  initial: { opacity: 0, x: "-100%" },
  animate: { opacity: 1, x: 0, transition: { duration: 0.75 } },
};
