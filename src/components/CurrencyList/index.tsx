import React, { createContext, useEffect, useMemo, useState } from "react";
import { FlatList, ListRenderItem, StyleSheet, View } from "react-native";
import CurrencyListItem from "@/components/CurrencyListItem";
import ListHeader from "@/components/ListHeader";
import { Currency } from "@/data/type";
import colors from "@/themes/colors";
import { isStartsWith, containLeadingWhitespace } from "./quries";
import EmptyState from "./EmptyState";

type Props = {
  displayList: Currency[];
  enableSearch?: boolean;
};

export const CurrencyListContext = createContext<{
  searchText: string;
  setSearchText: (v: string) => void;
}>({
  searchText: "",
  setSearchText: () => {},
});

function ItemSeparator(): React.ReactElement {
  return <View style={styles.separator} />;
}

export default function CurrencyList({
  displayList,
  enableSearch = false,
}: Props): React.ReactElement {
  // const [filteredList, setFilteredList] = useState<Currency[]>(displayList);
  const [searchText, setSearchText] = useState<string>("");

  const filteredList: Currency[] = useMemo(() => {
    const trimmedSearchText = searchText.trim();

    if (trimmedSearchText.length == 0) {
      return displayList;
    }

    return displayList.filter((item: Currency) => {
      return (
        isStartsWith(item.name, trimmedSearchText) ||
        isStartsWith(item.symbol, trimmedSearchText) ||
        containLeadingWhitespace(item.name, trimmedSearchText)
      );
    });
  }, [displayList, searchText]);

  const renderItem: ListRenderItem<Currency> = ({ item }) => {
    return <CurrencyListItem data={item} />;
  };

  return (
    <CurrencyListContext.Provider value={{ searchText, setSearchText }}>
      <ListHeader title="Currency List" enableSearch={enableSearch} />
      <FlatList
        data={filteredList}
        style={styles.container}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <ItemSeparator />}
        ListEmptyComponent={() => <EmptyState searchQuery={searchText} />}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      />
    </CurrencyListContext.Provider>
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
