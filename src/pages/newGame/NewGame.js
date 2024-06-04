import { useState, useEffect } from "react";
import { letters } from "../../assets/letters";
import { Button } from "../../components/templates/Button";
import {
  Container,
  Hangman,
  Letters,
  Letter,
  Info,
  Category,
  Word,
  Buttons,
} from "./NewGame.styled";

import { getRandomWord } from "../../api/services";

const NewGame = () => {
  const [word, setWord] = useState({});
  const [renderWord, setRenderWord] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const wordToArray = (word) => {
    const convertWord = Array(word[0].name.length).fill("_");
    setRenderWord(convertWord);
  };

  const startGame = async () => {
    setIsLoading(true);
    const randomWord = await getRandomWord();
    setWord(...randomWord);
    wordToArray(randomWord);
    setIsLoading(false);
  };

  useEffect(() => {
    startGame();
  }, []);

  if (isLoading) return "loading";

  return (
    <Container>
      <Hangman>hangman container</Hangman>
      <Info>
        <Category>
          <span>category: </span>
          <span>{word?.category}</span>
        </Category>
        <Word>
          {renderWord?.map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </Word>
      </Info>
      <Letters>
        {letters?.map((letter) => (
          <Letter key={letter}>
            <button>{letter}</button>
          </Letter>
        ))}
      </Letters>
      <Buttons>
        <Button>restart</Button>
        <Button>give up</Button>
      </Buttons>
    </Container>
  );
};

export default NewGame;
