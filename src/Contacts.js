import * as React from 'react';
import { Dimensions, Image, View, Text, StyleSheet, ImageBackground, ScrollView } from "react-native";

let { width, height } = Dimensions.get('window');
if (width <= 320) width = 320;
if (height <= 260) height = 260;

export default function Contacts({ navigation }) {
  return (
    <ImageBackground source={require('../assets/splash.jpg')} style={styles.container}>
      <View style={styles.container}>
        <ScrollView>        
          <View > 
            <Image style={styles.imageCherifla} source={require('../assets/Accueil.png')}/>
          </View>

          <Text style={styles.description}>
            Situé à Banconi Djanguinébougou Immeuble Seīd Cherif Ousmane Madani HAĪDARA
            {"\n"}Tél. : +223 20240651 / +223 99861010
            {"\n"}E-mail : info@cheriflatv.com
          </Text>

          <View >
              <Image style={styles.imageTES} source={require('../assets/logoTES.png')}/>
          </View>

          <Text style={styles.bks}>
            {"\n"}Contact du développeur : T.E.S
            {"\n"}Tél.: +223 68686891 / +223 91919120
            {"\n"}E-mail: emediabks@gmail.com      
          </Text>
        </ScrollView>
      </View>
    </ImageBackground>        
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageCherifla: {
    alignSelf: 'center',
    marginTop: 15,
    width: width,  // Utilisez width: 100% pour occuper toute la largeur
    height: 80,  // Utilisez width: 100% pour occuper toute la hauteur
    },
  
  imageTES: {
    alignSelf: 'center',
    marginTop: 35,
    width: 118,  // Utilisez width: 100% pour occuper toute la largeur
    height: 118,  // Utilisez width: 100% pour occuper toute la hauteur
    },
    
  Titre: {
    marginTop: 20,
    marginBottom: 1,
    color: 'red',
    //fontFamily: 'RubikBrokenFax-Regular',
    fontSize: 30,
    textAlign: 'center'
  }, 

  description: {
    color: 'black',
    //fontFamily: 'RubikBrokenFax-Regular',
    fontSize: 15,
    opacity: 0.8,
    textAlign: 'center',
    marginTop: 1,
    margin: 1,
  },
  bks: {
    color: 'black',
    //fontFamily: 'RubikBrokenFax-Regular',
    fontSize: 15,
    opacity: 0.8,
    textAlign: 'center',
    marginTop: 1,
    margin: 10,
  }
});
