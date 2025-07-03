import { ThemeProvider } from "@/constants/ThemeContext";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <GestureHandlerRootView>
        <Stack screenOptions={{ headerShown: false }} />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
