import React from 'react';
import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';
import ProfileHeader from '../components/profile/ProfileHeader';
import Rewards from '../components/profile/Rewards';

const Profile: React.FC = () => {
  const handleSignOut = () => {
    // Handle sign-out logic here
  };

  return (
    // error: virtualizedlist should never be nested
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <ProfileHeader />
        {/* <Text>Profile</Text> */}
        <Pressable onPress={handleSignOut} style={styles.signOutButton}>
          <Text>Sign Out</Text>
        </Pressable>
        <Rewards />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signOutButton: {
    marginTop: 20, // Add some margin to the top of the button
  },
  scrollContainer: {
    padding: 10,
    flexGrow: 1,
  },
});

export default Profile;
