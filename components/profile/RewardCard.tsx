import React from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

const RewardCard: React.FC<{
  icon: any;
  description: string;
  backgroundColor: string;
  xp: string;
}> = ({ icon, description, backgroundColor, xp }) => {
  const [redeemClicked, setRedeemClicked] = useState(false);
  const [confirmClicked, setConfirmClicked] = useState(false);

  return (
    !confirmClicked ? (
      <View style={[styles.card, { backgroundColor }]}>
        <Image source={icon} style={styles.cardImage} />
        <Text style={styles.cardText}>
          {redeemClicked
            ? `Please confirm your redeemption of a ${description}`
            : description}
        </Text>
        <View style={styles.buttonArr}>
          <Button
            title={redeemClicked ? 'Cancel' : xp}
            onPress={() => {
              setRedeemClicked(false);
            }}
            color="grey"
          />
          <Button
            title={redeemClicked ? 'Confirm' : 'Redeem'}
            onPress={() => {
              if (redeemClicked) {
                setConfirmClicked(true);
              }
              setRedeemClicked(prevCheck => !prevCheck);
            }}
            color={redeemClicked ? 'red' : ''}
          />
        </View>
      </View>
    ) : (
      <View style={[styles.card, { backgroundColor: 'lightgrey' }]}>
        <Image source={icon} style={styles.cardImage} />
        <Text style={styles.cardText}>
          {description}
        </Text>
        <Text style={styles.redeemedText}>
          REDEEMED
        </Text>
      </View>
    )
  )
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 5,
    margin: 3,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  cardImage: {
    // width: 80, // Adjust as needed
    height: 80, // Adjust as needed
    marginBottom: 10,
    resizeMode: 'contain',
  },
  cardText: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'left',
  },
  redeemedText: {
    fontSize: 32  ,
    color: 'red',
    textAlign: 'center',
  },
  buttonArr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default RewardCard;
