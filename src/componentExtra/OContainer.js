import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../../GlobalStyle";

const OContainer = () => {
  return (
    <View style={[styles.omoney]}>
      {/* <View style={styles.omoneyChild} /> */}
      <Text style={[styles.omoney1, styles.omoney1FlexBox,]}>OMoney</Text>
      <View style={styles.orangeMoneyIcon}>
        <View style={[styles.orangeMoneyIconChild, styles.tabAreaPosition]} />
        <Image
          style={[styles.orangeMoneyIconItem, styles.orangeIconLayout]}
          resizeMode="cover"
          source={require("../../assets/arrow-23.png")}
        />
        <Image
          style={[styles.orangeMoneyIconInner, styles.orangeIconLayout]}
          resizeMode="cover"
          source={require("../../assets/arrow-33.png")}
        />
        <Text style={[styles.orangeMoney, styles.omoney1FlexBox]}>
          Orange Money
        </Text>
      </View>
      <View style={[styles.tabArea, styles.tabAreaPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  omoney1FlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  tabAreaPosition: {
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    left: "0%",
    position: "absolute",
  },
  orangeIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    borderRadius: Border.br_5xl,
    width: "42.95%",
    height: "51.03%",
    position: "absolute",
  },
  omoneyChild: {
    height: "1.82%",
    width: "101.52%",
    top: "90%",
    right: "-0.76%",
    bottom: "8.18%",
    left: "-0.76%",
    borderStyle: "solid",
    borderColor: "#0000ee",
    borderTopWidth: 1,
    position: "absolute",
  },
  omoney1: {
    top: "59.73%",
    fontSize: 12,
    // letterSpacing: 2,
    lineHeight: 23,
    fontFamily: FontFamily.gentiumBookBasic,
    // color: Color.blue_100,
    left: "15%",
    textAlign: "center",
  },
  orangeMoneyIconChild: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.gray_400,
  },
  orangeMoneyIconItem: {
    top: "9.64%",
    right: "5.51%",
    bottom: "39.33%",
    left: "51.54%",
  },
  orangeMoneyIconInner: {
    top: "15.19%",
    right: "51.54%",
    bottom: "33.78%",
    left: "5.51%",
  },
  orangeMoney: {
    height: "24.14%",
    width: "90.48%",
    top: "65.52%",
    left: "4.76%",
    fontSize: FontSize.size_7xs,
    lineHeight: 7,
    fontWeight: "700",
    fontFamily: FontFamily.rubik,
    color: Color.orangeColor,
  },
  orangeMoneyIcon: {
    height: "52.73%",
    width: "63.64%",
    top: "5.45%",
    right: "18.18%",
    bottom: "41.82%",
    left: "18.18%",
    position: "absolute",
  },
  tabArea: {
    backgroundColor: Color.gainsboro_700,
  },
  omoney: {
    height: "7.88%",
    width: "18.33%",
    top: "23.88%",
    right: "27.78%",
    bottom: "63.25%",
    left: "53.89%",
    position: "absolute",
  },
});

export default OContainer;
