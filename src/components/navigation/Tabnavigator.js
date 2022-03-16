import { StyleSheet, Text, View, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import MainPage from '../Home/MainPage';
import Courses from '../Course/Courses';
// import Cart from '../Cart/Cart'
import UserProfile from "../User/UserProfile"
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
// import {HomeStack, CoursesStack} from './StackNavigator';

const Tabnavigator = () => {
  
    const Tab = createBottomTabNavigator();
    const route = useRoute()
    console.log(route);
    
    return (
    <Tab.Navigator screenOptions={{ 
        headerShown: false,
        tabBarShowLabel:true
      }}>
        <Tab.Screen name="Home" component={MainPage} options={{
            tabBarIcon: ({color, size}) => (
               <Ionicons name="ios-home-outline" size={size} color={'#646464'} />
                )
        }} />
        <Tab.Screen name="Courses" component={Courses} options={{
            tabBarIcon: ({color, size}) => (
                <MaterialIcons name="storefront" size={size} color={'#646464'} />
            )
        }}/>
        {/*
        <Tab.Screen name="Cart" component={Cart} options={{
            tabBarIcon: ({color, size}) => (
                <AntDesign name="shoppingcart" size={size} color={color} />
            )
        }}/> */}
        <Tab.Screen name="Account" component={UserProfile} options={{
            tabBarIcon: ({color, size}) => (
                <AntDesign name="user" size={size} color={'#646464'} />
            )
        }}/>
      </Tab.Navigator>
  )
}

export default Tabnavigator

const styles = StyleSheet.create({})