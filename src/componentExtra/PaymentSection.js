import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const PaymentSection = ({
  paymentText,
  propMarginLeft,
  propMarginTop,
  onGroupPress,
}) => {
  const pAYStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginLeft, propMarginTop]);

  return (
    <View style={[styles.rectangleParent, styles.groupChildPosition]}>
      <View style={[styles.groupChild, styles.groupChildPosition]} />
      <Text
        style={[styles.pay, styles.payPosition, styles.payPosition1, pAYStyle]}
      >
        {paymentText}
      </Text>
      <Pressable
        style={[styles.group, styles.groupLayout, styles.payPosition]}
        onPress={onGroupPress}
      >
        <Image
          style={[styles.vectorIcon, styles.payPosition, styles.payPosition1]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <View style={[styles.groupItem, styles.groupLayout]} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 94,
    width: 360,
    marginLeft: -180,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  payPosition: {
    left: "50%",
    top: "50%",
  },
  payPosition1: {
    position: "absolute",
    left: "50%",
    top: "50%",
  },
  groupLayout: {
    height: 57,
    width: 47,
    position: "absolute",
  },
  groupChild: {
    marginTop: -47,
    backgroundColor: Color.blue_100,
  },
  pay: {
    marginTop: -8,
    marginLeft: -18,
    fontSize: FontSize.size_4xl,
    fontWeight: "700",
    fontFamily: FontFamily.gentiumBasic,
    color: Color.iOSKeyBackgroundHighlight,
    textAlign: "left",
  },
  vectorIcon: {
    marginTop: -61.5,
    marginLeft: -56.5,
    width: 16,
    height: 13,
  },
  groupItem: {
    top: -57,
    left: -47,
    backgroundColor: Color.gainsboro_700,
  },
  group: {
    marginTop: 29,
    marginLeft: -125,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
  },
  rectangleParent: {
    marginTop: -400,
  },
});

export default PaymentSection;
