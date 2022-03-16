import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import MainOnboard from './src/components/Home/MainOnboard';
import { MainContextProvider } from './src/context/MainContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabnavigator from './src/components/navigation/Tabnavigator';
import LoginDecision from './src/components/Login/LoginDecision';
import Login from './src/components/Login/Login';
import SignupForm from './src/components/Signin/Signin';
import Onboarding1 from './src/components/Course/courseOnboarding/Onboarding1';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const Stack = createNativeStackNavigator();

  const [firstLaunch, setFirstLaunch] = useState(null);
  console.log("the value of useState");
  console.log(firstLaunch);

  // if its not the first time user get to the app the Onboard screen will not appear
  useEffect(async () => {

    const appData = await AsyncStorage.getItem("firstLaunch"); // fetch data from localStorage

    console.log(appData);

    if (appData == null) {
      setFirstLaunch(true);
      AsyncStorage.setItem("firstLaunch", "false");
    } else {
      setFirstLaunch("firstLaunch", "false");
    }
    console.log(firstLaunch);
  }, []);

  // Stack navigation in the app will gives a possibility to hide tab bar in some screens
  return (
    firstLaunch != null && (
      <NavigationContainer>
        <MainContextProvider>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {firstLaunch === true && (
              <Stack.Screen name="MainOnboard" component={MainOnboard} />
            )}
            <Stack.Screen name="HomeStack" component={Tabnavigator} />
            <Stack.Screen name="LoginDecision" component={LoginDecision} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signin" component={SignupForm} />
            <Stack.Screen name="Onboarding1" component={Onboarding1} />
          </Stack.Navigator>
          <StatusBar style="dark" />
        </MainContextProvider>
      </NavigationContainer>
    )
  );
}

