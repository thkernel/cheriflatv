// src/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import VideoPlayer from './VideoPlayer';
import VideoScreen from './components/VideoScreen';

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
//export default App;
