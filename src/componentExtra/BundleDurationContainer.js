import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const BundleDurationContainer = () => {
  return (
    <View style={styles.omBundleDurationSms}>
      <Text style={styles.chooseYourBundle}>Choose Your Bundle Duration</Text>
      <View style={styles.daily}>
        <Image
          style={[styles.dailyChild, styles.childLayout]}
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
        <Text style={[styles.daily1, styles.daily1Typo]}>Daily</Text>
      </View>
      <View style={[styles.weekly, styles.weeklyPosition]}>
        <Image
          style={[styles.weeklyChild, styles.childLayout]}
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
        <Text style={[styles.weekly1, styles.daily1Typo]}>Weekly</Text>
      </View>
      <View style={[styles.monthly, styles.weeklyPosition]}>
        <Image
          style={[styles.monthlyChild, styles.childLayout]}
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
        <Text style={[styles.monthly1, styles.daily1Typo]}>Monthly</Text>
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
  daily1Typo: {
    top: "16.67%",
    textAlign: "left",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  weeklyPosition: {
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
    left: "2.74%",
    fontStyle: "italic",
    textAlign: "left",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  dailyChild: {
    width: "24.19%",
    right: "62.9%",
    left: "12.9%",
  },
  yellowIcon: {
    width: "17.74%",
    top: "116.67%",
    right: "66.13%",
    bottom: "-53.33%",
    left: "16.13%",
    display: "none",
    height: "36.67%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  tabAreaIcon: {
    width: "50.18%",
    top: "86.67%",
    right: "49.82%",
    bottom: "-86.67%",
    height: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
  },
  daily1: {
    left: "43.55%",
  },
  daily: {
    width: "21.23%",
    top: "46.43%",
    right: "78.77%",
    bottom: "0%",
    left: "0%",
    height: "53.57%",
    position: "absolute",
  },
  weeklyChild: {
    width: "19.48%",
    right: "70.13%",
    left: "10.39%",
  },
  yellowIcon1: {
    width: "14.29%",
    right: "-61.04%",
    left: "146.75%",
  },
  tabAreaIcon1: {
    width: "40.4%",
    right: "-74.17%",
    left: "133.77%",
  },
  weekly1: {
    left: "35.06%",
  },
  weekly: {
    width: "26.37%",
    right: "38.36%",
    left: "35.27%",
  },
  monthlyChild: {
    width: "17.65%",
    right: "72.94%",
    left: "9.41%",
  },
  yellowIcon2: {
    width: "12.94%",
    right: "-168.24%",
    left: "255.29%",
  },
  tabAreaIcon2: {
    width: "36.6%",
    right: "-180.13%",
    left: "243.53%",
  },
  monthly1: {
    left: "31.76%",
  },
  monthly: {
    width: "29.11%",
    right: "0%",
    left: "70.89%",
  },
  omBundleDurationSms: {
    top: 497,
    left: 20,
    width: 292,
    height: 56,
    position: "absolute",
  },
});

export default BundleDurationContainer;
