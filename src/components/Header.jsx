import styled, { css } from "styled-components";
import data from "../data.json";
import { setCurrentCat } from "../redux/CategorySlice";
import { useSelector } from "react-redux";
//icons
import BackgroundsIcon from "/public/assets/header-assets/Backgrounds.svg";
import BlogsIcon from "../../public/assets/header-assets/Blogs.svg";
import ColorsIcon from "../../public/assets/header-assets/Colors.svg";
import ComponentsIcon from "../../public/assets/header-assets/Components.svg";
import FontsIcon from "../../public/assets/header-assets/Fonts.svg";
import IconsIcon from "../../public/assets/header-assets/Icons.svg";
import IllustrationsIcon from "../../public/assets/header-assets/Illustrations.svg";
import LibrariesIcon from "../../public/assets/header-assets/Libraries.svg";
import PhotosIcon from "../../public/assets/header-assets/Photos.svg";
import ToolsIcon from "../../public/assets/header-assets/Tools.svg";
import UIcollectionsIcon from "../../public/assets/header-assets/UIcollections.svg";
import VideosIcon from "../../public/assets/header-assets/Videos.svg";
import CheatsheetsIcon from "../../public/assets/header-assets/Cheatsheets.svg";
import TutorialsIcon from "../../public/assets/header-assets/Tutorials.svg";
import { useDispatch } from "react-redux";

const HeaderContainer = styled.div`
  width: 99%;
  position: fixed;
  background-color: var(--primary-color);
  top: 0;
  display: flex;
  flex-wrap: wrap;
  
  min-height: auto;
  border-bottom: 3px solid var(--secondary-color);
  justify-content: center;
  padding-bottom: 2rem;
  padding-top: 2rem;
  z-index: 99;

  @media (max-width: 800px) {
    padding-bottom: 1rem;
    padding-top: 1rem;
  }
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

  @media (max-width: 800px) {
    font-size: 1em;
    min-width: 10rem;
    height: 1.5rem;
    margin: 0.3rem;
  }
`;

const Icons = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  color: white;
  filter: invert(98%) sepia(79%) saturate(0%) hue-rotate(86deg) brightness(100%)
    contrast(119%);

  @media (max-width: 800px) {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }
`;

const SmallIcon = styled.img`
  filter: ${(props) =>
    props.theme.currentMode === "light"
      ? "invert(100%) sepia(79%) saturate(100%) hue-rotate(100deg) brightness(500%) contrast(100%)"
      : "invert(100%) sepia(100%) saturate(100%) hue-rotate(86deg) brightness(50%) contrast(100%)"};
  padding-right: 1rem;

  @media (max-width: 800px) {
    padding-right: 0.5rem;
  }

  
`;

const Current = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 50;
  bottom: -20px;
  background-color: var(--primary-color);
  min-width: auto;
  height: 2rem;
  border: 1px solid var(--secondary-color);
  border-radius: 10px;

  @media (max-width: 800px) {
    height: 1.5rem;
    bottom: -15px;
  }
`;

const Header = () => {
  const dispatch = useDispatch();
  const currentCat = useSelector((state) => state.category.currentCat); //

  const handleButtonClick = (category) => {
    dispatch(setCurrentCat(category));
  };

  const categories = Object.keys(data);

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
          <Icons src={getIcon(category)} alt={`${category} Icon`} /> {category}
        </Button>
      ))}
      <Current>
        <h2
          style={{
            color: "var(--secondary-color)",
            fontSize: "1rem",
            paddingRight: "1rem",
            paddingLeft: "1rem",
          }}
        >
          {currentCat}
        </h2>
        <SmallIcon src={getIcon(currentCat)} />
      </Current>
    </HeaderContainer>
  );
};

const getIcon = (category) => {
  switch (category) {
    case "Backgrounds":
      return BackgroundsIcon;
    case "Blogs":
      return BlogsIcon;
    case "Colors":
      return ColorsIcon;
    case "Components":
      return ComponentsIcon;
    case "Fonts":
      return FontsIcon;
    case "Icons":
      return IconsIcon;
    case "Illustrations":
      return IllustrationsIcon;
    case "Libraries":
      return LibrariesIcon;
    case "Photos":
      return PhotosIcon;
    case "Tools":
      return ToolsIcon;
    case "UIcollections":
      return UIcollectionsIcon;
    case "Videos":
      return VideosIcon;
    case "Cheatsheets":
      return CheatsheetsIcon;
    case "Tutorials":
      return TutorialsIcon;
    default:
      return null;
  }
};

export default Header;
