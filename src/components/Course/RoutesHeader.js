import React, {useEffect, useState} from "react";

import {SafeAreaView, View, Text, StyleSheet, ImageBackground,Image, ScrollView, Animated} from 'react-native';
import Ulearning from '../../../assets/src/Mockspics/ULearning.png';
import Babyyoda from "../../../assets/src/Mockspics/Babyyoda.png";
import beagle1 from '../../../assets/src/Mockspics/beagle1.jpeg';
import beagle2 from '../../../assets/src/Mockspics/beagle2.jpg';
import beagle3 from '../../../assets/src/Mockspics/beagle3.jpg';
import beagle4 from '../../../assets/src/Mockspics/beagle4.jpg';
import beagle5 from '../../../assets/src/Mockspics/beagle5.jpg'



//const image = { uri: "../../../../assets/courses/DigitalMarketing.png" }; 

export default function Header(){
    const [scrollY, setScrollY] =  useState(new Animated.Value(0))
    return(
        <SafeAreaView>


            <Animated.View 
            style={[styles.header,
            {
                height: scrollY.interpolate({
                    inputRange:[10, 160, 185],
                    outputRange:[140, 20, 0],
                    extrapolate: 'clamp'
                }),
                opacity: scrollY.interpolate({
                    
                    inputRange:[1, 75, 170],
                    outputRange:[1, 1, 0],
                    extrapolate: 'clamp'
                    
            })
            }
            ]}>


            <Image
                source={Ulearning} style={{width: 30, height: 30}} resizeMode="contain"
            />
             <Animated.Image
                source={Babyyoda} style={{
                    width: scrollY.interpolate({
                        inputRange:[0, 120],
                        outputRange:[200, 120],
                        extrapolate: 'clamp'
                    })
                    , height: 30}} resizeMode="contain"
            />
            </Animated.View>
            
            <ScrollView 
            scrollEventThrottle={16}
            onScroll={
                Animated.event([{
                nativeEvent:{
                    contentOffset: {y: scrollY}
                },
            }],
            {useNativeDriver: false})}>
                <View style={styles.box }><ImageBackground source={beagle1} style={{width: 300, height: 300}}/></View>
                <View style={styles.box}><ImageBackground source={beagle2} style={{width: 300, height: 300}}/></View>
                <View style={styles.box}><ImageBackground source={beagle3} style={{width: 300, height: 300}}/></View>
                <View style={styles.box}><ImageBackground source={beagle4} style={{width: 300, height: 300}}/></View>
                 <View style={styles.box}><ImageBackground source={beagle5} style={{width: 300, height: 300}}/></View>
            </ScrollView>


        </SafeAreaView>
    )


}


const styles = StyleSheet.create({
    header:{
        backgroundColor: '#101010',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#FFF'

    },
    box:{
        height: 300,
        backgroundColor: "#FFF",
        margin: 7,
        borderRadius: 6},
        image:{
            flex: 1,
            justifyContent: 'center',
            resizeMode: "cover",
            


        }
})