import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

type RadialGraphProp = {
    percentage1: number;
    percentage2: number;
    label: string;
};

const RadialPercentageGraph: React.FC<RadialGraphProp> = ({percentage1, percentage2, label}) => {
    const radius = 80;
    const strokeWidth = 13;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (circumference * percentage1) / 100;
    const rotateAngle = 90;

    return (
        <View style={styles.container}>
            <View>
              <Text style={styles.percentage1}>{percentage1}%</Text>
              <Text style={styles.percentage2}>{percentage2}%</Text>
            </View>
            <View style={styles.graphContainer}>
                <Svg width={(radius + strokeWidth) * 2} height={(radius + strokeWidth) * 2}>
                    <Circle
                        stroke="#f7cbf7"
                        fill="none"
                        cx={radius + strokeWidth}
                        cy={radius + strokeWidth}
                        r={radius - 20}
                        strokeWidth={strokeWidth}
                    />
                    <Circle
                        stroke="#aeb5fc"
                        fill="none"
                        cx={radius + strokeWidth}
                        cy={radius + strokeWidth}
                        r={radius}
                        strokeWidth={strokeWidth}
                    />
                    <Circle
                        stroke="#071bf5"
                        fill="none"
                        cx={radius + strokeWidth}
                        cy={radius + strokeWidth}
                        r={radius}
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        transform={`rotate(-${rotateAngle}, ${radius + strokeWidth}, ${radius + strokeWidth})`}
                    />
                    <Circle
                        stroke="#ff69b4"
                        fill="none"
                        cx={radius + strokeWidth}
                        cy={radius + strokeWidth}
                        r={radius - 20}
                        strokeWidth={strokeWidth}
                        strokeDasharray={(2 * Math.PI * (radius - 15))}
                        strokeDashoffset={(2 * Math.PI * (radius - 15)) - ((2 * Math.PI * (radius - 15)) * percentage2) / 100}
                        strokeLinecap="round"
                        transform={`rotate(-${rotateAngle}, ${radius + strokeWidth}, ${radius + strokeWidth})`}
                    />
                </Svg>
                <View style={styles.labelContainer}>
                    <Text style={styles.label}>{label}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        flexDirection: 'row',
        marginRight: 50
    },
    graphContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    labelContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    label: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    percentage1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginRight: 20,
        backgroundColor: '#071bf5', 
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5, 
        alignItems: 'center', 
        marginBottom: 10,
    },
    percentage2: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      marginRight: 20, 
      backgroundColor: '#ff69b4', 
      borderRadius: 10, 
      paddingHorizontal: 10,
      paddingVertical: 5,
      alignItems: 'center',
      marginBottom: 10,
      textAlign: 'center',
      alignContent:'center'
  },
});

export default RadialPercentageGraph;
