import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const SendButton = ({ propBackgroundColor }) => {
  const btnNext3Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  return (
    <View style={styles.sendBtn}>
      <View style={[styles.btnNext, styles.btnShadowBox, btnNext3Style]} />
      <Text style={styles.sendNow}>Send Now</Text>
      <View
        style={[styles.sendBtnChild, styles.tabAreaBg, styles.btnShadowBox]}
      />
      <View style={[styles.tabArea, styles.tabAreaBg]} />
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
    left: 3,
    borderRadius: Border.br_xs,
    backgroundColor: Color.gold_100,
    shadowColor: "#000",
    shadowRadius: 6,
    elevation: 6,
    width: 297,
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
    left: 29,
    width: 300,
    height: 42,
    position: "absolute",
  },
});

export default SendButton;
