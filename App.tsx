/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet,View,Text, Button, Linking } from 'react-native';

const App =()=>{
  return (
    <View  style = {style.body}>
      <Text style ={style.text}>Learning React Native</Text>
      <Button title='YouTube Channel' onPress={()=> {Linking.openURL("https://www.youtube.com")}}></Button>
    </View>
  )
}


const style = StyleSheet.create(
  {
    body:{
      flex : 1,
      backgroundColor : '#ff00ff',
      alignItems : "center",
      justifyContent :"center",
    },

    text :{
      color  : "#FFFFFF",
      fontSize : 20,
      fontStyle : "italic"

    }
  }
)


export default App
