import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import challengeData from './challenges';

const RecommendedChallenges: React.FC<{setActiveChallenge: Function}> = ({
  setActiveChallenge,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.challengesText}>Recommended Challenges</Text>
      <Text style={styles.challengesDesc}>Based on your usage</Text>
      <ScrollView
        horizontal
        contentContainerStyle={styles.challenges}
        showsHorizontalScrollIndicator={false}>
        {challengeData.map(challenge => (
          <Pressable
            key={challenge.id}
            onPress={() => setActiveChallenge(challenge.id - 1)}>
            <View style={styles.challenge}>
              <Image source={challenge.image} style={styles.challengeImage} />
              <Text style={styles.challengeTitle}>{challenge.title}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingBottom: 0, // Remove bottom padding
    backgroundColor: '#F0FFF0',
    minHeight: 250,
    maxHeight: 300,
    width: '100%',
  },
  challengesText: {
    fontSize: 20,
    color: '#006400',
    marginBottom: 0, // Remove bottom margin
    textAlign: 'left',
  },
  challengesDesc: {
    fontSize: 12,
    color: 'grey',
    marginBottom: 0, // Remove bottom margin
    textAlign: 'left',
  },
  challenges: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    paddingTop: 16, // Add paddingTop to maintain spacing within ScrollView
  },
  challenge: {
    width: 250, // Set a fixed width for each challenge item
    marginRight: 16, // Space between items
    padding: 16,
    marginTop: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
  },
  challengeImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 8,
  },
  challengeTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#006400',
    textAlign: 'center',
    marginBottom: 15,
  },
});

export default RecommendedChallenges;
