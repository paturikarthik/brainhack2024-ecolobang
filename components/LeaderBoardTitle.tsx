import { StyleSheet, Text, View } from "react-native";

const LeaderBoardTitle = () => {
    const getThisWeeksDate = () => {
        const today = new Date();
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - today.getDay());
        const endOfWeek = new Date(today);
        endOfWeek.setDate(today.getDate() - today.getDay() + 6);
        return `${startOfWeek.getUTCDate()} ${monthNumToWord(startOfWeek.getUTCMonth())} ${startOfWeek.getFullYear()} - ${endOfWeek.getUTCDate()} ${monthNumToWord(endOfWeek.getUTCMonth())} ${endOfWeek.getFullYear()}`;
      };
      const monthNumToWord = (month: Number) =>{
        switch (month) {
            case 1:
                return "Jan";
            case 2:
                return "Feb";
            case 3:
                return "Mar";
            case 4:
                return "Apr";
            case 5:
                return "May";
            case 6:
                return "Jun";
            case 7:
                return "Jul";
            case 8:
                return "Aug";
            case 9:
                return "Sep";
            case 10:
                return "Oct";
            case 11:
                return "Nov";
            case 12:
                return "Dec";
            default:
                return "";
        }
      }


    return (
        <View style={styles.title}>
        <Text style={styles.leaderboardText}>Leaderboard</Text>
        <Text style={styles.weekText}>{getThisWeeksDate()}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
leaderboardText: {
    fontFamily:'JosefinSans-Medium',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  weekText: {
    fontFamily:'JosefinSans-Medium',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 8,
    color: 'black',
  },
  title: {
    position: 'absolute',
    top: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#E3FCF7',
    zIndex: 1,
  },
})
export default LeaderBoardTitle