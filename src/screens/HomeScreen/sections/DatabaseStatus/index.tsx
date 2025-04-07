import { useEffect, useState } from "react";
import { icCircle } from "@/assets/icons";
import colors from "@/themes/colors";
import {
  Image,
  ImageStyle,
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
  imgIcCircle: StyleProp<ImageStyle>;
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
      <Image
        source={icCircle}
        style={[styles.imgIcCircle, statusStyles.imgIcCircle]}
      />
      <Text style={[styles.txtTitle, statusStyles.txtTitle]}>
        {"Database Status"}
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
        imgIcCircle: styles.imgIcCircleDanger,
      };
    case "success":
      return {
        container: styles.containerSuccess,
        txtTitle: styles.titleSuccess,
        imgIcCircle: styles.imgIcCircleSuccess,
      };
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: "center",
  },
  txtTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 4,
  },
  imgIcCircle: {
    width: 8,
    height: 8,
  },
  containerDanger: {
    backgroundColor: colors.red["01"],
  },
  titleDanger: {
    color: colors.red["07"],
  },
  imgIcCircleDanger: {
    tintColor: colors.red["07"],
  },
  containerSuccess: {
    backgroundColor: colors.green["01"],
  },
  titleSuccess: {
    color: colors.green["07"],
  },
  imgIcCircleSuccess: {
    tintColor: colors.green["07"],
  },
});
