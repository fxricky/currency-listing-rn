import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Header from "@/components/Header";
import ButtonCollections from "./sections/ButtonCollections";
import DatabaseStatus from "./sections/DatabaseStatus";
import CurrencyList from "@/components/CurrencyList";

export default function HomeScreen(): React.ReactElement {
  return (
    <View style={styles.container}>
      <Header title="Currency List Demo" />
      <ButtonCollections />
      <DatabaseStatus status={"success"} />
      <CurrencyList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
