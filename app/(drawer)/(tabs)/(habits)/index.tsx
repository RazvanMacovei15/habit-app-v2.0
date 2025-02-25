import { View, Text, StyleSheet, Dimensions, ScrollView, Touchable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import habits from "../../../../constants/data";
import HabitCard from "@/components/HabitCard";
import OccurrenceFilter from "@/components/OccurrenceFilter";
import DayByDayNavigation from "@/components/DayByDayNavigation";
import WeekByWeekNavigation from "@/components/WeekByWeekNavigation";
import MonthByMonthNavigation from "@/components/MonthByMonthNavigation";


const SCREEN_HEIGHT = Dimensions.get("window").height;

const Habits = () => {

  const [habitsClone, setHabitsClone] = useState([...habits]);
  const [selectedType, setSelectedType] = useState("daily"); 


  const addHabit = () => {
    const newHabit = {
      id: habitsClone.length + 1,
      title: "New Habit",
      description: "New Description",
      type: "New Type",
      isCompleted: false,
      occurrence: "daily",
      targetCount: 1,
      currentCount: 0,
      currentStreak: 0
    }
      setHabitsClone([...habitsClone, newHabit]);
      console.log(newHabit);
  }

  const filteredHabits = habitsClone.filter(habit => habit.occurrence === selectedType);


  
  return (
    <View className="h-full items-center justify-end flex w-full bg-gray-200" style={styles.mainview}>
      <OccurrenceFilter setType={setSelectedType} />
      {selectedType === "daily" && <DayByDayNavigation />}
      {/* {selectedType === "weekly" && <WeekByWeekNavigation />} */}
      {/* {selectedType === "monthly" && <MonthByMonthNavigation />} */}

      <ScrollView style={styles.scrollview} contentContainerClassName="bg-gray-100 rounded-3xl p-2 m-2">
        {filteredHabits.length > 0 ? (
          filteredHabits.map((habit, index) => (
            <View key={habit.id} className="flex flex-col items-center justify-center">
              <HabitCard habit={habit} />
              {index !== filteredHabits.length - 1 && (
                <View className="h-[1] bg-gray-300 w-full" />
              )}
            </View>
          ))
        ) : (
          <Text className="text-gray-500 text-center">No habits for this filter.</Text>
        )}
      </ScrollView>
      <TouchableOpacity onPress={addHabit} className="flex items-center justify-center w-full px-2">
        <Text className="w-full text-center border border-dotted rounded-full p-2 m-2">
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
