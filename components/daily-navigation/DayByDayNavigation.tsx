import { useEffect, useRef, useState } from "react";
import { View, ScrollView, Dimensions, StyleSheet } from "react-native";
import { getDaysInMonth, getYear, getDate, startOfWeek } from "date-fns";
import DayCard from "../daily-navigation/DayCard";
import { useFilterMonth } from "../contexts/FilterMonthContext";

const SCREEN_WIDTH = Dimensions.get("window").width;

const DayByDayNavigation = () => {
  const { month } = useFilterMonth();

  const today = new Date();
  const todayIndex = getDate(today) - 1;
  const year = getYear(today);
  const usableMonth = month;

  const day = new Date(year, usableMonth, 21);

  const totalDays = getDaysInMonth(new Date(year, usableMonth));

  const itemWidth = (1 / 7) * (SCREEN_WIDTH - 16 - 6 * 8);
  const index = 3;
  const xPos = (index - 4) * itemWidth + 8 * (index - 4);
  const scrollViewWidth = SCREEN_WIDTH - 16;
  const centralOfScreen = scrollViewWidth / 2 + 8;
  const centerOfScrollView =
    (totalDays / 2) * itemWidth + 8 * (totalDays / 2) + 8 / 2;
  const scrollViewRef = useRef<ScrollView>(null);

  //monday solution which i want to keep
  const monday = startOfWeek(new Date(day), { weekStartsOn: 1 });
  const mondayIndex = getDate(monday);
  const scrollToMondayPosition =
    (mondayIndex - 1) * itemWidth + 8 * (mondayIndex - 1);

  const getXPositionForMonday = (day: Date) => {
    const dayIndex = getDate(day);
    const monday = startOfWeek(new Date(day), { weekStartsOn: 1 });
    const mondayIndex = getDate(monday);
    if (dayIndex > 7) {
      return (mondayIndex - 1) * itemWidth + 8 * (mondayIndex - 1);
    }
    return 0;
  };

  const [days, setDays] = useState<Date[]>([]);

  useEffect(() => {
    const monthDays = [...Array(totalDays)].map(
      (_, i) => new Date(year, usableMonth, i + 1)
    );

    setDays(monthDays);
  }, []);

  useEffect(() => {
    if (days.length > 0 && scrollViewRef.current) {
      if (todayIndex !== -1) {
        console.log(itemWidth);
        const scrollToX = getXPositionForMonday(day);

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
        <View
          className={`h-8 w-[1] bg-black`}
          style={[
            styles.xPos,
            {
              left: xPos,
            },
          ]}
        />
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
