/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import HomeScreen from "./screens/HomeScreen";
import colors from "./themes/colors";
import { storeData } from "./utils/storage";
import { CRYPTO_STORAGE_KEY, cryptoList } from "./data/crypto";
import { FIAT_STORAGE_KEY, fiatList } from "./data/fiat";

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    (async () => {
      await Promise.all([
        storeData(CRYPTO_STORAGE_KEY, cryptoList),
        storeData(FIAT_STORAGE_KEY, fiatList),
      ]);
    })();
  }, []);

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default App;
