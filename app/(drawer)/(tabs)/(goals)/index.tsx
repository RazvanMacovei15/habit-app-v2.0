import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Goals = () => {
  return (
    <View className="h-full items-center justify-center">
      <Text>Goals</Text>
      <Link href={"/(tabs)/(goals)/1"}>
        <Text>Go to goal 1</Text>
      </Link>
    </View>
  );
};

export default Goals;
