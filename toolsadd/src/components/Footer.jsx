import styled from "styled-components";
import github from "../assets/footer-assets/github-logo.svg";

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  min-height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-top: 1px rgba(255, 255, 255, 0.5) solid;
`;

const GithubLogo = styled.div`
  width: 1rem;
  height: 1rem;
  background-image: url(${github});
  background-size: contain;
  background-color: rgba(255, 255, 255, 1);
  cursor: pointer;
  margin-right: 1rem;
  border-radius: 50%;
  padding: 0.2rem;
`;

const Footer = () => {
  const githubUrl = "https://github.com/BertoRamosM"
  return (
    <FooterContainer>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        <GithubLogo />
      </a>
      <p style={{ fontSize: "0.7rem" }}> © BertoRamosM</p>
    </FooterContainer>
  );
}
 
export default Footer;