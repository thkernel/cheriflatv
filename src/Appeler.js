
import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { TouchableOpacity } from "react-native";

import * as Linking from 'expo-linking';

export default function appeler(){
    const calle = () => {
        //console.log('Appeler moi');
        Linking.openURL('tel:0612476072');
    } 
  
    return (
        <TouchableOpacity style={styles.button} onPress={calle}>
            <Text style={styles.buttonText}>Appeler nous</Text> 
        </TouchableOpacity>

/*
        <TouchableOpacity style={styles.button} onPress={calle}>
            <Image style={styles.rsImage} source={require('../assets/appeler.png')}/>
        </TouchableOpacity>
*/
        
    );
};


const styles = StyleSheet.create({
    rsContainer: {
        flexDirection: 'row',
        //backgroundColor: '#fff',
        //marginBottom: 40,
        marginTop: 30,
        //alignSelf: 'Center',
        alignItems: 'center',
        //justifyContent: 'center',
        //padding: 24,
        ///height: 100,
        padding: 20,
        //width: undefined, 
        ///height: undefined,
    },

    rsImage: {
        width: 50,
        height: 50,
        margin: 10,
        borderRadius: 8, // coin arrondi
        alignItems: 'center',
    },

    button: {
        marginTop: 30,  // marge extérieur haut du bouton
        paddingVertical: 20,  // marge intérieur haut et bas
        paddingHorizontal: 50, // marge intérieur gauche et droite
        backgroundColor: '#61dafb',
        //borderWidth: 4,
        //borderColor: '#20232a',
        borderRadius: 8, // coin arrondi
        //color: '#20232a',
        //textAlign: 'center',
    },
    
    buttonText: {
        //marginTop: 30,
        //paddingVertical: 20,
        //paddingHorizontal: 100,
        //backgroundColor: '#61dafb',
        ///borderWidth: 4,
        //borderColor: '#20232a',
        color: '#fff',
        //textAlign: 'center',
        //fontFamily: 'RubikBrokenFax-Regular',
        fontSize: 30,
        //fontWeight: '600',
    },
    

    title: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: '#20232a',
        borderRadius: 6,
        backgroundColor: '#61dafb',
        color: '#20232a',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    
    petitLogo: {
        width: 50,
        height: 50,
        margin: 20,
    },

    logo: {
        width: 66,
        height: 58,
        margin: 20,
    }
});
  