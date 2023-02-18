import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const MotiveTransferContainer = ({
  bankTransferDetails,
  transferMotive,
  swiftCodeTop,
  swiftCodeBottom,
}) => {
  const groupView1Style = useMemo(() => {
    return {
      ...getStyleValue("top", swiftCodeTop),
      ...getStyleValue("bottom", swiftCodeBottom),
    };
  }, [swiftCodeTop, swiftCodeBottom]);

  return (
    <View style={[styles.rectangleParent, groupView1Style]}>
      <View style={styles.groupChild} />
      <Text style={[styles.swiftCode, styles.swiftCodeTypo]}>
        {bankTransferDetails}
      </Text>
      <Text style={[styles.enterYourMotive, styles.swiftCodeTypo]}>
        {transferMotive}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  swiftCodeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    lineHeight: 20,
    letterSpacing: 1.8,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  groupChild: {
    height: "64.29%",
    width: "100%",
    top: "35.71%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_2xs,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    borderStyle: "solid",
    borderColor: "#0000ee",
    borderWidth: 0.3,
    position: "absolute",
  },
  swiftCode: {
    top: "0%",
    left: "0.33%",
    color: Color.iOSKeyLabel,
  },
  enterYourMotive: {
    top: "55.36%",
    left: "1%",
    color: Color.gray_2200,
  },
  rectangleParent: {
    height: "27.45%",
    width: "90.91%",
    top: "3.92%",
    right: "4.85%",
    bottom: "68.63%",
    left: "4.24%",
    position: "absolute",
  },
});

export default MotiveTransferContainer;
