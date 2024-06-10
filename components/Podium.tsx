import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Fred from '../assets/DP/Fred.png';
import OWX from '../assets/DP/OWX.png';
import Rex from '../assets/DP/Rex.png';
import crown from '../assets/crown.png';

const podiumData = [
  {  XP: 800, avatar: OWX, position: 'second' },
  {  XP: 875, avatar: Fred, position: 'first' },
  { XP: 700, avatar: Rex, position: 'third' },
];

const Podium = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Podium</Text>
      <View style={styles.podiumContainer}>
        {podiumData.map((person, index) => (
          <View key={index} style={person.position === 'first' ?styles.first:styles.rest}>
            {person.position === 'first' && <Image source={crown} style={styles.crown} />}
            <View style={[styles.avatarContainer, person.position === 'first' && styles.goldBorder]}>
              <Image source={person.avatar} style={styles.avatar} />
            </View>
            <Text style={styles.xp}>{person.XP} XP</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    backgroundColor: '#E5F9FF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 0,
  },
  podiumContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: 200,
  },
  first: {
    alignItems: 'center',
    padding:5
  },
  rest: {
    alignItems: 'center',
    marginVertical: -27.5,
    marginHorizontal:20
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  crown: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: -30,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  xp: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily:'JosefinSans-Medium',
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
  },
  goldBorder: {
    borderWidth: 3,
    borderColor: 'gold',
    borderRadius: 47, 
    padding: 3,
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
  },
});

export default Podium;
