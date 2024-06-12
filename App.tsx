import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import NfcScreen from './screens/NfcScreen';
import LoginScreen from './screens/LoginScreen';
import Profile from './screens/Profile';
import Challenges from './screens/Challenges';
import LeaderBoard from './screens/LeaderBoard';
import {Alert, Image} from 'react-native';
import homeIcon from './assets/Home.png';
import leaderboardIcon from './assets/Leaderboard.png';
import profileIcon from './assets/Profile.png';
import nfcIcon from './assets/NFC.png';
import challengesIcon from './assets/challenges.png';
import NfcManager, {NfcEvents, TagEvent} from 'react-native-nfc-manager';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabNavigator: React.FC = () => {
  const [hasNfc, setHasNFC] = useState(true);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [showerState, setShowerState] = useState(false);
  const [washingMachineState, setWashingMachineState] = useState(false);
  const [airConditionerState, setAirConditionerState] = useState(false);
  const [trackedItems, setTrackedItems] = useState([
    { id: '1', name: 'Washing Machine', category: 'Water', time: '00:15:14', start: '00:00:00', end: '00:00:00' },
    { id: '2', name: 'Light Bulb', category: 'Electricity', time: '05:12:54' , start: '00:00:01', end: '00:00:00' },
    {id:'1', name: 'Shower', category: 'Water', time: null, start: '1718224709000', end:null},
    {id:'3', name: 'AC', category: 'Electricity', time: null, start: '1718224709001', end:null},
    {id:'2', name: 'Washing Machine', category: 'Water', time: null, start: '1718224709002', end:null},
  ]);

  const addTrackedItem = (newItem: any) => {
    setTrackedItems(prevItems => [...prevItems, newItem]);
  };
  const updateTrackedItem = (updatedItem: any) => {
    setTrackedItems(prevItems => prevItems.map(item => item.id === updatedItem.id && item.end==null ? updatedItem : item));
  };
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
    if (!isAddModalVisible){
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
                .substring(3);
              console.log(`NDEF Record ${i + 1}: ${payloadText}`);
              payload.push(payloadText);
            }
          }
        }
        if (payload.length > 0 && !isAddModalVisible) {
          console.log("hi")
          console.log(payload)
          if(payload[3] == "1"){
            if (showerState == false && !trackedItems.find(item => item.id === '1' && item.end==null)) {
              setShowerState(true);
              const newItem = { id: trackedItems.length + 1, name: payload[0], category: 'Water', time:null, start: Date.now().toString(), end: null };
              addTrackedItem(newItem);
              console.log("hi here")
              console.log(trackedItems);
              console.log(isAddModalVisible)
            } else {
              setShowerState(false);
              const currentItem = trackedItems.find(item => item.id === '1' && item.end==null);
              if (currentItem) {
                currentItem.end = Date.now().toString();
                currentItem.time = (parseInt(currentItem.end) - parseInt(currentItem.start)).toString();
                const usage = 960* parseInt(currentItem.time)/(60*60*1000);
                currentItem.time = millisToHHMMSS(parseInt(currentItem.end) - parseInt(currentItem.start));
                Alert.alert(`You consumed ${(usage).toPrecision(3)}L of water.`,`That's enough water to fill up ${usage/1.5} bottles of water!`);
                updateTrackedItem(currentItem);
                console.log("hi there")
                console.log(trackedItems);
              }
            }
            }
          else if(payload[3] == "2"){
            if (washingMachineState == false && !trackedItems.find(item => item.id === '2' && item.end==null)) {
              setWashingMachineState(true);
              const newItem = { id: trackedItems.length + 1, name: payload[0], category: 'Water', time:null, start: Date.now().toString(), end: null };
              addTrackedItem(newItem);
            } else {
              setWashingMachineState(false);
              const currentItem = trackedItems.find(item => item.id === '2' && item.end==null);
              if (currentItem) {
                currentItem.end = Date.now().toString();
                currentItem.time = (parseInt(currentItem.end) - parseInt(currentItem.start)).toString();
                const usage = 75* parseInt(currentItem.time)/(60*60*1000);
                currentItem.time = millisToHHMMSS(parseInt(currentItem.end) - parseInt(currentItem.start));
                updateTrackedItem(currentItem);
                Alert.alert(`You consumed ${(usage).toPrecision(3)}L of water.`, `That's enough water to fill up ${usage/1.5} bottles of water!`);
                
              }
            }
          } else {
            if (airConditionerState == false && !trackedItems.find(item => item.id === '3' && item.end==null)) {
              setAirConditionerState(true);
              const newItem = { id: trackedItems.length + 1, name: payload[0], category: 'Electricity', time:null, start: Date.now().toString(), end: null };
              addTrackedItem(newItem);
            } else {
              setAirConditionerState(false);
              const currentItem = trackedItems.find(item => item.id === '3' && item.end==null);
              if (currentItem) {
                currentItem.end = Date.now().toString();
                currentItem.time = (parseInt(currentItem.end) - parseInt(currentItem.start)).toString();
                const usage = 1.4* parseInt(currentItem.time)/(60*60*1000);
                currentItem.time = millisToHHMMSS(parseInt(currentItem.end) - parseInt(currentItem.start));
                updateTrackedItem(currentItem);
                Alert.alert(`You consumed ${(usage).toPrecision(3)}kWh of electricity.`,`At this rate, you need to plant ${usage*0.309*1.4*365/21} trees yearly to offset your usage!`);
              }
            }
          }
        }
      },
    );
    return () => {
      NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
    };
  }
  }, []);
  function millisToHHMMSS(millis: number): string {
    const seconds = Math.floor((millis / 1000) % 60);
    const minutes = Math.floor((millis / (1000 * 60)) % 60);
    const hours = Math.floor((millis / (1000 * 60 * 60)) % 24);
  
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  const readTag = async () => {
    await NfcManager.registerTagEvent();
  };

  return (
    <Tab.Navigator
      screenOptions={({route}: {route: any}) => ({
        tabBarIcon: ({color, size, focused}: {color: string; size: number; focused: boolean}) => {
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
          options={{ headerShown: false, tabBarShowLabel: false }}
        >
          {() => (
            <NfcScreen
              trackedItems={trackedItems}
              addTrackedItem={addTrackedItem}
              isAddModalVisible={isAddModalVisible}
              setIsAddModalVisible={setIsAddModalVisible}
            />
          )}
        </Tab.Screen>
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
