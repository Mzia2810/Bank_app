import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const FrequentCashOutPointsContainer = () => {
  return (
    <View style={[styles.groupParent, styles.parentLayout]}>
      <View style={[styles.parent, styles.parentLayout]}>
        <Text style={[styles.text, styles.textTypo1]}>654 23 56 45</Text>
        <Text style={[styles.text1, styles.textTypo]}>65 23 56 948</Text>
        <Text style={[styles.text2, styles.textTypo]}>654 89 65 32</Text>
        <Text style={[styles.text3, styles.textTypo1]}>654 26 32 14</Text>
      </View>
      <Image
        style={[styles.groupChild, styles.groupLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-1536.png")}
      />
      <Image
        style={[styles.groupItem, styles.groupLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-171.png")}
      />
      <Image
        style={[styles.groupInner, styles.groupLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-181.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.groupLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-191.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    width: 323,
    position: "absolute",
  },
  textTypo1: {
    textAlign: "center",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 16,
    letterSpacing: 1.4,
    fontSize: FontSize.size_2xs,
    top: 1,
    position: "absolute",
  },
  textTypo: {
    top: 0,
    textAlign: "center",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 16,
    letterSpacing: 1.4,
    fontSize: FontSize.size_2xs,
    position: "absolute",
  },
  groupLayout: {
    height: 40,
    width: 40,
    top: 0,
    position: "absolute",
  },
  text: {
    width: 83,
    left: 0,
  },
  text1: {
    left: 86,
    width: 70,
    height: 12,
  },
  text2: {
    left: 166,
    width: 73,
  },
  text3: {
    left: 248,
    width: 75,
  },
  parent: {
    top: 40,
    height: 17,
    left: 0,
  },
  groupChild: {
    left: 21,
  },
  groupItem: {
    left: 100,
  },
  groupInner: {
    left: 175,
  },
  ellipseIcon: {
    left: 258,
  },
  groupParent: {
    top: 330,
    left: 15,
    height: 57,
  },
});

export default FrequentCashOutPointsContainer;
