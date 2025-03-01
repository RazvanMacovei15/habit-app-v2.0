import { useEffect, useRef, useState } from "react";
import { View, ScrollView, Dimensions, StyleSheet } from "react-native";
import {
  getDaysInMonth,
  getYear,
  getDate,
  startOfWeek,
  getMonth,
} from "date-fns";
import DayCard from "../daily-navigation/DayCard";
import { useFilterMonth } from "../contexts/FilterMonthContext";

const SCREEN_WIDTH = Dimensions.get("window").width;

const DayByDayNavigation = () => {
  const ITEM_WIDTH = (1 / 7) * (SCREEN_WIDTH - 16 - 6 * 8);

  const { month, firstMondayOfMonth } = useFilterMonth();

  const today = new Date();
  const todayIndex = getDate(today) - 1;
  const year = getYear(today);

  const testingDay = new Date(year, month, 15);

  const totalDays = getDaysInMonth(new Date(year, month));
  const scrollViewRef = useRef<ScrollView>(null);

  const getXPositionForMonday = (day: Date) => {
    const dayMonthIndex = getDate(day);
    const monday = startOfWeek(new Date(day), { weekStartsOn: 1 });
    const mondayMonthIndex = getDate(monday);
    if (month != getMonth(today)) {
      return 0;
    }
    if (dayMonthIndex < firstMondayOfMonth) {
      return (dayMonthIndex - 1) * ITEM_WIDTH + 8 * (dayMonthIndex - 1);
    }
    if (dayMonthIndex >= mondayMonthIndex) {
      return (mondayMonthIndex - 1) * ITEM_WIDTH + 8 * (mondayMonthIndex - 1);
    }
    return 0;
  };

  const [days, setDays] = useState<Date[]>([]);

  useEffect(() => {
    const monthDays = [...Array(totalDays)].map(
      (_, i) => new Date(year, month, i + 1)
    );

    setDays(monthDays);
  }, [month]);

  useEffect(() => {
    if (days.length > 0 && scrollViewRef.current) {
      if (todayIndex !== -1) {
        const scrollToX = getXPositionForMonday(testingDay);
        console.log(scrollToX);
        scrollViewRef.current.scrollTo({
          x: scrollToX > 0 ? scrollToX : 0,
          animated: false,
        });
      }
    }
  }, [days]);

  return (
    <View className="w-full my-2">
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 8 }}
      >
        <View className="flex flex-row gap-[8]">
          {days.map((date, index) => (
            <DayCard key={index} date={date} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  xPos: {
    position: "absolute",
  },
});

export default DayByDayNavigation;
