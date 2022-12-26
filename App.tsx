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
import { SafeAreaView, StyleSheet, View, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

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
      <GoalInput onChangeText={inputHandler} onPress={addGoalHandler} />
      <View style={styles.listContainer}>
        <FlatList
          data={goals}
          alwaysBounceVertical={false}
          renderItem={(item) => {
            return <GoalItem item={item.item} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    margin: 16,
  },
});

export default App;
