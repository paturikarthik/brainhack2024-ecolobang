import { Image } from "@rneui/themed";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TreePlanting from '../assets/Challenges/TreePlanting.png';

const LatestChallenges = () => {
    const challengeData = [
        {
            title:'Ground Up Initiative x Sengkang CC: Root for the Future: Tree Planting Day',
            image: TreePlanting,
        },
        {
            title:'Ground Up Initiative x Punggol CC: Root for the Future: Tree Planting Day',
            image: TreePlanting,
        }
    ];
    return (
        <View style={styles.container}>
            <Text style={styles.challengesText}>Latest Challenges!</Text>
            <ScrollView 
                horizontal 
                contentContainerStyle={styles.challenges} 
                showsHorizontalScrollIndicator={false}
            >
                {challengeData.map(challenge => (
                    <View key={challenge.title} style={styles.challenge}>
                        <Image source={challenge.image} style={styles.challengeImage} />
                        <Text style={styles.challengeTitle}>{challenge.title}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingBottom: 0, // Remove bottom padding
        backgroundColor: '#F0FFF0',
        minHeight: 250,
        maxHeight:250
    },
    challengesText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#006400',
        marginBottom: 0, // Remove bottom margin
        textAlign: 'center',
    },
    challenges: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        paddingTop: 16, // Add paddingTop to maintain spacing within ScrollView
    },
    challenge: {
        width: 300, // Set a fixed width for each challenge item
        marginRight: 16, // Space between items
        padding: 16,
        marginTop: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        alignItems: 'center',
    },
    challengeImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 8,
        marginBottom: 8,
    },
    challengeTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#006400',
        textAlign: 'center',
    },
});

export default LatestChallenges;
