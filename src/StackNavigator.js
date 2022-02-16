import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainPage from './components/Home/MainPage';
import Login from './components/Login/Login';
import Impressum from './components/Impressum/Impressum';
import Courses from './components/Course/Courses';
import Cart from './components/Cart/Cart';
import Signin from './components/Signin/Signin';
import UserProfile from './components/User/UserProfile';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
   <Stack.Navigator screenOptions={{headerShown: false}}>
       <Stack.Group>
            <Stack.Screen name="Home" component={MainPage}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Impressum" component={Impressum}/>
            <Stack.Screen name="Courses" component={Courses}/>
            <Stack.Screen name="Cart" component={Cart}/>
            <Stack.Screen name="Signin" component={Signin}/>
            <Stack.Screen name="UserProfile" component={UserProfile}/>
       </Stack.Group>
   </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})