import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "./theme";

interface ThemeContextType {
  theme: typeof lightTheme;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  toggleTheme: () => {},
  isDark: false,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemScheme = useColorScheme();
  const [isDark, setIsDark] = useState(systemScheme === "dark");
  const [iseReady, setIsready] = useState(false);

  useEffect(() => {
    setIsDark(systemScheme === "dark"); // when system theme updated, update scheme
    setIsready(true);
  }, [systemScheme]);

  const theme = useMemo(() => {
    return isDark ? darkTheme : lightTheme;
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const contextValue = useMemo(
    () => ({
      theme,
      toggleTheme,
      isDark,
    }),
    [theme, isDark]
  );

  if (!iseReady) return null;
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeColors = () => {
  const context = useContext(ThemeContext);
  return context.theme;
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
