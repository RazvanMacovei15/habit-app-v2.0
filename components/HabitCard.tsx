import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Habit from "./types/Habit";
import { useRouter } from "expo-router";

type HabitCardProps = {
  habit: Habit;
};

const HabitCard = ({ habit }: HabitCardProps) => {
  const router = useRouter();

  const moveToHabit = () => {
    // Navigate to the habit details screen
    router.push({
      pathname: "/(drawer)/(tabs)/(habits)/[id]",
      params: {
        id: habit.id.toString(),
        description: habit.description,
      },
    });
  };

  return (
    <TouchableOpacity
      onPress={moveToHabit}
      className="flex flex-row items-center justify-center p-2"
    >
      <View>
        <Text>{habit.id}</Text>
        <Text>{habit.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HabitCard;
