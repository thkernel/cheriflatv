import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground, Dimensions, Alert, ScrollView } from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import { useKeepAwake } from 'react-native-keep-awake';

import Avatar from './src//Avatar';
import Apropos from './src//Apropos';
import Accueil from './src//Accueil';
import LesEmissions from './src//LesEmissions';
import LeGuide from './src//LeGuide';
import Contacts from './src//Contacts';


let videoWidth = Dimensions.get('window').width;
let videoHeight = videoWidth / 11 * 9;

let isBigScreen = true;

let { width, height } = Dimensions.get('window');
if (width <= 320) { width = 320; sizeIcon = 56; isBigScreen = false; }
if (width > 384) width = 384;
if (height <= 260) height = 260;
if (height > 314) height = 314;

export default function App() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [videoError, setVideoError] = useState(false);


  //useKeepAwake();


  useEffect(() => {
    Orientation.addOrientationListener(handleOrientationChange);
    return () => {
      Orientation.removeOrientationListener(handleOrientationChange);
    };
  }, [isFullScreen]);

  //React.useEffect(() => {
  //  Orientation.addOrientationListener(handleOrientationChange);
  //  return () => {
  //    Orientation.removeOrientationListener(handleOrientationChange);
  //  };
  //}, []);

  const handleOrientationChange = (orientation) => {
    if (orientation === 'PORTRAIT' && isFullScreen) {
      Orientation.unlockAllOrientations();
      setIsFullScreen(false);
    } else if (orientation === 'LANDSCAPE' && !isFullScreen) {
      Orientation.lockToLandscape();
      setIsFullScreen(true);
    }
  };

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
                <Text style={styles.imageLabelPaysage}>EXIT FULL SCREEN</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={enterFullScreen}>
              <View style={styles.imageContainer}>
                <Image style={styles.imagePortrait} source={require('./assets/ecranPaysage.png')} />
                <Text style={styles.imageLabelPortrait}>ENTER FULL SCREEN</Text>
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
  },
  imageContainer: {
    flex: 1,
  },
  videoPortrait: {
    width: '100%',
    height: '27%',
  },
  videoPaysage: {
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
    width: 52,
    height: 50,
    margin: 1,
  },
  imageLabelPortrait: {
    fontSize: 8,
    color: 'white',
    textAlign: 'center',
  },
  imagePaysage: {
    width: 38,
    height: 35,
    margin: 1,
  },
  imageLabelPaysage: {
    fontSize: 10,
    color: 'white',
    textAlign: 'center',
  },
  styleZoneControlPortrait: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  styleZoneControlPaysage: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
  },
});
