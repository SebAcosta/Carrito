import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from "react-native";

const Card = (props) =>{
    return(
        <View style={[styles.card, props.style]}>
            {props.children}
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    card: {
        width:Dimensions.get('window').width * 0.85,
        marginHorizontal:'2.5%', 
        borderRadius: 15,
        backgroundColor:'#f2e191',
        marginBottom:15,
        overflow:'hidden', 

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
});
