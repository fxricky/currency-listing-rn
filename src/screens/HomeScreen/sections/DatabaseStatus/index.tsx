import colors from "@/themes/colors";
import { useEffect, useState } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

type Props = {
  status: "danger" | "success";
};

type StatusStyles = {
  container: StyleProp<ViewStyle>;
  txtTitle: StyleProp<TextStyle>;
};

export default function DatabaseStatus({ status }: Props): React.ReactElement {
  const [statusStyles, setStatusStyles] = useState<StatusStyles>(
    getStyles(status),
  );

  useEffect(() => {
    setStatusStyles(getStyles(status));
  }, [status]);

  return (
    <View style={[styles.container, statusStyles.container]}>
      <Text style={[styles.txtTitle, statusStyles.txtTitle]}>
        {"\u25CF Database Status"}
      </Text>
    </View>
  );
}

function getStyles(status: Props["status"]): StatusStyles {
  switch (status) {
    case "danger":
      return {
        container: styles.containerDanger,
        txtTitle: styles.titleDanger,
      };
    case "success":
      return {
        container: styles.containerSuccess,
        txtTitle: styles.titleSuccess,
      };
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  txtTitle: {
    fontSize: 12,
    fontWeight: "bold",
  },
  containerDanger: {
    backgroundColor: colors.red["01"],
  },
  titleDanger: {
    color: colors.red["07"],
  },
  containerSuccess: {
    backgroundColor: colors.green["01"],
  },
  titleSuccess: {
    color: colors.green["07"],
  },
});
