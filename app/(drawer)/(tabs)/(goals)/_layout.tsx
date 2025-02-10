import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const GoalsLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[id]" />
    </Stack>
  );
};

export default GoalsLayout;
