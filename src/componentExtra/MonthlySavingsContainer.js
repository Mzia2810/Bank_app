import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, Color, Margin, FontSize, FontFamily } from "../GlobalStyles";

const MonthlySavingsContainer = ({ onRectanglePressablePress }) => {
  return (
    <View style={styles.monthlySavings}>
      <View style={[styles.monthlySavingsChild, styles.monthlyShadowBox]} />
      <Text style={styles.monthlySavings1}>
        <Text style={styles.monthly}>Monthly</Text>
        <Text style={styles.savings}>Savings</Text>
      </Text>
      <Pressable
        style={[styles.monthlySavingsItem, styles.monthlyShadowBox]}
        onPress={onRectanglePressablePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  monthlyShadowBox: {
    shadowOpacity: 1,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderBottomLeftRadius: Border.br_2xs,
    left: 0,
    top: 0,
    height: 120,
    width: 120,
    position: "absolute",
  },
  monthlySavingsChild: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  monthly: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  savings: {
    margin: Margin.m_3xs,
  },
  monthlySavings1: {
    top: 37,
    left: 25,
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.gentiumBasic,
    color: Color.iOSKeyLabel,
    textAlign: "center",
    position: "absolute",
  },
  monthlySavingsItem: {
    backgroundColor: Color.gainsboro_700,
  },
  monthlySavings: {
    top: 148,
    left: 30,
    height: 120,
    width: 120,
    position: "absolute",
  },
});

export default MonthlySavingsContainer;
