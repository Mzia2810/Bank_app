import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const MoMoPINCodeContainer = ({ propTop, propLeft, propBorderColor }) => {
  const groupView7Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  const rectangleView20Style = useMemo(() => {
    return {
      ...getStyleValue("borderColor", propBorderColor),
    };
  }, [propBorderColor]);

  return (
    <View
      style={[styles.rectangleParent, styles.groupChildLayout, groupView7Style]}
    >
      <View
        style={[
          styles.groupChild,
          styles.groupChildLayout,
          rectangleView20Style,
        ]}
      />
      <Text style={[styles.enterYourPin, styles.enterTypo]}>
        Enter Your Pin Code
      </Text>
      <Text style={[styles.enterYourMomo, styles.enterTypo]}>
        Enter Your MoMo PIN Code
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    width: 314,
    position: "absolute",
  },
  enterTypo: {
    textAlign: "left",
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
  enterYourPin: {
    top: 0,
    left: 12,
    fontSize: FontSize.size_lg,
    lineHeight: 22,
    fontWeight: "700",
    color: Color.gray_1800,
  },
  enterYourMomo: {
    top: 33,
    left: 39,
    fontSize: FontSize.size_4xl,
    lineHeight: 29,
    color: Color.gray_1700,
  },
  rectangleParent: {
    top: 430,
    left: 29,
    height: 69,
  },
});

export default MoMoPINCodeContainer;
