import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
//import RoutesBottom from './RoutesBottom';
import RoutesHeader from './RoutesHeader';

const Courses = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView>
       <RoutesHeader />
        {/*<RoutesBottom />*/}
    </SafeAreaView>
    
  )
}

export default Courses

const styles = StyleSheet.create({})