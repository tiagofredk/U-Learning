import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import ULearning from '../../../assets/src/Mockspics/ULearning.png'
import Weather from '../Weather/Weather';

export default function MainPage() {
  const { user, setUser, isLogedIn } = useContext(MainContext)
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text >
        <Image source={ULearning} style={{width: 300, height:300, paddingBottom:  8}} />
      </Text>
     
      <Weather />
      {isLogedIn ?
        <>
        <Text>Hello {user}</Text>
        </>
        :
        <Button onPress={() => navigation.navigate("Login")} title="Login" />
      }
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5A33',
    alignItems: 'center',
    justifyContent: 'center',
  }
});