import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Header from "@/components/Header";
import Button from "@/components/Button";
import colors from "@/themes/colors";
import ButtonCollections from "./sections/ButtonCollections";

export default function HomeScreen(): React.ReactElement {
  return (
    <View style={styles.container}>
      <Header title="Currency List Demo" />
      <ButtonCollections />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
});
