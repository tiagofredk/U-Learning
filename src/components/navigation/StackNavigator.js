import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainPage from '../Home/MainPage';
import Login from '../Login/Login';
// import Impressum from '../Impressum/Impressum';
import Signin from '../Signin/Signin';
import Onboarding1 from '../Course/courseOnboarding/Onboarding1';
// import OnboardingScreen from '../Home/OnboardingScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      
      <Stack.Screen name="HomeStack" component={MainPage} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signin" component={Signin}/>
      <Stack.Screen name="Onboarding1" component={Onboarding1}/>
      {/* <Stack.Screen name="onboarding2" component={Onboarding2}/> */}
      {/* <Stack.Screen name="onboarding3" component={Onboarding3}/> */}
      {/* <Stack.Screen name="Impressum" component={Impressum}/> */}
          
    </Stack.Navigator>
  )
}

module.exports = {
  HomeStack
}

const styles = StyleSheet.create({})