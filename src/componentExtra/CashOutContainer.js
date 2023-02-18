import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const CashOutContainer = ({
  cashOutRequestText,
  propTop,
  propLeft,
  propWidth,
  onTabAreaPress,
}) => {
  const requestCASHOUTStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
      ...getStyleValue("width", propWidth),
    };
  }, [propTop, propLeft, propWidth]);

  return (
    <View style={styles.sendBtn}>
      <View style={[styles.btnNext, styles.btnShadowBox]} />
      <Text style={[styles.requestCashOut, requestCASHOUTStyle]}>
        {cashOutRequestText}
      </Text>
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
    left: 0,
    borderRadius: Border.br_xs,
    backgroundColor: Color.gold_100,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowRadius: 6,
    elevation: 6,
    width: 300,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    top: 0,
    position: "absolute",
  },
  requestCashOut: {
    top: 10,
    left: 17,
    fontSize: FontSize.size_4xl,
    letterSpacing: 1.9,
    lineHeight: 24,
    textTransform: "uppercase",
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.iOSKeyLabel,
    textAlign: "center",
    width: 263,
    position: "absolute",
  },
  sendBtnChild: {
    left: 8,
    shadowColor: "rgba(0, 0, 0, 0.8)",
    shadowRadius: 4,
    elevation: 4,
    width: 285,
  },
  tabArea: {
    top: 2,
    left: 5,
    width: 288,
    height: 40,
  },
  sendBtn: {
    top: 634,
    left: 30,
    height: 42,
    width: 300,
    position: "absolute",
  },
});

export default CashOutContainer;
