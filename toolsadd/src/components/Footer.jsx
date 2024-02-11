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
`

const GithubLogo = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-image: url(${github});
  background-size: contain;
  background-color: teal;
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
      <p style={{ color: "teal" }}> © BertoRamosM</p>
    </FooterContainer>
  );
}
 
export default Footer;