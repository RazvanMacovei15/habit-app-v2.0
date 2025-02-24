import { View, Text, Button } from "react-native";
import React from "react";
import { router, Stack, useLocalSearchParams } from "expo-router";
import CustomTabHeader from "@/components/CustomTabsHeader";

const HabitDetails = () => {
  const { id, description } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: `Habit-${id}`,
          headerShown: false,
        }}
      />
      <View className="h-full items-center justify-center">
        <Text>Habit - {id} - Details</Text>
        <Text>{description}</Text>
        <Button onPress={() => router.back()} title="Go back" />
      </View>
    </>
  );
};

export default HabitDetails;
