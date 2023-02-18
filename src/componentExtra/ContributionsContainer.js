import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Border, Color, Margin, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const ContributionsContainer = ({ propTop, propLeft, onTabAreaPress }) => {
  const dailyContributions1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={styles.dailySavings}>
      <View style={[styles.dailySavingsChild, styles.tabAreaShadowBox]} />
      <Pressable
        style={[styles.tabArea, styles.tabAreaShadowBox]}
        onPress={onTabAreaPress}
      />
      <Text style={[styles.dailyContributions, dailyContributions1Style]}>
        <Text style={styles.daily}>Daily</Text>
        <Text style={styles.contributions}>Contributions</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tabAreaShadowBox: {
    shadowOpacity: 1,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderTopLeftRadius: Border.br_2xs,
    left: 0,
    top: 0,
    height: 120,
    width: 120,
    position: "absolute",
  },
  dailySavingsChild: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  tabArea: {
    backgroundColor: Color.gainsboro_700,
  },
  daily: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  contributions: {
    margin: Margin.m_3xs,
  },
  dailyContributions: {
    top: 40,
    left: 9,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.gentiumBasic,
    color: Color.gray_500,
    textAlign: "center",
    position: "absolute",
  },
  dailySavings: {
    top: 23,
    left: 30,
    height: 120,
    width: 120,
    position: "absolute",
  },
});

export default ContributionsContainer;
