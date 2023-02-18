import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { Color, FontFamily } from "../../../GlobalStyle";
import HeaderCom from "../../components/HeaderCom";

const Profile = () => {
  return (
    <>
    <HeaderCom/>
      <View style={styles.myActivity}>
        <View style={[styles.images1, styles.images1Layout]} />
        <View style={[styles.myActivityChild, styles.activityLayout]} />
        <View style={[styles.myActivityItem, styles.activityLayout]} />
        <TouchableOpacity
          style={[
            styles.contBtn,
            styles.contBtnLayout,
            { backgroundColor: Color.blue_100 },
          ]}
          activeOpacity={0.2}
          onPress={() => {}}
        >
          <View style={styles.btnNext} />
          <Text style={[styles.exit, styles.exitFlexBox, { color: "white" }]}>
            Exit
          </Text>
          <View style={[styles.areaPosition, styles.contBtnLayout]} />
        </TouchableOpacity>
        {/* <View style={[styles.backArrow, styles.taAreaLayout]}>
        <Image
          style={styles.backArrowChild}
          resizeMode="cover"
          source={require("../../../assets/undraw-swipe-profiles.png")}
        />
        <View style={[styles.taAreaLayout, styles.areaPosition]} />
      </View> */}
        {/* <Text
        style={[styles.myProfile, styles.exitFlexBox]}
      >{`My Profile `}</Text> */}
        <Image
          style={styles.undrawSwipeProfilesReTvqmIcon}
          resizeMode="cover"
          source={require("../../../assets/undraw-swipe-profiles.png")}
        />
        {/* <Image
        style={styles.undrawSwipeProfilesReTvqmIcon}
        resizeMode="cover"
        source={require("../../../assets/undraw-swipe-profiles-re-tvqm-1.png")}
      /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  images1Layout: {
    width: 360,
    position: "absolute",
  },
  activityLayout: {
    height: 54,
    left: 0,
    backgroundColor: Color.blue,
    width: 360,
    position: "absolute",
  },
  contBtnLayout: {
    height: 41,
    width: 273,
    position: "absolute",
  },
  exitFlexBox: {
    textAlign: "center",
    // color: Color.white,
    position: "absolute",
  },
  taAreaLayout: {
    height: 37,
    width: 52,
    position: "absolute",
  },
  areaPosition: {
    backgroundColor: Color.gainsboro,
    left: 0,
    top: 0,
  },
  images1: {
    marginTop: -400,
    marginLeft: -180,
    top: "50%",
    left: "50%",
    backgroundColor: "#e9ebec",
    height: 800,
  },
  myActivityChild: {
    top: 0,
    left: 0,
  },
  myActivityItem: {
    top: 746,
  },
  // btnNext: {
  //   top: 1,
  //   left: 1,
  //   borderRadius: 10,
  //   shadowColor: "rgba(0, 0, 0, 0.25)",
  //   shadowOffset: {
  //     width: 0,
  //     height: 3,
  //   },
  //   shadowRadius: 6,
  //   elevation: 6,
  //   shadowOpacity: 1,
  //   width: 272,
  //   height: 40,
  //   backgroundColor: Color.blue,
  //   position: "absolute",
  // },
  exit: {
    top: 9,
    left: 66,
    fontSize: 20,
    letterSpacing: 1.9,
    lineHeight: 24,
    fontFamily: FontFamily.gentiumBookBasicRegular,
    width: 142,
    height: 24,
  },
  contBtn: {
    top: 500,
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
    fontSize: 15,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.gentiumBookBasicBold,
  },
  myActivityInner: {
    top: 482,
    left: 12,
    height: 219,
  },
  undrawSwipeProfilesReTvqmIcon: {
    top: 142,
    left: 32,
    width: 295,
    height: 197,
    position: "absolute",
    overflow: "hidden",
  },
  myActivity: {
    backgroundColor: "#a4a48e",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default Profile;
