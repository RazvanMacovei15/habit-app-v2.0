import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ViewStyle,
  Dimensions,
} from "react-native";
import { getHeaderTitle } from "@react-navigation/elements";
import { DrawerActions, NavigationContainer, useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { DrawerHeaderProps } from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
const SCREEN_HEIGHT = Dimensions.get("window").height;
import { useDrawerStatus } from "@react-navigation/drawer";
import { router } from "expo-router";


const CustomHeader = ({ navigation, route, options }: DrawerHeaderProps) => {
  const title = getHeaderTitle(options, route.name);
  const drawerStatus = useDrawerStatus();

  return (
    <SafeAreaView className="drop-shadow-lg">
      <View
        style={styles.header}
        className="flex flex-row justify-between items-center bg-white drop-shadow-xl"
      >
        <Pressable
          className="px-5 py-2"
          onPress={() => navigation.openDrawer()}
        >
          <AntDesign
            name={drawerStatus === "open" ? "menufold" : "menuunfold"} // ✅ Change icon based on drawer state
            size={20}
            color="black"
          />
        </Pressable>

        <Text className="text-xl">{title}</Text>

        <Pressable className="px-5 py-2" onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={20} color="black" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#fff",
  },
  header: {
    height: SCREEN_HEIGHT * 0.05,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
});

export default CustomHeader;
