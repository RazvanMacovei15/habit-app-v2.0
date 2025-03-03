import React, { useEffect, useState } from "react";
import { View, Text, Button, Modal, StyleSheet, Pressable } from "react-native";
import { useFilterMonth } from "../contexts/FilterMonthContext";
import { PropsWithChildren } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import COLORS from "@/constants/Colors";

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

const PickerModal = ({ isVisible, children, onClose }: Props) => {
  const { month, year } = useFilterMonth();
  const [date, setDate] = useState(new Date(year, month));

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text className="text-white text-xl font-manrope-bold">
            Pick a month
          </Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
};

export default PickerModal;

const styles = StyleSheet.create({
  modalContent: {
    height: "40%",
    width: "100%",
    backgroundColor: COLORS.primary[200],
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    height: "16%",
    backgroundColor: COLORS.black[100],
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
});
