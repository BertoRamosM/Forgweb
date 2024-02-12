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
import CheatsheetsIcon from "../assets/header-assets/Cheatsheets.svg";
import TutorialsIcon from "../assets/header-assets/Tutorials.svg";



const HeaderContainer = styled.div`
  position: fixed;
  background-color: black;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: auto;
  border-bottom: 3px solid rgba(255, 255, 255, 0.5);
  justify-content: center;
  padding-bottom: 2rem;
  padding-top: 2rem;
  z-index:99;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.2em;
  margin: 0.4rem;
  padding: 0.2em;
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

const SmallIcon = styled.img`
  filter: invert(98%) sepia(79%) saturate(0%) hue-rotate(86deg) brightness(0%)
    contrast(100%);
    padding-right:1rem;
`;

const Current = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 50;
  bottom: -20px;
  background-color: rgba(255, 255, 255, 1);
  width: auto;
  height: 2rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
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
          color={colors[index % colors.length]}
          onClick={() => handleButtonClick(category)}
        >
          <Icons src={eval(`${category}Icon`)} alt={`${category} Icon`} />{" "}
          {category}
        </Button>
      ))}
      <Current>
        <h2 style={{color:'black', fontSize: "1rem", paddingRight: "1rem", paddingLeft: "1rem"}}>{currentCat}</h2>
        <SmallIcon src={eval(`${currentCat}Icon`)} />
      </Current>
    </HeaderContainer>
  );
};

export default Header;
