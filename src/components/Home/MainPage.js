import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function MainPage() {
  const { user, setUser, isLogedIn } = useContext(MainContext)
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text >Main Page</Text>

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
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
  }
});