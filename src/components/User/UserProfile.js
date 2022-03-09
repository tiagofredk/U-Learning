import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MainContext } from '../../context/MainContext'
import axios from 'axios'


const UserProfile = () => {
  const navigation = useNavigation()
  const { user, isLogedIn , setIsLogedIn, profile } = useContext(MainContext)

//   useEffect(() => {
//     if (isLogedIn) {
//         console.log("use efect Login isLogedIn");
//         console.log(user);
//         console.log(profile);
//     }
//     console.log(isLogedIn);
// }, [isLogedIn, setIsLogedIn]);

    const logout = async () => {
      try{
          let config = {
              header: {"content-type": "aplication/json"}
          }
          const data = await axios.get(
            "https://ulearning-backend.vercel.app/logout",
            config)

          setIsLogedIn(false);
          
          navigation.navigate("Home");
      }catch(err){
          console.log(err);
      }
  }

  return (
    <SafeAreaView>
      <Text>User profile Page</Text>
      {isLogedIn ? 
      <>
      <Text>User {user}</Text>
      <Text>Email: {profile.email}</Text>
      <Text>Fullname: {profile.fullname}</Text>
      <Button onPress={() => logout()} title="Disconnect" />
      </>
      :
      <Button onPress={()=> navigation.navigate("Login")} title="Login"/>
    }
    </SafeAreaView>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#FF5A33',
  }
})