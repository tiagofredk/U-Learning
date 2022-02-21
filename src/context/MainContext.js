import React, { useContext, useState } from "react";

export const MainContext = React.createContext();

export const MainContextProvider = ({ children }) => {
  const [user, setUser] = useState("User INFO");
  const [isLogedIn, setIsLoggedIn ] = useState(false);
  const [profile, setProfile] = useState("");

  return (
    <MainContext.Provider
      value={{
        user,
        setUser,
        isLogedIn, 
        setIsLoggedIn,
        profile, 
        setProfile
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => useContext(MainContext);