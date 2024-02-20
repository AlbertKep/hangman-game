import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./assets/styles/globalStyles";
import { dark } from "./assets/styles/themes";
import { Container } from "./components/templates/Container";
import Main from "./pages/main/Main";
import NewGame from "./pages/NewGame";
import Words from "./pages/words/Words";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <ThemeProvider theme={dark}>
      <Container>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="game" element={<NewGame />} />
            <Route path="words" element={<Words />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
};

export default App;
