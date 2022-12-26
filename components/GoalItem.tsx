import { StyleSheet, Text, View, Pressable } from "react-native";
interface Item {
  item: { text: string; key: string };
  onDeleteHandler: (id: string) => void;
}
const GoalItem: React.FC<Item> = ({ item, onDeleteHandler }) => {
  console.log(item)
    return (
    <Pressable onPress={onDeleteHandler.bind(this, item.key)}>
      <View style={styles.goalView}>
        <Text style={styles.goal}>{item.text}</Text>
      </View>
    </Pressable>
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
