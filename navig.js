// App.js

import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground, Dimensions, ScrollView, Linking } from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './Navigation';
import Avatar from './src/Avatar';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

let { width, height } = Dimensions.get('window');
if (width <= 320) width = 320;
if (height <= 260) height = 260;

const Tab = createBottomTabNavigator();

export default function App() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [videoError, setVideoError] = useState(false);

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
            onError={() => setVideoError(true)}
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
                <Text style={styles.imageLabelPaysage}>EXIT FULL SCREEN</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={enterFullScreen}>
              <View style={styles.imageContainer}>
                <Image style={styles.imagePortrait} source={require('./assets/ecranPaysage.png')} />
                <Text style={styles.imageLabelPortrait}>FULL SCREEN</Text>
              </View>
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.buttons} onPress={reloadApp}>
            <Text style={styles.buttonsTitle}>RELOAD</Text>
          </TouchableOpacity>
        </View>

        <NavigationContainer>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  if (route.name === 'Accueil') {
                    iconName = focused ? 'home' : 'home-outline';
                  } else if (route.name === 'LesEmissions') {
                    iconName = focused ? 'tv' : 'tv-outline';
                  } else if (route.name === 'Apropos') {
                    iconName = focused ? 'information-circle' : 'information-circle-outline';
                  } else if (route.name === 'LeGuide') {
                    iconName = focused ? 'book' : 'book-outline';
                  } else if (route.name === 'Contacts') {
                    iconName = focused ? 'people' : 'people-outline';
                  }
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#0bff16',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                  backgroundColor: '#031a1c',
                  borderTopWidth: 1,
                  borderTopColor: '#0bff16',
                },
                tabBarLabelStyle: {
                  fontSize: 12,
                  fontWeight: 'bold',
                  letterSpacing: 1.5,
                },
              })}
            >
              <Tab.Screen
                name="Accueil"
                component={Navigation}
                options={{
                  headerStyle: {
                    backgroundColor: '#06810b',
                  },
                  headerTitleStyle: {
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 18,
                  },
                }}
              />
              <Tab.Screen
                name="LesEmissions"
                component={Navigation}
                options={{
                  headerStyle: {
                    backgroundColor: '#06810b',
                  },
                  headerTitleStyle: {
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 18,
                  },
                }}
              />
              <Tab.Screen
                name="Apropos"
                component={Navigation}
                options={{
                  headerStyle: {
                    backgroundColor: '#06810b',
                  },
                  headerTitleStyle: {
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 18,
                  },
                }}
              />
              <Tab.Screen
                name="LeGuide"
                component={Navigation}
                options={{
                  headerStyle: {
                    backgroundColor: '#06810b',
                  },
                  headerTitleStyle: {
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 18,
                  },
                }}
              />
              <Tab.Screen
                name="Contacts"
                component={Navigation}
                options={{
                  headerStyle: {
                    backgroundColor: '#06810b',
                  },
                  headerTitleStyle: {
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 18,
                  },
                }}
              />
            </Tab.Navigator>
          </ScrollView>
        </NavigationContainer>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  videoPortrait: {
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 5,
    backgroundColor: '#20232a',
    width: '100%',
    height: '27%',
  },
  videoPaysage: {
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 5,
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
    letterSpacing: 1.5,
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
    letterSpacing: 1.5,
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
    letterSpacing: 1.5,
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
    letterSpacing: 1.5,
    alignSelf: 'center',
    color: 'white',
  },
  ZoneControlePortrait: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#06810b',
    paddingVertical: 5,
  },
  ZoneControlePaysage: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#06810b',
    paddingVertical: 5,
    width: '100%',
  },
});
