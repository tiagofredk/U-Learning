import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

const UserProfile = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView>
        <Text>UserProfile</Text>
        <Button onPress={()=> navigation.navigate("Home") } title="Home"/>
    </SafeAreaView>
    
  )
}

export default UserProfile

const styles = StyleSheet.create({})