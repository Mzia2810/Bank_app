import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ContributionsContainer from "../components/ContributionsContainer";
import WeeklySavingsContainer from "../components/WeeklySavingsContainer";
import MonthlySavingsContainer from "../components/MonthlySavingsContainer";
import { Border, Color, Margin, FontSize, FontFamily } from "../GlobalStyles";

const DailyContributionsForm1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.frequencyOptions, styles.frequencyLayout]}>
      <View
        style={[
          styles.frequencyOptionsChild,
          styles.childShadowBox,
          styles.frequencyLayout,
        ]}
      />
      <ContributionsContainer
        propTop={35}
        propLeft={6}
        onTabAreaPress={() => navigation.navigate("SaveDaily")}
      />
      <WeeklySavingsContainer
        onTabAreaPress={() => navigation.navigate("SaveWeekly")}
      />
      <MonthlySavingsContainer
        onRectanglePressablePress={() => navigation.navigate("SaveMonthly")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View
          style={[
            styles.groupChild,
            styles.groupChildLayout,
            styles.childShadowBox,
          ]}
        />
        <Text style={styles.irregularSavings}>
          <Text style={styles.irregular}>Irregular</Text>
          <Text style={styles.savings}>Savings</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frequencyLayout: {
    height: 302,
    width: 304,
    position: "absolute",
  },
  childShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: 0,
    top: 0,
  },
  groupChildLayout: {
    height: 120,
    width: 120,
    position: "absolute",
  },
  frequencyOptionsChild: {
    borderRadius: Border.br_2xs,
    backgroundColor: Color.whitesmoke_300,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 18,
    elevation: 18,
  },
  groupChild: {
    borderBottomRightRadius: Border.br_2xs,
    backgroundColor: Color.blue_100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 7,
    elevation: 7,
  },
  irregular: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  savings: {
    margin: Margin.m_3xs,
  },
  irregularSavings: {
    top: 37,
    left: 23,
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.gentiumBasic,
    color: Color.iOSKeyBackgroundHighlight,
    textAlign: "center",
    position: "absolute",
  },
  rectangleParent: {
    top: 148,
    left: 155,
  },
  frequencyOptions: {
    top: 209,
    left: 28,
  },
});

export default DailyContributionsForm1;
