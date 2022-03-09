import { StyleSheet, Text, View, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import MainPage from '../Home/MainPage';
import Courses from '../Course/Courses';
import Cart from '../Cart/Cart'
import UserProfile from "../User/UserProfile"
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import StackNavigator from './StackNavigator';


const Tabnavigator = () => {
  
    const Tab = createBottomTabNavigator();
  
    return (
    <Tab.Navigator screenOptions={{ 
        headerShown: false,
        tabBarShowLabel:true
        
      }}>
        <Tab.Screen name="Home" component={StackNavigator.HomeStack} options={{
            tabBarIcon: ({color, size}) => (
               <Ionicons name="ios-home-outline" size={size} color={'#FF5A33'} />
                )
        }} />
        <Tab.Screen name="Courses" component={Courses} options={{
            tabBarIcon: ({color, size}) => (
                <MaterialIcons name="storefront" size={size} color={'#FF5A33'} />
            )
        }}/>
        {/*
        <Tab.Screen name="Cart" component={Cart} options={{
            tabBarIcon: ({color, size}) => (
                <AntDesign name="shoppingcart" size={size} color={color} />
            )
        }}/> */}
        <Tab.Screen name="UserProfile" component={UserProfile} options={{
            tabBarIcon: ({color, size}) => (
                <AntDesign name="user" size={size} color={'#FF5A33'} />
            )
        }}/>
      </Tab.Navigator>
  )
}

export default Tabnavigator

const styles = StyleSheet.create({})