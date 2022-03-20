import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
    useFonts,
    PlayfairDisplay_400Regular,
    PlayfairDisplay_500Medium,
    PlayfairDisplay_600SemiBold,
} from '@expo-google-fonts/playfair-display';
import AppLoading from 'expo-app-loading';
import Nav from '../utils/Nav';

const LoginDecision = () => {
    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        PlayfairDisplay_400Regular,
        PlayfairDisplay_500Medium,
        PlayfairDisplay_600SemiBold,
    });

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <View style={styles.container}>
                <Text style={styles.h1} >Sign In</Text>
                <Text style={styles.subtext} >By using our services you are agreeing to our Terms and Privacy Statament</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Fontisto name="email" size={24} color="black" />
                    <Text style={styles.text}>Sign in with e-mail</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Ionicons name="ios-logo-google" size={24} color={'#414141'} />
                    <Text style={styles.text} >Sign in with a Google account</Text>
                </TouchableOpacity>
                <View style={styles.sigin} >
                    <Text>New Here?</Text>
                    <Text style={styles.span}  onPress={() => navigation.navigate("Signin")}> Create an account</Text>
                </View>
                <Nav/>
            </View>
        )
    }
}

export default LoginDecision

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        paddingHorizontal: 10
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: "#000"
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    },
    text: {
        fontWeight: "bold",
        padding: 10,
    },
    h1: {
        marginTop: 60,
        textAlign: "center",
        fontSize: 22,
        fontFamily: "PlayfairDisplay_600SemiBold",
    },
    subtext: {
        margin: 30,
        textAlign: "center",
        fontSize: 12,
        fontFamily: "PlayfairDisplay_400Regular",
    },
    sigin: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 100,
        textAlign: "center",
    },
    span:{
        color: "#493d8a",
        fontWeight:"bold"
    }
})