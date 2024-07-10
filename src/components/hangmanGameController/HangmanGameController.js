import { useEffect } from "react";
import useDrawGallowsBottom from "../../hooks/useDrawGallowsBottomPart";
import useDrawGallowsTop from "../../hooks/useDrawGallowsTopPart";
import useDrawHeadAndBody from "../../hooks/useDrawHeadAndBody";
import useDrawArmsAndLegs from "../../hooks/useDrawArmsAndLegs";

import Hangman from "../../components/hangman/Hangman";

const HangmanGameController = ({ errors }) => {
  const [pathGallowsBottomPartControls, drawGallowsBottomPart] =
    useDrawGallowsBottom();
  const [pathGallowsTopPartControls, drawGallowsTopPart] = useDrawGallowsTop();
  const [pathHeadControls, drawHeadAndBody] = useDrawHeadAndBody();
  const [pathArmsAndLegsControls, drawArmsAndLegs] = useDrawArmsAndLegs();

  const checkWhatToDraw = () => {
    switch (errors) {
      case 1:
        drawGallowsBottomPart();
        break;
      case 2:
        drawGallowsTopPart();
        break;
      case 3:
        drawHeadAndBody();
        break;
      case 4:
        drawArmsAndLegs();
        break;
      default:
        console.log("Looking forward to the Weekend");
    }
  };
  useEffect(() => {
    if (errors > 0) {
      checkWhatToDraw();
    }
  }, [errors]);
  return (
    <Hangman
      pathGallowsBottomPartControls={pathGallowsBottomPartControls}
      pathGallowsTopPartControls={pathGallowsTopPartControls}
      pathHeadControls={pathHeadControls}
      pathArmsAndLegsControls={pathArmsAndLegsControls}
    />
  );
};

export default HangmanGameController;
