import React from 'react';
import {View, Text, StyleSheet, Modal,TouchableOpacity,} from 'react-native';
import IndivUsageBox from './IndivUsageBox';
import TurqoiseScreen from './TurqoiseScreen';
import RadialPercentageGraph from './RadialPercentageGraph';
import BarChart from './BarChart';
import SetTargetBox from './SetTargetBox';
import UsageBox from './UsageBox';
import TargetDropdownComponent from './TargetDropdownComponent';

type TargetBoxProps = {
    isVisible: boolean;
    onClose: () => void;
  };

const HomeScreen: React.FC<TargetBoxProps> = ({ isVisible, onClose }) => {
  return (
    <Modal visible={isVisible} transparent={false}>
    <View style={styles.container}>
      <TurqoiseScreen></TurqoiseScreen>
      <View style={styles.circle}>
        <RadialPercentageGraph
          percentage1={74}
          percentage2={63}
          label="Target"
        />
      </View>
      <View>
        <View>
            <View style={styles.setBox}>
                <SetTargetBox />
            
            </View>
            
            <View style={styles.usageContainer}>
          <UsageBox 
            type="Water" 
            amountLeft="25 L left for the day!" 
            description="You took a 43 min shower today! You can cut that down!" 
          />
          <UsageBox 
            type="Electricity" 
            amountLeft="10 kWh left for the day!" 
            description="You used the AC for 14 consecutive hours today! You can cut that down!" 
          />
        </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
    </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
  },
  circle: {
    flex: 1,
  },

  barParent: {
    flex: 1,
  },

  parent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    zIndex: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  usageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  setBox: {
    alignItems: 'center',
  }
});

export default HomeScreen;
