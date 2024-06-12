import React from 'react';
import {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import ChallengesTitle from '../components/challenges/ChallengesTitle';
import LatestChallenges from '../components/challenges/LatestChallenges';
import RecommendedChallenges from '../components/challenges/RecommendedChallenges';
import ChallengeModal from '../components/challenges/ChallengeModal';
import challengeData from '../components/challenges/challenges';

const Challenges: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [challengeName, setChallengeName] = useState('');
  const [challengeTimeline, setChallengeTimeline] = useState('');
  const [challengeDescription, setChallengeDescription] = useState('');
  const [challengeReward, setChallengeReward] = useState('');
  const [challengeImage, setChallengeImage] = useState(challengeData[0].image);

  const setActiveChallenge = (number: any) => {
    setChallengeName(challengeData[number].title);
    setChallengeTimeline(challengeData[number].challengeTimeline);
    setChallengeDescription(challengeData[number].challengeDescription);
    setChallengeReward(challengeData[number].challengeReward);
    setChallengeImage(challengeData[number].image);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <ChallengesTitle />
      <LatestChallenges setActiveChallenge={setActiveChallenge} />
      <View style={styles.space} />
      <RecommendedChallenges setActiveChallenge={setActiveChallenge} />
      <ChallengeModal
        modalVisible={modalVisible}
        offModal={() => setModalVisible(false)}
        challengeName={challengeName}
        challengeTimeline={challengeTimeline}
        challengeDesc={challengeDescription}
        challengeReward={challengeReward}
        challengeImage={challengeImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F0FFF0',
  },
  space: {
    margin: 30,
  },
});

export default Challenges;
