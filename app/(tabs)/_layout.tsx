import { Tabs } from "expo-router";
import { View, Image, Text } from "react-native";
import { icons } from "../../constants";
import TabBar from "../../components/TabBar";

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
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen name="dashboard" options={{ title: "Dashboard" }} />
      <Tabs.Screen
        name="(habits)"
        options={{
          title: "Habits",
        }}
      />

      <Tabs.Screen
        name="more"
        options={{
          title: "More",
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
