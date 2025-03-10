import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureDetector } from "react-native-gesture-handler";

const More = () => {
  return (
    <SafeAreaView>
      <View className="h-full items-center justify-center">
        <Text>More</Text>
      </View>
    </SafeAreaView>
  );
};

export default More;
