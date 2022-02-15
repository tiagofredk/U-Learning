import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

const Courses = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView>
        <Text>Courses</Text>
        <Button onPress={()=> navigation.navigate("Home") } title="Home"/>
    </SafeAreaView>
    
  )
}

export default Courses

const styles = StyleSheet.create({})