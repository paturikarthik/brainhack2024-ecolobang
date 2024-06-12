import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type UsageBoxProps = {
  type: string;
  amountLeft: string;
  description: string;
};

const UsageBox: React.FC<UsageBoxProps> = ({ type, amountLeft, description }) => {
  return (
    <View style={styles.usageBox}>
      <Text style={styles.type}>{type}</Text>
      <View style={styles.vertDivider} />
      <Text style={styles.amountLeft}>{amountLeft}</Text>
      <View style={styles.vertDivider} />
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  usageBox: {
    backgroundColor: '#E0F7FA',
    padding: 20,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
    margin: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  type: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  amountLeft: {
    marginTop:5,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    marginTop:5,
    fontSize: 14,
    textAlign: 'center',
  },
  vertDivider: {
    width: '100%',
    height: 1,
    backgroundColor: '#000',
    marginHorizontal: 0,

  }
});

export default UsageBox;
