import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

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
  opacity: ${(props) => (props.loaded ? 1 : 0)};
  transition: opacity 0.3s ease;
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

const Loader = styled.div`
    width: 48px;
    height: 48px;
    border: 5px solid lightblue;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
      display: ${(props) => (props.loaded ? "none" : "inline-block")};

  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const GalleryCard = ({ data }) => {
  const [loadedImages, setLoadedImages] = useState([]);
  const currentCat = useSelector((store) => store.category.currentCat);
  const itemsForCurrentCat = data[currentCat] || [];

  useEffect(() => {
    setLoadedImages([]);
  }, [currentCat]);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => [...prev, index]);
  };

  return (
    <>
      {itemsForCurrentCat.map((item, index) => (
        <Card key={index} onClick={() => window.open(item.link, "_blank")}>
          <CardImg
            src={item.image}
            alt={item.title}
            loaded={loadedImages.includes(index)}
            onLoad={() => handleImageLoad(index)}
          />
          <Loader loaded={loadedImages.includes(index)}></Loader>
          <Title>{item.title}</Title>
          <License>{item.license}</License>
        </Card>
      ))}
    </>
  );
};

export default GalleryCard;
