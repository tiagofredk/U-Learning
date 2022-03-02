import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import Courses from "./pagesBottom/Courses";
import Search from "./pagesBottom/Search";
import Wishes from "./pagesBottom/Wishes";

import {Entypo, Feather} from '@expo/vector-icons' 


const Tab = createBottomTabNavigator();

export default function RoutesBottom(){
    return(
        <Tab.Navigator 
        screenOptions={{style:{
            backgroundColor: 'red',
            borderTopColor: 'transparent'
        },
        "tabBarActiveTintColor":'black',
        "tabBarStyle":{
            paddingBottom: 5,
            paddingTop: 5, 
        },
        "tabBarStyle":[
            {
                "display":"flex"
            },
            null
        ]}} >
            <Tab.Screen
             name="Search" component={Search} 
             options={{
                 tabBarIcon:({size, color}) =>(
                     <Feather name="search" size={size} color={color} />
                 )
             }}/>
            <Tab.Screen 
             name="Courses" component={Courses}
              options={{
                 tabBarIcon:({size, color}) =>(
                     <Feather name="folder" size={size} color={color} />
                 )
             }}/>
             
            <Tab.Screen
             name="Wishes" component={Wishes}
              options={{
                 tabBarIcon:({size, color}) =>(
                     <Feather name="heart" size={size} color={color} />
                 )
             }}/>

        </Tab.Navigator>
    )
}

