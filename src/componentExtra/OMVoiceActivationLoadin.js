import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const OMVoiceActivationLoadin = ({ onClose }) => {
  return (
    <View style={styles.omVoiceActivationLoadin}>
      <Text style={styles.exit}>Exit</Text>
      <Text style={[styles.pleaseBePatient, styles.yourRequestIsTypo]}>
        PLEASE BE PATIENT
      </Text>
      <Text style={[styles.yourRequestIs, styles.yourRequestIsTypo]}>
        YOUR REQUEST IS LOADIND....
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  yourRequestIsTypo: {
    color: Color.iOSKeyLabel,
    lineHeight: 19,
    letterSpacing: 1.5,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  exit: {
    marginTop: 144.5,
    marginLeft: -15,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_base,
    textDecoration: "underline",
    letterSpacing: 1.3,
    lineHeight: 17,
    fontStyle: "italic",
    color: Color.limegreen_100,
    width: 31,
    height: 16,
    display: "none",
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  pleaseBePatient: {
    top: 71,
    left: 101,
  },
  yourRequestIs: {
    top: 113,
    left: 58,
  },
  omVoiceActivationLoadin: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 338,
    height: 225,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default OMVoiceActivationLoadin;
