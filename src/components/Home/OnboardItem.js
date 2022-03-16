import { StyleSheet, Text, View, Image, FlatList, useWindowDimensions } from 'react-native'
import React from 'react'

import {
    useFonts,
    PlayfairDisplay_400Regular,
    PlayfairDisplay_500Medium,
    PlayfairDisplay_600SemiBold,
} from '@expo-google-fonts/playfair-display';

import AppLoading from 'expo-app-loading';



const OnboardItem = ({ item }) => {
    const { width } = useWindowDimensions();

    let [fontsLoaded] = useFonts({
        PlayfairDisplay_400Regular,
        PlayfairDisplay_500Medium,
        PlayfairDisplay_600SemiBold,

    });

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <View style={[styles.container, { width }]}>
                <Image source={item.image} style={[styles.image, { width, resizeMode: "contain" }]} />
                <View style={{ flex: 0.3 }} >
                    <Text style={styles.title} >{item.title} </Text>
                    <Text style={styles.description}>{item.description} </Text>
                </View>
            </View>
        )
    }
}

export default OnboardItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:  "#ADD8E6"
    },
    image: {
        flex: 0.7,
        justifyContent: "center",
    

    },
    title: {
        fontWeight: "800",
        fontSize: 28,
        marginBottom: 10,
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