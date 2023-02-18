import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ContributionsContainer from "../components/ContributionsContainer";
import WeeklySavingsContainer from "../components/WeeklySavingsContainer";
import IrregularSavingsContainer from "../components/IrregularSavingsContainer";
import { Border, Color, Margin, FontSize, FontFamily } from "../GlobalStyles";

const DailyContributionsForm = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frequencyOptions}>
      <View style={styles.frequencyOptionsChild} />
      <ContributionsContainer
        propTop={40}
        propLeft={9}
        onTabAreaPress={() => navigation.navigate("SaveDaily")}
      />
      <WeeklySavingsContainer
        onTabAreaPress={() => navigation.navigate("SaveWeekly")}
      />
      <View style={styles.monthlySavings}>
        <View style={[styles.monthlySavingsChild, styles.monthlyShadowBox]} />
        <Text style={styles.monthlySavings1}>
          <Text style={styles.monthly}>Monthly</Text>
          <Text style={styles.savings}>Savings</Text>
        </Text>
        <View style={[styles.monthlySavingsItem, styles.monthlyShadowBox]} />
      </View>
      <IrregularSavingsContainer
        onTabAreaPress={() => navigation.navigate("SaveIrregularly")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  monthlyShadowBox: {
    elevation: 7,
    shadowRadius: 7,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderBottomLeftRadius: Border.br_2xs,
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
  monthlySavingsChild: {
    backgroundColor: Color.blue_100,
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
    color: Color.iOSKeyBackgroundHighlight,
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
  frequencyOptions: {
    top: 209,
    left: 28,
    height: 302,
    width: 304,
    position: "absolute",
  },
});

export default DailyContributionsForm;
