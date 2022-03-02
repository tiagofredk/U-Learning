import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { SafeAreaView } from 'react-native-safe-area-context';
import { CartProvider } from '../Cart/components/CartContext';
import { ProductsList } from './screens/ProductsList';
import { ProductDetails } from './screens/ProductDetails';
import { CartIcon } from '../Cart/components/CartIcon';






const Stack = createNativeStackNavigator();

function Courses(){
  return(
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Products' component={ProductsList}
          options={({navigation})=>({
            title: 'Products',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })} />
          <Stack.Screen name='ProductDetails' component={ProductDetails}
          options={({navigation})=>({
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
            headerRight: ()=> <CartIcon navigation={navigation}/>,
          })} />
          <Stack.Screen name='Cart' component={Cart}
          options={({navigation})=>({
            title: 'My Cart',
            headerTitleStyle: styles.headerTitle,
            headerRight: ()=> <CartIcon navigation={navigation}/>,
          })}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  )
}

const styles = StyleSheet.create({
  headerTitleStyle:{
    fontSize: 20,
  }
});

export default Courses;



