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
import Module1 from './MainContent/Module1';
import ListModule from './MainContent/ListModule';

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
        
          <Module1 />
          <Text style={styles.featured}>Featured</Text>
          <ListModule />
          <Text style={styles.news}>News</Text>
          {/* <ListModule /> */}

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#ffffff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontFamily: "PlayfairDisplay_600SemiBold",
    // backgroundColor:"red",
    // marginRight:0,
    color: "#3b3b3b",
  },
  linkbox: {
    // width: 250,
    marginTop: 10,
    marginRight: 10,
    alignItems: "flex-end",
  },
  featured: {
    marginTop: 30,
    marginLeft: 30,
    fontSize:19,
    fontWeight:"bold"
  },
  news:{
    marginTop: 30,
    marginLeft: 30,
    fontSize:19,
    fontWeight:"bold"
  }
});