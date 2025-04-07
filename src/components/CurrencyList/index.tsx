import { Fragment } from "react";
import { FlatList, StyleSheet } from "react-native";
import CurrencyListItem from "@/components/CurrencyListItem";
import ListHeader from "../ListHeader";

export default function CurrencyList(): React.ReactElement {
  const renderItem = () => {
    return <CurrencyListItem />;
  };

  return (
    <Fragment>
      <ListHeader title="Currency List" enableSearch={true} />
      <FlatList
        data={[]}
        style={styles.container}
        renderItem={renderItem}
        stickyHeaderIndices={[0]}
      />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
