import React, { useState } from "react";
import { TextInput, StyleSheet, Button, View, Modal, SafeAreaView } from "react-native";

interface Props {
  onPress: (enteredGoalText: string) => void;
  visible: boolean;
}

const GoalInput: React.FC<Props> = ({ onPress,visible }) => {
  const [goal, setGoal] = useState("");

  const inputHandler = (text: string) => {
    setGoal(text);
  };

  const onPressHandler = () => {
    onPress(goal);
    setGoal("");
  };

  return (
    <Modal visible={visible} animationType="slide">
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Your goals ..."
        onChangeText={inputHandler}
        value={goal}
      />
      <Button title="Add goal" onPress={onPressHandler} color="#fff" ></Button>
    </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor:'tomato',
    paddingRight:16,
    flex:1
  },
  textInput: {
    margin: 16,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 16,
    borderRadius: 16,
    flex: 3,
    color:'#fff'
  },
});

export default GoalInput;
