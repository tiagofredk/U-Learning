import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';

export default function MainPage() {
    const {user, setUser} = useContext(MainContext)
  return (
    <View style={styles.container}>
        <Text >Main Page</Text>
        <Text>{user}</Text>
    </View>
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