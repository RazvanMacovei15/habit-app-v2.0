import { useEffect, useRef, useState } from "react";
import { View, ScrollView, Dimensions } from "react-native";
import {
  getDaysInMonth,
  getYear,
  getMonth,
  addDays,
  format,
  getDate,
} from "date-fns";
import DayCard from "../daily-navigation/DayCard";

const DayByDayNavigation = () => {
  const SCREEN_WIDTH = Dimensions.get("window").width;

  const today = new Date();
  const todayIndex = getDate(today) - 1;
  const scrollViewRef = useRef<ScrollView>(null);

  const [days, setDays] = useState<Date[]>([]);

  // Generate all days of the current month
  useEffect(() => {
    const year = getYear(today);
    const month = getMonth(today);
    const totalDays = getDaysInMonth(today);
    const monthDays = [...Array(totalDays)].map(
      (_, i) => new Date(year, month, i + 1)
    );

    setDays(monthDays);
  }, []);

  useEffect(() => {
    if (days.length > 0 && scrollViewRef.current) {
      if (todayIndex !== -1) {
        const itemWidth = (SCREEN_WIDTH * 1) / 7 + 8;
        console.log(itemWidth);
        const scrollToX = 18 * itemWidth - itemWidth * 5;

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
        <View className="flex flex-row gap-2">
          {days.map((date, index) => (
            <DayCard key={index} date={date} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default DayByDayNavigation;
