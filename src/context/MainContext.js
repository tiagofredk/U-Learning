import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

export const MainContext = React.createContext();

export const MainContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [isLogedIn, setIsLogedIn ] = useState(false);
  const [profile, setProfile] = useState({});

  useEffect( () =>  {

    async function sincronize(){

      let config ={
        headers:{
          "content-type": "aplication/json"
        }
      }
      let data = await axios.get(
        "https://ulearning-backend.vercel.app/verifytoken", 
        config
        );
      
      if(data.data.message === "success"){
        setIsLogedIn(true);
      }else{
        setIsLogedIn(false);
      }
    }
    sincronize()

  }, [isLogedIn, user, setUser]);

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