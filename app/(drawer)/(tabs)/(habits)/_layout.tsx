import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const HabitsLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="[id]" />
    </Stack>
  );
};

export default HabitsLayout;
