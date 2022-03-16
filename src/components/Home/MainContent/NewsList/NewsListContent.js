import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import {
    useFonts,
    PlayfairDisplay_400Regular,
    PlayfairDisplay_500Medium,
    PlayfairDisplay_600SemiBold,
} from '@expo-google-fonts/playfair-display';

import AppLoading from 'expo-app-loading';

const NewsListContent = ({ item }) => {
    
    let [fontsLoaded] = useFonts({
        PlayfairDisplay_400Regular,
        PlayfairDisplay_500Medium,
        PlayfairDisplay_600SemiBold,

    });

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <View style={[styles.container, styles.card, styles.elevation]}>
                <Image source={item.image} style={[styles.image]} />
                <View style={{ flex: 0.3 }} >
                    <Text style={styles.title} >{item.title} </Text>
                    <Text style={styles.description}>{item.description} </Text>
                </View>
            </View>
        )
    }
}

export default NewsListContent

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        // backgroundColor: "#cacaca",
        height: 200,
        width: 180,
        marginHorizontal: 20,
        // borderWidth: 1,
        // borderColor: "#000",
    },
    image: {
        flex: 1.2,
        width: 170,
        resizeMode: "cover"
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
        // paddingHorizontal: 4,
        fontFamily: "PlayfairDisplay_400Regular",
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 5,
        paddingHorizontal: 5,
        // width: '100%',
        marginVertical: 10,
    },
    elevation: {
        elevation: 20,
        shadowColor: '#493d8a',
    },
})