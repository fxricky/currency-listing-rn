import React, { useContext, useState } from "react";
import { icArrowLeft, icMagnifyGlass, icX } from "@/assets/icons";
import { Image, Pressable, StyleSheet, TextInput, View } from "react-native";
import { ListHeaderSearchContext } from ".";
import colors from "@/themes/colors";
import { CurrencyListContext } from "../CurrencyList";

export default function SearchBar(): React.ReactElement {
  const { setSearchText, searchText } = useContext(CurrencyListContext);
  const { setIsSearching } = useContext(ListHeaderSearchContext);
  const [isFocused, setIsFocused] = useState(false);

  const handleBackPress = () => {
    setIsSearching(false);
    setSearchText("");
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSearchTextChange = (text: string) => {
    setSearchText(text);
  };

  const handleClearText = () => {
    setSearchText("");
  };

  return (
    <>
      <Pressable onPress={handleBackPress}>
        <Image source={icArrowLeft} style={styles.imgArrowLeft} />
      </Pressable>
      <View
        style={[
          styles.textInputContainer,
          isFocused && styles.textInputContainerFocused,
        ]}>
        <Image source={icMagnifyGlass} style={styles.imgMagnifyGlass} />
        <TextInput
          style={styles.textInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoFocus={true}
          onChangeText={handleSearchTextChange}
          value={searchText}
        />
        {searchText.length > 0 ? (
          <Pressable onPress={handleClearText}>
            <Image source={icX} style={styles.imgX} />
          </Pressable>
        ) : null}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imgArrowLeft: {
    width: 24,
    height: 24,
    tintColor: colors.gray["05"],
  },
  imgMagnifyGlass: {
    width: 20,
    height: 20,
    tintColor: colors.gray["05"],
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    padding: 0,
    paddingHorizontal: 8,
  },
  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.gray["02"],
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
    flex: 1,
    marginLeft: 8,
  },
  textInputContainerFocused: {
    borderColor: colors.primary,
  },
  imgX: {
    width: 20,
    height: 20,
    tintColor: colors.gray["05"],
  },
});
