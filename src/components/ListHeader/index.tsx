import React, { createContext, useState } from "react";
import colors from "@/themes/colors";
import { StyleSheet, View } from "react-native";
import SearchBar from "./SearchBar";
import NormalTitle from "./NormalTitle";

type Props = {
  title: string;
  enableSearch?: boolean;
};

export const ListHeaderSearchContext = createContext({
  isSearching: false,
  setIsSearching: (isSearching: boolean) => {},
  enableSearch: false,
  query: "",
  setQuery: (query: string) => {},
});

export default function ListHeader({
  title,
  enableSearch = false,
}: Props): React.ReactElement {
  const [isSearching, setIsSearching] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <ListHeaderSearchContext.Provider
      value={{ isSearching, setIsSearching, enableSearch, query, setQuery }}>
      <View style={styles.container}>
        {isSearching ? <SearchBar /> : <NormalTitle title={title} />}
      </View>
    </ListHeaderSearchContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray["02"],
    maxWidth: "100%",
  },
});
