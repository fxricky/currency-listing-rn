import Button from "@/components/Button";
import colors from "@/themes/colors";
import { StyleSheet, View } from "react-native";
import { HomeScreenContext } from "../..";
import { useContext } from "react";
import { DisplayListType } from "../../reducer";

function getButtonVariant(
  displayType: DisplayListType,
  listType: DisplayListType,
) {
  return displayType == listType ? "focus" : "normal";
}

export default function ButtonCollections(): React.ReactElement {
  const {
    handleClearDatabase,
    handleInsertDatabase,
    setDisplayListType,
    displayType,
  } = useContext(HomeScreenContext);

  return (
    <View style={styles.container}>
      <View style={styles.dbRowContainer}>
        <Button
          label="Clear Database"
          variant={"danger"}
          onPress={handleClearDatabase}
        />
        <Button
          label="Insert Data"
          variant={"success"}
          onPress={handleInsertDatabase}
        />
      </View>
      <View style={styles.fiatRowContainer}>
        <Button
          label="Crypto"
          variant={getButtonVariant(displayType, "crypto")}
          onPress={setDisplayListType("crypto")}
        />
        <Button
          label="Fiat"
          variant={getButtonVariant(displayType, "fiat")}
          onPress={setDisplayListType("fiat")}
        />
        <Button
          label="Purchasable"
          variant={getButtonVariant(displayType, "purchasable")}
          onPress={setDisplayListType("purchasable")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 16,
    gap: 12,
  },
  dbRowContainer: {
    flexDirection: "row",
    gap: 12,
  },
  fiatRowContainer: {
    flexDirection: "row",
    gap: 12,
  },
});
