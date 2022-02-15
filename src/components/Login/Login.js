import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'


const Login = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>Login</Text>
      {/* <TextInput value="text" /> */}
      <Button onPress={()=> navigation.navigate("Home") } title="Home"/>
      <Button onPress={()=> navigation.navigate("Signin") } title="Signin"/>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({})