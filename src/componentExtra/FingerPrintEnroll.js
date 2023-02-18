import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { FontFamily, Color, FontSize, Margin, Border } from "../GlobalStyles";

const FingerPrintEnroll = ({ onClose }) => {
  return (
    <View style={[styles.fingerPrintEnroll, styles.fingerLayout]}>
      <View style={styles.bdg}>
        <View style={styles.bdgChild} />
        <Image
          style={styles.bdgItem}
          resizeMode="cover"
          source={require("../assets/ellipse-11.png")}
        />
      </View>
      <View style={styles.authentication}>
        <Text
          style={[
            styles.youNeedTo,
            styles.youNeedToTypo,
            styles.youNeedToTypo1,
          ]}
        >
          You need to identify yourself
        </Text>
        <Text
          style={[
            styles.useFacialVerification,
            styles.youNeedToTypo,
            styles.youNeedToTypo1,
          ]}
        >
          Use Facial verification Instead
        </Text>
        <Text style={[styles.fingerprintAuthentication, styles.youNeedToTypo]}>
          <Text style={styles.fingerprint}>Fingerprint</Text>
          <Text style={styles.authentication1}> Authentication</Text>
        </Text>
      </View>
      <Image
        style={[styles.fingerOrPassword, styles.fingerLayout]}
        resizeMode="cover"
        source={require("../assets/finger-or-password.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fingerLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  youNeedToTypo: {
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  youNeedToTypo1: {
    color: Color.gray_3100,
    lineHeight: 18,
    letterSpacing: 1.4,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
  },
  bdgChild: {
    height: "57.5%",
    width: "59.21%",
    right: "20.39%",
    bottom: "42.5%",
    left: "20.39%",
    top: "0%",
    position: "absolute",
    backgroundColor: Color.dimgray_300,
  },
  bdgItem: {
    height: "50.1%",
    top: "49.9%",
    right: "-20.39%",
    bottom: "0%",
    width: "100%",
    left: "20.39%",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  bdg: {
    height: "120%",
    width: "168.89%",
    right: "-34.44%",
    bottom: "-20%",
    left: "-34.44%",
    top: "0%",
    position: "absolute",
  },
  youNeedTo: {
    top: 62,
    left: 21,
    width: 166,
  },
  useFacialVerification: {
    top: 468,
    left: 26,
    textDecoration: "underline",
    width: 157,
    height: 23,
  },
  fingerprint: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  authentication1: {
    margin: Margin.m_3xs,
  },
  fingerprintAuthentication: {
    height: "10.18%",
    left: "0%",
    fontSize: FontSize.size_4xl,
    letterSpacing: 1.9,
    lineHeight: 24,
    fontWeight: "700",
    color: Color.iOSKeyBackgroundHighlight,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
    width: "100%",
    top: "0%",
  },
  authentication: {
    top: 46,
    left: 20,
    width: 209,
    height: 491,
    position: "absolute",
  },
  fingerOrPassword: {
    height: "14.6%",
    width: "32.43%",
    top: "72.37%",
    right: "33.97%",
    bottom: "13.03%",
    left: "33.6%",
    position: "absolute",
  },
  fingerPrintEnroll: {
    borderTopRightRadius: Border.br_sm,
    borderBottomRightRadius: Border.br_sm,
    width: 250,
    height: 556,
    backgroundColor: Color.dimgray_300,
    maxWidth: "100%",
    overflow: "hidden",
  },
});

export default FingerPrintEnroll;
