import * as React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Margin, Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const RecentTransactionsShortNew1 = ({ onClose }) => {
  return (
    <View style={styles.recentTransactionsShortNew}>
      <View style={styles.recentTransactionsShortNewChild} />
      <Text style={styles.recentTransactions}>Recent Transactions</Text>
      <View style={styles.tabArea} />
      <View style={styles.groupParent}>
        <View style={styles.groupChildLayout}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Text style={[styles.stellaClaireLum, styles.luisTypo]}>
            Stella Claire Lum Nee Slamamangarie
          </Text>
          <Image
            style={[styles.profileIcon, styles.profileIconLayout]}
            resizeMode="cover"
            source={require("../assets/profile4.png")}
          />
          <View
            style={[styles.jul18th530pmParent, styles.jul18th530pmPosition]}
          >
            <Text style={[styles.jul18th, styles.jul18thLayout]}>
              Jul 18th - 5:30pm
            </Text>
            <Text style={styles.transfer}>Transfer</Text>
          </View>
          <View style={[styles.xafParent, styles.xafLayout1]}>
            <Text style={[styles.xaf, styles.xafLayout, styles.xafPosition]}>
              21,000 XAF
            </Text>
            <Image
              style={[styles.groupIcon, styles.groupIconPosition]}
              resizeMode="cover"
              source={require("../assets/group98.png")}
            />
            <View
              style={[
                styles.rectangleGroup,
                styles.groupLayout,
                styles.xafPosition,
              ]}
            >
              <View style={[styles.groupItem, styles.groupItemLayout]} />
              <Text style={styles.delivered}>Delivered</Text>
            </View>
          </View>
        </View>
        <View style={[styles.groupChildLayout, styles.mt9]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Text style={[styles.luisNanaDibango, styles.luisTypo]}>
            Luis Nana Dibango Ebonggo
          </Text>
          <Text style={[styles.jul18th1, styles.jul18thLayout]}>
            Jul 18th - 5:30pm
          </Text>
          <Text style={[styles.request, styles.requestTypo]}>Request</Text>
          <View style={[styles.xafGroup, styles.xafLayout1]}>
            <Text style={[styles.xaf1, styles.xaf1Position, styles.xafLayout]}>
              21,000 XAF
            </Text>
            <Image
              style={[styles.groupIcon1, styles.groupIconPosition]}
              resizeMode="cover"
              source={require("../assets/group159.png")}
            />
            <View
              style={[
                styles.groupView,
                styles.xaf1Position,
                styles.groupLayout,
              ]}
            >
              <View style={[styles.rectangleView, styles.groupItemLayout]} />
              <Text style={styles.delivered}>Declined</Text>
            </View>
          </View>
          <Image
            style={[styles.profileIcon1, styles.profileIconLayout]}
            resizeMode="cover"
            source={require("../assets/profile5.png")}
          />
        </View>
        <View style={[styles.groupChildLayout, styles.mt9]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Text style={[styles.luisNana, styles.luisTypo]}>Luis Nana</Text>
          <Image
            style={[styles.profileIcon2, styles.profileIconLayout]}
            resizeMode="cover"
            source={require("../assets/profile6.png")}
          />
          <View style={[styles.jul18th530pmGroup, styles.jul18th530pmPosition]}>
            <Text style={[styles.jul18th2, styles.jul18thLayout]}>
              Jul 18th - 5:30pm
            </Text>
            <Text style={[styles.request1, styles.requestTypo]}>Request</Text>
          </View>
          <View style={[styles.xafGroup, styles.xafLayout1]}>
            <Text style={[styles.xaf1, styles.xaf1Position, styles.xafLayout]}>
              21,000 XAF
            </Text>
            <Image
              style={[styles.groupIcon1, styles.groupIconPosition]}
              resizeMode="cover"
              source={require("../assets/group159.png")}
            />
            <View
              style={[
                styles.groupView,
                styles.xaf1Position,
                styles.groupLayout,
              ]}
            >
              <View style={[styles.groupItem, styles.groupItemLayout]} />
              <Text style={styles.delivered}>Delivered</Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.viewAll}>View All</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt9: {
    marginTop: Margin.m_lg,
  },
  groupChildLayout: {
    height: 90,
    width: 335,
  },
  luisTypo: {
    height: 18,
    textAlign: "left",
    color: Color.gray_2000,
    lineHeight: 17,
    letterSpacing: 0.1,
    fontSize: FontSize.size_base,
    left: 72,
    top: 27,
    fontFamily: FontFamily.gentiumBasic,
    position: "absolute",
  },
  profileIconLayout: {
    width: "14.93%",
    height: "55.56%",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  jul18th530pmPosition: {
    height: 20,
    top: 4,
    position: "absolute",
  },
  jul18thLayout: {
    width: 109,
    fontFamily: FontFamily.gentiumBookBasic,
    height: 20,
    textAlign: "left",
    color: Color.gray_2000,
    lineHeight: 17,
    letterSpacing: 0.1,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  xafLayout1: {
    height: 35,
    position: "absolute",
  },
  xafLayout: {
    height: 17,
    width: 77,
    color: Color.gray_2000,
    letterSpacing: 0.1,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 19,
    fontSize: FontSize.size_xl,
  },
  xafPosition: {
    top: 10,
    position: "absolute",
  },
  groupIconPosition: {
    left: "0%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupLayout: {
    width: 82,
    height: 19,
  },
  groupItemLayout: {
    borderRadius: Border.br_4xs,
    width: 82,
    height: 19,
    left: 0,
    top: 0,
    position: "absolute",
  },
  requestTypo: {
    width: 45,
    height: 19,
    color: Color.dimgray_300,
    fontStyle: "italic",
    lineHeight: 17,
    letterSpacing: 0.1,
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
    position: "absolute",
  },
  xaf1Position: {
    top: 9,
    position: "absolute",
  },
  recentTransactionsShortNewChild: {
    height: "78.71%",
    width: "100.28%",
    right: "0.28%",
    bottom: "21.29%",
    left: "-0.56%",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    top: "0%",
    position: "absolute",
  },
  recentTransactions: {
    top: 15,
    left: 13,
    letterSpacing: 1.5,
    fontWeight: "700",
    color: Color.iOSKeyLabel,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 19,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  tabArea: {
    top: 116,
    left: 139,
    backgroundColor: Color.gainsboro_700,
    width: 87,
    height: 49,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_2xs,
    backgroundColor: Color.whitesmoke_300,
    left: 0,
    top: 0,
    position: "absolute",
  },
  stellaClaireLum: {
    width: 223,
  },
  profileIcon: {
    top: "18.89%",
    right: "81.49%",
    bottom: "25.56%",
    left: "3.58%",
  },
  jul18th: {
    left: 82,
    top: 0,
  },
  transfer: {
    width: 49,
    height: 19,
    color: Color.dimgray_300,
    fontStyle: "italic",
    lineHeight: 17,
    letterSpacing: 0.1,
    fontSize: FontSize.size_base,
    left: 0,
    top: 0,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
    position: "absolute",
  },
  jul18th530pmParent: {
    left: 143,
    width: 191,
  },
  xaf: {
    left: 179,
  },
  groupIcon: {
    width: "9.13%",
    right: "90.87%",
  },
  groupItem: {
    backgroundColor: Color.limegreen_100,
  },
  delivered: {
    left: 7,
    fontSize: FontSize.size_xs,
    lineHeight: 14,
    color: Color.iOSKeyBackgroundHighlight,
    width: 70,
    height: 11,
    top: 1,
    fontFamily: FontFamily.gentiumBookBasic,
    letterSpacing: 0.1,
    textAlign: "center",
    position: "absolute",
  },
  rectangleGroup: {
    left: 58,
  },
  xafParent: {
    top: 50,
    left: 73,
    width: 256,
  },
  luisNanaDibango: {
    width: 174,
  },
  jul18th1: {
    left: 225,
    top: 4,
    width: 109,
  },
  request: {
    top: 5,
    left: 142,
  },
  xaf1: {
    left: 182,
  },
  groupIcon1: {
    width: "9.01%",
    right: "90.99%",
  },
  rectangleView: {
    backgroundColor: Color.red_100,
  },
  groupView: {
    left: 61,
  },
  xafGroup: {
    top: 51,
    left: 70,
    width: 259,
  },
  profileIcon1: {
    top: "20%",
    right: "80.9%",
    bottom: "24.44%",
    left: "4.18%",
  },
  luisNana: {
    width: 62,
  },
  profileIcon2: {
    top: "12.22%",
    right: "82.69%",
    bottom: "32.22%",
    left: "2.39%",
  },
  jul18th2: {
    left: 83,
    top: 0,
  },
  request1: {
    top: 1,
    left: 0,
  },
  jul18th530pmGroup: {
    width: 192,
    left: 142,
  },
  groupParent: {
    top: 43,
    left: 11,
    position: "absolute",
  },
  viewAll: {
    top: 345,
    left: 19,
    textDecoration: "underline",
    color: Color.blue_100,
    display: "flex",
    alignItems: "flex-end",
    width: 54,
    height: 16,
    fontStyle: "italic",
    fontFamily: FontFamily.gentiumBookBasic,
    textAlign: "left",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  recentTransactionsShortNew: {
    borderRadius: Border.br_2xl,
    backgroundColor: Color.gold_100,
    width: 360,
    height: 371,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
});

export default RecentTransactionsShortNew1;
