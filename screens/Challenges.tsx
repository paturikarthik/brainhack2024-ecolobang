import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ChallengesTitle from '../components/ChallengesTitle';
import LatestChallenges from '../components/LatestChallenges';
const Challenges: React.FC = () => {
  return (
    <View style={styles.container}>
      <ChallengesTitle/>
      <LatestChallenges />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
export default Challenges;
