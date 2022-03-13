import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import slides from './slides'
import ListContent from './ListContent'

const ListModule = () => {
  return (
    <FlatList
    data={slides}
    keyExtractor={(item) => item}
    showsHorizontalScrollIndicator={false}
    horizontal
    snapToAlignment={"start"}
    scrollEventThrottle={16}
    decelerationRate="fast"
    style={{marginTop: 20}}
    // renderItem={({ item }) => <ListContent item={item} />}
     renderItem={({item}) =>(
         <View
             style={styles.renderview}
         />
     )}

    />
  )
}

export default ListModule

const styles = StyleSheet.create({
    renderview:{
        backgroundColor: "#afafaf",
        height: 200,
        width: 200,
        marginHorizontal: 10,
    }
})