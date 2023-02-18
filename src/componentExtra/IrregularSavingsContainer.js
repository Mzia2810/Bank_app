import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, Color, Margin, FontSize, FontFamily } from "../GlobalStyles";

const IrregularSavingsContainer = ({ onTabAreaPress }) => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.groupChild, styles.tabAreaShadowBox]} />
      <Text style={styles.irregularSavings}>
        <Text style={styles.irregular}>Irregular</Text>
        <Text style={styles.savings}>Savings</Text>
      </Text>
      <Pressable
        style={[styles.tabArea, styles.tabAreaShadowBox]}
        onPress={onTabAreaPress}
      />
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
    borderBottomRightRadius: Border.br_2xs,
    left: 0,
    top: 0,
    height: 120,
    width: 120,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
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
    color: Color.iOSKeyLabel,
    textAlign: "center",
    position: "absolute",
  },
  tabArea: {
    backgroundColor: Color.gray_2300,
  },
  rectangleParent: {
    top: 148,
    left: 155,
    height: 120,
    width: 120,
    position: "absolute",
  },
});

export default IrregularSavingsContainer;
