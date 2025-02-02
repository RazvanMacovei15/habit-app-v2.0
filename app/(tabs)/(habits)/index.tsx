import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Habits = () => {
  return (
    <SafeAreaView className="h-full items-center justify-center border border-blue-500 ">
      <Text className="h-5/6 w-full bg-gray-500 border border-purple-500">
        Habits
      </Text>
      <Pressable className="h-1/6 w-full bg-gray-600 items-center justify-center border border-yellow-500">
        <Text className="text-center"> add habit </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Habits;
