import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";

export const MainContext = React.createContext();

export const MainContextProvider = ({ children }) => {
  const [user, setUser] = useState("This is a context value");
  const navigation = useNavigation();

  return (
    <MainContext.Provider
      value={{
        user,
        setUser
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => useContext(MainContext);