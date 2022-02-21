import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


export default function MainPage() {
  const {user, setUser, isLogedIn} = useContext(MainContext)
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text >Main Page</Text>
        
        {isLogedIn ? 
        <Text>{user}</Text> 
        : 
        <Button onPress={()=> navigation.navigate("Login") } title="Login"/>
      }
        <Button onPress={()=> navigation.navigate("UserProfile") } title="User"/>
        <Button onPress={()=> navigation.navigate("Impressum") } title="Impressum"/>
        <Button onPress={()=> navigation.navigate("Courses") } title="Courses"/>
        <Button onPress={()=> navigation.navigate("Cart") } title="Cart"/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#a97b7b',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });