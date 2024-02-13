import { useContext, useState, createContext } from "react";

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [currentMode, setCurrentMode] = useState("light");

  return (
    <ColorContext.Provider value={[currentMode, setCurrentMode]}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColorContext = () => {
  return useContext(ColorContext);
};
