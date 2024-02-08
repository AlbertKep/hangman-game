import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./assets/styles/globalStyles";
import { dark } from "./assets/styles/themes";
import { Container } from "./components/Container";

const App = () => {
  return (
    <ThemeProvider theme={dark}>
      <Container>
        <GlobalStyle />
        <h1>Hangman Game</h1>
      </Container>
    </ThemeProvider>
  );
};

export default App;
