import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import RewardCard from './RewardCard'; // Adjust the import path as needed
import hdl from '../../assets/rewardslogo/hdl.png';
import tesla from '../../assets/rewardslogo/tesla.png';
import fairprice from '../../assets/rewardslogo/Logo.png';
import lv from '../../assets/rewardslogo/lv.png';
import nike from '../../assets/rewardslogo/nike.png';
import wingstop from '../../assets/rewardslogo/Wingstop.png';
import tommy from '../../assets/rewardslogo/tommy_hilfiger.png';
import starbucks from '../../assets/rewardslogo/starbucks.png';

const RewardSection: React.FC = () => {
  const rewards = [
    {
      id: 1,
      icon: fairprice,
      description: '$5 voucher',
      backgroundColor: '#fff',
      xp: '250 xp',
    },
    {
      id: 2,
      icon: hdl,
      description: '$10 voucher',
      backgroundColor: '#fff',
      xp: '250 xp',
    },
    {
      id: 3,
      icon: starbucks,
      description: '$5 voucher',
      backgroundColor: '#006241',
      xp: '250 xp',
    },
    {
      id: 4,
      icon: tommy,
      description: '$20 voucher',
      backgroundColor: '#1B2651',
      xp: '250 xp',
    },
    {
      id: 5,
      icon: nike,
      description: '$5 voucher',
      backgroundColor: '#fff',
      xp: '250 xp',
    },
    {
      id: 6,
      icon: tesla,
      description: '$5 voucher',
      backgroundColor: '#B73838',
      xp: '250 xp',
    },
    {
      id: 7,
      icon: wingstop,
      description: '$5 voucher',
      backgroundColor: '#146A34',
      xp: '250 xp',
    },
    {
      id: 8,
      icon: lv,
      description: '$25 voucher',
      backgroundColor: '#9F8453',
      xp: '250 xp',
    },
  ];

  return (
    <View style={styles.rewardContainer}>
      <Text style={styles.rewardTitle}>Rewards</Text>
      <FlatList
        data={rewards}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={({item}) => (
          <RewardCard
            icon={item.icon}
            description={item.description}
            backgroundColor={item.backgroundColor}
            xp={item.xp}
          />
        )}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rewardContainer: {
    marginTop: 20,
    width: '100%',
  },
  rewardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
});

export default RewardSection;
