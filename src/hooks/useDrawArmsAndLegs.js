import { useAnimation } from "framer-motion";
import { drawPathProperties } from "../utils/animationProperties";

const useDrawArmsAndLegs = () => {
  const pathArmsAndLegsControls = useAnimation();

  const drawHeadAndBody = () =>
    pathArmsAndLegsControls.start(drawPathProperties.visible);
  return [pathArmsAndLegsControls, drawHeadAndBody];
};

export default useDrawArmsAndLegs;
