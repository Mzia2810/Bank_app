import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const OrangeMoneyContainer = ({ propMarginTop, onTabAreaPress }) => {
  const orangeMoneyStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View style={[styles.orangeMoney, styles.orangePosition, orangeMoneyStyle]}>
      <View style={[styles.orangeMoneyChild, styles.orangePosition]} />
      <Text style={[styles.orangeMoney1, styles.orangePosition]}>
        Orange Money
      </Text>
      <Image
        style={[styles.vectorIcon, styles.orangePosition]}
        resizeMode="cover"
        source={require("../assets/vector148.png")}
      />
      <View style={[styles.orangeMoneyIcon, styles.orangeIconLayout1]}>
        <View
          style={[
            styles.orangeMoneyIconChild,
            styles.tabAreaPosition,
            styles.orangeIconLayout1,
          ]}
        />
        <Image
          style={[styles.orangeMoneyIconItem, styles.orangeIconLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-224.png")}
        />
        <Image
          style={[styles.orangeMoneyIconInner, styles.orangeIconLayout]}
          resizeMode="cover"
          source={require("../assets/arrow-324.png")}
        />
        <Text style={styles.orangeMoney2}>Orange Money</Text>
      </View>
      <Pressable
        style={[styles.tabArea, styles.tabAreaPosition]}
        onPress={onTabAreaPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  orangePosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  orangeIconLayout1: {
    height: 42,
    width: 42,
  },
  tabAreaPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  orangeIconLayout: {
    height: 16,
    width: 17,
    borderRadius: Border.br_5xl,
    top: 9,
    position: "absolute",
  },
  orangeMoneyChild: {
    marginTop: 31.5,
    marginLeft: -155.5,
    borderRadius: Border.br_2xl,
    backgroundColor: Color.mediumblue_100,
    width: 305,
    height: 2,
  },
  orangeMoney1: {
    marginTop: -17.5,
    marginLeft: -97.5,
    fontSize: FontSize.size_2xl,
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
    color: Color.iOSKeyBackgroundHighlight,
    textAlign: "left",
  },
  vectorIcon: {
    marginTop: -18.5,
    marginLeft: 141.5,
    width: 8,
    height: 14,
  },
  orangeMoneyIconChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.gray_400,
  },
  orangeMoneyIconItem: {
    left: 22,
  },
  orangeMoneyIconInner: {
    left: 4,
  },
  orangeMoney2: {
    top: 28,
    left: 2,
    fontSize: FontSize.size_7xs,
    lineHeight: 7,
    fontWeight: "700",
    fontFamily: FontFamily.rubik,
    color: Color.orangeColor,
    textAlign: "center",
    width: 38,
    height: 7,
    position: "absolute",
  },
  orangeMoneyIcon: {
    top: 8,
    left: 12,
    position: "absolute",
  },
  tabArea: {
    backgroundColor: Color.gainsboro_700,
    height: 56,
    width: 335,
  },
  orangeMoney: {
    marginTop: 47,
    marginLeft: -166,
    height: 67,
    width: 335,
  },
});

export default OrangeMoneyContainer;
