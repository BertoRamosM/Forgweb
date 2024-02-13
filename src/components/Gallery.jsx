import styled from "styled-components";
import data from "../data.json";
import GalleryCard from "./GalleryCards";


const GalleryContainer = styled.div`
  width: 99vw;
  height: auto;
  padding-top: 15%;
  padding-left: 1%;
  padding-bottom: 10%;
  display: grid;
  gap: 2rem;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(21rem, 1fr));
  overflow: auto;
  background-color: var(--primary-color);
`;



const Gallery = () => {
  return (
    <GalleryContainer>
      <GalleryCard data={data} />
    </GalleryContainer>
  );
}
 
export default Gallery;