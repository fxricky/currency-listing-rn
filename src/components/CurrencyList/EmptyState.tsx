import { icMagnifyGlass } from "@/assets/icons";
import colors from "@/themes/colors";
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

type Props = {
  searchQuery: string;
};

export default function EmptyState({ searchQuery }: Props): React.ReactElement {
  return (
    <View style={styles.container} testID="currencylist#empty-state">
      <View style={styles.imgContainer}>
        <Image source={icMagnifyGlass} style={styles.imgMagnifyGlass} />
      </View>
      <Text style={styles.txtDescription}>
        {searchQuery
          ? `No results for "${searchQuery}". Try a different search term.`
          : "There are no currencies available in this list."}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  imgContainer: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: colors.gray["02"],
    alignItems: "center",
    justifyContent: "center",
  },
  imgMagnifyGlass: {
    width: 28,
    height: 28,
    tintColor: colors.gray["05"],
  },
  txtDescription: {
    fontSize: 16,
    color: colors.gray["06"],
    marginTop: 16,
    textAlign: "center",
  },
});
