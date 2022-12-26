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
import { SafeAreaView, StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

const App = () => {
  const [goals, setGoals] = useState<{ text: string; key: string }[]>([]);
  const [modalVisibled, setModalVisibled]=useState(false);

  const addGoalHandler = (enteredGoalText: string) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
    modalHandler()
  };

  const deleteGoal = (id: string) => {
    console.log("delete");
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== id);
    });
  };

  const modalHandler=()=>{
    setModalVisibled(!modalVisibled)
  }

  return (
    <SafeAreaView>
      <Button title="write goal" color="tomato" onPress={modalHandler}/>
      <GoalInput onPress={addGoalHandler} visible={modalVisibled} />
      <View style={styles.listContainer}>
        <FlatList
          data={goals}
          alwaysBounceVertical={false}
          renderItem={(item) => {
            return <GoalItem item={item.item} onDeleteHandler={deleteGoal} />;
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
