import React from 'react';
import { View, StyleSheet } from 'react-native';
import ScrollableLeaderboard from '../components/ScrollableLeaderboard';
import LeaderBoardTitle from '../components/LeaderBoardTitle';
import Podium from '../components/Podium';

const LeaderBoard = () => {
  return (
    <View style={styles.container}>
      <LeaderBoardTitle  />
      <View style={styles.content}>
        <Podium />
        <ScrollableLeaderboard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3FCF7',
  },
  title: {
    position: 'absolute',
    top: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 0,
    backgroundColor: '#E3FCF7',
    zIndex: 1,
  },
  content: {
    flex: 1,
    marginTop: 10, // Adjust based on the height of your LeaderBoardTitle component
    justifyContent: 'center',
    alignItems: 'center',
  },
  personContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  personInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 2,
  },
  personName: {
    fontFamily: 'JosefinSans-Medium',
    fontSize: 17,
    lineHeight: 31,
    color: 'black',
    fontWeight: 'bold',
  },
  XP: {
    fontFamily: 'JosefinSans-Medium',
    fontSize: 17,
    lineHeight: 31,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
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
  person: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    width: 'auto',
    height: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
});

export default LeaderBoard;
