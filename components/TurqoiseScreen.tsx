import React from 'react';
import { View, StyleSheet } from 'react-native';

const TurquoiseScreen = () => {
  return (
    <View style={styles.container}></View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject, // This will make the view fill the entire screen
    backgroundColor: '#E3FCF7',
    zIndex: -10000000, // Ensure this view is at the bottom
  },

});

export default TurquoiseScreen;
