import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import HangmanLoadingController from "../../components/hangmanLoadingController/HangmanLoadingController";
import { GameTitle } from "./Loading.styled";
import { showTextProperties } from "../../utils/animationProperties";
import { addToSessionStorage } from "../../utils/addToSessionStorage";

const Loading = ({ setIsFirstOpen }) => {
  const showText = useAnimation();

  useEffect(() => {
    (async () => {
      await showText.start(showTextProperties.visible);
      setTimeout(() => {
        setIsFirstOpen(false);
        addToSessionStorage(false);
      }, 500);
    })();
  }, []);

  return (
    <div>
      <HangmanLoadingController isGame={false} />
      <GameTitle initial={showTextProperties.hidden} animate={showText}>
        hangman game
      </GameTitle>
    </div>
  );
};

export default Loading;
