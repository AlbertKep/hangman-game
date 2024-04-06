export const showTextProperties = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 2.3 } },
};

export const drawPathProperties = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "none",
    stroke: "#707070",
    strokeWidth: 3,
  },
  visible: { opacity: 1, pathLength: 1, transition: { duration: 0.5 } },
};
