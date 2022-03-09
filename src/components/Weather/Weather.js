import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";


const WeatherItem = ({title, value, unit})=>{
    return(
        <View>
            <Text>{title}</Text>
            <Text>{value} {unit}</Text>
        </View>
    )
}


export default function Weather(){


return(
    <SafeAreaView>
    <View>
        <WeatherItem title="Morning" value="10:00" unit="am"/>
    </View>
    <View>
        <WeatherItem title="Sunny " value="8" unit="degree celsius"/>
    </View>
    </SafeAreaView>
)

}

const styles = StyleSheet.create({
    container:{
        flex: 1.5,
        flexDirection:"row",
        justifyContent: 'center',
      
    }
})