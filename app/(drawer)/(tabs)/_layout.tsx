import { Tabs } from "expo-router";
import { View } from "react-native";
import TabBar from "../../../components/TabBar";
import CustomTabsHeader from "../../../components/CustomTabsHeader";
import { GestureDetector } from "react-native-gesture-handler";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

const TabsLayout = () => {
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        tabBar={(props) => <TabBar {...props} />}
        screenOptions={{
          header: (props) => <CustomTabsHeader {...props} />,
        }}
      >
        <Tabs.Screen
          name="dashboard"
          options={{
            title: "Dashboard",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="dashboard" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="(habits)"
          options={{
            title: "Habits",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="dumbbell"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="(goals)"
          options={{
            title: "Goals",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="linechart" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="more"
          options={{
            title: "More",
            tabBarIcon: ({ color, size }) => (
              <Feather name="more-vertical" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
};

export default TabsLayout;
