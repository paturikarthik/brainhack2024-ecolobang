import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import IndivUsageBox from '../components/homescreen/IndivUsageBox';
import TurqoiseScreen from '../components/homescreen/TurqoiseScreen';
import RadialPercentageGraph from '../components/homescreen/RadialPercentageGraph';
import BarChart from '../components/homescreen/BarChart';
import TargetBox from '../components/homescreen/TargetBox';

const HomeScreen: React.FC = () => {
  const [isAddBoxVisible, setIsAddBoxVisible] = useState(false);

  const handleAddBox = () => {
    setIsAddBoxVisible(true);
  };

  const handleCloseAddBox = () => {
    setIsAddBoxVisible(false);
  };

  return (
    <View style={styles.container}>
      <TurqoiseScreen />

      <View style={styles.parent}>
        <IndivUsageBox type="Water" value="143" unit="L" boxColor="#8db3f0" />
        <IndivUsageBox
          type="Electricity"
          value="29"
          unit="kWh"
          boxColor="#f7cbf7"
        />
      </View>

      <TouchableOpacity style={styles.circle} onPress={handleAddBox}>
        <RadialPercentageGraph
          percentage1={74}
          percentage2={63}
          label="Target"
        />
      </TouchableOpacity>

      <View style={styles.barParent}>
        <BarChart />
      </View>

      <TargetBox isVisible={isAddBoxVisible} onClose={handleCloseAddBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 15, // Adjust padding as needed
  },
  parent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 2, // Adjust vertical margin as needed
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2, // Adjust vertical margin as needed
  },
  barParent: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20, // Adjust padding as needed
  },
});

export default HomeScreen;
