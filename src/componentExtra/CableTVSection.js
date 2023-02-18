import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CableTVSection = () => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildPosition]}>
      <View style={[styles.groupChild, styles.groupChildPosition]} />
      <Text style={styles.eneo}>ENEO</Text>
      <View style={styles.tabArea} />
      <Text
        style={[
          styles.phoneInternet,
          styles.cableTvTypo,
          styles.cableTvPosition,
        ]}
      >{`Phone & Internet`}</Text>
      <View style={styles.tabArea1} />
      <Text style={[styles.camwater, styles.cableTvTypo]}>CAMWATER</Text>
      <View style={[styles.tabArea2, styles.tabLayout]} />
      <Text
        style={[styles.cableTv, styles.cableTvTypo, styles.cableTvPosition]}
      >{`Cable & TV`}</Text>
      <View style={[styles.tabArea3, styles.tabLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    top: "0%",
    position: "absolute",
  },
  cableTvTypo: {
    color: Color.gray_3000,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 22,
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  cableTvPosition: {
    top: "55.74%",
    color: Color.gray_3000,
  },
  tabLayout: {
    width: "28.87%",
    height: "39.34%",
    backgroundColor: Color.gray_1200,
    position: "absolute",
  },
  groupChild: {
    height: "100%",
    width: "100%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  eneo: {
    color: Color.iOSKeyLabel,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 22,
    letterSpacing: 1.1,
    fontSize: FontSize.size_lg,
    left: "8.33%",
    top: "11.48%",
    position: "absolute",
  },
  tabArea: {
    height: "36.07%",
    width: "16.67%",
    right: "77.98%",
    bottom: "52.46%",
    backgroundColor: Color.gray_1200,
    left: "5.36%",
    top: "11.48%",
    position: "absolute",
  },
  phoneInternet: {
    left: "8.33%",
    top: "55.74%",
  },
  tabArea1: {
    width: "42.56%",
    top: "50.82%",
    right: "52.08%",
    bottom: "9.84%",
    height: "39.34%",
    backgroundColor: Color.gray_1200,
    left: "5.36%",
    position: "absolute",
  },
  camwater: {
    left: "66.67%",
    color: Color.gray_3000,
    top: "11.48%",
  },
  tabArea2: {
    top: "52.46%",
    right: "5.95%",
    bottom: "8.2%",
    left: "65.18%",
  },
  cableTv: {
    left: "67.86%",
  },
  tabArea3: {
    top: "6.56%",
    right: "6.25%",
    bottom: "54.1%",
    left: "64.88%",
  },
  rectangleParent: {
    height: "12.35%",
    width: "93.33%",
    right: "3.33%",
    bottom: "87.65%",
    left: "3.33%",
  },
});

export default CableTVSection;
