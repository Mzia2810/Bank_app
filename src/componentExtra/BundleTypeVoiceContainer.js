import * as React from "react";
import { useMemo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const BundleTypeVoiceContainer = ({ propTop, propLeft }) => {
  const bundleTypeVoiceStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.bundleTypeVoice, bundleTypeVoiceStyle]}>
      <Text style={styles.chooseYourBundle}>Choose Your Bundle Type</Text>
      <View style={styles.classic}>
        <Image
          style={[styles.classicChild, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-211.png")}
        />
        <Image
          style={styles.yellowIcon}
          resizeMode="cover"
          source={require("../assets/yellow.png")}
        />
        <Image
          style={styles.tabAreaIcon}
          resizeMode="cover"
          source={require("../assets/tab-area.png")}
        />
        <Text style={[styles.classic1, styles.wandaTypo]}>Classic</Text>
      </View>
      <View style={[styles.wandaNet, styles.mtnYamoPosition]}>
        <Image
          style={[styles.wandaNetChild, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-211.png")}
        />
        <Image
          style={[styles.yellowIcon1, styles.yellowIconPosition]}
          resizeMode="cover"
          source={require("../assets/yellow.png")}
        />
        <Image
          style={[styles.tabAreaIcon1, styles.tabIconPosition]}
          resizeMode="cover"
          source={require("../assets/tab-area.png")}
        />
        <Text style={[styles.wanda, styles.wandaTypo]}>Wanda</Text>
      </View>
      <View style={[styles.mtnYamo, styles.mtnYamoPosition]}>
        <Image
          style={[styles.mtnYamoChild, styles.childLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-211.png")}
        />
        <Image
          style={[styles.yellowIcon2, styles.yellowIconPosition]}
          resizeMode="cover"
          source={require("../assets/yellow.png")}
        />
        <Image
          style={[styles.tabAreaIcon2, styles.tabIconPosition]}
          resizeMode="cover"
          source={require("../assets/tab-area.png")}
        />
        <Text style={[styles.mtnYamo1, styles.wandaTypo]}>MTN Yamo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "26.67%",
    top: "23.33%",
    height: "50%",
    position: "absolute",
  },
  wandaTypo: {
    top: "16.67%",
    textAlign: "left",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  mtnYamoPosition: {
    bottom: "1.79%",
    top: "44.64%",
    height: "53.57%",
    position: "absolute",
  },
  yellowIconPosition: {
    bottom: "-50%",
    top: "113.33%",
    display: "none",
    height: "36.67%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  tabIconPosition: {
    bottom: "-83.33%",
    top: "83.33%",
    height: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  chooseYourBundle: {
    top: "0%",
    left: "2.59%",
    fontStyle: "italic",
    textAlign: "left",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  classicChild: {
    width: "20.55%",
    right: "68.49%",
    left: "10.96%",
  },
  yellowIcon: {
    width: "15.07%",
    top: "116.67%",
    right: "71.23%",
    bottom: "-53.33%",
    left: "13.7%",
    display: "none",
    height: "36.67%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  tabAreaIcon: {
    width: "42.62%",
    top: "86.67%",
    right: "57.38%",
    bottom: "-86.67%",
    height: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
  },
  classic1: {
    left: "36.99%",
  },
  classic: {
    width: "23.62%",
    top: "46.43%",
    right: "76.38%",
    bottom: "0%",
    left: "0%",
    height: "53.57%",
    position: "absolute",
  },
  wandaNetChild: {
    width: "20.27%",
    right: "68.92%",
    left: "10.81%",
  },
  yellowIcon1: {
    width: "14.86%",
    right: "-67.57%",
    left: "152.7%",
  },
  tabAreaIcon1: {
    width: "42.04%",
    right: "-81.23%",
    left: "139.19%",
  },
  wanda: {
    left: "36.49%",
  },
  wandaNet: {
    width: "23.95%",
    right: "42.72%",
    left: "33.33%",
  },
  mtnYamoChild: {
    width: "14.71%",
    right: "77.45%",
    left: "7.84%",
  },
  yellowIcon2: {
    width: "10.78%",
    right: "-123.53%",
    left: "212.75%",
  },
  tabAreaIcon2: {
    width: "30.5%",
    right: "-133.44%",
    left: "202.94%",
  },
  mtnYamo1: {
    left: "26.47%",
  },
  mtnYamo: {
    width: "33.01%",
    right: "0%",
    left: "66.99%",
  },
  bundleTypeVoice: {
    top: 431,
    left: 20,
    width: 309,
    height: 56,
    position: "absolute",
  },
});

export default BundleTypeVoiceContainer;
