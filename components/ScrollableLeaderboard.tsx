import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Fred from "../assets/Fred.png"

const ScrollableLeaderboard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leaderboard}>
                <View style={styles.person}>
                    <Image source={Fred} style={styles.avatar} />
                    <Text style={styles.personName}>Frederick Pua</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    leaderboard: {
        alignItems: 'center',
    },
    person: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    personName: {
        fontWeight: 'bold',
    },
    statusBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
        padding: 10,
        marginTop: 20,
    },
    time: {
        fontSize: 18,
    },
    dynamicIsland: {
        fontSize: 14,
        color: '#666',
    },
});

export default ScrollableLeaderboard;
