import { View, StyleSheet } from "react-native";
import Header from "@/components/Header";
import ButtonCollections from "./sections/ButtonCollections";
import DatabaseStatus from "./sections/DatabaseStatus";
import CurrencyList from "@/components/CurrencyList";
import { useReducer } from "react";
import { INITIAL_STATE, reducer } from "./reducer";
import { cryptoList } from "@/data/crypto";

export default function HomeScreen(): React.ReactElement {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <View style={styles.container}>
      <Header title="Currency List Demo" />
      <ButtonCollections />
      <DatabaseStatus status={"success"} />
      <CurrencyList enableSearch={true} displayList={cryptoList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
