import {
  View,
  Text,
  Button,
  Animated,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const VIEW_HEIGHT = SCREEN_HEIGHT * 0.1 + SCREEN_HEIGHT + 500;

const Dashboard = () => {
  return (
    <View className="flex flex-col p-3">
      <ScrollView
        contentContainerClassName="items-center justify-center flex"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex flex-col">
          <Text className="text-2xl font-manrope-bold py-10">
            This is just for testing purposes:
          </Text>
          <Text className="font-manrope-regular text-2xl">
            Text in regular...
          </Text>
          <Text className="font-manrope-bold text-2xl">Text in bold...</Text>
          <Text className="font-manrope-extrabold text-2xl">
            Text in extrabold...
          </Text>
          <Text className="font-manrope-semibold text-2xl">
            Text in semibold...
          </Text>
          <Text className="font-manrope-light text-2xl">Text in light...</Text>
          <Text className="font-manrope-extralight text-2xl">
            Text in extralight...
          </Text>
        </View>
        <View className="flex flex-col w-full mt-5">
          <View className="flex flex-row items-center justify-center">
            <Text className="w-1/3">primary color 3: </Text>
            <View className="h-10 grow bg-primary-300" />
          </View>
          <View className="flex flex-row items-center justify-center">
            <Text className="w-1/3">primary color 2: </Text>
            <View className="h-10 grow bg-primary-200" />
          </View>
          <View className="flex flex-row items-center justify-center">
            <Text className="w-1/3">primary color 1: </Text>
            <View className="h-10 grow bg-primary-100" />
          </View>
          <View className="p-5" />
          <View className="flex flex-row items-center justify-center">
            <Text className="w-1/3">black color 1: </Text>
            <View className="h-10 grow bg-black-100" />
          </View>
          <View className="flex flex-row items-center justify-center">
            <Text className="w-1/3">black color 2: </Text>
            <View className="h-10 grow bg-black-200" />
          </View>
          <View className="flex flex-row items-center justify-center">
            <Text className="w-1/3">black color 3: </Text>
            <View className="h-10 grow bg-black-300" />
          </View>
          <View className="flex flex-row items-center justify-center">
            <Text className="w-1/3">black color DEFAULT: </Text>
            <View className="h-10 grow bg-black" />
          </View>
          <View className="p-5" />
          <View className="flex flex-row items-center justify-center">
            <Text className="w-1/3">danger color 1: </Text>
            <View className="h-10 grow bg-danger" />
          </View>
        </View>
        <View style={styles.view} className="w-full" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    height: VIEW_HEIGHT,
  },
  view: {
    height: SCREEN_HEIGHT * 0.1,
  },
});

export default Dashboard;
