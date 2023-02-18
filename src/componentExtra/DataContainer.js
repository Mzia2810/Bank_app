import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const DataContainer = ({ onRectanglePressablePress }) => {
  return (
    <View style={styles.accountBoxWrapper}>
      <View style={[styles.accountPosition, styles.accountPosition1]}>
        <View
          style={[
            styles.accountBoxChild,
            styles.accountPosition,
            styles.accountPosition1,
          ]}
        />
        <Text style={[styles.text, styles.textFlexBox, styles.textClr]}>
          25 548 000
        </Text>
        <Text style={[styles.accountBalance, styles.textFlexBox]}>
          Account Balance
        </Text>
        <View style={styles.show}>
          <Text
            style={[
              styles.show1,
              styles.textFlexBox,
              styles.textClr,
              styles.accountPosition,
            ]}
          >
            Show
          </Text>
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector77.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector78.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector79.png")}
          />
          <Image
            style={[styles.vectorIcon3, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector80.png")}
          />
        </View>
        <Pressable
          style={styles.accountBoxItem}
          onPress={onRectanglePressablePress}
        />
      </View>
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
  vectorIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
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
    left: 75,
    fontSize: FontSize.size_9xl,
    lineHeight: 46,
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
  show1: {
    fontSize: FontSize.size_xs,
    letterSpacing: 2.8,
    lineHeight: 17,
    textTransform: "uppercase",
    fontFamily: FontFamily.gentiumBasic,
    left: 0,
    top: 0,
    color: Color.iOSKeyLabel,
  },
  vectorIcon: {
    height: "34.79%",
    width: "60.39%",
    top: "47.53%",
    right: "21.48%",
    bottom: "17.68%",
    left: "18.13%",
  },
  vectorIcon1: {
    height: "13.51%",
    width: "12.32%",
    top: "54.05%",
    right: "45%",
    bottom: "32.43%",
    left: "42.68%",
  },
  vectorIcon2: {
    height: "27.03%",
    width: "25%",
    top: "72.97%",
    right: "20%",
    bottom: "0%",
    left: "55%",
  },
  vectorIcon3: {
    height: "10.32%",
    width: "12.63%",
    top: "81.05%",
    right: "26.25%",
    bottom: "8.63%",
    left: "61.12%",
  },
  show: {
    top: 51,
    right: 15,
    left: 245,
    height: 37,
    position: "absolute",
  },
  accountBoxItem: {
    top: 47,
    left: 238,
    backgroundColor: Color.gainsboro_700,
    width: 51,
    height: 50,
    position: "absolute",
  },
  accountBoxWrapper: {
    top: 199,
    right: 30,
    left: 30,
    height: 126,
    position: "absolute",
  },
});

export default DataContainer;
