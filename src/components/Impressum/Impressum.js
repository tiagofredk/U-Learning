import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const Impressum = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>Impressum</Text>
      <Button onPress={()=> navigation.navigate("Home")} title="Home"/>
    </SafeAreaView>
  )
}

export default Impressum

const styles = StyleSheet.create({})