import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Habits = () => {
  return (
    <View className="h-full items-center justify-center">
      <Text>Habits</Text>
      <Link href={"/(tabs)/(habits)/1"}>
        <Text>Go to habit 1</Text>
      </Link>
    </View>
  );
};

export default Habits;
