
import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { TouchableOpacity } from "react-native";

import * as Linking from 'expo-linking';

export default function Avatar(){
  const appel=()=>{
    console.log('Appeler moi')
    Linking.openURL('tel:0612476072');
  } 

  return (
    <View style={styles.uploadImage}>
      <TouchableOpacity onPress={appel}>
          <Image style={styles.rsImage} source={require('../assets/emediabks.png')}/>


      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  uploadImage: {
    //paddingTop: 50,
    //width: 66,
    //height: 58,
    //flex: 1,
    //backgroundColor: '#fff',
    marginBottom: 20,
    alignSelf: 'center',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  rsContainer: {
    flexDirection: 'row',
    //backgroundColor: '#fff',
    //marginBottom: 40,
    marginTop: 30,
    //alignSelf: 'Center',
    alignItems: 'center',
    //justifyContent: 'center',
    //padding: 24,
    ///height: 100,
    padding: 20,
    width: undefined, 
    height: undefined,
  },

  rsImage: {
    width: 50,
    height: 50,
    margin: 20,
  },


});




/*
const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('@expo/snack-static/react-native-logo.png')}
      />
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Image
        style={styles.logo}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
    </View>
  );
};

export default DisplayAnImage;

*/