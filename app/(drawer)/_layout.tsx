import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import React from "react";

// Define the props type for CustomDrawerContent explicitly
function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label="Home" onPress={() => {}} />
    </DrawerContentScrollView>
  );
}

function DrawerLayout() {
  return (
    <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />} />
  );
}

export default DrawerLayout;
