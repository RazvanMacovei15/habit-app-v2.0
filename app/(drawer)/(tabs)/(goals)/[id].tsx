import { View, Text, Button } from "react-native";
import React from "react";
import { router, Stack, useLocalSearchParams } from "expo-router";

const GoalDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen
        options={{ headerTitle: `Goal-${id}`, headerShown: false }}
      />
      <View className="h-full items-center justify-center">
        <Text>Goal {id} Details</Text>
        <Button
          onPress={() => router.push("/(drawer)/(tabs)/(goals)")}
          title="Go to goals..."
        />
      </View>
    </>
  );
};

export default GoalDetails;
