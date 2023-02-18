import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ContributionsContainer from "../components/ContributionsContainer";
import WeeklySavingsContainer from "../components/WeeklySavingsContainer";
import MonthlySavingsContainer from "../components/MonthlySavingsContainer";
import IrregularSavingsContainer from "../components/IrregularSavingsContainer";
import { Border, Color } from "../GlobalStyles";

const DailyContributionsForm2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.frequencyOptions, styles.frequencyLayout]}>
      <View style={[styles.frequencyOptionsChild, styles.frequencyLayout]} />
      <ContributionsContainer
        propTop={39}
        onTabAreaPress={() => navigation.navigate("SaveDaily")}
      />
      <WeeklySavingsContainer
        onTabAreaPress={() => navigation.navigate("SaveWeekly")}
      />
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
  frequencyLayout: {
    height: 302,
    width: 304,
    position: "absolute",
  },
  frequencyOptionsChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_2xs,
    backgroundColor: Color.whitesmoke_300,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 18,
    elevation: 18,
    shadowOpacity: 1,
  },
  frequencyOptions: {
    top: 209,
    left: 28,
  },
});

export default DailyContributionsForm2;
