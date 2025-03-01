import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ViewStyle,
  Dimensions,
  Platform,
} from "react-native";
import { getHeaderTitle } from "@react-navigation/elements";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { DrawerHeaderProps } from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const SCREEN_HEIGHT = Dimensions.get("window").height;

import { useDrawerStatus } from "@react-navigation/drawer";
import { useFilterMonth } from "./contexts/FilterMonthContext";
import { usePopup } from "./contexts/PopUpContext";

const CustomTabHeader = ({
  navigation,
  route,
  options,
}: BottomTabHeaderProps) => {
  const title = getHeaderTitle(options, route.name);
  const drawerStatus = useDrawerStatus();
  const { setMonth } = useFilterMonth();

  const { toggleMonthYear } = usePopup();

  return (
    <SafeAreaView
      edges={["top"]}
      className="flex flex-row justify-between items-center bg-white px-2"
      // style={Platform.OS === "ios" ? styles.iosHeader : styles.header}
    >
      <Pressable
        className="py-2 w-1/3"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <AntDesign
          name={drawerStatus === "open" ? "menufold" : "menuunfold"}
          size={20}
          color="black"
        />
      </Pressable>

      <Text
        className=" text-xl grow items-center justify-center text-center "
        onPress={() => {
          console.log(SCREEN_HEIGHT);
        }}
      >
        {title}
      </Text>
      <View className="py-2 w-1/3 items-end justify-end">
        {/* <DropdownFilter /> */}
        <MaterialCommunityIcons
          name="format-list-checkbox"
          size={24}
          color="black"
          onPress={() => {
            toggleMonthYear();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  something: {
    height: SCREEN_HEIGHT * 0.05,
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

export default CustomTabHeader;
