import { SplashScreen, Stack } from "expo-router";
import "../global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FilterMonthProvider } from "@/components/contexts/FilterMonthContext";
import { PopupProvider } from "@/components/contexts/PopUpContext";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Manrope-Bold": require("../assets/fonts/Manrope-Bold.ttf"),
    "Manrope-Medium": require("../assets/fonts/Manrope-Medium.ttf"),
    "Manrope-Regular": require("../assets/fonts/Manrope-Regular.ttf"),
    "Manrope-SemiBold": require("../assets/fonts/Manrope-SemiBold.ttf"),
    "Manrope-ExtraBold": require("../assets/fonts/Manrope-ExtraBold.ttf"),
    "Manrope-Light": require("../assets/fonts/Manrope-Light.ttf"),
    "Manrope-ExtraLight": require("../assets/fonts/Manrope-ExtraLight.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <PopupProvider>
          <FilterMonthProvider>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="modal" options={{ presentation: "modal" }} />
            </Stack>
          </FilterMonthProvider>
        </PopupProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
