import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import {
  useFonts,
  PlayfairDisplay_400Regular,
  PlayfairDisplay_500Medium,
  PlayfairDisplay_600SemiBold,
} from '@expo-google-fonts/playfair-display';

import AppLoading from 'expo-app-loading';

import Onboarding from './Onboarding';

export default function MainOnboard() {

  const { user, setUser, isLogedIn } = useContext(MainContext)

  const navigation = useNavigation();
  
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular,
    PlayfairDisplay_500Medium,
    PlayfairDisplay_600SemiBold,

  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.linkbox} >
          {isLogedIn ?
            <>
              <Text style={styles.text}>Hello {user}</Text>
            </>
            :
            <Text style={styles.text} onPress={() => navigation.navigate("LoginDecision")} title="Login">
              Sign In
            </Text>
          }
        </View>
        
        <Onboarding />

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: "PlayfairDisplay_600SemiBold",
  },
  linkbox: {
    width: 250,
    marginTop: 50,
    alignItems: "flex-end",
  }
});