import React, { useState } from "react";
import { TextInput, StyleSheet, Button, View } from "react-native";

interface Props {
  onPress: (enteredGoalText: string) => void;
}

const GoalInput: React.FC<Props> = ({ onPress }) => {
  const [goal, setGoal] = useState("");

  const inputHandler = (text: string) => {
    setGoal(text);
  };

  const onPressHandler = () => {
    onPress(goal);
    setGoal("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Your goals ..."
        onChangeText={inputHandler}
        value={goal}
      />
      <Button title="Add goal" onPress={onPressHandler}></Button>
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
