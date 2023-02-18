import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontSize, Border, Color, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const AmountContainer = ({ propTop, propLeft }) => {
  const amount2Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.amount, amount2Style]}>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupBorder]} />
        <Text style={styles.amount1}>Amount</Text>
        <View style={styles.rectangleGroup}>
          <View style={[styles.groupItem, styles.groupBorder]} />
          <Text style={[styles.xaf, styles.xafTypo]}>XAF</Text>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group90.png")}
          />
        </View>
        <Text style={[styles.enterAmountTo, styles.xafTypo]}>
          Enter amount to Request
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupBorder: {
    borderColor: "#ea9311",
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  xafTypo: {
    lineHeight: 20,
    letterSpacing: 1.8,
    fontSize: FontSize.size_base,
    textAlign: "center",
    position: "absolute",
  },
  groupChild: {
    top: 24,
    borderRadius: Border.br_2xs,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    borderWidth: 0.3,
    height: 36,
    borderStyle: "solid",
    width: 300,
  },
  amount1: {
    left: 4,
    fontSize: FontSize.size_lg,
    letterSpacing: 1.9,
    lineHeight: 22,
    width: 65,
    textAlign: "center",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.orangeColor,
    borderWidth: 1,
    width: 82,
    height: 40,
    top: 0,
    borderStyle: "solid",
  },
  xaf: {
    top: 11,
    left: 13,
    fontWeight: "700",
    width: 33,
    height: 19,
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    lineHeight: 20,
    letterSpacing: 1.8,
    fontSize: FontSize.size_base,
  },
  groupIcon: {
    height: "60.26%",
    width: "27.47%",
    top: "20.51%",
    right: "9.57%",
    bottom: "19.23%",
    left: "62.96%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  rectangleGroup: {
    top: 23,
    left: 219,
    width: 81,
    height: 39,
    position: "absolute",
  },
  enterAmountTo: {
    top: 33,
    left: 8,
    fontFamily: FontFamily.gentiumBasic,
    color: Color.gray_2200,
  },
  rectangleParent: {
    left: 0,
    top: 0,
    height: 62,
    width: 300,
    position: "absolute",
  },
  amount: {
    top: 548,
    left: 24,
    height: 62,
    width: 300,
    position: "absolute",
  },
});

export default AmountContainer;
