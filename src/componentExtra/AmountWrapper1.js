import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Margin, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const AmountWrapper1 = ({ onIcons8Contacts1Press }) => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.childBorder]} />
        <Text style={[styles.requestFrom, styles.amount1Typo]}>
          Request From
        </Text>
        <Text style={[styles.enterNameOr, styles.enterTypo]}>
          Enter Name or MoMo Number
        </Text>
        <Pressable
          style={styles.icons8Contacts1}
          onPress={onIcons8Contacts1Press}
        >
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector91.png")}
          />
          <View style={[styles.icons8Contacts1Child, styles.childBorder]} />
        </Pressable>
      </View>
      <View style={[styles.amountLayout, styles.mt16]}>
        <View style={[styles.amountLayout, styles.groupPosition]}>
          <View style={[styles.groupItem, styles.groupItemPosition]} />
          <Text style={[styles.amount1, styles.amount1Typo]}>Amount</Text>
          <View style={[styles.rectangleContainer, styles.groupItemPosition]}>
            <View style={[styles.groupInner, styles.groupPosition]} />
            <Text style={styles.xaf}>XAF</Text>
            <Image
              style={[styles.groupIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/group90.png")}
            />
          </View>
          <Text style={[styles.enterAmountTo, styles.enterTypo]}>
            Enter amount to Request
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt16: {
    marginTop: Margin.m_2xl,
  },
  childBorder: {
    height: 41,
    borderWidth: 0.3,
    borderColor: "#feca18",
    borderStyle: "solid",
    borderRadius: Border.br_2xs,
    position: "absolute",
  },
  amount1Typo: {
    textAlign: "center",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    fontWeight: "700",
    lineHeight: 22,
    letterSpacing: 1.9,
    fontSize: FontSize.size_lg,
    top: 0,
    position: "absolute",
  },
  enterTypo: {
    color: Color.gray_2200,
    fontFamily: FontFamily.gentiumBasic,
    left: 8,
    lineHeight: 20,
    letterSpacing: 1.8,
    fontSize: FontSize.size_base,
    textAlign: "center",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  groupPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  groupItemPosition: {
    top: 22,
    height: 41,
    position: "absolute",
  },
  groupChild: {
    top: 29,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    height: 41,
    left: 0,
    width: 300,
  },
  requestFrom: {
    left: 0,
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    fontWeight: "700",
    lineHeight: 22,
    letterSpacing: 1.9,
    fontSize: FontSize.size_lg,
  },
  enterNameOr: {
    top: 40,
  },
  vectorIcon: {
    height: "84%",
    width: "84%",
    top: "8%",
    right: "8%",
    bottom: "8%",
    left: "8%",
  },
  icons8Contacts1Child: {
    top: -3,
    left: -1,
    backgroundColor: Color.gray_2300,
    width: 41,
  },
  icons8Contacts1: {
    top: 32,
    left: 260,
    width: 35,
    height: 35,
    overflow: "hidden",
    position: "absolute",
  },
  rectangleParent: {
    height: 70,
    width: 300,
  },
  groupItem: {
    borderWidth: 0.3,
    borderRadius: Border.br_2xs,
    top: 22,
    borderColor: "#feca18",
    borderStyle: "solid",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    left: 0,
    width: 300,
  },
  amount1: {
    left: 4,
    width: 65,
  },
  groupInner: {
    borderTopRightRadius: Border.br_2xs,
    borderBottomRightRadius: Border.br_2xs,
    backgroundColor: Color.gold_100,
    borderWidth: 1,
    width: 82,
    height: 42,
    borderColor: "#feca18",
    borderStyle: "solid",
    top: 0,
  },
  xaf: {
    top: 12,
    left: 13,
    width: 33,
    height: 19,
    lineHeight: 20,
    letterSpacing: 1.8,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    fontWeight: "700",
    position: "absolute",
  },
  groupIcon: {
    height: "57.32%",
    width: "27.47%",
    top: "21.95%",
    right: "9.57%",
    bottom: "20.73%",
    left: "62.96%",
  },
  rectangleContainer: {
    left: 219,
    width: 81,
  },
  enterAmountTo: {
    top: 33,
  },
  amountLayout: {
    height: 63,
    width: 300,
  },
  groupParent: {
    top: 413,
    left: 30,
    position: "absolute",
  },
});

export default AmountWrapper1;
