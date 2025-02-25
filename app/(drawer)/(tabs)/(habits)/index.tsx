import { View, Text, StyleSheet, Dimensions, ScrollView, Touchable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import habits from "../../../../constants/data";
import HabitCard from "@/components/HabitCard";

const SCREEN_HEIGHT = Dimensions.get("window").height;

const Habits = () => {

  const [habitsClone, setHabitsClone] = useState([...habits]);

  const addHabit = () => {
    const newHabit = {
      id: habitsClone.length + 1,
      title: "New Habit",
      description: "New Description",
      type: "New Type" }
      setHabitsClone([...habitsClone, newHabit]);
      console.log(newHabit);
  }

  
  return (
    <View
      className="h-full items-center justify-end p-2 flex w-full bg-gray-200"
      style={styles.mainview}
    >
      <ScrollView style={styles.scrollview} contentContainerClassName="bg-gray-100 rounded-3xl p-2">
        {habitsClone.map((habit, index) => (
          <View
            key={habit.id}
            className="flex flex-col items-center justify-center  "
          >
            <HabitCard habit={habit} />
            {index !== habitsClone.length - 1 && (
              <View className="h-[1] bg-gray-300 w-full" />
            )}
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity onPress={addHabit}>
      <Text className="w-full items-center justify-center text-center border border-dotted dotted rounded-full p-2 my-2">
        +
      </Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  mainview: {
    paddingBottom: SCREEN_HEIGHT * 0.1,
  },
  link: {
    width: "100%",
  },
  scrollview: {
    width: "100%",
    borderRadius: 30,
  }
});

export default Habits;
