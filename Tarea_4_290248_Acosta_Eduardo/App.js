import React, {useState} from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import {StackNavigator} from "./navigation/AppNavigation";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from "redux-thunk";
import {Provider} from "react-redux";
import cartReducer from './Store/Reducers/cartReducer';
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';

const rootReducer = combineReducers({
  cart:cartReducer
})

const store = createStore(
  rootReducer, 
  applyMiddleware(ReduxThunk)
);

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  const fetchFonts = () =>{
    return Font.loadAsync({
      'roboto-regular': require('./assets/fonts/fonts/Roboto-Regular.ttf'),
      'roboto-bold': require('./assets/fonts/fonts/Roboto-Bold.ttf'),
      'roboto-italic': require('./assets/fonts/fonts/Roboto-Italic.ttf')
    })
  }

  if(!fontLoaded){
    return(
        <AppLoading
            startAsync={fetchFonts}
            onFinish={()=>setFontLoaded(true)}
            onError={console.warn}
        />
    );
  }
  return(
    <Provider store={store}>
      <StackNavigator/>
    </Provider>
  )

return (
  <StackNavigator/>
  )};

