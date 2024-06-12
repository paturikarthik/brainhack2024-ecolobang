import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SetTargetBox: React.FC = () => {
  return (
    <View style={styles.setTargetBox}>
    
      <Text style={styles.setTargetText}>Set Target</Text>
    
      <View style={styles.vertDivider} />
      <View style={styles.targetContainer}>
        <View style={styles.targetItem}>
          <Text style={styles.targetLabel}>Water</Text>
          <Text style={styles.targetValue}>150 Litres</Text>
          <Text style={styles.targetSaved}>Saved!</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.targetItem}>
          <Text style={styles.targetLabel}>Electricity</Text>
          <Text style={styles.targetValue}>80 kWh</Text>
          <Text style={styles.targetSaved}>Saved!</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  setTargetBox: {
    backgroundColor: '#E0E0E0',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    marginVertical: 20,
  },
  setTargetText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  targetContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  targetItem: {
    flex: 1,
    alignItems: 'center',
  },
  targetLabel: {
    marginTop:10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  targetValue: {
    fontSize: 14,
    marginVertical: 5,
  },
  targetSaved: {
    fontSize: 12,
    color: 'green',
  },
  divider: {
    width: 1,
    height: '100%',
    backgroundColor: '#000',
    marginHorizontal: 10,
  },
  vertDivider: {
    width: '100%',
    height: 1,
    backgroundColor: '#000',
    marginHorizontal: 10,

  }
});

export default SetTargetBox;
