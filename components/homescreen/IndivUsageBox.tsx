import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const boxSize = screenWidth * 0.4;

type IndivUsageBoxProps = {
  type: string;
  value: string;
  unit: string;
  boxColor: string;
};

const IndivUsageBox: React.FC<IndivUsageBoxProps> = ({type, value, unit, boxColor}) => {
    const dynamicStyles = StyleSheet.create({
        overall: {
          width: boxSize,
          height: boxSize,
          backgroundColor: boxColor, // Use the boxColor prop directly here
          borderRadius: 15,
          justifyContent: 'center', // Center items vertically
          marginLeft: 10,
        },

        container: {
            flex: 1,
            padding: 5,
          },
          applianceType: {
            fontFamily: 'Arial',
            fontSize: 20,
        
            textAlign: 'left',
            color: 'black',
          },
          applianceValue: {
            fontFamily: 'JosefinSans-Medium',
            fontSize: 50,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'black',
          },

          topItem: {
            alignItems: 'flex-start',
            marginLeft: 10,
            marginTop: 10, // Adjust as needed
          },
          centerItem: {
            alignItems: 'center',
            flex: 1, // Ensures it takes up the remaining space
          },
          unit: {
            fontSize: 20,
            fontWeight: 'normal',
          },
      });
  return (
    <View style={dynamicStyles.container}>
      <View style={dynamicStyles.overall}>
        <View style={dynamicStyles.topItem}>
          <Text style={dynamicStyles.applianceType}>{type}</Text>
        </View>
        <View style={dynamicStyles.centerItem}>
          <Text style={dynamicStyles.applianceValue}>
            {value} <Text style={dynamicStyles.unit}>{unit}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 5,
//   },
//   applianceType: {
//     fontFamily: 'Arial',
//     fontSize: 20,

//     textAlign: 'left',
//     color: 'black',
//   },
//   applianceValue: {
//     fontFamily: 'JosefinSans-Medium',
//     fontSize: 50,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: 'black',
//   },
//   overall: {
//     width: boxSize,
//     height: boxSize,
//     backgroundColor: 'white', 
//     borderRadius: 15,
//     justifyContent: 'center', // Center items vertically
//     marginLeft: 10,
//   },
//   topItem: {
//     alignItems: 'flex-start',
//     marginLeft: 10,
//     marginTop: 10, // Adjust as needed
//   },
//   centerItem: {
//     alignItems: 'center',
//     flex: 1, // Ensures it takes up the remaining space
//   },
//   unit: {
//     fontSize: 20,
//     fontWeight: 'normal',
//   },
// });

export default IndivUsageBox;
