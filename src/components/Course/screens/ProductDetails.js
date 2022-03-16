import React, {useEffect, useState, useContext} from "react";
import {Text, Image, View, ScrollView, SafeAreaView, Button, StyleSheet} from 'react-native'
import { getProduct } from "./ProductsService";
// import { CartContext } from "../../Cart/components/CartContext";

export function ProductDetails({route}){
    // const {items, setItems, getItemsCount, addItemToCart, getTotalPrice} = useContext(MainContext)
    const {productId} = route.params;
    const [product, setProduct] = useState({});

    const {addItemToCart} = useContext(CartContext)

    useEffect(()=>{
        setProduct(getProduct(productId))
    });

    function onAddToCart(){
        addItemToCart(product.id);
    }

    return(
        <SafeAreaView>
            <ScrollView>
                <Image
                    style={styles.image}
                    source={product.image}
                />

                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{product.name}</Text>
                    {/* <Text style={styles.price}>${product.price}</Text> */}
                    <Text style={styles.description}>{product.description}</Text>
                    <Button 
                    onPress={onAddToCart}
                    title="Buy me!"/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:'white',
        borderRadius: 16,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOffset:{
            height: 0,
            width: 0,
        },
        elevation:1,
        marginVertical: 20,

    },
    image: {
        height: 300,
        width: '100%'
    },
    infoContainer:{
        padding: 16,
    },
    name:{
        fontSize: 22,
        fontWeight: 'bold',
    },
    price:{
        fontSize: 16,
        fontWeight: '400',
        color: '#787878',
        marginBottom: 16
    },

})