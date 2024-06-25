import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { letters } from "../../assets/letters";
import { Button } from "../../components/templates/Button";
import Modal from "../../components/modal/Modal";
import {
  Container,
  Hangman,
  Letters,
  Letter,
  Info,
  Category,
  Word,
  Buttons,
  ModalGameStatus,
  ModalGameData,
} from "./NewGame.styled";

import { getRandomWord } from "../../api/services";

const NewGame = () => {
  const [word, setWord] = useState({});
  const [renderWord, setRenderWord] = useState([]);
  const [checkedWord, setCheckedWord] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(0);
  const [gameStatus, setGameStatus] = useState("");
  const [showModal, setShowModal] = useState(false);

  const maxNumbersOfErros = 8;
  let navigate = useNavigate();

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

  const checkGameStatus = () => {
    if (renderWord.reduce((a, b) => a && checkedWord.includes(b), true)) {
      setGameStatus("You WON!");
      // setShowModal(true);
      switchModal();
    } else if (errors === maxNumbersOfErros) {
      setGameStatus("YOU LOOSE!");
      // setShowModal(true);
      switchModal();
    }
  };

  const switchModal = () => setShowModal((prev) => !prev);

  const newGame = () => {
    switchModal();
    startGame();
  };

  const closeModal = () => {
    switchModal();
    navigate("/");
  };

  const handleClick = (selectedLetter) => {
    checkTheLetter(selectedLetter);
  };

  useEffect(() => {
    if (renderWord.length > 0) checkGameStatus();
  }, [renderWord, errors]);

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
          <Letter
            key={letter.letter}
            onClick={() => handleClick(letter.letter)}
            disabled={letter.isDisabled}
          >
            <button
              onClick={() => (letter.isDisabled = true)}
              disabled={letter.isDisabled}
            >
              {letter.letter}
            </button>
          </Letter>
        ))}
      </Letters>
      <Buttons>
        <Button>restart</Button>
        <Button>give up</Button>
      </Buttons>
      {showModal && (
        <Modal>
          <ModalGameStatus>{gameStatus}</ModalGameStatus>
          <ModalGameData>password: {word.name}</ModalGameData>
          <ModalGameData>errors: {errors}</ModalGameData>

          <Buttons>
            <Button onClick={() => newGame()}>new game</Button>
            <Button onClick={() => closeModal()}>close</Button>
          </Buttons>
        </Modal>
      )}
    </Container>
  );
};

export default NewGame;
