import React from 'react';
import { Dimensions, View, Button, Text, StyleSheet } from 'react-native';

let sizeIcon = 72;
const coinArrondIcon = 20;

let isBigScreen = true;

let { width, height } = Dimensions.get('window');
if (width <= 320) { width = 320; sizeIcon = 56; isBigScreen = false; }
if (height <= 260) height = 260;


export default function MenuNavigation({ navigation, activeScreen }) {
  return (
    <View style={styles.container}>
        {/* <Text style={styles.Titre}>{activeScreen}</Text>  */}
        <View style={styles.styleZoneControlPortrait}>
        
        {activeScreen !== 'Accueil' && (
          <Button 
            title="Accueil"
            onPress={() => navigation.navigate('Accueil')}
          />
        )}
        {activeScreen !== 'LesEmissions' && (
          <Button
            title="LesEmissions"
            onPress={() => navigation.navigate('Emissions')}
          />
        )}
        {activeScreen !== 'Apropos' && (
          <Button
            title="À-propos"
            onPress={() => navigation.navigate('Apropos')}
          />
        )}
        {activeScreen !== 'LeGuide' && (
          <Button
            title="Le Guide"
            onPress={() => navigation.navigate('LeGuide')}
          />
        )}
        {activeScreen !== 'Contacts' && (
          <Button
            title="Contacts"
            onPress={() => navigation.navigate('Contacts')}
          />
        )}
      </View>


        {/* Boutons de navigation en bas de l'écran CLIQUABLE 
        <View style={styles.navigationButtons}>

          <TouchableOpacity style={currentPage === 0 ? styles.activeButton : styles.inactiveButton} onPress={() => handlePageChange(0)}>
            <Text style={styles.buttonText}>Accueil</Text>
          </TouchableOpacity>

          <TouchableOpacity style={currentPage === 1 ? styles.activeButton : styles.inactiveButton} onPress={() => handlePageChange(1)}>
            <Text style={styles.buttonText}>Emissions</Text>
          </TouchableOpacity>

          <TouchableOpacity style={currentPage === 2 ? styles.activeButton : styles.inactiveButton} onPress={() => handlePageChange(2)}>
            <Text style={styles.buttonText}>A Propos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={currentPage === 3 ? styles.activeButton : styles.inactiveButton} onPress={() => handlePageChange(3)}>
            <Text style={styles.buttonText}>Le Guide</Text>
          </TouchableOpacity>

          <TouchableOpacity style={currentPage === 4 ? styles.activeButton : styles.inactiveButton} onPress={() => handlePageChange(4)}>
            <Text style={styles.buttonText}>Contacts</Text>
          </TouchableOpacity>
        </View>  */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },

  styleIcon: {
    width: sizeIcon,
    height: sizeIcon,
    margin: 10,
    marginTop: 20,
    borderRadius: coinArrondIcon,
  },

  Titre: {
    marginTop: 10,
    marginBottom: 1,
    color: 'red',
    //fontFamily: 'RubikBrokenFax-Regular',
    fontSize: 30,
    textAlign: 'center'
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

  description: {
    color: 'black',
    //fontFamily: 'RubikBrokenFax-Regular',
    fontSize: 15,
    opacity: 0.8,
    textAlign: 'center',
    marginTop: 1,
    margin: 1,
  },

  buttons: {
    marginTop: 5,
    borderWidth: 1,  // comme une sorte d'ombre
    borderColor: '#0bff16',
    borderRadius: 13, // coin arrondi
    backgroundColor: '#06393d',
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
    marginTop: 5,
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
});
