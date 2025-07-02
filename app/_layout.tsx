import { Stack } from "expo-router";
import { ThemeProvider } from "@/constants/ThemeContext";
import { HeaderShownContext } from "@react-navigation/elements";

export default function RootLayout() {
  return (
    <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}
