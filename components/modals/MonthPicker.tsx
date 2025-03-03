import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useFilterMonth } from "../contexts/FilterMonthContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { is } from "date-fns/locale";
import { set } from "date-fns";
import MONTHS_WITH_DATA from "../../constants/months-data";

type MonthPickerProps = {
  onClose: () => void;
};

const MonthPicker = ({ onClose }: MonthPickerProps) => {
  const { month, setMonth } = useFilterMonth();
  const [selectedMonth, setSelectedMonth] = useState(0);

  useEffect(() => {
    setSelectedMonth(month);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {MONTHS_WITH_DATA.slice()
          .reverse()
          .map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setSelectedMonth(item.value);
                setMonth(item.value);
                onClose();
              }}
              style={styles.scrollItem}
            >
              <View
                style={[
                  styles.scrollItem,
                  selectedMonth === item.value ? styles.isSelected : {},
                ]}
              >
                <Text
                  style={styles.text}
                  className="text-lg font-manrope-semibold"
                >
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MonthPicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 30,
  },
  scrollContainer: {
    width: "100%",
    flexGrow: 1,
    paddingVertical: 20,
  },
  scrollItem: {
    width: "100%",
    padding: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderRadius: 10,
  },
  text: {
    textAlign: "center",
    color: "black",
  },
  isSelected: {
    backgroundColor: "lightblue",
  },
});
