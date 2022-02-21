import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MainContext } from '../../context/MainContext'
import axios from 'axios'


const UserProfile = () => {
  const navigation = useNavigation()
  const { user, isLogedIn , setIsLogedIn } = useContext(MainContext)

  useEffect(() => {
    if (isLogedIn) {
        console.log("use efect Login");
        console.log(isLogedIn);
        console.log(user);
    }
    console.log(isLogedIn);
}, [isLogedIn, setIsLogedIn]);

    
    const logout = async () => {
      try{
          let config = {
              header: {"content-type": "aplication/json"}
          }
          const data = await axios.get(
            "https://ulearning-backend-mwnxs09vr-tiagofredk.vercel.app/logout",
            config)

          console.log(data);
          setIsLogedIn(false);
          // setUser("Ana")
          // console.log("logout");
          // console.log(isRegistered);
          // console.log(user);
          navigation.navigate("Home");
      }catch(err){
          console.log(err);
      }
  }

  return (
    <SafeAreaView>
      <Text>User profile Page</Text>
      {isLogedIn ? 
      <><Text>{user}</Text><Button onPress={() => logout()} title="Disconnect" /></>
      :
      <Button onPress={()=> navigation.navigate("Login")} title="Login"/>
    }
        <Button onPress={()=> navigation.navigate("Home")} title="Home"/>
    </SafeAreaView>
  )
}

export default UserProfile

const styles = StyleSheet.create({})