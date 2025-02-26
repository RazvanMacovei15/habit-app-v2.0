import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type DayCardProps = {
    index: number;
    day: string;
    formattedDate: string;
}

const DayCard = ({index, day, formattedDate}:DayCardProps) => {
    const today = new Date();
    return (
      <View
        key={index}
        className="bg-white py-3 rounded-xl grow items-center justify-center"
        style={
          today.getDay() === index + 1
            ? styles.isCurrentDay
            : styles.isNotCurrentDay
        }
      >
        <Text>{day}</Text>
        <Text>{formattedDate}</Text>
      </View>
    )
    
}

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

export default DayCard;