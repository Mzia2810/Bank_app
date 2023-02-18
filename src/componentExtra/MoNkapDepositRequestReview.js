import * as React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Border, Color, FontFamily, Margin } from "../GlobalStyles";

const MoNkapDepositRequestReview = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.monkapDepositRequestReview, styles.monkapLayout]}>
      <Text style={[styles.amount92000XafContainer, styles.fromTypo]}>
        <Text style={styles.amount92000Xaf}>
          <Text>{`       Amount: `}</Text>
          <Text>92,000 XAF</Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
        <Text style={styles.amount92000Xaf}>
          <Text style={styles.text}>{`   Swift Code: `}</Text>
          <Text>
            <Text>ECOCCMCX</Text>
          </Text>
          <Text>
            <Text>{` `}</Text>
          </Text>
        </Text>
        <Text style={styles.accountN0140098271001}>
          <Text style={styles.accountN0}>
            <Text style={styles.accountN01}> Account N0:</Text>
            <Text>{` `}</Text>
          </Text>
          <Text>
            <Text>140098271001</Text>
          </Text>
        </Text>
      </Text>
      <View style={styles.okBtn}>
        <View style={[styles.btnNext, styles.btnNextLayout]} />
        <Text style={styles.send}>Send</Text>
        <View
          style={[
            styles.okBtnChild,
            styles.tabAreaBg,
            styles.okBtnChildPosition,
          ]}
        />
        <Pressable
          style={[styles.tabArea, styles.tabAreaBg, styles.btnNextLayout]}
          onPress={() => navigation.navigate("Deposit")}
        />
      </View>
      <View style={styles.notifyParent}>
        <View style={[styles.notify, styles.notifyPosition]}>
          <Image
            style={[styles.notifyChild, styles.notifyPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-122.png")}
          />
          <Text style={[styles.text1, styles.text1Typo]}>!</Text>
        </View>
        <Text style={[styles.cautionRequesting, styles.text1Typo]}>
          Caution!! - Requesting To Deposit
        </Text>
      </View>
      <View style={[styles.lineParent, styles.lineLayout]}>
        <View style={[styles.groupChild, styles.groupLayout1]} />
        <View style={[styles.groupItem, styles.groupLayout1]} />
        <Text
          style={[styles.ifTheInformationContainer, styles.containerPosition]}
        >
          <Text
            style={styles.ifTheInformation}
          >{`If the information above is correct, click the send button to complete `}</Text>
          <Text style={styles.deposit}>Deposit</Text>
          <Text style={styles.ifTheInformation}>{` `}</Text>
          <Text style={styles.deposit}>Request</Text>
          <Text style={styles.ifTheInformation}>.</Text>
        </Text>
      </View>
      <View style={[styles.lineGroup, styles.lineLayout]}>
        <View style={[styles.groupChild, styles.groupLayout1]} />
        <Text
          style={[styles.pleaseBePatientContainer, styles.containerPosition]}
        >
          <Text style={styles.amount92000Xaf}>
            <Text style={styles.ifTheInformation}>Please be patient,</Text>
          </Text>
          <Text style={styles.accountN0140098271001}>
            <Text>140098271001</Text>
            <Text style={styles.ifTheInformation}>
              {" "}
              is required to approve the deposit
            </Text>
          </Text>
        </Text>
      </View>
      <View style={[styles.group, styles.groupLayout]}>
        <Image
          style={[styles.vectorIcon, styles.groupLayout, styles.monkapLayout]}
          resizeMode="cover"
          source={require("../assets/cancelsvgrepocom-1.png")}
        />
        <View
          style={[
            styles.rectangleView,
            styles.tabAreaBg,
            styles.okBtnChildPosition,
          ]}
        />
      </View>
      <Text style={[styles.from, styles.fromTypo]}>FROM</Text>
      <Image
        style={[styles.monkapDepositRequestReviewChild, styles.monkapLayout]}
        resizeMode="cover"
        source={require("../assets/group-2394.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  monkapLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  fromTypo: {
    textAlign: "left",
    lineHeight: 25,
    letterSpacing: 1.5,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  btnNextLayout: {
    height: 29,
    borderRadius: Border.br_3xs,
    top: 1,
  },
  tabAreaBg: {
    backgroundColor: Color.gainsboro_700,
    position: "absolute",
  },
  okBtnChildPosition: {
    left: 0,
    backgroundColor: Color.gainsboro_700,
    top: 0,
  },
  notifyPosition: {
    width: 15,
    left: 0,
    position: "absolute",
  },
  text1Typo: {
    fontWeight: "700",
    lineHeight: 23,
    color: Color.red_100,
    top: 0,
    textAlign: "center",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  lineLayout: {
    width: 337,
    position: "absolute",
  },
  groupLayout1: {
    height: 1,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderStyle: "dashed",
    width: 337,
    left: 1,
    position: "absolute",
  },
  containerPosition: {
    lineHeight: 22,
    left: 0,
    textAlign: "center",
    letterSpacing: 1.3,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  groupLayout: {
    width: "16.67%",
    position: "absolute",
  },
  text: {
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
  },
  amount92000Xaf: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  accountN01: {
    color: Color.gray_2000,
  },
  accountN0: {
    fontFamily: FontFamily.gentiumBookBasic,
  },
  accountN0140098271001: {
    margin: Margin.m_3xs,
  },
  amount92000XafContainer: {
    top: 61,
    left: 67,
    whiteSpace: "pre-wrap",
    width: 226,
    height: 72,
  },
  btnNext: {
    backgroundColor: Color.blue_100,
    width: 104,
    left: 1,
    height: 29,
    position: "absolute",
  },
  send: {
    top: 7,
    left: 26,
    lineHeight: 17,
    color: Color.gray_2100,
    width: 54,
    height: 17,
    textAlign: "center",
    letterSpacing: 1.3,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  okBtnChild: {
    shadowColor: "rgba(0, 0, 0, 0.8)",
    borderRadius: Border.br_3xs,
    left: 0,
    height: 30,
    width: 105,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  tabArea: {
    left: 2,
    width: 102,
  },
  okBtn: {
    top: 252,
    left: 128,
    height: 30,
    width: 105,
    position: "absolute",
  },
  notifyChild: {
    top: 3,
    height: 17,
  },
  text1: {
    left: 5,
    width: 4,
    color: Color.red_100,
    height: 22,
    fontFamily: FontFamily.gentiumBookBasic,
  },
  notify: {
    height: 22,
    top: 1,
    width: 15,
  },
  cautionRequesting: {
    left: 22,
    fontFamily: FontFamily.gentiumBasic,
    color: Color.red_100,
  },
  notifyParent: {
    top: 19,
    left: 51,
    width: 257,
    height: 23,
    position: "absolute",
  },
  groupChild: {
    borderColor: "#c1c1c1",
    top: 0,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderStyle: "dashed",
  },
  groupItem: {
    top: 56,
    borderColor: "#ccc",
  },
  ifTheInformation: {
    fontFamily: FontFamily.gentiumBasic,
    color: Color.iOSKeyLabel,
  },
  deposit: {
    fontStyle: "italic",
    fontFamily: FontFamily.gentiumBasic,
    color: Color.red_100,
  },
  ifTheInformationContainer: {
    top: 8,
    width: 321,
    height: 48,
  },
  lineParent: {
    top: 189,
    left: 12,
    height: 56,
  },
  pleaseBePatientContainer: {
    top: 4,
    width: 336,
    height: 43,
  },
  lineGroup: {
    top: 137,
    left: 13,
    height: 47,
  },
  vectorIcon: {
    height: "25%",
    top: "32.5%",
    right: "40%",
    bottom: "42.5%",
    left: "43.33%",
  },
  rectangleView: {
    width: 60,
    height: 40,
  },
  group: {
    height: "13.51%",
    top: "0.34%",
    right: "-1.11%",
    bottom: "86.15%",
    left: "84.44%",
  },
  from: {
    top: 39,
    left: 150,
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
  },
  monkapDepositRequestReviewChild: {
    height: "10.81%",
    width: "8.89%",
    top: "33.11%",
    right: "14.72%",
    bottom: "56.08%",
    left: "76.39%",
    position: "absolute",
  },
  monkapDepositRequestReview: {
    borderTopLeftRadius: Border.br_2xl,
    borderTopRightRadius: Border.br_2xl,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 360,
    height: 296,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    maxWidth: "100%",
    overflow: "hidden",
  },
});

export default MoNkapDepositRequestReview;
