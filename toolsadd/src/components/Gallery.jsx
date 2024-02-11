import styled from "styled-components";
import data from "../data.json";
import GalleryCard from "./GalleryCards";


const GalleryContainer = styled.div`
  width: 90vw;
  height: auto;
  padding-top: 15%;
  padding-left: 10%;
  padding-bottom:10%;
  display: grid;
  gap: 1.5rem;
  grid-auto-rows: 10rem;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  overflow: auto;
`;



const Gallery = () => {
  return (
    <GalleryContainer>
      <GalleryCard data={data} />
    </GalleryContainer>
  );
}
 
export default Gallery;