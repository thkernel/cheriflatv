import * as React from 'react';
import { 
  Dimensions, 
  Image, 
  View, 
  Text,
  StyleSheet, ScrollView, ImageBackground } from "react-native";

let isBigScreen = true;

let { width, height } = Dimensions.get('window');
if (width <= 320) {width = 320; sizeIcon = 56; isBigScreen = false;}
if (height <= 260) height = 260;

export default function LeGuide({ navigation }) {
  return (
    <ImageBackground source={require('../assets/splash.jpg')} style={styles.container}>
      <View style={styles.container}>
        <ScrollView>
          <View >
              <Image style={[isBigScreen ? styles.imageBigScreen : styles.imageSmallScreen]} source={require('../assets/CherifEnBleu.png')}/>
          </View>
          <Text style={styles.description}>
            {"\n"}Chérif Ousmane Madani HAĪDARA est né le 12 Mai 1955 à Tamani dans la région de Ségou. 
            {"\n"}Tamani est situé à environ 70 km de Ségou, la 4ème région en république du Mali. 

            {"\n"}{"\n"}Il prêche en langue Bambara, une langue parlée dans plus de 6 pays d'Afrique de l'Ouest, d'où provient la majorité de ses fidèles.

            {"\n"}{"\n"}D'origine chérifienne, c'est-à-dire  {"\n"}descendant du prophète Mohammad (PSL), son père est Mohamad El-Madani HAĪDARA (Qu'Allah l'agrée) et sa mère Bassitan TRAORE encore vivante et résidante à Tamani où le guide se rend toutes les fêtes de Ramadan et Tabaski. 

            {"\n"}{"\n"}Il est communément appelé HAĪDARA, ou Chérif, ou Bani, ou même Woulibaly qui signifie "Qu'on ne peut le contredire" car tout ce qu'il dit provient du Coran et des Hadiths.
            {"\n"} {"\n"}Il ne possède pas une autre toriqua.
            {"\n"} {"\n"}Ses enseignements se basant uniquement sur le Coran et les hadiths du prophète Mohammad (P.S.L).
          </Text>

          <View >
            <Image style={[isBigScreen ? styles.imageBigScreen : styles.imageSmallScreen]} source={require('../assets/CherifEnVert.png')}/>
          </View>
          <View >
              <Image style={[isBigScreen ? styles.imageBigScreen : styles.imageSmallScreen]} source={require('../assets/CherifEnBlanc.png')}/>
          </View>
          <View >
              <Image style={[isBigScreen ? styles.imageBigScreen : styles.imageSmallScreen]} source={require('../assets/CherifEnJaune.png')}/>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>        
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    },

  nom: {
    marginTop: 20,
    marginBottom: 5,
    color: 'red',
    //fontFamily: 'RubikBrokenFax-Regular',
    fontSize: 22,
    textAlign: 'center'
  }, 

  imageBigScreen: {
    alignSelf: 'center',
    width: 400,  // Utilisez width: 100% pour occuper toute la largeur
    height: 450,  // Utilisez width: 100% pour occuper toute la hauteur
    marginTop: 10,
  },

  imageSmallScreen: {
    alignSelf: 'center',
    width: 320,  // Utilisez width: 100% pour occuper toute la largeur
    height: 320,  // Utilisez width: 100% pour occuper toute la hauteur
    marginTop: 10,
  },

  description: {
    color: 'black',
    //fontFamily: 'RubikBrokenFax-Regular',
    fontSize: 15,
    opacity: 0.8,
    textAlign: 'center',
    marginTop: 5,
    margin: 10,
  }
});
  