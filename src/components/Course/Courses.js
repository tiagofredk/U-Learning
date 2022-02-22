import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

import Routes from './src/routes';

const Courses = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView>
    
        <Button onPress={()=> navigation.navigate("Home") } title="Home"/>
        
        <NavigationContainer independent={true}>
          <Routes />
        </NavigationContainer>
    
    </SafeAreaView>
  )
}

export default Courses

const styles = StyleSheet.create({})