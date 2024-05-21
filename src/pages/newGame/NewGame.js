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

const NewGame = () => {
  return (
    <Container>
      <Hangman>hangman container</Hangman>
      <Info>
        <Category>
          <span>category: </span>
          <span>country</span>
        </Category>
        <Word>
          <span>_ _ _ _ _</span>
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
