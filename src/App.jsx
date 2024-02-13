import Footer from "./components/Footer";
import Header from "./components/Header";
import styled from "styled-components";
import Gallery from "./components/Gallery";
import { AppProvider } from "./Context/CurrentCategory";
import GlobalStyles from "./GlobalStyle";
import { ColorProvider } from "./Context/ColorMode";

const AppContainer = styled.div`
  display: flex;
  font-family: "Roboto", sans-serif;
`;

function App() {
  return (
    <ColorProvider>
      <AppProvider>
        <GlobalStyles />
        <AppContainer>
          <Header />
          <Gallery />
          <Footer />
        </AppContainer>
      </AppProvider>
    </ColorProvider>
  );
}

export default App;
