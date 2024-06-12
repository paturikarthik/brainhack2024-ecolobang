import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import YZY from '../../assets/DP/YZY.png';

const ProfileHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={YZY} style={styles.profile} />
      <View style={styles.textContainer}>
        <Text style={styles.profileText}>Yeo Zong Yao</Text>
        <Text style={styles.xpText}>1000 XP</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center', // Aligns items vertically in the center
    padding: 10,
  },
  profile: {
    width: 50, // Adjust as needed
    height: 50, // Adjust as needed
    borderRadius: 25, // Makes the image circular
    marginRight: 10, // Space between the image and text
  },
  textContainer: {
    justifyContent: 'center', // Centers the text vertically
  },
  profileText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  xpText: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ProfileHeader;
