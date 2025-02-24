import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import React from "react";
import { Link } from "expo-router";
import habits from "../../../../constants/data";

const SCREEN_HEIGHT = Dimensions.get("window").height;

const Habits = () => {
  return (
    <View
      className="h-full items-center justify-end p-2 flex w-full"
      style={styles.mainview}
    >
      <ScrollView contentContainerClassName="w-full">
        {habits.map((habit, index) => (
          <View
            key={habit.id}
            className="flex flex-col items-center justify-center grow"
          >
            <Link
              href={{
                pathname: "/(drawer)/(tabs)/(habits)/[id]",
                params: {
                  id: habit.id.toString(),
                  description: habit.description,
                },
              }}
              style={styles.link}
              className="py-2"
            >
              <Text>{habit.title}</Text>
            </Link>
            {index !== habits.length - 1 && (
              <View className="h-[1] bg-gray-500 w-full" />
            )}
          </View>
        ))}
      </ScrollView>
      <Text className="w-full items-center justify-center text-center border border-dotted dotted rounded-full p-2 my-2">
        +
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainview: {
    paddingBottom: SCREEN_HEIGHT * 0.1,
  },
  link: {
    width: "100%",
  },
});

export default Habits;
