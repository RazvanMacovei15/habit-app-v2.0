import { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { getDaysInMonth, getYear, getMonth, addDays, format } from "date-fns";
import DayCard from "../daily-navigation/DayCard";

const DayByDayNavigation = () => {
  const today = new Date();
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

  return (
    <View className="w-full my-2">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 8 }} // Keeps padding even
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
