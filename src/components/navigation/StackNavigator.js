import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainPage from '../Home/MainPage';
import Login from '../Login/Login';
// import Impressum from '../Impressum/Impressum';
import Signin from '../Signin/Signin';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      
      <Stack.Screen name="HomeStack" component={MainPage} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signin" component={Signin}/>
      {/* <Stack.Screen name="Impressum" component={Impressum}/> */}
          
    </Stack.Navigator>
  )
}

module.exports = {
  HomeStack
}

const styles = StyleSheet.create({})