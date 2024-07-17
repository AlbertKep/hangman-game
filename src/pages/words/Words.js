import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/templates/Button";
import {
  Container,
  WordList,
  Word,
  Loading,
  Text,
  CategoryList,
  Category,
  ButtonContainer,
} from "./Words.styled";

// api function
import { getCategories, getWords } from "../../api/services";

// utils function
import { addComma } from "../../utils/addComma";

const Words = () => {
  const [words, setWords] = useState([]);
  const [categories, setCategories] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const categories = await getCategories();
      setCategories(categories);
      setIsLoading(false);
    })();
  }, []);

  const handleClick = async (category) => {
    const words = await getWords(category);
    const wordsWithComma = addComma(words);

    setWords(wordsWithComma);
  };

  return (
    <Container>
      {words.length !== 0 ? (
        <WordList>
          {words?.map((word, index) => (
            <Word key={index}>{word.name} </Word>
          ))}
        </WordList>
      ) : (
        <Text>Choose a category to see the words</Text>
      )}

      {isLoading && <Loading>Loading...</Loading>}

      <CategoryList>
        {categories?.map(({ category }) => (
          <Category key={category} onClick={() => handleClick(category)}>
            <button>{category}</button>
          </Category>
        ))}
      </CategoryList>

      <ButtonContainer>
        <Button onClick={() => navigate("/")}>back</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Words;
