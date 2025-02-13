import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import React, { useEffect } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router, usePathname, useSegments } from "expo-router";
import { View, Text, Dimensions, Platform, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import type { DrawerNavigationProp } from "@react-navigation/drawer";
import UserProfile from "./profile";
import Settings from "./settings";
import CustomHeader from "@/components/CustomHeader";
import { Drawer } from "expo-router/drawer";

// Define the props type for CustomDrawerContent explicitly
function CustomDrawerContent(props: DrawerContentComponentProps) {
  const segments = useSegments();
  const pathname = usePathname();

  useEffect(() => {
    console.log("Current full path: ", `/${segments.join("/")}`);
  }, [segments]);

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Dashboard"
        onPress={() => router.push("/(drawer)/(tabs)/dashboard")}
        pressColor="transparent"
      />
      <DrawerItem
        label="Profile"
        onPress={() => router.push("/profile")}
        pressColor="transparent"
      />
      <DrawerItem
        label="Settings"
        onPress={() => router.push("/settings")}
        pressColor="transparent"
      />
    </DrawerContentScrollView>
  );
}

function DrawerLayout() {
  const SCREEN_WIDTH = Dimensions.get("window").width;

  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        header: (props) => <CustomHeader {...props} />,
        drawerType: "front",
        drawerStyle: {
          width: SCREEN_WIDTH * 0.7,
        },
      }}
    >
      <Drawer.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: true,
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{ title: "Settings", headerShown: true }}
      />
    </Drawer>
  );
}

export default DrawerLayout;
