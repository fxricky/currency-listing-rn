import { View, StyleSheet } from "react-native";
import Header from "@/components/Header";
import ButtonCollections from "./sections/ButtonCollections";
import DatabaseStatusIndicator, {
  DatabaseStatus,
} from "./sections/DatabaseStatusIndicator";
import CurrencyList from "@/components/CurrencyList";
import { createContext, useEffect, useMemo, useReducer, useState } from "react";
import { Actions, DisplayListType, INITIAL_STATE, reducer } from "./reducer";
import { CRYPTO_STORAGE_KEY } from "@/data/crypto";
import { getData } from "@/utils/storage";
import { FIAT_STORAGE_KEY } from "@/data/fiat";
import { Currency } from "@/data/type";

// database status, currency list
export const HomeScreenContext = createContext({
  handleClearDatabase: () => {},
  handleInsertDatabase: () => {},
  setDisplayListType: (k: DisplayListType) => () => {},
  displayType: "none" as DisplayListType,
});

export default function HomeScreen(): React.ReactElement {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const displayList = useMemo(() => {
    if (state.databaseStatus == "empty") {
      return [];
    }

    switch (state.displayListType) {
      case "crypto":
        return state.cryptoList;
      case "fiat":
        return state.fiatList;
      case "purchasable":
        return [...state.fiatList, ...state.cryptoList].sort((a, b) =>
          a.id.localeCompare(b.id),
        );
      default:
        return [];
    }
  }, [state.databaseStatus, state.displayListType]);

  const setDatabaseStatus = (status: DatabaseStatus) => {
    dispatch({
      type: Actions.SET_DATABASE_STATUS,
      payload: {
        databaseStatus: status,
      },
    });
  };

  const handleClearDatabase = async () => {
    setDatabaseStatus("empty");
  };

  const handleInsertDatabase = async () => {
    try {
      const [cryptoList, fiatList] = await Promise.all([
        getData(CRYPTO_STORAGE_KEY),
        getData(FIAT_STORAGE_KEY),
      ]);

      dispatch({
        type: Actions.SET_CRYPTO_LIST,
        payload: {
          cryptoList: cryptoList,
        },
      });

      dispatch({
        type: Actions.SET_FIAT_LIST,
        payload: {
          fiatList: fiatList,
        },
      });

      setDatabaseStatus("populated");
    } catch (error) {
      console.error(error);
    }
  };

  const setDisplayListType = (type: DisplayListType) => () => {
    dispatch({
      type: Actions.SET_DISPLAY_LIST_TYPE,
      payload: {
        displayListType: type,
      },
    });
  };

  return (
    <HomeScreenContext.Provider
      value={{
        handleClearDatabase,
        handleInsertDatabase,
        setDisplayListType,
        displayType: state.displayListType,
      }}>
      <View style={styles.container}>
        <Header title="Currency List Demo" />
        <ButtonCollections />
        <DatabaseStatusIndicator status={state.databaseStatus} />
        <CurrencyList enableSearch={true} displayList={displayList} />
      </View>
    </HomeScreenContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
