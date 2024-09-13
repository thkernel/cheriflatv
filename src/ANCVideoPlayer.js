// src/VideoPlayer.js

/*
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';

//export default function VideoPlayer({ source }) {
const VideoPlayer = ({ source }) => {
  return (
    <View style={styles.container}>
      <Video
        source={source}
        style={styles.video}
        controls={true}
        resizeMode="contain"
      />
      <View style={styles.controls}>
        <Icon name="play" size={30} color="white" />
        <Icon name="pause" size={30} color="white" />
        <Icon name="volume-up" size={30} color="white" />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: 300,
    height: 200,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
*/


import React from 'react'; 
import { View, StyleSheet } from 'react-native';
import VLCPlayer from '@react-native-vlc-player';

const VideoPlayer = ({ source }) => {
  return (
    <View style={styles.container}>
      <VLCPlayer
        ref={(ref) => (this.vlcPlayer = ref)}
        style={styles.video}
        videoAspectRatio="16:9"
        source={{
          uri: source.uri,
          initOptions: ['--codec=avcodec'],
          hw: true,
          autoAspectRatio: true,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    flex: 1,
    width: '100%',
  },
});


export default VideoPlayer;


/*

jsx
// src/App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VideoPlayer from './VideoPlayer';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="VideoPlayer">
        <Stack.Screen
          name="VideoPlayer"
          component={VideoPlayer}
          options={{ title: 'Video Player' }}
          initialParams={{ source: { uri: 'http://cherifla.com:8080/live/CheriflaTV/audio.m3u8' } }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

*/


// la source de lecture: http://cherifla.com:8080/live/CheriflaTV/audio.m3u8