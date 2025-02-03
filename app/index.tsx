import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const HomeScreen = () => {
  return (
    <View className="h-full items-center justify-center">
      <Text>HomeScreen</Text>
      <Link href={"/(tabs)/dashboard"}>
        <Text className="text-2xl">Go to tabs...</Text>
      </Link>
    </View>
  );
};

export default HomeScreen;
