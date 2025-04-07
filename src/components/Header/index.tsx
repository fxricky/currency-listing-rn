import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "@/themes/colors";

type Props = {
  title: string;
};

export default function Header({ title }: Props): React.ReactElement {
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.primary,
  },
  txtTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
  },
});
