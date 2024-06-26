import styled from "styled-components";
import data from "../data.json";
import GalleryCard from "./GalleryCards";


const GalleryContainer = styled.div`
  width: 98vw;
  height: auto;
  padding-top: 15%;
  padding-left: 1%;
  padding-bottom: 10%;
  display: grid;
  justify-content: center;
  align-items:center;
  gap: 2rem;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(21rem, 1fr));
  overflow: auto;
  background-color: var(--primary-color);

  @media (max-width: 1300px) {
    padding-top: 20%;
  }

  @media (max-width: 1050px) {
    padding-top: 27%;
  }

  @media (max-width: 980px) {
    padding-top: 30%;
  }

  @media (max-width: 950px) {
    padding-top: 30%;
  }

  @media (max-width: 900px) {
    padding-top: 30%;
  }

  @media (max-width: 850px) {
    padding-top: 40%;
  }

  @media (max-width: 800px) {
    padding-top: 30%;
  }
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 32%;
  }

  @media (max-width: 680px) {
    padding-top: 40%;
  }
  @media (max-width: 600px) {
    padding-top: 40%;
  }
  @media (max-width: 550px) {
    padding-top: 40%;
  }

  @media (max-width: 530px) {
    padding-top: 55%;
  }
  @media (max-width: 500px) {
    padding-top: 70%;
  }
  @media (max-width: 400px) {
    padding-top: 80%;
  }
  @media (max-width: 350px) {
    padding-top: 90%;
  }
`;



const Gallery = () => {
  return (
    <GalleryContainer>
      <GalleryCard data={data} />
    </GalleryContainer>
  );
}
 
export default Gallery;