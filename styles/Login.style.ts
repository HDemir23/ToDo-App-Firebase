import { useThemeColors } from "@/constants/ThemeContext";
import { useMemo } from "react";
import { TextStyle, ViewStyle } from "react-native";

export const LoginStyles = () => {
  const theme = useThemeColors();

  const container: ViewStyle = useMemo(
    () => ({
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.background,
      paddingHorizontal: 16,
    }),
    [theme]
  );

  const title: TextStyle = useMemo(
    () => ({
      color: theme.foreground,
      fontSize: 28,
      fontWeight: "bold",
      marginBottom: 20,
    }),
    []
  );

  const input: TextStyle = useMemo(
    () => ({
      width: "100%",
      height: 50,
      borderColor: theme.border,
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 15,
      fontSize: 16,
      marginBottom: 15,
      backgroundColor: theme.inputBackground,
    }),
    [theme]
  );
  const button: ViewStyle = useMemo(
    () => ({
      width: "100%",
      height: 50,
      borderRadius: 10,
      marginTop: 20,
      backgroundColor: theme.button.background,
      justifyContent: "center",
      alignItems: "center",
    }),
    [theme]
  );

  const buttonText: TextStyle = useMemo(
    () => ({
      color: theme.button.text,
      fontSize: 16,
      fontWeight: "600",
    }),
    [theme]
  );

  const blueLink: TextStyle = useMemo(
    () => ({
      color: "blue",
    }),
    [theme]
  );

  const asd: TextStyle = useMemo(() => ({}), [theme]);

  return {
    container,
    title,
    input,
    button,
    buttonText,
    blueLink
  };
};
