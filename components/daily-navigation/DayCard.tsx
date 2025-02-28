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
  const { getDay, format } = require("date-fns");
  const day = getDay(date);
  const formattedDate = format(date, "dd");

  const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayOfWeek = WEEKDAYS[day];

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
    width: (1 / 7) * (SCREEN_WIDTH - 16 - 6 * 8),
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
