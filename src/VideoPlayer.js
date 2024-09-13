// faire fonctionner la vidéo en mode PAYSAGE avec la taille de vidéo plein écran par défaut. 
// le bouton plein écran est toujours affiché et je ne souhaite pas qu'il soit affiché.

import React, { useState, useCallback, useEffect,  } from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Video, ResizeMode } from 'expo-av';
import Svg, { Path } from "react-native-svg";
//import * as NavigationBar from 'expo-navigation-bar';



export default function VideoPlayer() {
    // Fonction UseEffect Pour vérifier si le bouton de retour est cliqué si c'est le cas AFFICHER LA NAVIGATION DES BOUTONS
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => { NavigationBar.setVisibilityAsync("visible"); })
    return () => backHandler.remove()
  }, [])
  
    // Masquer la barre de navigation Android par défaut
  NavigationBar.setVisibilityAsync("hidden");
  const navigation = useNavigation();

// Lecture de l'état de la vidéo  // Playing Video Status 
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  // Afficher/Masquer les contrôleurs vidéo + Bouton personnalisé Goback // Show/Hide Video Controllers + Goback Custom Button
  const [showControls, setShowControls] = useState(false);
  const toggleControls = useCallback(() => {
    setShowControls((showControls) => !showControls);
  }, []);

 

  return (
    <TouchableOpacity activeOpacity={1} style={styles.container} onPress={() => toggleControls()}>
      { /* Video Player Container Button */ }
      <StatusBar hidden={true} />
      <View style={{ display: showControls ? 'flex' : 'none' , position: 'absolute', top: 10, right: 10, zIndex: 500, elevation: 100 }}>
        <TouchableOpacity style={{ padding: 10, flexDirection: 'row', borderColor: "#333", borderWidth: .5, borderRadius: 15, backgroundColor: 'rgba(0,0,0,.4)' }} onPress={() => { navigation.goBack();  NavigationBar.setVisibilityAsync("visible"); }} >
          <Text style={{ color: "#fff", fontFamily: 'NotoKufiArabic_700Bold', fontSize: 11, marginRight: 10 }}>العودة الى الحلقة</Text>
          <Svg width="17" height="17" viewBox="0 0 24 24">
            <Path fill="#fff" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.568 18.005l-1.414-1.415 4.574-4.59-4.574-4.579 1.414-1.416 5.988 5.995-5.988 6.005z" />
          </Svg>
        </TouchableOpacity>
        
      </View>
          { /* Video Player  */ }
      <Video
        ref={video}
        style={{ width: "100%", height: '100%' }}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls={showControls}
        shouldPlay
        resizeMode={ResizeMode.CONTAIN}
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#050505',
    width: '100%',
    height: '100%',
  },
});
