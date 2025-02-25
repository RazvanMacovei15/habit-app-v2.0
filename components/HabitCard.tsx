import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Habit from "./types/Habit";
import { useRouter } from "expo-router";
import BouncyCheckbox from "react-native-bouncy-checkbox";

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
      className="flex flex-row w-full items-center justify-center p-2"
    >
      <View className="flex flex-row items-center justify-start w-full pl-2">
        <BouncyCheckbox size={28} disableText fillColor="#6AB0E3"/>
        <Text className="pl-5 text-lg font-manrope-regular">{habit.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HabitCard;
