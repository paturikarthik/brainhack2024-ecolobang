import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ScrollableLeaderboard from '../components/ScrollableLeaderboard';

const LeaderBoard = () => {
  const getThisWeeksDate = () => {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    const endOfWeek = new Date(today);
    endOfWeek.setDate(today.getDate() - today.getDay() + 6);
    return `${startOfWeek.getUTCDate()} ${monthNumToWord(startOfWeek.getUTCMonth())} ${startOfWeek.getFullYear()} - ${endOfWeek.getUTCDate()} ${monthNumToWord(endOfWeek.getUTCMonth())} ${endOfWeek.getFullYear()}`;
  };
  const monthNumToWord = (month: Number) =>{
    switch (month) {
        case 1:
            return "Jan";
        case 2:
            return "Feb";
        case 3:
            return "Mar";
        case 4:
            return "Apr";
        case 5:
            return "May";
        case 6:
            return "Jun";
        case 7:
            return "Jul";
        case 8:
            return "Aug";
        case 9:
            return "Sep";
        case 10:
            return "Oct";
        case 11:
            return "Nov";
        case 12:
            return "Dec";
        default:
            return "";
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.leaderboardText}>LeaderBoard</Text>
      <Text style={styles.weekText}>{getThisWeeksDate()}</Text>
      <ScrollableLeaderboard/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3FCF7'
  },
  leaderboardText: {
    fontFamily:'Font',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black', 
    padding:0
  },
  weekText: {
    fontFamily:'Font',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
    color: 'black',
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
    lineHeight:31,
    color: 'black',
    fontWeight: 'bold',
  },
  XP: {
    fontFamily: 'JosefinSans-Medium',
    fontSize: 17,
    lineHeight:31,
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
    height:80,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
});

export default LeaderBoard;
