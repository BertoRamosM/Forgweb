import styled from "styled-components";
import { useAppContext } from "../Context/CurrentCategory";

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ;
  height: auto;
  width: 15rem;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
`;

const Title = styled.h2`
color: white;`


const GalleryCard = ({ data }) => {
  const [currentCat] = useAppContext();

  console.log(data);
  console.log(currentCat);

  const itemsForCurrentCat = data[currentCat] || [];

  return (
    <>
      
        {itemsForCurrentCat.map((item, index) => (
          <Card key={index}>
            <p>image</p>
            <Title>{item.title}</Title>
            <p>{item.category}</p>
            <p>{item.license}</p>
          </Card>
        ))}
      
    </>
  );
};

export default GalleryCard;
