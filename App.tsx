import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import NfcScreen from './screens/NfcScreen';
import Profile from './screens/Profile';
import Challenges from './screens/Challenges';
import LeaderBoard from './screens/LeaderBoard';
import { Image } from 'react-native';

import homeIcon from './assets/Home.png';
import leaderboardIcon from './assets/Leaderboard.png';
import profileIcon from './assets/Profile.png';
import nfcIcon from './assets/NFC.png';
import challengesIcon from './assets/challenges.png';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size, focused }) => {
            let iconName: any;
            let iconColor: string = focused ? 'teal' : 'gray'; // Adjusted color for active and inactive tabs
            if (route.name === 'Home') {
              iconName = homeIcon;
            } else if (route.name === 'Leaderboard') {
              iconName = leaderboardIcon;
            } else if (route.name === 'Profile') {
              iconName = profileIcon;
            } else if (route.name === 'NFC') {
              iconName = nfcIcon;
            } else if (route.name === 'Challenges') {
              iconName = challengesIcon;
            }
            return <Image source={iconName} style={{ width: size, height: size, tintColor: iconColor }} />;
          },
            activeTintColor: 'teal',
            inactiveTintColor: 'gray',
            style: {
              backgroundColor: 'black', // Background color of the tab bar
            },
            labelStyle: {
              fontSize: 14, // Adjust the font size of the tab labels
              fontFamily: 'FunFont', // Use the fun font
            },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Leaderboard" component={LeaderBoard} options={{ headerShown: false }}/>
        <Tab.Screen name="Challenges" component={Challenges} options={{ headerShown: false }}/>
        <Tab.Screen name="NFC" component={NfcScreen} options={{ headerShown: false }}/>
        <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
