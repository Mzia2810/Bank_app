import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Border, Color, Margin, FontSize, FontFamily } from "../GlobalStyles";

const WeeklySavingsContainer = ({ onTabAreaPress }) => {
  return (
    <View style={[styles.weeklySavings, styles.weeklyLayout]}>
      <View style={[styles.weeklySavingsChild, styles.weeklyLayout]} />
      <Pressable
        style={[styles.weeklySavingsChild, styles.weeklyLayout]}
        onPress={onTabAreaPress}
      />
      <Text style={styles.weeklySavings1}>
        <Text style={styles.weekly}>Weekly</Text>
        <Text style={styles.savings}>Savings</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  weeklyLayout: {
    height: 120,
    width: 120,
    position: "absolute",
  },
  weeklySavingsChild: {
    top: 0,
    left: 0,
    borderTopRightRadius: Border.br_2xs,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowRadius: 7,
    elevation: 7,
    shadowOpacity: 1,
  },
  weekly: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  savings: {
    margin: Margin.m_3xs,
  },
  weeklySavings1: {
    top: 37,
    left: 29,
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.gentiumBasic,
    color: Color.iOSKeyLabel,
    textAlign: "center",
    position: "absolute",
  },
  weeklySavings: {
    top: 23,
    left: 155,
  },
});

export default WeeklySavingsContainer;
