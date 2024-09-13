// Navigation.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Accueil from './src/Accueil';
import Emissions from './src/LesEmissions';
import Apropos from './src/Apropos';
import LeGuide from './src/LeGuide';
import Contacts from './src/Contacts';

const Tab = createBottomTabNavigator();

function CustomHeaderTitle({ title }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}>{title}</Text>
    </View>
  );
}

function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Accueil') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Emissions') {
            iconName = focused ? 'tv' : 'tv-outline';
          } else if (route.name === 'Apropos') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else if (route.name === 'LeGuide') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Contacts') {
            iconName = focused ? 'people' : 'people-outline';
          }
          // Vous pouvez utiliser une bibliothèque d'icônes ici, comme Ionicons
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0bff16',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#031a1c',
          borderTopWidth: 1,
          borderTopColor: '#0bff16',
        },
        //tabBarShowLabel: false,  // Hide the label

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          letterSpacing: 1.5,
        },
      })}
    >
      <Tab.Screen
        name="Accueil"
        component={Accueil}
        options={{
          //headerShown: false, // Cacher le nom de l'écran
          headerStyle: {
            backgroundColor: '#06810b',
          },
          headerTitleStyle: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 30,
          },          
          headerTitleAlign: 'center',
          tabBarLabel: 'Accueil',
          headerTitle: () => <CustomHeaderTitle title="Accueil" />,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Emissions"
        component={Emissions}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#06810b',
          },
          headerTitleStyle: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 18,
          },          
          tabBarLabel: 'Émissions',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="tv" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Apropos"
        component={Apropos}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#06810b',
          },
          headerTitleStyle: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 18,
          },          
          tabBarLabel: 'À propos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="LeGuide"
        component={LeGuide}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#06810b',
          },
          headerTitleStyle: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 30,
          },          
          headerTitleAlign: 'center',
          headerTitle: () => <CustomHeaderTitle title="Présentation du Guide" />,
          tabBarLabel: 'Guide', 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#06810b',
          },
          headerTitleStyle: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 30,
          },          
          headerTitleAlign: 'center',
          headerTitle: () => <CustomHeaderTitle title="Contacts" />,
          tabBarLabel: 'Contacts',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>    
  );
}

export default Navigation;






/*
import React from 'react';
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Accueil from './src/Accueil';
import Emissions from './src/Emissions';
import Apropos from './src/Apropos';
import LeGuide from './src/LeGuide';
import Contacts from './src/Contacts';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Accueil">
      <Stack.Screen name="Accueil" component={Accueil} />
      <Stack.Screen name="Emissions" component={Emissions} />
      <Stack.Screen name="Apropos" component={Apropos} />
      <Stack.Screen name="LeGuide" component={LeGuide} />
      <Stack.Screen name="Contacts" component={Contacts} />
    </Stack.Navigator>
  );
}

export default Navigation;
*/