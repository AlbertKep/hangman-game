import useDrawGallowsBottom from "./useDrawGallowsBottomPart";
import useDrawGallowsTop from "./useDrawGallowsTopPart";
import useDrawHeadAndBody from "./useDrawHeadAndBody";
import useDrawArmsAndLegs from "./useDrawArmsAndLegs";

const useDrawHangman = () => {
  const [pathGallowsBottomPartControls, drawGallowsBottomPart] =
    useDrawGallowsBottom();

  const [pathGallowsTopPartControls, drawGallowsTopPart] = useDrawGallowsTop();

  const [pathHeadControls, drawHeadAndBody] = useDrawHeadAndBody();

  const [pathArmsAndLegsControls, drawArmsAndLegs] = useDrawArmsAndLegs();

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
