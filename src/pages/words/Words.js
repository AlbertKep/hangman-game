import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/templates/Button";
import {
  Container,
  WordList,
  Word,
  Text,
  CategoryList,
  Category,
  ButtonContainer,
} from "./Words.styled";

const countries = [
  "poland",
  "spain",
  "england",
  "italy",
  "poland",
  "spain",
  "england",
  "italy",
  "poland",
  "spain",
  "england",
  "italy",
  "poland",
  "spain",
  "england",
  "italy",
  "poland",
  "spain",
  "england",
  "italy",
  "poland",
  "spain",
  "england",
  "italy",
];
const Words = () => {
  const [words, setWords] = useState(countries);
  let navigate = useNavigate();

  const addComma = () => {
    const newList = words.map((word, index) => {
      if (words.length - 1 === index) {
        return word;
      } else {
        return word + ",";
      }
    });
    setWords(newList);
  };

  useEffect(() => {
    addComma();
  }, []);

  return (
    <Container>
      {words ? (
        <WordList>
          {words?.map((word, index) => (
            <Word key={index}>{word} </Word>
          ))}
        </WordList>
      ) : (
        <Text>Choose a category to see the words</Text>
      )}
      <CategoryList>
        <Category>animals</Category>
        <Category>countries</Category>
        <Category>body</Category>
        <Category>animals</Category>
        <Category>countries</Category>
        <Category>body</Category>
        <Category>animals</Category>
        <Category>countries</Category>
      </CategoryList>

      <ButtonContainer>
        <Button onClick={() => navigate("/")}>back</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Words;
