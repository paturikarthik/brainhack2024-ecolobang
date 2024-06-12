import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import challengeData from './challenges';

const LatestChallenges: React.FC<{setActiveChallenge: Function}> = ({
  setActiveChallenge,
}) => {
  // {
  //   title:
  //     'Ground Up Initiative x Punggol CC: Root for the Future: Tree Planting Day',
  //   image: TreePlanting,
  // },
  return (
    <View style={styles.container}>
      <Text style={styles.challengesText}>Latest Challenges!</Text>
      <ScrollView
        horizontal
        contentContainerStyle={styles.challenges}
        showsHorizontalScrollIndicator={false}>
        <Pressable
          key={challengeData[2].id}
          onPress={() => setActiveChallenge(2)}>
          <View key={challengeData[2].title} style={styles.challenge}>
            <Image
              source={challengeData[2].image}
              style={styles.challengeImage}
            />
            <Text style={styles.challengeTitle}>{challengeData[2].title}</Text>
          </View>
        </Pressable>
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
  },
  challengesText: {
    fontSize: 24,
    color: '#006400',
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
    width: 300, // Set a fixed width for each challenge item
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
    height: '80%',
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

export default LatestChallenges;
