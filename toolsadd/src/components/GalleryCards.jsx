import styled from "styled-components";
import { useAppContext } from "../Context/CurrentCategory";

const Card = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: black;
height: 11rem;
`

const Title = styled.h2`
color: white;`


const GalleryCard = ({ data }) => {
  const [currentCat] = useAppContext();

  console.log(data);
  console.log(currentCat);

  return (
    <>
      <Card>
        {data[currentCat]?.map((item, index) => (
          <div key={index}>
            <p>image</p>
            <Title>{item.title}</Title>
            <p>{item.category}</p>
            <p>{item.license}</p>
          </div>
        ))}
      </Card>
    </>
  );
};

export default GalleryCard;
