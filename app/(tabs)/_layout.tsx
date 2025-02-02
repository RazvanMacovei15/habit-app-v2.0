import { Tabs } from "expo-router";
import { View, Image, Text } from "react-native";
import { icons } from "../../constants";

interface TabIconProps {
  color: string;
  name: string;
  focused: boolean;
  icon: any;
}

const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
  return (
    <View className="items-center justify-center gap-1 w-20">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-8 h-8"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color, fontFamily: "Poppins-Light" }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
        tabBarStyle: {
          backgroundColor: "gray",
          height: 60,
          paddingBottom: 10,
          paddingTop: 10,
          borderTopEndRadius: 0,
          borderTopStartRadius: 0,
        },
        headerTitleStyle: {
          fontFamily: "Poppins-Bold",
          color: "white",
        },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          headerShown: false,
          headerTitleStyle: {
            fontFamily: "Poppins-Light",
            color: "white",
          },
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home_icon}
              color={color}
              name="Dashboard"
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.more}
              color={color}
              name="More"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
