import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const SendForm = ({
  propLeft,
  propWidth,
  propLeft1,
  propLeft2,
  onTabAreaPress,
}) => {
  const sendBtn2Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
      ...getStyleValue("width", propWidth),
    };
  }, [propLeft, propWidth]);

  const btnNext2Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft1),
    };
  }, [propLeft1]);

  const sendNow1Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft2),
    };
  }, [propLeft2]);

  return (
    <View style={[styles.sendBtn, sendBtn2Style]}>
      <View style={[styles.btnNext, styles.btnShadowBox, btnNext2Style]} />
      <Text style={[styles.sendNow, sendNow1Style]}>Send Now</Text>
      <View
        style={[styles.sendBtnChild, styles.tabAreaBg, styles.btnShadowBox]}
      />
      <Pressable
        style={[styles.tabArea, styles.tabAreaBg]}
        onPress={onTabAreaPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btnShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    top: 0,
    height: 42,
  },
  tabAreaBg: {
    backgroundColor: Color.gainsboro_700,
    position: "absolute",
  },
  btnNext: {
    left: 2,
    borderRadius: Border.br_xs,
    backgroundColor: Color.gold_100,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowRadius: 6,
    elevation: 6,
    width: 298,
    position: "absolute",
  },
  sendNow: {
    top: 10,
    left: 71,
    fontSize: FontSize.size_4xl,
    letterSpacing: 1.9,
    lineHeight: 24,
    textTransform: "uppercase",
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.iOSKeyLabel,
    textAlign: "center",
    width: 159,
    position: "absolute",
  },
  sendBtnChild: {
    left: 0,
    shadowColor: "rgba(0, 0, 0, 0.8)",
    shadowRadius: 4,
    elevation: 4,
    width: 294,
  },
  tabArea: {
    top: 2,
    left: 6,
    width: 288,
    height: 40,
  },
  sendBtn: {
    top: 629,
    left: 30,
    width: 300,
    height: 42,
    position: "absolute",
  },
});

export default SendForm;
