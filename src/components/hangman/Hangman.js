import { motion } from "framer-motion";
import { drawPathProperties } from "../../utils/animationProperties";

const Loading = ({
  pathGallowsBottomPartControls,
  pathGallowsTopPartControls,
  pathHeadControls,
  pathArmsAndLegsControls,
}) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="314"
        height="373.574"
        viewBox="0 0 314 373.574"
      >
        <motion.line
          id="gallows-bottom"
          data-name="gallows bottom"
          x2="314"
          transform="translate(0 372.074)"
          {...drawPathProperties.hidden}
          animate={pathGallowsBottomPartControls}
        />
        <motion.path
          id="gallows-top"
          data-name="gallows top"
          d="M60,408.5V35.926H205.075v54.189"
          {...drawPathProperties.hidden}
          animate={pathGallowsTopPartControls}
        />

        <motion.circle
          id="head"
          data-name="head"
          cx="205"
          cy="127"
          r="38"
          {...drawPathProperties.hidden}
          animate={pathHeadControls}
        />

        <motion.line
          id="body"
          data-name="body"
          y1="165"
          y2="250"
          x1="205"
          x2="205"
          {...drawPathProperties.hidden}
          animate={pathHeadControls}
        />

        <motion.path
          id="left-arm"
          data-name="left arm"
          d="M205.136,165c-31.091,38.622-31.328,38.978-31.328,38.978v22.448"
          {...drawPathProperties.hidden}
          animate={pathArmsAndLegsControls}
        />

        <motion.path
          id="right-arm"
          data-name="left arm"
          d="M205.136,165c+31.091,38.622 31.328,38.978 31.328,38.978v22.448"
          {...drawPathProperties.hidden}
          animate={pathArmsAndLegsControls}
        />

        <motion.path
          id="left-leg"
          data-name="left leg"
          d="M205.364,248.280c-21.515,23.9-27.3,32.46-27.3,32.46"
          {...drawPathProperties.hidden}
          animate={pathArmsAndLegsControls}
        />

        <motion.path
          id="right-leg"
          data-name="right leg"
          d="M205.364,248.280c 21.515,23.9 27.3,32.46 27.3,32.46"
          {...drawPathProperties.hidden}
          animate={pathArmsAndLegsControls}
        />
      </svg>
    </>
  );
};

export default Loading;
