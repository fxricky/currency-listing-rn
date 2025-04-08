import React from "react";
import { useContext } from "react";
import { Image, Pressable, StyleSheet, Text } from "react-native";
import { ListHeaderSearchContext } from ".";
import colors from "@/themes/colors";
import { icMagnifyGlass } from "@/assets/icons";

type Props = {
  title: string;
};

export default function NormalTitle({ title }: Props): React.ReactElement {
  const { enableSearch, setIsSearching } = useContext(ListHeaderSearchContext);

  const handleSearchPress = () => {
    setIsSearching(true);
  };

  return (
    <>
      <Text style={styles.txtTitle}>{title}</Text>
      {enableSearch ? (
        <Pressable onPress={handleSearchPress}>
          <Image source={icMagnifyGlass} style={styles.imgMagnifyGlass} />
        </Pressable>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  txtTitle: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 40,
  },
  imgMagnifyGlass: {
    width: 20,
    height: 20,
    tintColor: colors.gray["05"],
  },
});
