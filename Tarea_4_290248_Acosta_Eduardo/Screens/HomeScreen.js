import React from 'react';
import {View, StyleSheet, FlatList, Dimensions, BackHandler } from "react-native";
import {PRODUCTS} from "../dummy-data/data"
import ProductCard from '../componentes/ProductCard';

const HomeScreen = (props) =>{

    return(
        <View style={styles.container}>
            <View style={styles.listContainer}>
                    <FlatList
                        data={PRODUCTS}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.id.toString()}
                        renderItem= {itemData => (
                            <ProductCard {...props} productInfo={itemData.item}/>
                        )}
                    />
            </View>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10,
        backgroundColor:'white'
    },
    listContainer:{
        height:Dimensions.get('window').height * 0.850,
        width:'100%'
    }
  })