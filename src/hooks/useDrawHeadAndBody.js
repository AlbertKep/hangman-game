import { useAnimation } from "framer-motion";
import { drawPathProperties } from "../utils/animationProperties";

const useDrawHeadAndBody = () => {
  const pathHeadControls = useAnimation();

  const useDrawHeadAndBody = () =>
    pathHeadControls.start(drawPathProperties.visible);
  return [pathHeadControls, useDrawHeadAndBody];
};

export default useDrawHeadAndBody;
