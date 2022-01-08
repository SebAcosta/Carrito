import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import CartItem from '../componentes/CartItem';
import {PRODUCTS} from "../dummy-data/data";
import ProductCard from "../componentes/ProductCard";


const CartScreen = () =>{
    const CartItems = useSelector(state=>state.cart.items);
    const cartTotal = useSelector(state => state.cart.total);
    return(
        <View style={styles.container}>
            <FlatList  
                data={CartItems}
                keyExtractor={item => item.id}
                renderItem={itemData=>(
                    <CartItem
                        item = {itemData.item}
                    />
                )}
            />
        </View>
    )
}

export default CartScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
    }
})