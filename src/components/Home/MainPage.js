import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native';
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

// import ULearning from '../../../assets/src/Mockspics/ULearning.png'
import Onboarding from './Onboarding';
// import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
// import Weather from '../Weather/Weather';

export default function MainPage() {
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
        {/* <Text >
        <Image source={ULearning} style={{width: 300, height:300, paddingBottom:  8}} />
      </Text> */}

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
    // flex:1,
    marginTop: 50,
    // marginRight:60,
    alignItems: "flex-end",
    // backgroundColor:"green"
  }
});