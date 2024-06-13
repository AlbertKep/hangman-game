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
  const [checkedWord, setCheckedWord] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(0);
  const [isWin, setIsWin] = useState("Not Yet");

  const wordToArray = (word) => {
    const convertWord = Array(word[0].name.length).fill("_");
    setRenderWord(convertWord);
  };

  const startGame = async () => {
    setIsLoading(true);
    const randomWord = await getRandomWord();
    setWord(...randomWord);
    setCheckedWord([...randomWord[0].name]);
    wordToArray(randomWord);
    setIsLoading(false);
  };

  const checkIfIsWin = () => {
    if (renderWord.reduce((a, b) => a && checkedWord.includes(b), true))
      setIsWin("You WON");
  };

  const checkTheLetter = (letter) => {
    const localRenderWord = [...renderWord];

    checkedWord.forEach((lt, index) => {
      if (lt === letter) {
        localRenderWord[index] = letter;
        setRenderWord((prev) => {
          prev[index] = letter;
          return [...prev];
        });
      }
    });

    if (!checkedWord.includes(letter)) setErrors((prev) => prev + 1);
  };

  const handleClick = (selectedLetter) => {
    checkTheLetter(selectedLetter);
  };

  useEffect(() => {
    if (renderWord.length > 0) checkIfIsWin();
  }, [renderWord]);

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
        {errors}
        {isWin}
      </Info>
      <Letters>
        {letters?.map((letter) => (
          <Letter key={letter} onClick={() => handleClick(letter)}>
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
