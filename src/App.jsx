import Footer from "./components/Footer";
import Header from "./components/Header";
import styled from "styled-components";
import Gallery from "./components/Gallery";
import GlobalStyles from "./GlobalStyle";
import { ColorProvider } from "./Context/ColorMode";

const AppContainer = styled.div`
  display: flex;
  font-family: "Roboto", sans-serif;
`;

function App() {
  return (
    <ColorProvider>
        <GlobalStyles />
        <AppContainer>
          <Header />
          <Gallery />
          <Footer />
        </AppContainer>
    </ColorProvider>
  );
}

export default App;
