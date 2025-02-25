import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { format } from "date-fns";

const DAYS_OF_WEEK = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const DayByDayNavigation = () => {
  const today = new Date();
  const [date, setDate] = useState(today);
  const formattedDate = format(date, "dd/MM");
  const dayOfWeek = format(today, "EEE").toLowerCase();

  return (
    <View className="flex flex-row items-center justify-around w-full rounded-b-xl my-2 gap-2 px-2">
      {DAYS_OF_WEEK.map((day, index) => (
        <View
          key={index}
          className="bg-white py-3 rounded-xl grow items-center justify-center"
          style={
            date.getDay() === index
              ? styles.isCurrentDay
              : styles.isNotCurrentDay
          }
        >
          <Text>{day}</Text>
          <Text>{formattedDate}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  isCurrentDay: {
    backgroundColor: "#6AB0E3",
    color: "white",
  },
  isNotCurrentDay: {
    backgroundColor: "white",
    color: "#666876",
  },
});

export default DayByDayNavigation;
