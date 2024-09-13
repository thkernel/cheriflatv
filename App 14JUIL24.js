import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground, Dimensions, Alert, ScrollView } from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';

//import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Navigation from './Navigation'; // Assurez-vous que le chemin est correct

import { useKeepAwake } from 'react-native-keep-awake';

import Avatar from './src//Avatar';
import Accueil from './src//Accueil';
import LesEmissions from './src//LesEmissions';
import Apropos from './src//Apropos';
import LeGuide from './src//LeGuide';
import Contacts from './src//Contacts';

let videoWidth = Dimensions.get('window').width;
let videoHeight = videoWidth / 11 * 9;

let isBigScreen = true;

let { width, height } = Dimensions.get('window');
if (width <= 320) { width = 320; sizeIcon = 56; isBigScreen = false; }
//if (width > 384) width = 384;
if (height <= 260) height = 260;
//if (height > 314) height = 314;

export default function App() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [videoError, setVideoError] = useState(false);
  //const [dimensions, setDimensions] = useState(Dimensions.get('window'));


  //useKeepAwake();


  useEffect(() => {
    Orientation.addOrientationListener(handleOrientationChange);
    return () => {
      Orientation.removeOrientationListener(handleOrientationChange);
    };
  }, [isFullScreen]);

  const handleOrientationChange = (orientation) => {
    if (orientation === 'PORTRAIT' && isFullScreen) {
      Orientation.unlockAllOrientations();
      setIsFullScreen(false);
    } else if (orientation === 'LANDSCAPE' && !isFullScreen) {
      Orientation.lockToLandscape();
      setIsFullScreen(true);
    }
  };


/*
  useEffect(() => {
    const handleOrientationChange = ({ window }) => {
      setDimensions(window);
      if (window.width > window.height) {
        Orientation.lockToLandscape();
        setIsFullScreen(true);
      } else {
        Orientation.lockToPortrait();
        setIsFullScreen(false);
      }
    };

    const subscription = Dimensions.addEventListener('change', handleOrientationChange);
    return () => {
      if (subscription) {
        subscription.remove();
      } else {
        Dimensions.removeEventListener('change', handleOrientationChange);
      }
    };
  }, []);
*/



  const startVideo = () => {
    setIsPlaying(true);
  };

  const stopVideo = () => {
    setIsPlaying(false);
  };

  const restartVideo = () => {
    videoRef.current.seek(0);
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  const enterFullScreen = () => {
    Orientation.lockToLandscape();
    setIsFullScreen(true);
  };

  const exitFullScreen = () => {
    Orientation.lockToPortrait();
    setIsFullScreen(false);
  };

  const reloadApp = () => {
    Linking.openURL('yourapp://'); // Assurez-vous d'ajouter un schéma d'URL pour votre application
  };

  return (
    <NavigationContainer>
      <Navigation />

      <View style={styles.container}>

        <ImageBackground source={require('./assets/splash.jpg')} style={styles.container}>
          {isFullScreen ? null : <Avatar />}

          {videoError ? (
            <Image source={require('./assets/videoError.png')} style={[isFullScreen ? styles.videoPaysage : styles.videoPortrait]} />
          ) : (
            <Video
              ref={videoRef}
              style={[isFullScreen ? styles.videoPaysage : styles.videoPortrait]}
              source={{ uri: 'https://cherifla.com/live/CheriflaTV/audio.m3u8' }}
              resizeMode="contain"
              paused={!isPlaying}
              onError={() => {
                // Alert.alert('Erreur de lecture : CHERIFLA TV indisponible');
                setVideoError(true);
              }}
              onFullscreenPlayerWillPresent={() => setIsFullScreen(true)}
              onFullscreenPlayerWillDismiss={() => setIsFullScreen(false)}
            />
          )}

          <View style={[isFullScreen ? styles.ZoneControlePaysage : styles.ZoneControlePortrait]}>
            {!videoError && (
              <>
                <TouchableOpacity style={styles.buttons} onPress={handlePlayPause}>
                  <Text style={styles.buttonsTitle}>{isPlaying ? 'PAUSE' : 'PLAY'}</Text>
                </TouchableOpacity>
                {!isPlaying && (
                  <TouchableOpacity style={styles.buttonsDirect} onPress={restartVideo}>
                    <Text style={styles.buttonsTitleDirect}>DIRECT</Text>
                  </TouchableOpacity>
                )}
              </>
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
                  )
            }

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

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageContainer: {
    flex: 1,
  },

  videoPortrait: {
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 5, // coin arrondi
    //paddingHorizontal: 0, // marge intérieur gauche et droite
    paddingVertical: 100, // marge intérieur gauche et droite
    backgroundColor: '#20232a',

    width: '100%',
    height: '27%',
  },

  videoPaysage: {
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 5, // coin arrondi
    backgroundColor: '#20232a',

    width: '100%',
    height: '85%',
  },

  buttons: {
    marginTop: 1,
    borderWidth: 1,
    borderColor: '#0bff16',
    borderRadius: 13,
    backgroundColor: '#031a1c',
    margin: 5,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 75,
    height: 48,
  },

  buttonsTitle: {
    fontSize: 10,
    lineHeight: 15,
    fontWeight: 'bold',
    letterSpacing: 1.50,
    alignSelf: 'center',
    color: 'white',
  },

  buttonsDirect: {
    marginTop: 1,
    borderWidth: 1,
    borderColor: '#0bff16',
    borderRadius: 13,
    backgroundColor: 'red',
    margin: 5,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 75,
    height: 48,
  },

  buttonsTitleDirect: {
    fontSize: 10,
    lineHeight: 15,
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

  ZoneControlePortrait: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#06810b',
    paddingVertical: 5,
    marginTop: 2,
    padding: 5,
    width: width, 
    height: undefined,
  },

  ZoneControlePaysage: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#06810b',
    paddingVertical: 5,
    marginTop: 2,
    padding: 5,
    width: undefined, 
    height: height,
  },
});
