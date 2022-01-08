import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions, Button} from "react-native";
import * as cartActions from "../Store/Actions/cartActions"
import { useDispatch } from 'react-redux';

const ProductDetailsScreen = (props) =>{
    const {productInfo} = props.route.params
    const dispatch = useDispatch();
    const redirect = () =>{
        props.navigation.navigate('Inicio')
    }
    const addToCart = () =>{
        try{
            dispatch(cartActions.addToCart(productInfo))
        }catch(e){
            console.log(e)
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.titulo}>
                    DETALLES DEL {productInfo.name}
                </Text>
                <Image source={{uri: productInfo.img}} style={styles.image}/>
                <Text style={styles.desc}>
                    {productInfo.description}
                </Text>
                <Text style={styles.cost}>
                    Precio: ${productInfo.cost}
                </Text>
                <View style={styles.boton}>
                    <Button title={"Regresar"} color={'#FFA69E'} onPress={redirect}/>
                    <Button title={"Agregar al carrito"} color={'#FFA69E'} onPress={addToCart}/>
                </View>
            </View>
        </View>
    )
}
export default ProductDetailsScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white'
    },
    card: {
        height:Dimensions.get('window').height * 0.825,
        marginHorizontal:'6.25%',
        width: Dimensions.get('window').width * 0.875,
        marginVertical:'8.75%',
        backgroundColor: '#fff',
        borderRadius:15,
        backgroundColor: '#AED9E0',
        padding:15,
    },
    image:{
        width:'90%',
        height:'30%',
        resizeMode:'contain',
        marginHorizontal:'5%'
    },
    titulo:{
        fontFamily:'roboto-regular',
        fontSize: 23,
        color: 'white',
        textAlign:'center',
        height:'10%'
    },
    cost:{
        fontFamily:'roboto-bold',
        fontSize: 18,
        color: 'white',
        height:'10%',
    },
    desc:{
        fontFamily:'roboto-italic',
        fontSize: 15,
        color: 'white',
        textAlign:'justify',
        height:'43%',
        textAlignVertical:'center',
    },
    boton:{
        flexDirection:'row',
        justifyContent: 'space-between',
        width:'100%',
        borderRadius:10
    }
});
