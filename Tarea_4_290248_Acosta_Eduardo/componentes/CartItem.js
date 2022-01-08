import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image, Platform} from 'react-native';
import {Divider} from "react-native-elements";
import Card from './UI/Card';
import * as cartActions from "../Store/Actions/cartActions"
import { Feather } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

const CartItem = props =>{
    const dispatch = useDispatch();
    const deleteItemFromCart = (item) =>{
        try{
            dispatch(cartActions.deleteItemFromCart(item))
        }catch(e){
            console.log(e)
        }
    }
    
    return(
        <Card style={styles.product}>
            <Text style={styles.itemTitle}>{props.item.name}</Text>
            <Divider style={styles.separatorLine}/>
            <View style={{flexDirection:'row'}}>
                <View style={styles.imgContainer}>
                    <Image style={styles.image}
                    source={{uri:props.item.img}}/>
                    
                </View>
                <View style={styles.price}>
                    <Text style={styles.texto}>${props.item.cost}MXN</Text>
                </View>
                <View style={styles.icon}>
                    <Feather name="trash" size={24} color="#f36767" onPress={deleteItemFromCart(props.item)}/>
                </View>
            </View>
        </Card>
    )
}

export default CartItem;

const styles = StyleSheet.create({
    separatorLine:{
        marginHorizontal:'1%',
        backgroundColor: 'white',
        margin: StyleSheet.hairlineWidth,
    },
    product:{
        height:Dimensions.get('window').height * 0.20,
        marginVertical:5,
        marginHorizontal:10,
        flexDirection:'column',
        marginBottom:'2.5%'
    },
    itemTitle:{
        fontSize: 16,
        fontFamily: 'roboto-bold',
        margin: '3%',
        color:'white',
    },
    texto:{
        fontFamily: 'roboto-italic',
        color:'white',
        textAlignVertical:'center',
    },
    imgContainer:{
        width: '30%',
        height:'85%',
        marginLeft:5,
        justifyContent: 'center',
    },
    image:{
        width: '100%',
        height: '100%',
        resizeMode:'contain',
    },
    price:{
        width: '55%',
        height:'90%',
        justifyContent: 'center',
    },
    icon:{
        height:'80%',
        justifyContent: 'flex-end',
    }
})