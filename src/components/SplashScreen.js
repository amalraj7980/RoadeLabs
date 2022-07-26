import React, { Component } from 'react'
import { Text, View,Image} from 'react-native'
import { images } from '../../BaseThems'

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:'#fff',alignItems:"center",justifyContent:"center"}}>
        <Image source={images.App_Logo} style={{height:70}}/>
      </View>
    )
  }
}