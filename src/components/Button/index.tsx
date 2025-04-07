import colors from "@/themes/colors";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  label: string;
  variant?: "normal" | "danger" | "success";
  onPress: () => void;
};

export default function Button({
  label,
  variant = "normal",
  onPress,
}: Props): React.ReactElement {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.txtLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    borderRadius: 4,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  txtLabel: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
