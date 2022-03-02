import React from "react";
import {View, Text, StyleSheet} from 'react-native';

export default function Courses() {
    return(
        <View style={StyleSheet.container}>
            <Text style={StyleSheet.text}>Courses</Text>

        </View>
    );
  }

  const styles = StyleSheet.create({
      container:{
          flex:1,
          justifyContent:'center',
          alignItems:'center',
      },
      text:{
          fontSize: 25,
          fontWeight: 'bold'
      }
  });