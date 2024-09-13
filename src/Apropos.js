
import * as React from 'react';
import {Dimensions, Image, View, Text, StyleSheet, ImageBackground,  ScrollView } from "react-native"

let { width, height } = Dimensions.get('window');
if (width <= 320) {width = 320; sizeIcon = 56;}
if (height <= 260) height = 260;

export default function Apropos({ navigation }) {
  return (
    <ImageBackground source={require('../assets/splash.jpg')} style={styles.container}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.nom}>A PROPOS DE</Text>
          <View >
              <Image style={styles.image} source={require('../assets/Accueil.png')}/>
          </View>

          <Text style={styles.description}>
            CHERIFLA TV est une chaîne de télévision généraliste et un média d'information, participatif et interactif, émettant depuis Koulikoro et a démarré ses émissions sur satellite à partir de Moribabougou, le 1er janvier 2015.
            {"\n"}{"\n"}Cette chaine est née de la volonté du guide Seid Cherif Ousmane Madani Haïdara et de la Fédération Ançar-Dine Internationale pour contribuer au développement d’un Mali vrai et paisible.

            {"\n"}{"\n"}Son but est d’informer, échanger et sensibiliser autour de l'actualité nationale et internationale.

            {"\n"}{"\n"}Sa ligne éditoriale est un ensemble de grands choix de traitement de la religion musulmane. Elle n'est pas un catalogue de prise de position religieuse.

            {"\n"}{"\n"}Situé à Banconi Djanguinébougou Immeuble Seīd Cherif Ousmane Madani HAĪDARA
            {"\n"}Tél. : +223 20240651
            {"\n"}+223 99861010
            {"\n"}E-mail : info@cheriflatv.com
            {"\n"}{"\n"}RCCM : MA.BKO.2017.B.6951
            {"\n"}NINA : 417091228C
            {"\n"}NIF : 081130304T
            {"\n"}Autorisation N°050/P-HAC/2017
            {"\n"}Bamako République du Mali      
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
  
  image: {
    alignSelf: 'center',
    marginTop: 5,
    width: width,  // Utilisez width: 100% pour occuper toute la largeur
    height: 85,  // Utilisez width: 100% pour occuper toute la hauteur
  },
  
  nom: {
    marginTop: 20,
    marginBottom: 1,
    color: 'red',
    //fontFamily: 'RubikBrokenFax-Regular',
    fontSize: 25,
    textAlign: 'center'
  }, 

  description: {
    color: 'black',
    //fontFamily: 'RubikBrokenFax-Regular',
    fontSize: 15,
    opacity: 0.8,
    textAlign: 'center',
    marginTop: 20,
    margin: 5,
  },

  bks: {
    color: 'black',
    //fontFamily: 'RubikBrokenFax-Regular',
    fontSize: 12,
    opacity: 0.5,
    textAlign: 'center',
    marginTop: 5,
    margin: 10,
  }
});
  