import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  format,
  getISOWeek,
  addDays,
  subDays,
  startOfWeek,
  startOfISOWeek,
  isLeapYear,
  setISOWeek,
  getYear,
} from "date-fns";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const DAYS_OF_WEEK = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const DayByDayNavigation = () => {
  const today = new Date();
  const year = today.getFullYear();
  const [date, setDate] = useState(today);

  const thisWeek = getISOWeek(today);
  const [yearWeek, setYearWeek] = useState(thisWeek);

  const getMondayOfWeek = (year: number, weekNumber: number) => {
    const fourthJanuary = new Date(year, 0, 4);
    const referenceDate = setISOWeek(fourthJanuary, weekNumber);
    console.log("Reference Date:", format(referenceDate, "EEEE, dd/MM/yyyy"));

    return startOfWeek(referenceDate, { weekStartsOn: 1 });
  };

  const addWeek = () => {
    const nextWeekNumber = getISOWeek(addDays(today, 7));
    console.log("This Week Number:", thisWeek);
    console.log("Next Week Number:", nextWeekNumber);
    const year = getYear(today);

    const nextWeekMonday = getMondayOfWeek(year, nextWeekNumber);

    console.log(
      "Next Week Monday:",
      format(nextWeekMonday, "EEEE, dd/MM/yyyy")
    );
  };

  const formattedDate = format(date, "dd/MM");
  const todayLC = format(today, "EEE").toLowerCase();

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
          <TouchableOpacity
            onPress={() => {
              addWeek();
            }}
            className="bg-green-500 w-8 h-8"
          />
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
