import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import Fred from '../assets/DP/Fred.png';
import OWX from '../assets/DP/OWX.png';
import Rex from '../assets/DP/Rex.png';
import karthik from '../assets/DP/Karthik.png';
import Dooa from '../assets/DP/Dooa.png';
import Pong from '../assets/DP/Pong.png';
import Gareth from '../assets/DP/Gareth.png';
import Conrad from '../assets/DP/Conrad.png';
import Sophia from '../assets/DP/Sophia.png';
import BigB from '../assets/DP/Bigb.png';
import down from '../assets/positions/down.png';
import same from '../assets/positions/same.png';
import up from '../assets/positions/up.png';
import goldMedal from '../assets/medals/gold-medal.png';
import silverMedal from '../assets/medals/silver-medal.png';
import bronzeMedal from '../assets/medals/bronze-medal.png';

const ScrollableLeaderboard = () => {
  const leaderboardData = [
    {
      name: 'Frederick Pua',
      XP: 875,
      rank: 1,
      avatar: Fred,
      medal: goldMedal,
      position: up,
    },
    {
      name: 'Ong Wei Xiang',
      XP: 800,
      rank: 2,
      avatar: OWX,
      medal: silverMedal,
      position: down,
    },
    {
      name: 'Rex Yong',
      XP: 700,
      rank: 3,
      avatar: Rex,
      medal: bronzeMedal,
      position: same,
    },
    {
      name: 'Paturi Karthik',
      XP: 600,
      rank: 4,
      avatar: karthik,
      medal: null,
      position: up,
    },
    {
      name: 'Sean Dooa',
      XP: 525,
      rank: 5,
      avatar: Dooa,
      medal: null,
      position: down,
    },
    {
      name: 'Shawn Pong',
      XP: 500,
      rank: 6,
      avatar: Pong,
      medal: null,
      position: down,
    },
    {
      name: 'Gareth Yeo',
      XP: 450,
      rank: 7,
      avatar: Gareth,
      medal: null,
      position: same,
    },
    {
      name: 'Sophia Huan',
      XP: 375,
      rank: 8,
      avatar: Sophia,
      medal: null,
      position: same,
    },
    {
      name: 'Conrad Soon',
      XP: 340,
      rank: 9,
      avatar: Conrad,
      medal: null,
      position: up,
    },
    {
      name: 'Brigitte Tan',
      XP: 300,
      rank: 10,
      avatar: BigB,
      medal: null,
      position: down,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.leaderboard}>
        <ScrollView>
          <View style={styles.leaderboard}>
            {leaderboardData.map(person => (
              <View key={person.rank} style={person.rank === 1 ? styles.firstPerson : person.rank === 2 ? styles.secondPerson : person.rank === 3 ? styles.thirdPerson :styles.person}>
                <View style={ styles.personContainer}>
                  {person.medal && (
                    <Image source={person.medal} style={styles.medal} />
                  )}
                  {!person.medal &&
                  <Text style={styles.rank}>{person.rank}</Text>}
                  {person.position &&  (
                    <Image source={person.position} style={styles.position} />
                  )}
                  <Image source={person.avatar} style={styles.avatar} />
                  <View style={styles.personInfo}>
                    <Text style={styles.personName}>{person.name}</Text>
                    <Text style={styles.XP}>{person.XP} XP</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E5F9FF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  leaderboard: {
    alignItems: 'center',
  },
  person: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    width: 'auto',
    height:98,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  firstPerson: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFD700',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    width: 'auto',
    height:98,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  secondPerson: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C0C0C0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    width: 'auto',
    height:98,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  thirdPerson: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#CD7F32',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    width: 'auto',
    height:98,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  personContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  personInfo: {
    flex: 1,
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  personName: {
    fontFamily: 'JosefinSans-Medium',
    fontSize: 20,
    lineHeight:31,
    alignSelf:'center',
    color: 'black',
    fontWeight: 'bold',
  },
  XP: {
    fontWeight: 'normal',
    alignSelf: 'flex-end',
  },
  medal: {
    width: 37,
    height: 37,
  },
  rank: {
    width: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  position: {
    width: 35,
    height: 30,
  },
});

export default ScrollableLeaderboard;
