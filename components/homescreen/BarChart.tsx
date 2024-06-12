import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import CustomSwitch from './CustomSwitch';
import TargetBox from './TargetBox';

const screenWidth = Dimensions.get('window').width;

const LineChartComponent = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(1);
  const [selectedElement, setSelectedElement] = useState(1);


  const dataset1 = [50, 100, 150, 200, 250, 300, 350];
  const dataset2 = [350, 300, 250, 200, 150, 100, 50];
  const dataset3 = [10, 20, 30, 40, 50, 60, 70];
  const dataset4 = [70, 60, 50, 40, 30, 20, 10];

  const data =
    selectedPeriod === 1
      ? selectedElement === 1
        ? dataset3
        : dataset1
      : selectedElement === 2
      ? dataset4
      : dataset2;

  const formattedData = {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [
      {
        data: data,
        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // blue
        strokeWidth: 2,
      },
    ],
  };

  const onSelectSwitchPeriod = (index: React.SetStateAction<number>) => {
    setSelectedPeriod(index);
  };

  const onSelectSwitchElement = (index: React.SetStateAction<number>) => {
    setSelectedElement(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.switchParent}>
        <CustomSwitch
          selectionMode={selectedElement}
          roundCorner={true}
          option1={'Water'}
          option2={'Electricity'}
          onSelectSwitch={onSelectSwitchElement}
          selectionColor={'blue'}
        />
        <View style={styles.space} />
        <CustomSwitch
          selectionMode={selectedPeriod}
          roundCorner={true}
          option1={'Weekly'}
          option2={'Monthly'}
          onSelectSwitch={onSelectSwitchPeriod}
          selectionColor={'blue'}
        />
      </View>

      <LineChart
        data={formattedData}
        width={screenWidth * 0.95}
        height={220}
        yAxisLabel=""
        yAxisSuffix={selectedElement === 1 ? 'L' : 'kWh'}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: selectedElement === 1 ? '#8db3f0' : '#f7cbf7',
          backgroundGradientTo: selectedElement === 1 ? '#4e8ef5' : '#ff69b4',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3FCF7',
  },
  switchParent: {
    flexDirection: 'row',
  },
  space: {
    width: 10,
  },
});

export default LineChartComponent;
