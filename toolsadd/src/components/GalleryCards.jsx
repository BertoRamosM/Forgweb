import styled from "styled-components";
import { useAppContext } from "../Context/CurrentCategory";


const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ;
  height: 20rem;
  width: 22rem;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
  position: relative;
  border-radius: 10px;
  cursor: pointer;

  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
    text-decoration: underline;
  }
`;

const CardImg = styled.img`
  height: 15rem;
  width: 22rem;
  position: absolute;
  top: 1px;
  left:0;
  border-radius: 10px;
  object-fit: cover;
`;

const Title = styled.h2`
color: white;
position: absolute;
bottom: 0;
left: 0;
margin-bottom: 1rem;
margin-left: 1rem;
`


const License = styled.div`
position: absolute;
bottom: 0;
right: 0;
margin-bottom: 1rem;
margin-right: 1rem;
background-color: blue;
color: white;
border-radius: 5px;
padding: 0.3rem;`


const GalleryCard = ({ data }) => {
  const [currentCat] = useAppContext();

  console.log(data);
  console.log(currentCat);

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
