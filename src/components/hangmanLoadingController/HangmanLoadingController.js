import { useEffect } from "react";
import useDrawHangman from "../../hooks/useDrawHangman";

import Hangman from "../../components/hangman/Hangman";

const HangmanLoadingController = ({ isGame }) => {
  const [
    pathGallowsBottomPartControls,
    pathGallowsTopPartControls,
    pathHeadControls,
    pathArmsAndLegsControls,
    drawHangman,
  ] = useDrawHangman();

  useEffect(() => {
    if (!isGame) drawHangman();
  }, []);

  return (
    <Hangman
      pathGallowsBottomPartControls={pathGallowsBottomPartControls}
      pathGallowsTopPartControls={pathGallowsTopPartControls}
      pathHeadControls={pathHeadControls}
      pathArmsAndLegsControls={pathArmsAndLegsControls}
    />
  );
};

export default HangmanLoadingController;
