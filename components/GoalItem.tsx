import { StyleSheet, Text, View } from "react-native";
interface Item {
  item: string;
}
const GoalItem: React.FC<Item> = ({ item }) => {
  return (
    <View style={styles.goalView}>
      <Text style={styles.goal}>{item}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalView: {
    backgroundColor: "tomato",
    padding: 16,
    marginVertical: 8,
    borderRadius: 16,
  },
  goal: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default GoalItem;
