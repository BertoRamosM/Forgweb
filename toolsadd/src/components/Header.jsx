import { useState } from "react";
import styled from "styled-components";
import data from "../data.json"
import {useAppContext} from '../Context/CurrentCategory'

//icons
import BackgroundsIcon from "../assets/header-assets/Backgrounds.svg"
import BlogsIcon from "../assets/header-assets/Blogs.svg"
import ColorsIcon from "../assets/header-assets/Colors.svg";
import ComponentsIcon from "../assets/header-assets/Components.svg";
import FontsIcon from "../assets/header-assets/Fonts.svg";
import IconsIcon from "../assets/header-assets/Icons.svg";
import IllustrationsIcon from "../assets/header-assets/Illustrations.svg";
import LibrariesIcon from "../assets/header-assets/Libraries.svg";
import PhotosIcon from "../assets/header-assets/Photos.svg";
import ToolsIcon from "../assets/header-assets/Tools.svg";
import UIcollectionsIcon from "../assets/header-assets/UIcollections.svg";
import VideosIcon from "../assets/header-assets/Videos.svg";



const HeaderContainer = styled.div`
  position: fixed;
  background-color: black;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: auto;
  border-bottom: 3px solid teal;
  justify-content: space-around;
  padding-bottom: 2rem;
  padding-top: 2rem;
 
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.2em;
  margin: 0.4rem;
  padding: 0.2em 1em;
  border-radius: 10px;
  min-width: 12rem;
  height: 2rem;
  background-color: ${(props) => props.color};

  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
    text-decoration: underline;
  }
`;

const Icons = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  color: white;
  filter: invert(98%) sepia(79%) saturate(0%) hue-rotate(86deg)
    brightness(100%) contrast(119%);
`;

const Header = () => {


  const [currentCat, setCurrentCat] = useAppContext();
  

  const handleButtonClick = (category) => {
    setCurrentCat((prevCat) => {
      console.log(category); 
      return category;
    });
  };

  const categories = Object.keys(data)
    const colors = [
      "#0000FF", 
      "#FF0000",
      "#008000",
      "#FFA500",
      "#008080", 
      "#FF3385",
      "#800080", 
      "#C133FF", 
      "#FF5733", 
      "#DC143C", 
      "#5733FF", 
      "#006400", 
    ];

  

    const uniqueCategories = Array.from(new Set(categories));


  return (
    <HeaderContainer>
      {uniqueCategories.map((category, index) => (
        <Button
          key={category}
          color={colors[index]}
          onClick={() => handleButtonClick(category)}
        >
          <Icons src={eval(`${category}Icon`)} alt={`${category} Icon`} />{" "}
          {category}
        </Button>
      ))}
    </HeaderContainer>
  );
};

export default Header;
