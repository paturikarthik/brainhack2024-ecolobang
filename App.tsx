import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import NfcScreen from './screens/NfcScreen';
import Profile from './screens/Profile';
import Challenges from './screens/Challenges';
import LeaderBoard from './screens/LeaderBoard';
import LoginScreen from './screens/LoginScreen';
import {Image} from 'react-native';

import homeIcon from './assets/Home.png';
import leaderboardIcon from './assets/Leaderboard.png';
import profileIcon from './assets/Profile.png';
import nfcIcon from './assets/NFC.png';
import challengesIcon from './assets/challenges.png';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size, focused}) => {
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
          return (
            <Image
              source={iconName}
              style={{width: size, height: size, tintColor: iconColor}}
            />
          );
        },
        tabBarActiveTintColor: 'teal',
        tabBarInactiveTintColor: 'gray',
        // tabBarStyle: {
        //   backgroundColor: 'black', // Background color of the tab bar
        // },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false, tabBarShowLabel: false}}
      />
      <Tab.Screen
        name="Leaderboard"
        component={LeaderBoard}
        options={{headerShown: false, tabBarShowLabel: false}}
      />
      <Tab.Screen
        name="Challenges"
        component={Challenges}
        options={{headerShown: false, tabBarShowLabel: false}}
      />
      <Tab.Screen
        name="NFC"
        component={NfcScreen}
        options={{headerShown: false, tabBarShowLabel: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false, tabBarShowLabel: false}}
      />
    </Tab.Navigator>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={MainTabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
