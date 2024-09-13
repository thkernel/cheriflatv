import React from "react"
import MapView from 'react-native-maps';
import { View, Text, StyleSheet, Dimensions } from "react-native"

export default function Map() {
  return (
    <View style={styles.container}>

      <Text style={styles.nom}>
        POSITION DE{"\n"}CHERIFLA TV
      </Text>

      <MapView style={styles.mapStyle} 
      showsUserLocation={true}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width*0.9,
    height: Dimensions.get('window').height*0.7,
    ÒborderColor: 'red',
    borderRadius: 50
  },
  nom: {
    marginTop: 20,
    marginBottom: 20,
    color: 'red',
    //fontFamily: 'RubikBrokenFax-Regular',
    fontSize: 30,
    textAlign: 'center'
  }, 
});
  