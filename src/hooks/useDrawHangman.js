import { useAnimation } from "framer-motion";
import { drawPathProperties } from "../utils/animationProperties";

const useDrawHangman = () => {
  const pathGallowsBottomPartControls = useAnimation();
  const pathGallowsTopPartControls = useAnimation();
  const pathHeadControls = useAnimation();
  const pathArmsAndLegsControls = useAnimation();

  const drawGallowsBottomPart = () =>
    pathGallowsBottomPartControls.start(drawPathProperties.visible);

  const drawGallowsTopPart = () =>
    pathGallowsTopPartControls.start(drawPathProperties.visible);

  const drawHeadAndBody = () =>
    pathHeadControls.start(drawPathProperties.visible);

  const drawArmsAndLegs = () =>
    pathArmsAndLegsControls.start(drawPathProperties.visible);

  const drawHangman = async () => {
    await drawGallowsBottomPart();
    await drawGallowsTopPart();
    await drawHeadAndBody();
    await drawArmsAndLegs();
  };

  return [
    pathGallowsBottomPartControls,
    pathGallowsTopPartControls,
    pathHeadControls,
    pathArmsAndLegsControls,
    drawHangman,
  ];
};

export default useDrawHangman;
