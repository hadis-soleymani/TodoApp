/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from "react";
import {
  TextInput,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const App = () => {
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState<string[]>([]);

  const inputHandler = (text: string) => {
    setGoal(text);
  };

  const addGoalHandler = () => {
    setGoals((currentGoals) => [...currentGoals, goal]);
    console.log(goals);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Your goals ..."
          onChangeText={inputHandler}
        />
        <Button title="Add goal" onPress={addGoalHandler}></Button>
      </View>
      <View style={styles.listContainer}>
        {goals.map((item) => (
          <View style={styles.goalView} key={item}>
            <Text style={styles.goal}>{item}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
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
  button: {
    flex: 1,
    margin: 16,
  },
  listContainer: {
    margin: 16,
  },
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

export default App;
