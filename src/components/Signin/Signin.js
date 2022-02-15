import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Signin = () => {
    const navigation = useNavigation()
  return (
    <View>
      <Text>Signin</Text>
      <Button onPress={()=> navigation.navigate("Home") } title="Home"/>
    </View>
  )
}

export default Signin

const styles = StyleSheet.create({})