import { useEffect, useState } from "react";
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
import DayCardObject from "../types/DayCardObject";
import DayCard from "../daily-navigation/DayCard";

const DAYS_OF_WEEK : DayCardObject[] = [
  { day: "Mon", formattedDate: "" },
  { day: "Tue", formattedDate: "" },
  { day: "Wed", formattedDate: "" },
  { day: "Thu", formattedDate: "" },
  { day: "Fri", formattedDate: "" },
  { day: "Sat", formattedDate: "" },
  { day: "Sun", formattedDate: "" },
];

const DayByDayNavigation = () => {
  const today = new Date();
  const year = today.getFullYear();
  const [date, setDate] = useState(today);

  const thisWeek = getISOWeek(today);
  const [yearWeek, setYearWeek] = useState(thisWeek);

  const getMondayOfWeek = (year: number, weekNumber: number) => {
    const fourthJanuary = new Date(year, 0, 4);
    const referenceDate = setISOWeek(fourthJanuary, weekNumber);
    return startOfWeek(referenceDate, { weekStartsOn: 1 });
  };

  const createWeek = (date: Date) => {
    for (let i = 0; i < 7; i++) {
      const newDate = addDays(date, i);
      DAYS_OF_WEEK[i].formattedDate = format(newDate, "dd/MM");
    }
  }

  useEffect(() => {
    createWeek(getMondayOfWeek(year, yearWeek));
  }, []);

  return (
    <View className="flex flex-row items-center justify-around w-full rounded-b-xl my-2 gap-2 px-2">
      {DAYS_OF_WEEK.map((day, index) => (
        <DayCard key={index} index={index} day={day.day} formattedDate={day.formattedDate} />
      ))}
    </View>
  );
};



export default DayByDayNavigation;
