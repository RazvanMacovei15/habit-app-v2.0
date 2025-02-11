import { View, Image } from "react-native";
import { useLinkBuilder, useTheme } from "@react-navigation/native";
import { Text, PlatformPressable } from "@react-navigation/elements";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { useCallback } from "react";
import { router } from "expo-router";

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const { colors } = useTheme();

  return (
    <View className="absolute bottom-7 flex flex-row items-center justify-between bg-white py-2 mx-6 rounded-3xl">
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const IconComponent = options.tabBarIcon;
        const isFocused = state.index === index;

        const scale = useSharedValue(1);

        const animatedStyle = useAnimatedStyle(() => {
          return {
            transform: [{ scale: scale.value }],
          };
        });

        const onPressIn = () => {
          scale.value = withSpring(1.15, { damping: 8 }); // 🚀 Smooth Growth Effect
        };

        const onPressOut = () => {
          scale.value = withSpring(1, { damping: 8 }); // 🔄 Back to Normal
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
            className="items-center justify-center flex flex-1"
          >
            <Animated.View
              style={animatedStyle}
              className="items-center justify-center flex flex-col gap-2"
            >
              {IconComponent && (
                <IconComponent
                  color={isFocused ? colors.primary : colors.text}
                  size={20}
                  focused={isFocused}
                />
              )}
              <Text
                style={{
                  color: isFocused ? colors.primary : colors.text,
                  fontFamily: "Poppins-Light",
                  fontSize: 14,
                }}
              >
                {label}
              </Text>
            </Animated.View>
          </PlatformPressable>
        );
      })}
    </View>
  );
};

export default TabBar;
