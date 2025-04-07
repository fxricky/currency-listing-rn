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
      <Text
        style={[styles.baseLabel, variantStyles.txtLabel]}
        numberOfLines={1}>
        {label}
      </Text>
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

    case "focus":
      return {
        container: styles.btnFocus,
        txtLabel: styles.txtFocus,
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
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: colors.gray["02"],
    alignItems: "center",
    justifyContent: "center",
  },
  baseLabel: {
    fontSize: 16,
  },
  btnNormal: {
    backgroundColor: colors.gray["02"],
  },
  txtNormal: {
    color: colors.black,
  },
  btnDanger: {
    backgroundColor: colors.red["02"],
  },
  txtDanger: {
    color: colors.red["07"],
  },
  btnSuccess: {
    backgroundColor: colors.green["02"],
  },
  txtSuccess: {
    color: colors.green["07"],
  },
  btnFocus: {
    backgroundColor: colors.primary,
  },
  txtFocus: {
    color: colors.white,
  },
});
