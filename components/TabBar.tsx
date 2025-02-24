import { View, StyleSheet, Dimensions } from "react-native";
import { Text, PlatformPressable } from "@react-navigation/elements";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { useCallback } from "react";
import { router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const SCREEN_HEIGHT = Dimensions.get("window").height;

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <Animated.View style={[styles.tabBar]}>
      <View style={styles.tabsContainer}>
        <View style={styles.tabsSection}>
          {state.routes.slice(0, 2).map((route: any, index: any) => (
            <TabItem
              key={route.name}
              route={route}
              descriptors={descriptors}
              isFocused={state.index === index}
            />
          ))}
        </View>
        <View style={styles.tabsSection}>
          {state.routes.slice(2, 4).map((route: any, index: any) => (
            <TabItem
              key={route.name}
              route={route}
              descriptors={descriptors}
              isFocused={state.index === index + 2}
            />
          ))}
        </View>
      </View>
    </Animated.View>
  );
};

const TabItem = ({ route, descriptors, isFocused }: any) => {
  const { options } = descriptors[route.key];
  const label = options.tabBarLabel || options.title || route.name;
  const IconComponent = options.tabBarIcon;

  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const onPressIn = () => {
    scale.value = withSpring(1.15, { damping: 8 });
  };

  const onPressOut = () => {
    scale.value = withSpring(1, { damping: 8 });
  };

  const onPress = useCallback(() => {
    if (isFocused) return;
    router.push(route.name);
  }, [isFocused, route.name]);

  return (
    <PlatformPressable
      key={route.name}
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarButtonTestID}
      android_ripple={{ color: "transparent" }}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={styles.tabItem}
      className="px-3"
    >
      <Animated.View style={[animatedStyle, styles.tabContent]}>
        {IconComponent && (
          <IconComponent
            color={isFocused ? "#6AB0E3" : "#191d31"}
            size={20}
            focused={isFocused}
          />
        )}
        <Text
          style={{
            color: isFocused ? "#6AB0E3" : "#191d31",
            fontSize: 12,
            fontWeight: "600",
          }}
        >
          {label}
        </Text>

        {isFocused && <View className="flex w-1/2 h-[2] mt-2 bg-primary-300" />}
      </Animated.View>
    </PlatformPressable>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: SCREEN_HEIGHT * 0.1,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  tabsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  tabsSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabContent: {
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
  },
});

export default TabBar;
