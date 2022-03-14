import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import {
    useFonts,
    PlayfairDisplay_400Regular,
    PlayfairDisplay_500Medium,
    PlayfairDisplay_600SemiBold,
} from '@expo-google-fonts/playfair-display';

import AppLoading from 'expo-app-loading';



const ListContent = ({ item }) => {
    
    let [fontsLoaded] = useFonts({
        PlayfairDisplay_400Regular,
        PlayfairDisplay_500Medium,
        PlayfairDisplay_600SemiBold,

    });

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <View style={[styles.container]}>
                <Image source={item.image} style={[styles.image, { resizeMode: "contain" }]} />
                <View style={{ flex: 0.3 }} >
                    <Text style={styles.title} >{item.title} </Text>
                    <Text style={styles.description}>{item.description} </Text>
                </View>
            </View>
        )
    }
}

export default ListContent

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        // backgroundColor: "#cacaca",
        height: 200,
        width: 200,
        marginHorizontal: 10,
    },
    image: {
        flex: 0.7,
        width: 180,
        // justifyContent: "center",
        // alignItems:"center",
        // alignContent: "center",
        // marginRight: 20,
        // backgroundColor:"red"
    },
    title: {
        fontWeight: "800",
        fontSize: 14,
        // marginBottom: 1,
        color: "#493d8a",
        textAlign: "center",
        fontFamily: "PlayfairDisplay_400Regular",
    },
    description: {
        fontWeight: "300",
        color: "#62656b",
        textAlign: "center",
        paddingHorizontal: 64,
        fontFamily: "PlayfairDisplay_400Regular",
    }
})