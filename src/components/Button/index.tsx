import colors from "@/themes/colors";
import React, { useEffect, useState } from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";

type Props = {
  label: string;
  variant?: "normal" | "danger" | "success" | "focus";
  onPress: () => void;
};

type VariantStyles = {
  container: StyleProp<ViewStyle>;
  txtLabel: StyleProp<TextStyle>;
};

export default function Button({
  label,
  variant = "normal",
  onPress,
}: Props): React.ReactElement {
  const [variantStyles, setVariantStyles] = useState<VariantStyles>(
    getStyles(variant),
  );

  useEffect(() => {
    setVariantStyles(getStyles(variant));
  }, [variant]);

  return (
    <Pressable
      onPress={onPress}
      style={[styles.baseContainer, variantStyles.container]}>
      <Text style={[styles.baseLabel, variantStyles.txtLabel]}>{label}</Text>
    </Pressable>
  );
}

function getStyles(variant: Props["variant"]): VariantStyles {
  switch (variant) {
    case "danger":
      return {
        container: styles.btnDanger,
        txtLabel: styles.txtDanger,
      };
    case "success":
      return {
        container: styles.btnSuccess,
        txtLabel: styles.txtSuccess,
      };
    default:
      return {
        container: styles.btnNormal,
        txtLabel: styles.txtNormal,
      };
  }
}

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: colors.gray["01"],
    alignItems: "center",
    justifyContent: "center",
  },
  baseLabel: {
    fontSize: 16,
  },
  btnNormal: {
    backgroundColor: colors.gray["01"],
  },
  txtNormal: {
    color: colors.black,
  },
  btnDanger: {
    backgroundColor: colors.red["01"],
  },
  txtDanger: {
    color: colors.red["07"],
  },
  btnSuccess: {
    backgroundColor: colors.green["01"],
  },
  txtSuccess: {
    color: colors.green["07"],
  },
});
