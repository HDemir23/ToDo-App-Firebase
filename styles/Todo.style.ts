import { useThemeColors } from "@/constants/ThemeContext";
import { useMemo } from "react";
import { TextStyle, ViewStyle } from "react-native";

export const TodoStyles = () => {
  const theme = useThemeColors();

  const container: ViewStyle = useMemo(
    () => ({
      flex: 1,
      backgroundColor: theme.background,
      paddingHorizontal: 16,
      paddingTop: 100,
    }),
    [theme]
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
  const FlatList: ViewStyle = useMemo(
    () => ({
      width: "100%",
      marginTop: 20,
    }),
    [theme]
  );
  const FlatListItem: ViewStyle = useMemo(
    () => ({
      flexDirection: "row",
      padding: 12,
      marginBottom: 10,
      backgroundColor: theme.card,
      borderRadius: 8,
    }),
    [theme]
  );

  const TaskStyle: TextStyle = useMemo(
    () => ({
      color: theme.foreground,
      fontSize: 16,
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

  const deleteButton: ViewStyle = useMemo(
    () => ({
      backgroundColor: "red",
      borderRadius: 12,
      paddingVertical: 12,
      paddingHorizontal: 20,
      minWidth: 80, // geniş ekranlar için oran bozulmaz
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 8,
      marginHorizontal: 12,
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

  const title: TextStyle = useMemo(
    () => ({
      color: theme.foreground,
      fontSize: 28,
      fontWeight: "bold",
      marginBottom: 20,
    }),
    [theme]
  );

  const asd: TextStyle = useMemo(() => ({}), [theme]);

  return {
    container,
    input,
    FlatList,
    FlatListItem,
    button,
    buttonText,
    title,
    TaskStyle,
    deleteButton,
  };
};
