import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontSize, Border, Color, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const CashPointContainer = ({ propTop, propLeft }) => {
  const amount1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.amount, amount1Style]}>
      <View style={styles.rectangleParent}>
        <View
          style={[styles.groupChild, styles.groupPosition, styles.groupBorder]}
        />
        <Text style={styles.amount1}>Amount</Text>
        <View style={[styles.rectangleGroup, styles.groupPosition]}>
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
  groupPosition: {
    height: 36,
    top: 22,
    position: "absolute",
  },
  groupBorder: {
    borderColor: "#ea9311",
    borderStyle: "solid",
    left: 0,
  },
  xafTypo: {
    lineHeight: 20,
    letterSpacing: 1.8,
    fontSize: FontSize.size_base,
    textAlign: "center",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_2xs,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    borderWidth: 0.3,
    borderStyle: "solid",
    width: 300,
    height: 36,
    top: 22,
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
    borderTopRightRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    backgroundColor: Color.orangeColor,
    borderWidth: 1,
    width: 82,
    height: 37,
    top: 0,
    borderStyle: "solid",
    position: "absolute",
  },
  xaf: {
    top: 12,
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
    height: "65.28%",
    width: "27.47%",
    top: "25%",
    right: "9.57%",
    bottom: "9.72%",
    left: "62.96%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  rectangleGroup: {
    left: 219,
    width: 81,
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
    height: 58,
    width: 300,
    position: "absolute",
  },
  amount: {
    top: 550,
    left: 28,
    height: 58,
    width: 300,
    position: "absolute",
  },
});

export default CashPointContainer;
