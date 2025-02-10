import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import React, { useEffect } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router, usePathname } from "expo-router";
import { View, Text, Dimensions, Platform, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { DrawerNavigationProp } from "@react-navigation/drawer";

// Define the props type for CustomDrawerContent explicitly
function CustomDrawerContent(props: DrawerContentComponentProps) {
  const pathname = usePathname();

  useEffect(() => {
    console.log("Current path is: ", pathname);
  }, [pathname]);
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label={"Dashboard"}
        onPress={() => router.push("/(drawer)/(tabs)/dashboard")}
        pressColor="transparent"
      />
      <DrawerItem
        label={"Profile"}
        onPress={() => router.push("/profile")}
        pressColor="transparent"
      />
      <DrawerItem
        label={"Settings"}
        onPress={() => router.push("/settings")}
        pressColor="transparent"
      />
    </DrawerContentScrollView>
  );
}

function DrawerLayout() {
  const SCREEN_WIDTH = Dimensions.get("window").width;
  const SCREEN_HEIGHT = Dimensions.get("window").height;
  const navigation = useNavigation<DrawerNavigationProp<any>>();

  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        headerStyle: {
          height:
            Platform.OS === "android"
              ? SCREEN_HEIGHT * 0.1
              : SCREEN_HEIGHT * 0.1,
        },
        drawerStyle: {
          width: SCREEN_WIDTH * 0.7,
        },
      }}
    >
      <Drawer.Screen
        name="profile"
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTitle: () => <Text className="">Profile</Text>,
        }}
      />
      <Drawer.Screen name="settings" options={{ headerShown: true }} />
    </Drawer>
  );
}

export default DrawerLayout;
