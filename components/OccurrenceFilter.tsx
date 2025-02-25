import { View, TouchableOpacity, StyleSheet, Text, Platform } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from "react";

type OccurrenceFilterProps = {
  setType: (type: string) => void;
};

const OccurrenceFilter = ({ setType }: OccurrenceFilterProps) => {
  const [selected, setSelected] = useState("daily");

  const handlePress = (type: string) => {
    setSelected(type);
    setType(type); 
  };

  return (
    <View className="flex flex-row bg-white items-center justify-around w-full rounded-b-xl"
           style={Platform.OS === "ios" ? styles.iosHeader : styles.header}
    >
      {["daily", "weekly", "monthly"].map((type, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(type)}
          style={[
            styles.buttonBase,
            selected === type ? styles.isSelected : styles.isNotSelected
          ]}
        >
          <MaterialCommunityIcons
            name={
              type === "daily"
                ? "view-day-outline"
                : type === "weekly"
                ? "view-week-outline"
                : "calendar-month-outline"
            }
            size={28}
            color={selected === type ? styles.isSelected.color : styles.isNotSelected.color}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonBase: {
    width: "33.33%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 8,
    flexDirection: "column",
  },
  isSelected: {
    color: "#6AB0E3",
    backgroundColor: "#6AB0E31A",
  },
  isNotSelected: {
    color: "#666876",
    backgroundColor: "white",
  },
  iosHeader: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  header: {
    elevation: 2,
  },
});

export default OccurrenceFilter;
