import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

type CustomSwitchProps = {
  selectionMode: number;
  roundCorner: boolean;
  option1: string;
  option2: string;
  onSelectSwitch: any;
  selectionColor: any;
};

const CustomSwitch: React.FC<CustomSwitchProps> = ({
  selectionMode,
  roundCorner,
  option1,
  option2,
  onSelectSwitch,
  selectionColor,
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const [getRoundCorner, setRoundCorner] = useState(roundCorner);

  const updatedSwitchData = (val: number) => {
    setSelectionMode(val);
    onSelectSwitch(val);
  };

  return (
    <View>
      <View
        style={{
          height: 32,
          width: 140,
          backgroundColor: 'lightgrey',
          opacity: 0.5,
          borderRadius: getRoundCorner ? 10 : 0,
          borderWidth: 1,
          borderColor: 'lightgrey',
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 2,

        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(1)}
          style={{
            flex: 1,
            backgroundColor:
              getSelectionMode == 1
                ? 'white'
                : `rgba(${hexToRgb(selectionColor)}, 0.0)`,
            borderRadius: getRoundCorner ? 10 : 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: getSelectionMode == 1 ? 'black' : `rgba(${hexToRgb('black')}, 1)`,
            }}
          >
            {option1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(2)}
          style={{
            flex: 1,
            backgroundColor:
              getSelectionMode == 2
                ? 'white'
                : `rgba(${hexToRgb(selectionColor)}, 0)`,
            borderRadius: getRoundCorner ? 10 : 0,
            justifyContent: 'center',
            alignItems: 'center',
        
          }}
        >
          <Text
            style={{
              color: getSelectionMode == 1 ? 'black' : `rgba(${hexToRgb('black')}, 1)`,
              
            }}
          >
            {option2}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Helper function to convert hex color to rgb
const hexToRgb = (hex: string) => {
  hex = hex.replace('#', '');
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r},${g},${b}`;
};

export default CustomSwitch;
