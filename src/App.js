import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./assets/styles/globalStyles";
import { dark } from "./assets/styles/themes";
import { Container } from "./components/templates/Container";
import Loading from "./pages/loading/Loading";
import Main from "./pages/main/Main";
import NewGame from "./pages/newGame/NewGame";
import Words from "./pages/words/Words";
import NotFound from "./pages/NotFound";

import { isFirstOpenInStorage } from "./utils/checkSessionStorage";

const App = () => {
  const [isFirstOpen, setIsFirstOpen] = useState(isFirstOpenInStorage);

  return (
    <ThemeProvider theme={dark}>
      <Container>
        <GlobalStyle />
        {isFirstOpen ? (
          <Loading setIsFirstOpen={setIsFirstOpen} />
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="game" element={<NewGame />} />
              <Route path="words" element={<Words />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default App;
