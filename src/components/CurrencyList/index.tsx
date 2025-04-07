import React from "react";
import { FlatList, ListRenderItem, StyleSheet, View } from "react-native";
import CurrencyListItem from "@/components/CurrencyListItem";
import ListHeader from "@/components/ListHeader";
import { Currency } from "@/data/type";
import colors from "@/themes/colors";

type Props = {
  displayList: Currency[];
  enableSearch?: boolean;
};

function ItemSeparator(): React.ReactElement {
  return <View style={styles.separator} />;
}

export default function CurrencyList({
  displayList,
  enableSearch = false,
}: Props): React.ReactElement {
  // search should be here
  const renderItem: ListRenderItem<Currency> = ({ item }) => {
    return <CurrencyListItem data={item} />;
  };

  return (
    <>
      <ListHeader title="Currency List" enableSearch={enableSearch} />
      <FlatList
        data={displayList}
        style={styles.container}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: colors.gray["02"],
  },
});
