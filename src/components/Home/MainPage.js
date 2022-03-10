import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
// import ULearning from '../../../assets/src/Mockspics/ULearning.png'
import Onboarding from './Onboarding';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
// import Weather from '../Weather/Weather';

export default function MainPage() {
  const { user, setUser, isLogedIn } = useContext(MainContext)
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.linkbox} >
        {isLogedIn ?
          <>
            <Text>Hello {user}</Text>
          </>
          :
          <Text style={styles.text} onPress={() => navigation.navigate("Login")} title="Login">
            Login
          </Text>
        }
      </View>
      {/* <Text >
        <Image source={ULearning} style={{width: 300, height:300, paddingBottom:  8}} />
      </Text> */}

      {/* <Weather />  */}
      <Onboarding />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    // flex: 1,
    fontWeight: "800",
    fontSize: 18,

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