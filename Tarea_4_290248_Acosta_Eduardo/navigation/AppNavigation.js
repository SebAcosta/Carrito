import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import HomeScreen from '../Screens/HomeScreen';
import CartScreen from '../Screens/CartScreen';
import ProductDetailsScreen from '../Screens/ProductDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const StackNavigator = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                {/*<Stack.screen name={"TabNavigator"} component={TabNavigator}/>*/}
                {/*<Stack.screen name={"ProductDetails"} component={ProductDetailsScreen}/>*/}
                <Stack.Screen name={"TabNavigator"}
                              component={TabNavigator}
                              options={{headerShown:false}}
                />
                <Stack.Screen name={"ProductDetails"}
                              component={ProductDetailsScreen}
                              options={(props)=>({title:props.route.params.productInfo.name})}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const TabNavigator = () =>{
    return(
            <Tab.Navigator>
                <Tab.Screen name="Inicio" component={HomeScreen} options={{
                    tabBarIcon:({focused})=><AntDesign name="home" size={24} color={focused?"green":"grey"} />
                }}/>
                <Tab.Screen name="Carrito" component={CartScreen} options={{
                    tabBarIcon:({focused})=><AntDesign name="shoppingcart" size={24} color={focused?"green":"grey"} />
                }}/>
            </Tab.Navigator>
    )
}
