import { StyleSheet, Text, View, Animated, useWindowDimensions } from 'react-native'
import React from 'react'

const Paginator = ({data, scrollX}) => {
  
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      {data.map((_, i) => {

        // const inputRange = [(i-1) * width, i * width, (i + 1) * width];

        // const dotWidht = interpolate(
        //   translateX.value,
        //   inputRange,
        //   [10, 20, 10]
        // )

        return <Animated.View style={[styles.dot, {width:10}]} key={i.toString()} />;
      })}
    </View>
  )
}

export default Paginator

const styles = StyleSheet.create({
    container:{
        // flex:1,
        justifyContent:"center",
        // alignItems:"center",
        flexDirection: "row", 
        height:64
    },
    dot: {
      height: 10,
      borderRadius: 5,
      backgroundColor: "#493d8a",
      marginHorizontal: 8,
    }
})