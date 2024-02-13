import { createGlobalStyle } from "styled-components";
import { useColorContext } from "../src/Context/ColorMode"; 


const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: ${(props) =>
      props.currentMode === "light" ? "white" : "black"};
    --secondary-color: ${(props) =>
      props.currentMode === "light" ? "black" : "white"};
  }
`;

const GlobalStylesProvider = () => {
  const [currentMode] = useColorContext(); 
  return <GlobalStyles currentMode={currentMode} />;
};

export default GlobalStylesProvider;
