import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { getProduct } from "../components/Course/screens/ProductsService";

export const MainContext = React.createContext();

export const MainContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [isLogedIn, setIsLogedIn ] = useState(false);
  const [profile, setProfile] = useState({});
  const [items, setItems] = useState([]);

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
        
        const fullname = data.data.session.user.fullname;
        const email = data.data.session.user.email;
        const userProfile={fullname, email};

        setIsLogedIn(true);
        setUser(data.data.session.user.username)
        setProfile(userProfile);

        console.log("context fetch response authentication: SUCCESS")
        // console.log(data.data.session.user.email);
          
      }else{
        setIsLogedIn(false);
        console.log("context fetch response authentication: NOT AUTHENTICATED")
        // console.log(data.data);
      }
    }
    sincronize()

  }, [isLogedIn, user, setUser]);

  function addItemToCart(id){
    const product = getProduct(id);
    setItems((prevItems)=>{
        const item = prevItems.find((item)=>(item.id == id));
        if(!item){
            return[...prevItems,{
                id,
                qty: 1,
                product,
                totalPrice: product.price
            }]
        }
        else{
            return prevItems.map((item)=>{
                if(item.id == id){
                    item.qty++;
                    item.totalPrice += product.price;
                }
                return item;
            });
        }
    });
}

function getItemsCount(){
return items.reduce((sum,item)=>(sum + item.qty), 0)
}

function getTotalPrice(){
return items.reduce((sum, item)=>(sum + item.totalPrice), 0);
}

  return (
    <MainContext.Provider
      value={{
        user,
        setUser,
        isLogedIn, 
        setIsLogedIn,
        profile, 
        setProfile,
        items, 
        setItems, 
        getItemsCount, 
        addItemToCart, 
        getTotalPrice
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => useContext(MainContext);