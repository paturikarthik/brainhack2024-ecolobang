import { Image } from "@rneui/themed";
import { StyleSheet, Text, View } from "react-native";
import YZY from '../assets/DP/YZY.png'

const ChallengesTitle = () => {
    
    return (
        <View style={styles.title}>
        <Text style={styles.challengesText}>Challenges</Text>
        <Image source={YZY} style={styles.avatar}/>
        <Text style={styles.challengeMotivationText}>⚬ Challenge yourself to save more!</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        width: '100%',
        paddingTop: 10,
        paddingBottom: 5,
        backgroundColor: '#F0FFF0',
        alignItems: 'center',
    },
    challengesText: {
        fontFamily: 'JosefinSans-Medium',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 5,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginBottom: 5,
    },
    challengeMotivationText: {
        fontFamily: 'Josefin Slab',
        fontSize: 12,
        fontStyle: 'italic',
        fontWeight: 'bold',
        lineHeight: 16,
        color: '#2DAFE7',
    },
})
export default ChallengesTitle