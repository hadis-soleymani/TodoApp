import { TextInput, StyleSheet, Button, View } from "react-native";

interface Props {
  onChangeText: (text: string) => void;
  onPress: () => void;
}

const GoalInput: React.FC<Props> = ({ onChangeText, onPress }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Your goals ..."
        onChangeText={onChangeText}
      />
      <Button title="Add goal" onPress={onPress}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  textInput: {
    margin: 16,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 16,
    borderRadius: 16,
    flex: 3,
  },
});

export default GoalInput;
