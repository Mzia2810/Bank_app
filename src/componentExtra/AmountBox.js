import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontSize, Border, Color, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const AmountBox = ({ propTop, propTop1, propBottom }) => {
  const xAFStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const groupIconStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop1),
      ...getStyleValue("bottom", propBottom),
    };
  }, [propTop1, propBottom]);

  return (
    <View style={styles.amount}>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupBorder]} />
        <Text style={styles.amount1}>Amount</Text>
        <View style={styles.rectangleGroup}>
          <View style={[styles.groupItem, styles.groupBorder]} />
          <Text style={[styles.xaf, styles.xafTypo, xAFStyle]}>XAF</Text>
          <Image
            style={[styles.groupIcon, groupIconStyle]}
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
    height: 35,
    borderColor: "#feca18",
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
    borderRadius: Border.br_2xs,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    borderWidth: 0.3,
    top: 22,
    borderColor: "#feca18",
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
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  groupItem: {
    borderTopRightRadius: Border.br_2xs,
    borderBottomRightRadius: Border.br_2xs,
    backgroundColor: Color.gold_100,
    borderWidth: 1,
    width: 82,
    top: 0,
    borderColor: "#feca18",
    borderStyle: "solid",
  },
  xaf: {
    top: 10,
    left: 13,
    width: 33,
    height: 19,
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    fontWeight: "700",
    lineHeight: 20,
    letterSpacing: 1.8,
    fontSize: FontSize.size_base,
  },
  groupIcon: {
    height: "69.12%",
    width: "27.47%",
    top: "20.59%",
    right: "9.57%",
    bottom: "10.29%",
    left: "62.96%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  rectangleGroup: {
    left: 219,
    width: 81,
    height: 34,
    top: 22,
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
    height: 57,
    width: 300,
    position: "absolute",
  },
  amount: {
    top: 548,
    left: 30,
    height: 57,
    width: 300,
    position: "absolute",
  },
});

export default AmountBox;
