import styled from "styled-components";
import github from "../../public/assets/footer-assets/github-logo.svg";
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
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          
const GithubIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
    </svg>
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
