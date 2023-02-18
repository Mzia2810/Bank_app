import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const SendBtnContainer = ({ propTop, onTabAreaPress }) => {
  const depositStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={styles.sendBtn}>
      <View style={[styles.btnNext, styles.btnShadowBox]} />
      <Text style={[styles.deposit, depositStyle]}>Deposit</Text>
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
    left: 3,
    borderRadius: Border.br_xs,
    backgroundColor: Color.orangeColor,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowRadius: 6,
    elevation: 6,
    width: 297,
    position: "absolute",
  },
  deposit: {
    top: 9,
    left: 108,
    fontSize: FontSize.size_4xl,
    letterSpacing: 1.9,
    lineHeight: 24,
    textTransform: "uppercase",
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.iOSKeyLabel,
    textAlign: "center",
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
    top: 634,
    left: 29,
    width: 300,
    height: 42,
    position: "absolute",
  },
});

export default SendBtnContainer;
