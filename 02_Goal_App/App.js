import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoal, setCourseGoal] = useState([]); // for the list of goal to display

  //making the modal visible
  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  //making modal invisible again
  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  //for making a array of the text(goal) entered by user
  const addGoalHandler = (enteredGoalText) => {
    console.log(enteredGoalText);
    setCourseGoal((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler(); //this immediately closes the screen , after a goal has been added
  };

  //tap to delete a goal
  const deleteHandler = (id) => {
    setCourseGoal((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id); //return a new array, by keeping every goal whose id is NOT equl to the id we're trying to delete
    });
  };

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider>
        <SafeAreaView>
          <View style={styles.appContainer}>
            <Button
              title="Add new Goal"
              color="#5e0acc"
              onPress={startAddGoalHandler}
            />
            <GoalInput
              visible={modalIsVisible}
              onAddGoal={addGoalHandler}
              onCancel={endAddGoalHandler}
            />
            <View>
              <FlatList
                alwaysBounceVertical={true}
                data={courseGoal}
                renderItem={(itemData) => {
                  return (
                    <GoalItem
                      text={itemData.item.text}
                      onDeleteGoal={deleteHandler}
                      id={itemData.item.id}
                    />
                  );
                }}
              />
            </View>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
