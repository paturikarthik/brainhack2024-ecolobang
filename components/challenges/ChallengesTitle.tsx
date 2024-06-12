import React from 'react';
import {Image} from '@rneui/themed';
import {StyleSheet, Text, View} from 'react-native';
import YZY from '../../assets/DP/YZY.png';

const ChallengesTitle: React.FC = () => {
  return (
    <View style={styles.title}>
      <View>
        <Text style={styles.challengesText}>Challenges</Text>
        <Text style={styles.challengeMotivationText}>
          ⚬ Challenge yourself to save more!
        </Text>
      </View>
      <Image source={YZY} style={styles.avatar} />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    width: '90%',
    paddingTop: 10,
    paddingBottom: 5,
    justifyContent: 'space-between',
    marginTop: 10,
  },
  challengesText: {
    fontFamily: 'JosefinSans-Medium',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  challengeMotivationText: {
    fontFamily: 'Josefin Slab',
    fontSize: 12,
    fontStyle: 'italic',
    fontWeight: 'bold',
    lineHeight: 16,
    color: '#2DAFE7',
  },
});
export default ChallengesTitle;
