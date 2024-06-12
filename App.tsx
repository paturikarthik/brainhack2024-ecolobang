import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import NfcScreen from './screens/NfcScreen';
import Profile from './screens/Profile';
import Challenges from './screens/Challenges';
import LeaderBoard from './screens/LeaderBoard';
import {Image} from 'react-native';

import homeIcon from './assets/Home.png';
import leaderboardIcon from './assets/Leaderboard.png';
import profileIcon from './assets/Profile.png';
import nfcIcon from './assets/NFC.png';
import challengesIcon from './assets/challenges.png';
import NfcManager, {NfcEvents, TagEvent} from 'react-native-nfc-manager';
import {MongoClient, ObjectId} from 'mongodb';
const Tab = createBottomTabNavigator();
const uri = process.env.MONGODB_URI || '';
const mongodb = new MongoClient(uri);
const App: React.FC = () => {
  const [hasNfc, setHasNFC] = useState(true);

  useEffect(() => {
    const checkIsSupported = async () => {
      const deviceIsSupported = await NfcManager.isSupported();

      setHasNFC(deviceIsSupported);
      if (deviceIsSupported) {
        await NfcManager.start();
      }
    };

    checkIsSupported();
  }, []);

  useEffect(() => {
    readTag();
    NfcManager.setEventListener(
      NfcEvents.DiscoverTag,
      async (tag: TagEvent) => {
        let payload: string[] = [];
        console.log('tag found', tag);
        console.log(tag.ndefMessage[0].payload.toString());

        if (tag.ndefMessage && tag.ndefMessage.length > 0) {
          // Iterate through the NDEF records
          for (let i = 0; i < tag.ndefMessage.length; i++) {
            const record = tag.ndefMessage[i];
            console.log(record);

            if (record.tnf === 1) {
              const payloadText = String.fromCharCode
                .apply(null, record.payload)
                .substring(2);
              console.log(`NDEF Record ${i + 1}: ${payloadText}`);
              payload.push(payloadText);
            }
          }
        }
        if (payload.length > 0) {
          const device = await mongodb
            .db('brainhack')
            .collection('devices')
            .findOne({_id: new ObjectId(payload[3])});
          const usage = await mongodb
            .db('brainhack')
            .collection('usages')
            .findOne({deviceID: device?._id, state:"active"});
          if (usage) {
            const stop = await mongodb
              .db('brainhack')
              .collection('usages')
              .updateOne(
                {_id: new ObjectId(payload[4])},
                {$set: {stop: Date.now(), usage: device?.usage * (Date.now()-usage[0].start)/1000,state:"stopped"}},
              );
          } else {
            const start = await mongodb
              .db('brainhack')
              .collection('usages')
              .insertOne({
                deviceID: device?._id,
                start: Date.now(),
                usageRate: device?.usage,
                state:"active"
              });
          }
        }
      },
    );
    return () => {
      NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
    };
  }, []);

  const readTag = async () => {
    await NfcManager.registerTagEvent();
  };

  return (
    <NavigationContainer>
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
          activeTintColor: 'teal',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: 'black', // Background color of the tab bar
          },
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
    </NavigationContainer>
  );
};

export default App;
