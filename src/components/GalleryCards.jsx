import styled from "styled-components";
import { useAppContext } from "../Context/CurrentCategory";
import { useColorContext } from "../Context/ColorMode";


const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--secondary-color);
  height: 20rem;
  width: 21rem;
  position: relative;
  border-radius: 10px;
  cursor: pointer;

  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
    text-decoration: underline;
  }

  box-shadow: ${(props) =>
    props.currentMode === "light"
      ? "0px 10px 10px rgba(0, 0, 0, 1)"
      : "0px 0px 10px rgba(255, 255, 255, 1)"};
`;

const CardImg = styled.img`
  height: 15rem;
  width: 21rem;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;

  object-fit: cover;
`;

const Title = styled.h2`
  color: var(--primary-color);
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 1rem;
  margin-left: 1rem;
`;


const License = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 1rem;
  margin-right: 1rem;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border-radius: 5px;
  padding: 0.3rem;
`;


const GalleryCard = ({ data }) => {
  const [currentCat] = useAppContext();

      const [currentMode] = useColorContext();


  const itemsForCurrentCat = data[currentCat] || [];

  return (
    <>
      
        {itemsForCurrentCat.map((item, index) => (
          <Card key={index} onClick={() => {
            window.open(item.link, "_blank");
          }}>
            <CardImg src={item.image} alt={item.title}></CardImg>
            <Title>{item.title}</Title>
            <License>{item.license}</License>
          </Card>
        ))}
      
    </>
  );
};

export default GalleryCard;
