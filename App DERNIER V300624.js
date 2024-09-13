import { StyleSheet, 
          Image, 
          ImageBackground, 
          Dimensions, 
          ScrollView, 
          View, 
          Text, 
          Alert, 
          TouchableOpacity } from "react-native";

import { useEffect } from 'react';

import React, { useCallback, useRef } from 'react';

import { Video } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';
import * as Updates from 'expo-updates';
import { useKeepAwake } from 'expo-keep-awake';

import Avatar from "./components/Avatar";
import Apropos from "./components/Apropos";
import Accueil from "./components/Accueil";
import LesEmissions from "./components/LesEmissions";
import LeGuide from "./components/LeGuide";
import Contacts from "./components/Contacts";


// Définit la dimension de la vidéo en fonction de sa largeur, afin que la vidéo ne s'étire sur aucun appareil.
// Le rapport des dimensions de la vidéo est de 11 : 9 pour la largeur et la hauteur
let videoWidth = Dimensions.get('window').width;
let videoHeight = videoWidth / 11 * 9 ;

let isBigScreen = true;

let { width, height } = Dimensions.get('window');
if (width <= 320) {width = 320; sizeIcon = 56; isBigScreen = false;}
if (width >  384) width = 384;
if (height <= 260) height = 260;
if (height >  314) height = 314;

export default function App() {
  const video = React.useRef(null);
  const [videoStatus, setVideoStatus] = React.useState(true);

  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isFullScreen, setIsFullScreen] = React.useState(false);
  
  useKeepAwake();

  React.useEffect(() => {
    //console.log("REACT USE EFFECT");
    const orientationChangeListener = ScreenOrientation.addOrientationChangeListener((event) => {
      if (event.orientationInfo.orientation === 'PORTRAIT') {
        //console.log("MODE PORTRAIT",width,height);
      } 
      else if (event.orientationInfo.orientation === 'LANDSCAPE') {
        //console.log("MODE PAYSAGE",width,height);
        if (isFullScreen) {
          ScreenOrientation.unlockAsync();
          setIsFullScreen(false);
        }
      }
    });

    return () => {
      orientationChangeListener.remove();
    };    
  }, [isFullScreen]);

  useEffect(() => {
    //console.log("USE EFFECT VIDEO");
    let playbackStatusSubscription;
    if (video.current) {
      playbackStatusSubscription = video.current.setOnPlaybackStatusUpdate(setVideoStatus);
    }
    return () => {
      if (playbackStatusSubscription) {
        playbackStatusSubscription.remove();
      }
    };
  }, []);

  const startVideo = () => {
    //console.log("START VIDEO");
    setIsPlaying(true);
  };

  const stopVideo = () => {
    //console.log("STOP VIDEO");
    setIsPlaying(false);
  };

  const restartVideo = async () => {
    //console.log("RESTART VIDEO");
    await video.current.setPositionAsync(0);
    await video.current.playAsync(); // Lancer la vidéo après avoir remis la position au début
    setIsPlaying(true); // Mettre l'état de lecture à true (play) lors du redémarrage de la vidéo
  };

  const handlePlayPause = async () => {
    //console.log("HANDLE PLAY PAUSE VIDEO");
    if (videoStatus.isPlaying) {
      await video.current.pauseAsync(); setIsPlaying(false);
    } else {
      await video.current.playAsync(); setIsPlaying(true);
    }
  };

  const enterFullScreen = async () => {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    //console.log("ENTER MODE PAYSAGE",width,height);
    setIsFullScreen(true);
  };

  const exitFullScreen = async () => {
    try {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT); // Verrouiller en mode portrait si déjà en mode portrait
    } catch (error) {
      await ScreenOrientation.unlockAsync(); // Déverrouiller l'orientation si en mode plein écran
  //    console.error("Une erreur s'est produite lors de la gestion de l'orientation :", error);
    }
  //  console.log("EXIT MODE PAYSAGE APRES",width1,height1);
    setIsFullScreen(false);
  };

  const reloadApp = useCallback(async () => {
    //console.log("RELOAD");
    try {
      await Updates.reloadAsync();
    } catch (e) {
      console.error(e);
    }
  }, []);
  
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/splash.jpg')} style={styles.container}>
        {isFullScreen ? null : <Avatar />}

        {/* DEBUT D'INSERSION DE LA VIDEO */}
        <Video
          ref={video}
          style={[isFullScreen ? styles.videoPaysage : styles.videoPortrait]}
          
          source={{uri: 'https://cherifla.com/live/CheriflaTV/audio.m3u8',}}

          resizeMode="contain" // contain=adapter aux limites, cover=Remplissez les limites, stretch=Étirez pour remplir les limites. resizeMode={ResizeMode.CONTAIN}
          useNativeControls={false} // true=affiche les commandes de lecture natives au sein du Videocomposant. Ou écrire vous-même, consulter le VideoPlayercomposant
          isLooping={false} // lu une fois = false ou indéfiniment = true
          rate={1.0} // Le taux de lecture souhaité du média. Cette valeur doit être comprise entre 0.0et 32.0.
          volume={1.0} // Un nombre compris entre 0.0(silence) et 1.0(volume maximum)
          isMuted={false} // si le son peut être coupé true ou non false
          
          shouldPlay={isPlaying} // Jouer automatiquement ou non false.

          onPlaybackStatusUpdate={(status) => {
            //setStatus(() => status);
            //setIsPlaying(status.isPlaying);
            if (status.isLoaded===false&&status.uri) {
              Alert.alert(
                'Erreur de lecture : CHERIFLA TV indisponible',
                { cancelable: false }
              );
            }
            //console.log("STATUS=",Platform.OS,"ISBUFFERIN=",status.isBuffering," ISLOADED=",status.isLoaded," ISPLAYING=",status.isPlaying,"PLAY=",isPlaying," ISSHOULDPLAY=",status.shouldPlay," URI=",status.uri);
          }}
          
          onFullscreenUpdate={({ fullscreenUpdate }) => {
            setIsFullScreen(fullscreenUpdate === Video.FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT);
          }}
        />

        <View style={[isFullScreen ? styles.styleZoneControlPaysage : styles.styleZoneControlPortrait]}>
          <TouchableOpacity style={styles.buttons} onPress={handlePlayPause}>
            <Text style={styles.buttonsTitle}>{isPlaying ? 'PAUSE' : 'PLAY'}</Text>
          </TouchableOpacity>
          {!isPlaying && (
            <TouchableOpacity style={styles.buttonsDirect} onPress={restartVideo}>
              <Text style={styles.buttonsTitleDirect}>DIRECT</Text>
            </TouchableOpacity>
          )}

          {isFullScreen ? (
            <TouchableOpacity onPress={exitFullScreen}>
              <View style={styles.imageContainer}>
                <Image style={styles.imagePaysage} source={require('./assets/ecranPortrait.png')} />
                <Text style={styles.imageLabelPaysage}>SCREEN</Text>
                <Text style={styles.imageLabelPaysage}>FULL</Text>
                <Text style={styles.imageLabelPaysage}>EXIT</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={enterFullScreen}>
              <View style={styles.imageContainer}>
                <Image style={styles.imagePortrait} source={require('./assets/ecranPaysage.png')} />
                <Text style={styles.imageLabelPortrait}>SCREEN</Text>
                <Text style={styles.imageLabelPortrait}>FULL</Text>
              </View>
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.buttons} onPress={reloadApp}>
            <Text style={styles.buttonsTitle}>{"RELOAD"}</Text>
          </TouchableOpacity>

        </View>

        <ScrollView>
          <Accueil />
          <LesEmissions />
          <Apropos />
          <LeGuide />
          <Contacts />
        </ScrollView>

      </ImageBackground> 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
  },

  imageContainer: {
    flex: 1,
  },

  viewPager: {
    flex: 1,
  },

  page: {
    justifyContent: 'center', // Justifier les contenus de l'écran principal
    alignItems: 'center',
  },

  image: {
    width: 23,
    height: 23,
  },

  imagePaysage: {
    marginTop: 0,
    marginLeft: 30,
    width: 48,
    height: 48,
  },

  imageLabelPaysage: {
    marginTop: -20,
    marginLeft: 80,
    fontSize: 10,
    lineHeight: 9,
    fontWeight: 'bold',
    letterSpacing: 1.50,
    alignSelf: 'center',
    color: 'white',
  },

  imagePortrait: {
    marginTop: 1,
    marginLeft: 8,
    width: 88,
    height: 48,
  },

  imageLabelPortrait: {
    marginTop: -25,
    marginLeft: 5,
    fontSize: 10,
    lineHeight: 12,
    fontWeight: 'bold',
    letterSpacing: 1.50,
    alignSelf: 'center',
    color: 'white',
  },

  imageLabel: {
    fontSize: 10,
    lineHeight: 12,
    fontWeight: 'bold',
    letterSpacing: 1.50,
    alignSelf: 'center',
    color: 'white',
  },

  videoPortrait: {
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 5, // coin arrondi
    //paddingHorizontal: 0, // marge intérieur gauche et droite
    paddingVertical: 100, // marge intérieur gauche et droite
    backgroundColor: '#20232a',

    width: '100%',  // Utilisez width: 100% pour occuper toute la largeur
    height: '27%',  // Utilisez width: 100% pour occuper toute la hauteur
  },

  videoPaysage: {
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 5, // coin arrondi
    backgroundColor: '#20232a',

    width: '100%',  // Utilisez width: 100% pour occuper toute la largeur
    height: '85%',  // Utilisez width: 100% pour occuper toute la hauteur
  },

  buttons: {
    marginTop: 1,
    borderWidth: 1,  // comme une sorte d'ombre
    borderColor: '#0bff16',
    borderRadius: 13, // coin arrondi
    backgroundColor: '#031a1c',
    margin: 5,  // marge au tour de l'image
    textAlign: 'center',

    flexDirection: 'row',
    justifyContent: 'space-around',
  
    width: 75,
    height: 48,// taille hauteur du haut vers le bas 38
  },

  buttonsTitle: {
    fontSize: 10,
    lineHeight: 15,
    fontWeight: 'bold',
    letterSpacing: 1.50,
    //textAlign: 'center',
    alignSelf: 'center',
    color: 'white',
  },

  buttonsDirect: {
    marginTop: 1,
    borderWidth: 1,  // comme une sorte d'ombre
    borderColor: '#0bff16',
    borderRadius: 13, // coin arrondi
    backgroundColor: '#a70000',
    margin: 5,  // marge au tour de l'image
    textAlign: 'center',

    flexDirection: 'row',
    justifyContent: 'space-around',
  
    width: 75,
    height: 48,// taille hauteur du haut vers le bas 38
  },

  buttonsTitleDirect: {
    fontSize: 10,
    lineHeight: 15,
    fontWeight: 'bold',
    letterSpacing: 1.50,
    //textAlign: 'center',
    alignSelf: 'center',
    color: 'white',
  },

  styleZoneControlPortrait: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    //alignItems: 'center',
    backgroundColor: '#06810b',
    paddingVertical: 5,
    marginTop: 2,
    padding: 5,
    width: width, 
    height: undefined,
  },

  styleZoneControlPaysage: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#06810b',
    paddingVertical: 5,
    marginTop: 2,
    padding: 5,
    width: undefined, 
    height: height,
  },

  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#06810b',
    paddingVertical: 3,
  },
  
  activeButton: {
    backgroundColor: '#a70000',
    padding: 3,
    borderRadius: 10,

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    width: 70,
    height: 48,// taille hauteur du haut vers le bas
  },

  inactiveButton: {
    backgroundColor: '#06810b',
    padding: 3,
    borderRadius: 10,

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    width: 70,
    height: 48,// taille hauteur du haut vers le bas
  },

  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
