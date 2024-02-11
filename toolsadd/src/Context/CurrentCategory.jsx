import { useContext, useState } from "react";
import { createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentCat, setCurrentCat] = useState('Icons')

  return (
    <AppContext.Provider value={[currentCat, setCurrentCat]}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}