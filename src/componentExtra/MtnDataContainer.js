import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const MtnDataContainer = ({ onTabAreaPress }) => {
  return (
    <View style={styles.mtnRecharge}>
      <View style={[styles.mtnRechargeChild, styles.tabAreaShadowBox]} />
      <Text style={[styles.mtnRecharge1, styles.airtimeFlexBox]}>
        <Text style={styles.mtnR}>MTN R</Text>
        <Text style={styles.echarge}>echarge</Text>
      </Text>
      <View style={[styles.groupParent, styles.groupPosition]}>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/group-129.png")}
        />
        <Text style={[styles.airtime, styles.airtimeFlexBox]}>Airtime</Text>
      </View>
      <View style={[styles.groupContainer, styles.groupPosition]}>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/group-128.png")}
        />
        <Text style={[styles.airtime, styles.airtimeFlexBox]}>SMS</Text>
      </View>
      <View style={styles.groupView}>
        <Image
          style={styles.groupInner}
          resizeMode="cover"
          source={require("../assets/group-124.png")}
        />
        <Text style={[styles.airtime, styles.airtimeFlexBox]}>Data</Text>
      </View>
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
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_xs,
    right: 0,
    top: 0,
    left: 0,
    height: 41,
    position: "absolute",
  },
  airtimeFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  groupPosition: {
    height: 34,
    top: 5,
    position: "absolute",
  },
  groupLayout: {
    height: 20,
    width: 15,
    top: 0,
    position: "absolute",
  },
  mtnRechargeChild: {
    shadowColor: "rgba(0, 0, 0, 0.5)",
  },
  mtnR: {
    fontSize: FontSize.size_3xl,
  },
  echarge: {
    fontSize: FontSize.size_base,
  },
  mtnRecharge1: {
    top: 9,
    left: 8,
    letterSpacing: "23%",
    textTransform: "uppercase",
    fontFamily: FontFamily.gentiumBasic,
    color: Color.iOSKeyLabel,
  },
  groupChild: {
    left: 11,
  },
  airtime: {
    top: 20,
    fontSize: FontSize.size_3xs,
    letterSpacing: 0.7,
    lineHeight: 14,
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.gray_200,
    left: 0,
    textAlign: "center",
  },
  groupParent: {
    left: 166,
    width: 37,
  },
  groupItem: {
    left: 3,
  },
  groupContainer: {
    left: 216,
    width: 20,
  },
  groupInner: {
    height: "58.82%",
    width: "68.18%",
    top: "0%",
    right: "13.64%",
    bottom: "41.18%",
    left: "18.18%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  groupView: {
    height: "82.93%",
    width: "7.36%",
    top: "12.2%",
    right: "7.02%",
    bottom: "4.88%",
    left: "85.62%",
    position: "absolute",
  },
  tabArea: {
    shadowColor: "rgba(0, 0, 0, 0.94)",
  },
  mtnRecharge: {
    top: 630,
    right: 31,
    left: 30,
    height: 41,
    position: "absolute",
  },
});

export default MtnDataContainer;
