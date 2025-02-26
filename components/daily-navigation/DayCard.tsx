import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

type DayCardProps = {
  date: Date;
};

const SCREEN_WIDTH = Dimensions.get("window").width;

const DayCard = ({ date }: DayCardProps) => {
  const {
    getMonth,
    getDaysInMonth,
    getDay,
    getYear,
    format,
  } = require("date-fns");
  const day = getDay(date);
  const year = getYear(date);
  const month = getMonth(date);
  const daysInMonth = getDaysInMonth(date);
  const firstDay = getDay(new Date(year, getMonth(date), 1));
  const formattedDate = format(date, "MMM dd");

  const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayOfWeek = WEEKDAYS[day]; // Map 0-6 to Sun-Sat

  return (
    <View
      className="bg-white py-3 rounded-xl grow items-center justify-center"
      style={styles.card}
    >
      <Text>{dayOfWeek}</Text>
      <Text>{formattedDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: (1 / 7) * SCREEN_WIDTH,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  isCurrentDay: {
    backgroundColor: "#6AB0E31A",
    color: "white",
  },
  isNotCurrentDay: {
    backgroundColor: "white",
    color: "#666876",
  },
});

export default DayCard;
