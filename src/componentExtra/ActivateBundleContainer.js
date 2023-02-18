import * as React from "react";
import { useMemo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const ActivateBundleContainer = ({ giGaDataTop, giGaDataLeft }) => {
  const oMBundleTypeVoiceStyle = useMemo(() => {
    return {
      ...getStyleValue("top", giGaDataTop),
      ...getStyleValue("left", giGaDataLeft),
    };
  }, [giGaDataTop, giGaDataLeft]);

  return (
    <View style={[styles.omBundleTypeVoice, oMBundleTypeVoiceStyle]}>
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
        <Text style={[styles.flexi, styles.flexiTypo]}>Flexi</Text>
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
        <Text style={[styles.orangeBonus, styles.flexiTypo]}>Orange Bonus</Text>
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
        <Text style={[styles.gigaData, styles.flexiTypo]}>GiGa Data</Text>
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
  flexiTypo: {
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
    width: "25%",
    right: "61.67%",
    left: "13.33%",
  },
  yellowIcon: {
    width: "18.33%",
    top: "116.67%",
    right: "65%",
    bottom: "-53.33%",
    left: "16.67%",
    display: "none",
    height: "36.67%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  tabAreaIcon: {
    width: "51.85%",
    top: "86.67%",
    right: "48.15%",
    bottom: "-86.67%",
    height: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
  },
  flexi: {
    left: "45%",
  },
  classic: {
    width: "19.42%",
    top: "46.43%",
    right: "80.58%",
    bottom: "0%",
    left: "0%",
    height: "53.57%",
    position: "absolute",
  },
  wandaNetChild: {
    width: "12.4%",
    right: "80.99%",
    left: "6.61%",
  },
  yellowIcon1: {
    width: "9.09%",
    right: "12.4%",
    left: "78.51%",
  },
  tabAreaIcon1: {
    width: "25.71%",
    right: "4.04%",
    left: "70.25%",
  },
  orangeBonus: {
    left: "22.31%",
  },
  wandaNet: {
    width: "39.16%",
    right: "33.33%",
    left: "27.51%",
  },
  mtnYamoChild: {
    width: "16.13%",
    right: "75.27%",
    left: "8.6%",
  },
  yellowIcon2: {
    width: "11.83%",
    right: "-145.16%",
    left: "233.33%",
  },
  tabAreaIcon2: {
    width: "33.45%",
    right: "-156.03%",
    left: "222.58%",
  },
  gigaData: {
    left: "29.03%",
  },
  mtnYamo: {
    width: "30.1%",
    right: "2.91%",
    left: "66.99%",
  },
  omBundleTypeVoice: {
    top: 431,
    left: 20,
    width: 309,
    height: 56,
    position: "absolute",
  },
});

export default ActivateBundleContainer;
