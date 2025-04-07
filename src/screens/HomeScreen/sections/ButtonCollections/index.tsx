import Button from "@/components/Button";
import colors from "@/themes/colors";
import { StyleSheet, View } from "react-native";
import { HomeScreenContext } from "../..";
import { useContext } from "react";

export default function ButtonCollections(): React.ReactElement {
  const { handleClearDatabase, handleInsertDatabase } =
    useContext(HomeScreenContext);

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
        <Button label="Crypto" onPress={() => {}} />
        <Button label="Fiat" onPress={() => {}} />
        <Button label="Purchasable" onPress={() => {}} />
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
