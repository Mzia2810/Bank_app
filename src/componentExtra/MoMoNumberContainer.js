import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const MoMoNumberContainer = ({ propTop, propLeft, propBorderColor }) => {
  const groupView8Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  const rectangleView21Style = useMemo(() => {
    return {
      ...getStyleValue("borderColor", propBorderColor),
    };
  }, [propBorderColor]);

  return (
    <View
      style={[styles.rectangleParent, styles.groupChildLayout, groupView8Style]}
    >
      <View
        style={[
          styles.groupChild,
          styles.groupChildLayout,
          rectangleView21Style,
        ]}
      />
      <Text style={[styles.enterAnMtn, styles.textTypo1]}>
        Enter an MTN MoMo Number
      </Text>
      <Text style={[styles.enterMomoNumber, styles.textTypo]}>
        Enter MoMo Number
      </Text>
      <Text style={[styles.text, styles.textTypo, styles.textTypo1]}>+237</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    width: 314,
    position: "absolute",
  },
  textTypo1: {
    textAlign: "center",
    fontWeight: "700",
  },
  textTypo: {
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  groupChild: {
    top: 27,
    left: 0,
    borderRadius: Border.br_xs,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    borderStyle: "solid",
    borderColor: "#feca18",
    borderWidth: 0.3,
    height: 42,
  },
  enterAnMtn: {
    top: 0,
    left: 8,
    fontSize: FontSize.size_lg,
    lineHeight: 22,
    color: Color.gray_1800,
    fontFamily: FontFamily.gentiumBookBasic,
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
  },
  enterMomoNumber: {
    top: 36,
    left: 78,
    lineHeight: 29,
    color: Color.gray_1700,
    textAlign: "left",
    width: 209,
    height: 27,
  },
  text: {
    top: 39,
    left: 15,
    lineHeight: 24,
    color: Color.iOSKeyLabel,
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_4xl,
  },
  rectangleParent: {
    top: 309,
    left: 28,
    height: 69,
  },
});

export default MoMoNumberContainer;
