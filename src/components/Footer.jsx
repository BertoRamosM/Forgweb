import styled from "styled-components";
import githubIcon from "../../public/assets/footer-assets/github-logo.svg";
import { useColorContext } from "../Context/ColorMode";

import sun from "../../public/assets/footer-assets/sun.svg";
import moon from "../../public/assets/footer-assets/moon.svg";

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  min-height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-top: 1px rgba(255, 255, 255, 1) solid;
`;

const GithubLogo = styled.div`
  width: 1rem;
  height: 1rem;
  background-image: url(${github});
  background-size: contain;
  background-color: rgba(255, 255, 255, 1);
  cursor: pointer;
  margin-right: 2rem;
  border-radius: 50%;
  padding: 0.2rem;
`;

const ModeIcon = styled.img`
  cursor: pointer;
  filter: invert(98%) sepia(79%) saturate(0%) hue-rotate(86deg) brightness(100%)
    contrast(119%);
    padding-left:2rem;
    width:1.5rem;
`;

const Footer = () => {
  const [currentMode, setCurrentMode] = useColorContext();

  const toggleMode = () => {
    setCurrentMode(currentMode === "dark" ? "light" : "dark");
  };

  const githubUrl = "https://github.com/BertoRamosM"

  return (
    <>
      <FooterContainer>
        <GithubIcon />
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          
        </a>
        <p style={{ fontSize: "0.8rem" }}> © BertoRamosM</p>

        <ModeIcon
          src={currentMode === "light" ? sun : moon}
          alt={currentMode === "light" ? "Sun Icon" : "Moon Icon"}
          onClick={toggleMode}
        />
      </FooterContainer>
    </>
  );
}
 
export default Footer;
