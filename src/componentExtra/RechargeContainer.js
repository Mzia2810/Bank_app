import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const RechargeContainer = ({ tabAreaBackgroundColor, onTabAreaPress }) => {
  const btnNextStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", tabAreaBackgroundColor),
    };
  }, [tabAreaBackgroundColor]);

  return (
    <View style={styles.sendBtn}>
      <View style={[styles.btnNext, styles.btnNextShadowBox, btnNextStyle]} />
      <Text style={styles.recharge}>Recharge</Text>
      <Pressable
        style={[styles.tabArea, styles.btnNextShadowBox]}
        onPress={onTabAreaPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btnNextShadowBox: {
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
    height: 42,
    width: 297,
    position: "absolute",
  },
  btnNext: {
    backgroundColor: Color.orangeColor,
    shadowColor: "rgba(0, 0, 0, 0.5)",
  },
  recharge: {
    top: 10,
    left: 95,
    fontSize: FontSize.size_4xl,
    letterSpacing: 1.9,
    lineHeight: 24,
    textTransform: "uppercase",
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.iOSKeyLabel,
    textAlign: "center",
    position: "absolute",
  },
  tabArea: {
    backgroundColor: Color.gold_400,
    shadowColor: "#000",
  },
  sendBtn: {
    top: 695,
    left: 32,
    height: 42,
    width: 297,
    position: "absolute",
  },
});

export default RechargeContainer;
