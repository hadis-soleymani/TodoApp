import { StyleSheet, Text, View, Pressable } from "react-native";
interface Item {
  item: { text: string; key: string };
  onDeleteHandler: (id: string) => void;
}
const GoalItem: React.FC<Item> = ({ item, onDeleteHandler }) => {
  console.log(item);
  return (
    <View style={styles.goalView}>
      <Pressable
        android_ripple={{ color: "#fff" }}
        onPress={onDeleteHandler.bind(this, item.key)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goal}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalView: {
    backgroundColor: "tomato",
    marginVertical: 8,
    borderRadius: 16,
  },
  goal: {
    color: "white",
    fontSize: 16,
    padding: 16,
    fontWeight: "600",
  },
  pressedItem:{
    opacity:0.5
  }
});

export default GoalItem;
