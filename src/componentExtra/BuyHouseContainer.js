import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const BuyHouseContainer = () => {
  return (
    <View style={styles.buyHouse}>
      <View style={[styles.buyHouseChild, styles.tabAreaPosition]} />
      <Text style={[styles.buyAHouse, styles.thOct23Typo]}>Buy a House</Text>
      <Text
        style={[
          styles.saved,
          styles.textPosition,
          styles.savedTypo,
          styles.savedTypo1,
        ]}
      >
        Saved
      </Text>
      <View style={[styles.dueDateParent, styles.thOct23Layout]}>
        <Text style={[styles.dueDate, styles.savedTypo, styles.savedTypo1]}>
          Due Date
        </Text>
        <Text
          style={[styles.thOct23, styles.thOct23Layout, styles.thOct23Typo]}
        >
          28th Oct 23
        </Text>
      </View>
      <Text
        style={[
          styles.xaf23000,
          styles.textPosition,
          styles.savedTypo,
          styles.savedTypo1,
        ]}
      >
        XAF 23 000 000
      </Text>
      <Text
        style={[styles.text, styles.textTypo, styles.textPosition]}
      >{`     `}</Text>
      <View style={[styles.ellipseParent, styles.groupChildLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-372.png")}
        />
        <Text style={[styles.complete, styles.textPosition, styles.savedTypo]}>
          Complete
        </Text>
        <Text style={[styles.text1, styles.textTypo]}>90%</Text>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-3930.png")}
        />
      </View>
      <View style={[styles.tabArea, styles.tabAreaPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  tabAreaPosition: {
    borderRadius: Border.br_3xs,
    height: 95,
    left: 0,
    top: 0,
    position: "absolute",
  },
  thOct23Typo: {
    height: 11,
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBasic,
    fontSize: FontSize.size_xs,
  },
  textPosition: {
    left: 7,
    textAlign: "left",
  },
  savedTypo: {
    fontFamily: FontFamily.gentiumBasic,
    position: "absolute",
  },
  savedTypo1: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.gentiumBasic,
  },
  thOct23Layout: {
    width: 54,
    position: "absolute",
  },
  textTypo: {
    fontWeight: "700",
    fontFamily: FontFamily.gentiumBasic,
    position: "absolute",
  },
  groupChildLayout: {
    height: 35,
    width: 37,
    position: "absolute",
  },
  buyHouseChild: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    width: 160,
    borderRadius: Border.br_3xs,
  },
  buyAHouse: {
    top: 3,
    left: 59,
    width: 64,
    textAlign: "center",
    position: "absolute",
    height: 11,
  },
  saved: {
    top: 60,
    width: 31,
    height: 13,
    textAlign: "left",
    color: Color.iOSKeyLabel,
  },
  dueDate: {
    left: 3,
    width: 48,
    height: 9,
    textAlign: "left",
    color: Color.iOSKeyLabel,
    top: 0,
  },
  thOct23: {
    top: 16,
    textAlign: "left",
    left: 0,
  },
  dueDateParent: {
    top: 58,
    left: 105,
    height: 27,
  },
  xaf23000: {
    top: 73,
    width: 85,
    height: 20,
    color: Color.blue_100,
    textAlign: "left",
  },
  text: {
    top: 76,
    fontSize: FontSize.size_sm,
    height: 18,
    textAlign: "left",
    color: Color.iOSKeyLabel,
  },
  groupChild: {
    left: 0,
    top: 0,
  },
  complete: {
    top: 21,
    fontSize: FontSize.size_6xs,
    width: 30,
    height: 7,
    textAlign: "left",
    color: Color.iOSKeyLabel,
  },
  text1: {
    top: 7,
    left: 6,
    fontSize: FontSize.size_3xs,
    width: 26,
    color: Color.blue_100,
    height: 13,
    textAlign: "center",
  },
  ellipseParent: {
    top: 24,
    left: 61,
  },
  tabArea: {
    backgroundColor: Color.whitesmoke_1200,
    width: 159,
  },
  buyHouse: {
    height: 95,
    width: 160,
    left: 0,
    top: 0,
    position: "absolute",
  },
});

export default BuyHouseContainer;
