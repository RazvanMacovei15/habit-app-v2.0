import { Text, StyleSheet, ActivityIndicator } from "react-native";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, router } from "expo-router";
import * as Font from "expo-font";
import { useEffect, useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Navigate based on authentication state
      router.push("/(tabs)/dashboard");
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  const [fontsLoaded] = Font.useFonts({});

  if (!fontsLoaded) {
    return (
      <SafeAreaView>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#4A90E2" />
        <Text className="mt-10">Alpha Version 2.0</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  title: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});
