import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DailySavingsContainer from "../components/DailySavingsContainer";
import MonthlySavingsContainer from "../components/MonthlySavingsContainer";
import IrregularSavingsContainer from "../components/IrregularSavingsContainer";
import { Border, Color, Margin, FontSize, FontFamily } from "../GlobalStyles";

const FrequencyOptionsContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frequencyOptions}>
      <View style={styles.frequencyOptionsChild} />
      <DailySavingsContainer
        propBackgroundColor="#fff"
        propColor="#090909"
        onTabAreaPress={() => navigation.navigate("SaveDaily")}
      />
      <View style={styles.weeklySavings}>
        <View style={[styles.weeklySavingsChild, styles.tabAreaShadowBox]} />
        <View style={[styles.tabArea, styles.tabAreaShadowBox]} />
        <Text style={styles.weeklySavings1}>
          <Text style={styles.weekly}>Weekly</Text>
          <Text style={styles.savings}>Savings</Text>
        </Text>
      </View>
      <MonthlySavingsContainer
        onRectanglePressablePress={() => navigation.navigate("SaveMonthly")}
      />
      <IrregularSavingsContainer
        onTabAreaPress={() => navigation.navigate("SaveIrregularly")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabAreaShadowBox: {
    elevation: 7,
    shadowRadius: 7,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderTopRightRadius: Border.br_2xs,
    height: 120,
    width: 120,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: 0,
    top: 0,
    position: "absolute",
  },
  frequencyOptionsChild: {
    borderRadius: Border.br_2xs,
    backgroundColor: Color.whitesmoke_300,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 18,
    elevation: 18,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: 0,
    top: 0,
    height: 302,
    width: 304,
    position: "absolute",
  },
  weeklySavingsChild: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  tabArea: {
    backgroundColor: Color.blue_100,
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
    color: Color.iOSKeyBackgroundHighlight,
    textAlign: "center",
    position: "absolute",
  },
  weeklySavings: {
    top: 23,
    left: 155,
    height: 120,
    width: 120,
    position: "absolute",
  },
  frequencyOptions: {
    top: 209,
    left: 28,
    height: 302,
    width: 304,
    position: "absolute",
  },
});

export default FrequencyOptionsContainer;
