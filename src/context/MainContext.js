import React, { useContext, useState } from "react";

export const MainContext = React.createContext();

export const MainContextProvider = ({ children }) => {
  const [user, setUser] = useState("Dumy user");
  const [isLogedIn, setIsLogedIn ] = useState(false);
  const [profile, setProfile] = useState("");

  return (
    <MainContext.Provider
      value={{
        user,
        setUser,
        isLogedIn, 
        setIsLogedIn,
        profile, 
        setProfile
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => useContext(MainContext);