import { useAnimation } from "framer-motion";
import { drawPathProperties } from "../utils/animationProperties";

const useDrawGallowsTop = () => {
  const pathGallowsTopPartControls = useAnimation();
  const drawGallowsTopPart = () =>
    pathGallowsTopPartControls.start(drawPathProperties.visible);
  return [pathGallowsTopPartControls, drawGallowsTopPart];
};

export default useDrawGallowsTop;
