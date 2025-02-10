import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

// Define the props type for CustomDrawerContent explicitly
function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Habits"
        onPress={() => router.push("/(drawer)/(tabs)/(habits)")}
        icon={({ color, size }) => (
          <AntDesign name="profile" size={24} color="black" />
        )}
      />
    </DrawerContentScrollView>
  );
}

function DrawerLayout() {
  return (
    <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />} />
  );
}

export default DrawerLayout;
