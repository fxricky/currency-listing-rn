import { View, StyleSheet } from "react-native";
import Header from "@/components/Header";
import ButtonCollections from "./sections/ButtonCollections";
import DatabaseStatusIndicator, {
  DatabaseStatus,
} from "./sections/DatabaseStatusIndicator";
import CurrencyList from "@/components/CurrencyList";
import { createContext, useReducer } from "react";
import { Actions, INITIAL_STATE, reducer } from "./reducer";
import { cryptoList } from "@/data/crypto";
import { removeData, storeData } from "@/utils/storage";
import { fiatList } from "@/data/fiat";

const CRYPTO_STORAGE_KEY = "CRYPTO_STORAGE_KEY";
const FIAT_STORAGE_KEY = "FIAT_STORAGE_KEY";

// database status, currency list
export const HomeScreenContext = createContext({
  handleClearDatabase: () => {},
  handleInsertDatabase: () => {},
});

export default function HomeScreen(): React.ReactElement {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const setDatabaseStatus = (status: DatabaseStatus) => {
    dispatch({
      type: Actions.SET_DATABASE_STATUS,
      payload: {
        databaseStatus: status,
      },
    });
  };

  const handleClearDatabase = async () => {
    await Promise.all([
      removeData(CRYPTO_STORAGE_KEY),
      removeData(FIAT_STORAGE_KEY),
    ]);

    setDatabaseStatus("empty");
  };

  const handleInsertDatabase = async () => {
    await Promise.all([
      storeData(CRYPTO_STORAGE_KEY, cryptoList),
      storeData(FIAT_STORAGE_KEY, fiatList),
    ]);

    setDatabaseStatus("populated");
  };

  return (
    <HomeScreenContext.Provider
      value={{
        handleClearDatabase,
        handleInsertDatabase,
      }}>
      <View style={styles.container}>
        <Header title="Currency List Demo" />
        <ButtonCollections />
        <DatabaseStatusIndicator status={state.databaseStatus} />
        <CurrencyList enableSearch={true} displayList={cryptoList} />
      </View>
    </HomeScreenContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
