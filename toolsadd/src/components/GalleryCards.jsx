import styled from "styled-components";
import { useAppContext } from "../Context/CurrentCategory";

const Card = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: black;
height: auto;
border: 1px solid teal;
width: 15rem;
`

const Title = styled.h2`
color: white;`


const GalleryCard = ({ data }) => {
  const [currentCat] = useAppContext();

  console.log(data);
  console.log(currentCat);

  const itemsForCurrentCat = data[currentCat] || [];

  return (
    <>
      <div>
        {itemsForCurrentCat.map((item, index) => (
          <Card key={index}>
            <p>image</p>
            <Title>{item.title}</Title>
            <p>{item.category}</p>
            <p>{item.license}</p>
          </Card>
        ))}
      </div>
    </>
  );
};

export default GalleryCard;
