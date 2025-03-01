import { View, Text } from "react-native";
import MonthPicker from "react-native-month-year-picker";
import { useFilterMonth } from "../contexts/FilterMonthContext";

const MonthAndYearPicker = () => {
  const { month, year } = useFilterMonth();
  const date = new Date(year, month);
  return (
    <View className="h-[400] w-[400] items-center justify-center bg-blue-300 absolute">
      <Text>MonthAndYearPicker</Text>
    </View>
  );
};

export default MonthAndYearPicker;
//
