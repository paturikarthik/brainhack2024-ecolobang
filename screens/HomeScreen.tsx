import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IndivUsageBox from '../components/IndivUsageBox';
import TurqoiseScreen from '../components/TurqoiseScreen';
import RadialPercentageGraph from '../components/RadialPercentageGraph'
import BarChart from '../components/BarChart';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <TurqoiseScreen></TurqoiseScreen>
      
      <View style={styles.parent}>
        <IndivUsageBox type="Water" value="143" unit="L" boxColor='#8db3f0'/>
        <IndivUsageBox type="Electrcitity" value="29" unit="kWh" boxColor='#f7cbf7'/>
      </View>
      <View style={styles.circle}>
        <RadialPercentageGraph percentage1={74} percentage2={63} label="Target" />
      </View>
      <View style={styles.barParent}>
        <BarChart />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column'
  },
  circle: {
    flex: 1
  },

  barParent: {
    flex: 1
  },

  parent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    zIndex: 10
  }
});

export default HomeScreen;
