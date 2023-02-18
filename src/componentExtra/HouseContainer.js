import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const HouseContainer = () => {
  return (
    <View style={styles.buyHouse}>
      <View style={[styles.buyHouseChild, styles.tabAreaPosition]} />
      <Text style={[styles.buyAShoe, styles.thOct23Layout1]}>Buy a Shoe</Text>
      <Text
        style={[
          styles.saved,
          styles.savedTypo,
          styles.savedPosition,
          styles.savedTypo1,
        ]}
      >
        Saved
      </Text>
      <Text
        style={[
          styles.xaf19500,
          styles.text1Clr,
          styles.savedTypo,
          styles.savedPosition,
        ]}
      >
        XAF 19 500
      </Text>
      <Text style={[styles.text, styles.textTypo]}>{`     `}</Text>
      <View style={[styles.ellipseParent, styles.groupChildLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-372.png")}
        />
        <Text style={[styles.complete, styles.savedTypo, styles.savedPosition]}>
          Complete
        </Text>
        <Text style={[styles.text1, styles.textTypo, styles.text1Clr]}>
          75%
        </Text>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-3930.png")}
        />
      </View>
      <View style={[styles.tabArea, styles.tabAreaPosition]} />
      <View style={[styles.dueDateParent, styles.thOct23Layout]}>
        <Text style={[styles.dueDate, styles.savedTypo, styles.savedTypo1]}>
          Due Date
        </Text>
        <Text
          style={[
            styles.thOct23,
            styles.thOct23Layout,
            styles.savedTypo,
            styles.thOct23Layout1,
          ]}
        >
          28th Oct 23
        </Text>
      </View>
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
  thOct23Layout1: {
    height: 11,
    color: Color.iOSKeyLabel,
    fontSize: FontSize.size_xs,
  },
  savedTypo: {
    textAlign: "left",
    fontFamily: FontFamily.gentiumBasic,
  },
  savedPosition: {
    left: 7,
    textAlign: "left",
    position: "absolute",
  },
  savedTypo1: {
    fontSize: FontSize.size_xs,
    color: Color.iOSKeyLabel,
  },
  text1Clr: {
    color: Color.blue_100,
    fontSize: FontSize.size_xs,
  },
  textTypo: {
    fontWeight: "700",
    textAlign: "left",
    left: 7,
    fontFamily: FontFamily.gentiumBasic,
    position: "absolute",
  },
  groupChildLayout: {
    height: 35,
    width: 37,
    position: "absolute",
  },
  thOct23Layout: {
    width: 54,
    position: "absolute",
  },
  buyHouseChild: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    width: 160,
    borderRadius: Border.br_3xs,
  },
  buyAShoe: {
    top: 3,
    left: 56,
    textAlign: "center",
    width: 64,
    fontFamily: FontFamily.gentiumBasic,
    height: 11,
    position: "absolute",
  },
  saved: {
    width: 31,
    height: 13,
    top: 60,
    color: Color.iOSKeyLabel,
  },
  xaf19500: {
    width: 85,
    height: 14,
    top: 76,
  },
  text: {
    fontSize: FontSize.size_sm,
    height: 18,
    top: 76,
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
    color: Color.iOSKeyLabel,
  },
  text1: {
    top: 7,
    width: 26,
    height: 13,
  },
  ellipseParent: {
    top: 24,
    left: 61,
  },
  tabArea: {
    backgroundColor: Color.whitesmoke_1200,
    width: 159,
  },
  dueDate: {
    left: 3,
    width: 48,
    height: 9,
    color: Color.iOSKeyLabel,
    top: 0,
    position: "absolute",
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  thOct23: {
    top: 16,
    left: 0,
  },
  dueDateParent: {
    left: 102,
    height: 27,
    top: 60,
  },
  buyHouse: {
    height: 95,
    width: 160,
    left: 0,
    top: 0,
    position: "absolute",
  },
});

export default HouseContainer;
