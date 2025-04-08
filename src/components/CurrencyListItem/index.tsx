import React from "react";
import { icChevronRight } from "@/assets/icons";
import { Currency } from "@/data/type";
import colors from "@/themes/colors";
import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  data: Currency;
};

function Avatar({ char }: { char: string }): React.ReactElement {
  return (
    <View style={styles.avatar}>
      <Text style={styles.avatarText}>{char}</Text>
    </View>
  );
}

export default function CurrencyListItem({ data }: Props): React.ReactElement {
  return (
    <View style={styles.container}>
      <Avatar char={data.name[0]} />
      <View style={styles.contentContainer}>
        <Text>{data.name}</Text>
        <View style={styles.row}>
          <Text>{data.symbol}</Text>
          <Image source={icChevronRight} style={styles.imgChevronRight} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  imgChevronRight: {
    width: 24,
    height: 24,
    tintColor: colors.gray["05"],
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.gray["07"],
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.gray["02"],
  },
});
