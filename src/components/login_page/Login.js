import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function login() {
  return (
    <View style={styles.container} >
      <Text>Login Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4c89ca',
    alignItems: 'center',
    justifyContent: 'center',
  }
});