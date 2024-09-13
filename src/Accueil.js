import React from "react";
import { StyleSheet, Dimensions, Image, View, TouchableOpacity, Text, Button, ImageBackground } from "react-native";

import { openInAppBrowser } from './openInAppBrowser'; 
//import MenuNavigation from './MenuNavigation';

let sizeIcon = 72;
const coinArrondIcon = 20;

let isBigScreen = true;

let { width, height } = Dimensions.get('window');
if (width <= 320) { width = 320; sizeIcon = 56; isBigScreen = false; }
if (height <= 260) height = 260;

export default function Accueil({ navigation }) {
  const SiteWebLien = 'https://www.cheriflatv.com';
  const Telephone = 'tel:+22320240651';
  const FacebookLien = 'https://www.facebook.com/tvcherifla.officiel/';
  const TikTokLien = 'https://www.tiktok.com/@cheriflatv.officiel';
  const YouTubelien = 'https://www.youtube.com/@cheriflatv-officiel/';
  const ReglesConfid = 'https://www.cheriflatv.com/politique-de-confidentialite';

  return (
    <ImageBackground source={require('../assets/splash.jpg')} style={styles.container}>
    <View style={styles.container}>

      {/* <MenuNavigation navigation={navigation} activeScreen="Accueil" />  */}

      <TouchableOpacity onPress={() => openInAppBrowser(SiteWebLien)}>
        <Image style={styles.styleIcon} source={require('../assets/siteweb.png')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => openInAppBrowser(FacebookLien)}>
        <Image style={styles.styleIcon} source={require('../assets/facebook.png')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => openInAppBrowser(TikTokLien)}>
        <Image style={styles.styleIcon} source={require('../assets/tiktok.png')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => openInAppBrowser(YouTubelien)}>
        <Image style={styles.styleIcon} source={require('../assets/youtube.png')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => openInAppBrowser(Telephone,"TEL")}>
        <Image style={[isBigScreen ? styles.styleIconLarge : styles.styleIconMoyen]} source={require('../assets/appelerCherifla.png')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => openInAppBrowser(ReglesConfid)}>
        <Image style={[isBigScreen ? styles.styleIconConfigLarge : styles.styleIconConfigMoyen]} source={require('../assets/ReglesConfid.png')} />
      </TouchableOpacity>
    </View>
      </ImageBackground>        
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 0,
    width: undefined,
    height: undefined,

    //alignItems: 'center',

  },
  styleIcon: {
    width: sizeIcon,
    height: sizeIcon,
    margin: 10,
    marginTop: 20,
    borderRadius: coinArrondIcon,
  },
  styleIconConfigMoyen: {
    width: sizeIcon,
    height: sizeIcon,
    marginTop: 10,
    marginLeft: 12,
    borderRadius: coinArrondIcon,
  },
  styleIconConfigLarge: {
    width: sizeIcon,
    height: sizeIcon,
    marginTop: 10,
    marginLeft: 23,
    borderRadius: coinArrondIcon,
  },
  styleIconMoyen: {
    width: 215,
    height: 48,
    marginTop: 15,
    borderWidth: 3,
    borderColor: '#005d00',
    borderRadius: coinArrondIcon,
  },
  styleIconLarge: {
    width: 250,
    height: 56,
    marginTop: 17,
    borderWidth: 3,
    borderColor: '#005d00',
    borderRadius: coinArrondIcon,
  },
  imageBigScreen: {
    alignSelf: 'center',
    width: 390,
    height: 370,
  },
  imageSmallScreen: {
    alignSelf: 'center',
    width: 320,
    height: 320,
  },
  nom: {
    marginTop: 1,
    marginBottom: 1,
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    width,
    height: 20,
  },
  description: {
    color: 'red',
    fontSize: 20,
    opacity: 0.5,
    textAlign: 'center',
    margin: 5,
  },
  bks: {
    color: 'black',
    fontSize: 12,
    opacity: 0.5,
    textAlign: 'center',
    marginTop: 5,
    margin: 10,
  },
});
