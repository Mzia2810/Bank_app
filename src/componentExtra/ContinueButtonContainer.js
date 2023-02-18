import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const ContinueButtonContainer = ({ onTabAreaPress }) => {
  return (
    <View style={[styles.contBtn, styles.contBtnLayout]}>
      <View style={styles.btnNext} />
      <Text style={styles.continue}>Continue</Text>
      <Pressable
        style={[styles.tabArea, styles.contBtnLayout]}
        onPress={onTabAreaPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contBtnLayout: {
    height: 41,
    width: 273,
    position: "absolute",
  },
  btnNext: {
    top: 1,
    left: 1,
    borderRadius: Border.br_2xl,
    backgroundColor: Color.orangeColor,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    width: 272,
    height: 40,
    position: "absolute",
  },
  continue: {
    top: 9,
    left: 66,
    fontSize: FontSize.size_4xl,
    letterSpacing: 1.9,
    lineHeight: 24,
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.gray_2000,
    textAlign: "center",
    width: 142,
    height: 24,
    position: "absolute",
  },
  tabArea: {
    top: 0,
    left: 0,
    backgroundColor: Color.gainsboro_700,
  },
  contBtn: {
    top: 641,
    left: 43,
  },
});

export default ContinueButtonContainer;
