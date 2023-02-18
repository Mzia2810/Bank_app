import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const SavingsContainer = () => {
  return (
    <View style={styles.savingInterest}>
      <View style={styles.buyHouse}>
        <View style={[styles.buyHouseChild, styles.tabAreaLayout]} />
        <View style={[styles.tabArea, styles.tabAreaLayout]} />
        <Text style={styles.xaf1500}>XAF 1500</Text>
      </View>
      <Text style={[styles.interestOnTarget, styles.yourSavingsAreTypo]}>
        Interest on Target Savings
      </Text>
      <Text style={[styles.yourSavingsAre, styles.yourSavingsAreTypo]}>
        Your savings are now earning an interest of 3%
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tabAreaLayout: {
    borderRadius: Border.br_lg,
    left: 0,
    top: 0,
    height: 54,
    width: 326,
    position: "absolute",
  },
  yourSavingsAreTypo: {
    textAlign: "center",
    color: Color.iOSKeyBackgroundHighlight,
    fontFamily: FontFamily.gentiumBasic,
    fontWeight: "700",
    position: "absolute",
  },
  buyHouseChild: {
    backgroundColor: Color.blue_100,
  },
  tabArea: {
    backgroundColor: Color.whitesmoke_1200,
  },
  xaf1500: {
    top: 3,
    left: 230,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    width: 85,
    height: 20,
    color: Color.iOSKeyBackgroundHighlight,
    fontFamily: FontFamily.gentiumBasic,
    fontWeight: "700",
    position: "absolute",
  },
  buyHouse: {
    left: 0,
    top: 0,
    height: 54,
    width: 326,
    position: "absolute",
  },
  interestOnTarget: {
    top: 5,
    left: 6,
    fontSize: FontSize.size_base,
    width: 174,
    height: 16,
  },
  yourSavingsAre: {
    top: 29,
    left: 24,
    fontSize: FontSize.size_sm,
    fontStyle: "italic",
    width: 265,
    height: 25,
  },
  savingInterest: {
    top: 686,
    left: 20,
    height: 54,
    width: 326,
    position: "absolute",
  },
});

export default SavingsContainer;
