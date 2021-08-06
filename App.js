/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Account from './screens/Account';
import Tours from './screens/Tours';
import TourGuides from './screens/TourGuides';
import Messages from './screens/Messages';
import TourGuideProfile from './screens/TourGuideProfile';
import TourInfo from './screens/TourInfo';
import HomeStack from './stack/HomeStack';
import Conversation from './screens/Conversation';
import colors from './config/colors';

const Tab = createBottomTabNavigator();

const App: () => Node = () => {
  const MessageStack = createStackNavigator();
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator> */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Tours') {
              iconName = focused ? 'map' : 'map-outline';
            } else if (route.name === 'Account') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#3D68CC',
          inactiveTintColor: '#656565',
        }}
        initialRouteName='HomeScreen'
      >
        <Tab.Screen name="Home" component={HomeStack}/>
        <Tab.Screen name="Tours" component={Tours}/>
        <Tab.Screen name="Account" component={Account}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
