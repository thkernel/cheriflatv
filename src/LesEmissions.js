import * as React from 'react';
import { Dimensions, StyleSheet, Image, View, ScrollView, ImageBackground  } from "react-native"
import { TouchableOpacity } from "react-native";
import { openInAppBrowser } from './openInAppBrowser'; 
//import MenuNavigation from './MenuNavigation';

let sizeIcon = 72;
const coinArrondIcon = 20;
let { width, height } = Dimensions.get('window');
if (width <= 320) {width = 320; sizeIcon = 56;}
if (height <= 260) height = 260;

export default function LesEmissions({ navigation }){
  const Dinebaro = 'https://www.cheriflatv.com/dine-baro-et-nko';
  const PrechesdeFiqhMalikite = 'https://www.cheriflatv.com/preches-et-fiqh-malikite';
  const Andambeettchounkan = 'https://www.cheriflatv.com/an-dambe-et-tchounkan';
  const Tidianiyablombaetsariyablon = 'https://www.cheriflatv.com/tidianiya-blomba-et-sariya-blon';
  const Iftaretsanslanguedebois = 'https://www.cheriflatv.com/iftar-et-sans-langue-de-bois';
  const Nawafiletcirculationroutiere = 'https://www.cheriflatv.com/nawafil-et-circulation-routiere';
  const Ciwaraetmaadabatoulcoran = 'https://www.cheriflatv.com/ciwara-et-ma-adabatoul-coran';
  const Djoumakoutoubaetsounkalowalada = 'https://www.cheriflatv.com/djouma-koutouba-et-sounkalo-walada';
  const Tafsirduguideramadin14372016 = 'https://www.cheriflatv.com/tafsir-du-guide-ramadan';
  const Connaissancedelislametsante = 'https://www.cheriflatv.com/connaissance-de-islam-et-sante';
  const Interviewsetreportages = 'https://www.cheriflatv.com/interviews-et-reportages';
  const GuideEnCoteIvoireetTamani = 'https://www.cheriflatv.com/guide-en-cote-ivoire-et-ziyara';
  const Contesetlegendes = 'https://www.cheriflatv.com/contes-et-legendes';
  const Doubadoumanetdounidembaya = 'https://www.cheriflatv.com/douba-douman-et-douni-dembaya';
  const Specialramadanetrupturedujeune = 'https://www.cheriflatv.com/special-ramada-et-rupture-de-jeune';
  const PlateauCAN2019etdessinanime = 'https://www.cheriflatv.com/plateau-can2019-et-dessin-anime';
  const Ancardineetmoisdelasolidarité = 'https://www.cheriflatv.com/ancardine-et-mois-solidarite';
  const Maouloudetspecial2019 = 'https://www.cheriflatv.com/special-maouloud';
  const Emissionhadjetspecialhadj = 'https://www.cheriflatv.com/special-hadj';
  const Gwadiyaraetspecial  = 'https://www.cheriflatv.com/gwa-diyara-et-keneya-djemukan';  

  return(
    <ImageBackground source={require('../assets/splash.jpg')} style={styles.container}>
      <View style={styles.container}>

        {/* <MenuNavigation navigation={navigation} activeScreen="Emissions" />  */}
        <ScrollView>
          <View >
              <Image style={styles.styleImage} source={require('../assets/Les-Emissions.png')}/>
          </View>
          <View style={styles.styleZoneIcon}>
            <TouchableOpacity onPress={() => openInAppBrowser(Dinebaro)}>
              <Image style={styles.styleIcon} source={require('../assets/Dine-Baro-et-Nko.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openInAppBrowser(PrechesdeFiqhMalikite)}>
              <Image style={styles.styleIcon} source={require('../assets/Preches-et-fiqh-Malikite.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openInAppBrowser(Andambeettchounkan)}>
              <Image style={styles.styleIcon} source={require('../assets/An-Dambe-et-Tchounkan.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openInAppBrowser(Tidianiyablombaetsariyablon)}>
              <Image style={styles.styleIcon} source={require('../assets/Tidianiya-Blomba-et-Sariya-Blon.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openInAppBrowser(Iftaretsanslanguedebois)}>
              <Image style={styles.styleIcon} source={require('../assets/Iftar-et-Sans-langue-de-bois.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openInAppBrowser(Nawafiletcirculationroutiere)}>
              <Image style={styles.styleIcon} source={require('../assets/Nawafil-et-circulation-routiere.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openInAppBrowser(Ciwaraetmaadabatoulcoran)}>
              <Image style={styles.styleIcon} source={require('../assets/Ciwara-et-ma-adabatoul-coran.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openInAppBrowser(Djoumakoutoubaetsounkalowalada)}>
              <Image style={styles.styleIcon} source={require('../assets/Djouma-Koutouba-et-Sounkalo-Walada.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openInAppBrowser(Tafsirduguideramadin14372016)}>
              <Image style={styles.styleIcon} source={require('../assets/Tafsir-du-Guide-Ramadan-1437-2016.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openInAppBrowser(Connaissancedelislametsante)}>
              <Image style={styles.styleIcon} source={require('../assets/Connaissance-de-lislam-et-Sante.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openInAppBrowser(Interviewsetreportages)}>
              <Image style={styles.styleIcon} source={require('../assets/Interview-et-Reportages.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openInAppBrowser(GuideEnCoteIvoireetTamani)}>
              <Image style={styles.styleIcon} source={require('../assets/Guide-en-cote-divoire-et-Tamani.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openInAppBrowser(Contesetlegendes)}>
              <Image style={styles.styleIcon} source={require('../assets/Contes-et-legendes.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openInAppBrowser(Doubadoumanetdounidembaya)}>
              <Image style={styles.styleIcon} source={require('../assets/Cherifla-Doubadouma-et-Douni-Dembaya.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openInAppBrowser(Specialramadanetrupturedujeune)}>
              <Image style={styles.styleIcon} source={require('../assets/Special-Ramadan-et-Rupture-de-jeune.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openInAppBrowser(PlateauCAN2019etdessinanime)}>
              <Image style={styles.styleIcon} source={require('../assets/Plateau-Can-2019-et-dessin-Anime.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openInAppBrowser(Ancardineetmoisdelasolidarité)}>
              <Image style={styles.styleIcon} source={require('../assets/Ancar-dine-et-mois-de-solidarite.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openInAppBrowser(Maouloudetspecial2019)}>
              <Image style={styles.styleIcon} source={require('../assets/Maouloud-et-Special-2019.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openInAppBrowser(Emissionhadjetspecialhadj)}>
              <Image style={styles.styleIcon} source={require('../assets/Emission-Hadj-et-Special-Hadj.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openInAppBrowser(Gwadiyaraetspecial)}>
              <Image style={styles.styleIcon} source={require('../assets/Gwa-diyara.png')}/>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>        
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent: 'center',
    alignItems: 'center',
  },

  styleZoneIcon: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 2,
    justifyContent: 'center',
    width: undefined, 
    height: undefined,
  },

  styleIcon: {
    width:  sizeIcon,
    height: sizeIcon,
    margin: 10,
    borderRadius: coinArrondIcon, // coin arrondi
    },

  styleImage: {
    marginTop: 15,
    marginBottom: 15,
    alignSelf: 'center',
    width: width,  // Utilisez width: 100% pour occuper toute la largeur
    height: 80,  // Utilisez width: 100% pour occuper toute la hauteur
  },
          
});
  