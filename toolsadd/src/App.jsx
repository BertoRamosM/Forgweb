import Footer from "./components/Footer"
import Header from "./components/Header"
import styled from "styled-components"
import Gallery from "./components/Gallery"
import { AppProvider } from "./Context/CurrentCategory"

const AppContainer = styled.div`
display:flex;`


function App() {

  return (
    <AppProvider>
      <AppContainer>
        <Header />
        <Gallery />
        <Footer />
      </AppContainer>
    </AppProvider>
  );
}

export default App
