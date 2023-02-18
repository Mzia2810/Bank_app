import * as React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const MyActivity = ({ onClose }) => {
  return (
    <View style={[styles.myActivity, styles.images1Layout]}>
      <View style={[styles.images1, styles.images1Layout]} />
      <View style={[styles.myActivityChild, styles.activityLayout]} />
      <View style={[styles.myActivityItem, styles.activityLayout]} />
      <View style={[styles.contBtn, styles.contBtnLayout]}>
        <View style={styles.btnNext} />
        <Text style={[styles.exit, styles.exitTypo]}>Exit</Text>
        <View style={[styles.areaPosition, styles.contBtnLayout]} />
      </View>
      <View style={[styles.backArrow, styles.taAreaLayout]}>
        <Image
          style={styles.backArrowChild}
          resizeMode="cover"
          source={require("../assets/line-16.png")}
        />
        <View style={[styles.taAreaLayout, styles.areaPosition]} />
      </View>
      <Text style={[styles.myProfile, styles.exitTypo]}>{`My Profile `}</Text>
      <Image
        style={styles.myActivityInner}
        resizeMode="cover"
        source={require("../assets/rectangle-83.png")}
      />
      <Image
        style={styles.undrawSwipeProfilesReTvqmIcon}
        resizeMode="cover"
        source={require("../assets/undraw-swipe-profiles-re-tvqm-11.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  images1Layout: {
    height: 800,
    width: 360,
  },
  activityLayout: {
    height: 54,
    left: 0,
    backgroundColor: Color.blue_100,
    position: "absolute",
    width: 360,
  },
  contBtnLayout: {
    height: 41,
    width: 273,
    position: "absolute",
  },
  exitTypo: {
    textAlign: "center",
    color: Color.iOSKeyBackgroundHighlight,
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  taAreaLayout: {
    height: 37,
    width: 52,
    position: "absolute",
  },
  areaPosition: {
    backgroundColor: Color.gainsboro_700,
    left: 0,
    top: 0,
  },
  images1: {
    marginTop: -400,
    marginLeft: -180,
    top: "50%",
    left: "50%",
    backgroundColor: Color.whitesmoke_900,
    position: "absolute",
  },
  myActivityChild: {
    top: 0,
    left: 0,
  },
  myActivityItem: {
    top: 746,
  },
  btnNext: {
    top: 1,
    left: 1,
    borderRadius: Border.br_2xl,
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
    backgroundColor: Color.blue_100,
    position: "absolute",
  },
  exit: {
    top: 9,
    left: 66,
    fontSize: FontSize.size_4xl,
    letterSpacing: 1.9,
    lineHeight: 24,
    width: 142,
    height: 24,
  },
  contBtn: {
    top: 641,
    left: 43,
  },
  backArrowChild: {
    top: 11,
    left: 9,
    width: 28,
    height: 15,
    position: "absolute",
  },
  backArrow: {
    top: 10,
    left: 6,
  },
  myProfile: {
    top: 18,
    left: 145,
    fontSize: FontSize.size_lg,
    lineHeight: 22,
    fontWeight: "700",
  },
  myActivityInner: {
    top: 482,
    left: 12,
    height: 219,
    position: "absolute",
    width: 360,
  },
  undrawSwipeProfilesReTvqmIcon: {
    top: 302,
    left: 32,
    width: 295,
    height: 197,
    position: "absolute",
    overflow: "hidden",
  },
  myActivity: {
    backgroundColor: Color.darkgray_500,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
});

export default MyActivity;
