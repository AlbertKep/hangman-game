import { useAnimation } from "framer-motion";
import { drawPathProperties } from "../utils/animationProperties";

const useDrawGallowsBottom = () => {
  const pathGallowsBottomPartControls = useAnimation();
  const drawGallowsBottomPart = () =>
    pathGallowsBottomPartControls.start(drawPathProperties.visible);
  return [pathGallowsBottomPartControls, drawGallowsBottomPart];
};

export default useDrawGallowsBottom;
