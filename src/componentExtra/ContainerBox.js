import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const ContainerBox = ({ onRectanglePressablePress }) => {
  return (
    <View style={styles.accountBoxParent}>
      <View style={[styles.accountPosition, styles.accountPosition1]}>
        <View
          style={[
            styles.accountBoxChild,
            styles.accountPosition,
            styles.accountPosition1,
          ]}
        />
        <Text style={[styles.text, styles.textFlexBox, styles.textClr]}>
          ..........................
        </Text>
        <Text style={[styles.accountBalance, styles.textFlexBox]}>
          Account Balance
        </Text>
      </View>
      <View style={styles.showParent}>
        <Text
          style={[
            styles.show,
            styles.textFlexBox,
            styles.textClr,
            styles.accountPosition,
          ]}
        >
          Show
        </Text>
        <Image
          style={styles.icons8EyeUnchecked502}
          resizeMode="cover"
          source={require("../assets/icons8eyeunchecked50-25.png")}
        />
      </View>
      <Pressable
        style={styles.groupChild}
        onPress={onRectanglePressablePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  accountPosition1: {
    right: 0,
    left: 0,
    top: 0,
    height: 126,
    position: "absolute",
  },
  accountPosition: {
    left: 0,
    top: 0,
  },
  textFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  textClr: {
    color: Color.iOSKeyLabel,
    textAlign: "center",
  },
  accountBoxChild: {
    borderRadius: Border.br_lg,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  text: {
    top: 45,
    left: 63,
    fontSize: FontSize.size_6xl,
    lineHeight: 35,
    width: 163,
    fontFamily: FontFamily.gentiumBookBasic,
  },
  accountBalance: {
    top: 14,
    left: 53,
    fontSize: FontSize.size_5xl,
    lineHeight: 32,
    color: Color.gray_1300,
    width: 179,
    height: 32,
    fontFamily: FontFamily.gentiumBookBasic,
  },
  show: {
    fontSize: FontSize.size_xs,
    letterSpacing: 2.8,
    lineHeight: 17,
    textTransform: "uppercase",
    fontFamily: FontFamily.gentiumBasic,
    left: 0,
    top: 0,
    color: Color.iOSKeyLabel,
  },
  icons8EyeUnchecked502: {
    top: 12,
    left: 7,
    width: 25,
    height: 25,
    overflow: "hidden",
    position: "absolute",
  },
  showParent: {
    top: 51,
    right: 15,
    left: 245,
    height: 37,
    position: "absolute",
  },
  groupChild: {
    top: 43,
    left: 234,
    backgroundColor: Color.gainsboro_700,
    width: 57,
    height: 45,
    position: "absolute",
  },
  accountBoxParent: {
    top: 199,
    right: 30,
    left: 30,
    height: 126,
    position: "absolute",
  },
});

export default ContainerBox;
