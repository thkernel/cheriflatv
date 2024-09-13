
import React from "react";
import { StyleSheet, Image, View } from "react-native";

export default function Avatar(){
  const appel=()=>{
    //console.log('Appeler moi')
  } 

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/Accueil.png')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    alignSelf: 'center',
  },
  logo: {
    flexDirection: 'row',
  
    marginTop: 5,
    width: 300,  // Utilisez width: 100% pour occuper toute la largeur
    height: 70,  // Utilisez width: 100% pour occuper toute la hauteur
  },
});
  
