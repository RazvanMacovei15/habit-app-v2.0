import { View, Text, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const Dashboard = () => {
  const router = useRouter();
  return (
    <View className="h-full items-center justify-center">
      <Text>Dashboard</Text>
      <Button onPress={() => router.back()} title="Go back" />
    </View>
  );
};

export default Dashboard;
