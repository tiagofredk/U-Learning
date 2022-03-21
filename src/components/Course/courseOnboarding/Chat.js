import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import Chat from '../../../assets/src/Mockspics/ChatImg.png'


export default function Chat(){
    return(
        <View>
            <Image source={Chat}/>
        </View>
    )

}

const styles = StyleSheet.create({})