import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FontSize, Color, Border, FontFamily, Margin } from "../GlobalStyles";

const DepositRequestReview = ({ onClose }) => {
  return (
    <View style={[styles.depositRequestReview, styles.okBtnChildShadowBox]}>
      <Text style={styles.depositing92000XafContainer}>
        <Text style={styles.depositing92000Xaf}>
          <Text>{`  Depositing: `}</Text>
          <Text>92,000 XAF</Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
        <Text style={styles.depositing92000Xaf}>
          <Text>{`      Through: `}</Text>
          <Text style={styles.bonangohEnterprise}>
            <Text
              style={styles.bonangohEnterprise1}
            >{`BONANGOH ENTERPRISE `}</Text>
          </Text>
        </Text>
        <Text style={styles.depositing92000Xaf}>
          <Text style={styles.bonangohEnterprise}>
            <Text style={styles.bonangohEnterprise1}>
              {" "}
              SARL, Bonaberi, Douala
            </Text>
            <Text>{` `}</Text>
          </Text>
        </Text>
        <Text style={styles.phoneN0674390548}>
          <Text style={styles.phoneN0}>
            <Text style={styles.phoneN01}> Phone N0:</Text>
            <Text>{` `}</Text>
          </Text>
          <Text>
            <Text>674 39 05 48</Text>
          </Text>
        </Text>
      </Text>
      <View style={[styles.okBtn, styles.btnLayout]}>
        <View style={[styles.btnNext, styles.btnNextLayout]} />
        <Text style={[styles.send, styles.sendTypo]}>Send</Text>
        <View
          style={[
            styles.okBtnChild,
            styles.tabAreaBg,
            styles.btnLayout,
            styles.okBtnChildShadowBox,
          ]}
        />
        <View
          style={[styles.tabArea, styles.tabAreaBg, styles.btnNextLayout]}
        />
      </View>
      <View style={styles.notifyParent}>
        <View style={[styles.notify, styles.notifyPosition]}>
          <Image
            style={[styles.notifyChild, styles.notifyPosition]}
            resizeMode="cover"
            source={require("../assets/ellipse-126.png")}
          />
          <Text style={[styles.text1, styles.text1Typo]}>!</Text>
        </View>
        <Text style={[styles.cautionRequesting, styles.text1Typo]}>
          Caution!! - Requesting To Deposit
        </Text>
      </View>
      <View style={styles.lineParent}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.ifTheInformationContainer, styles.sendTypo]}>
          <Text
            style={styles.ifTheInformation}
          >{`If the information above is correct, click the send button to complete `}</Text>
          <Text style={styles.deposit}>Deposit</Text>
          <Text style={styles.ifTheInformation}>{` `}</Text>
          <Text style={styles.deposit}>Request</Text>
          <Text style={styles.ifTheInformation}>.</Text>
        </Text>
      </View>
      <Image
        style={styles.cancelSvgrepoCom1Icon}
        resizeMode="cover"
        source={require("../assets/cancelsvgrepocom-1.png")}
      />
      <View style={styles.depositRequestReviewChild} />
    </View>
  );
};

const styles = StyleSheet.create({
  okBtnChildShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  btnLayout: {
    height: 30,
    width: 105,
  },
  btnNextLayout: {
    height: 29,
    top: 1,
  },
  sendTypo: {
    textAlign: "center",
    letterSpacing: 1.3,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  tabAreaBg: {
    backgroundColor: Color.gainsboro_700,
    borderRadius: Border.br_3xs,
    position: "absolute",
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
  groupLayout: {
    height: 1,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderStyle: "dashed",
    width: 337,
    left: 1,
    position: "absolute",
  },
  text: {
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
  },
  depositing92000Xaf: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  bonangohEnterprise1: {
    fontStyle: "italic",
    fontFamily: FontFamily.gentiumBookBasic,
  },
  bonangohEnterprise: {
    color: Color.blue_100,
  },
  phoneN01: {
    color: Color.gray_2000,
  },
  phoneN0: {
    fontFamily: FontFamily.gentiumBookBasic,
  },
  phoneN0674390548: {
    margin: Margin.m_3xs,
  },
  depositing92000XafContainer: {
    left: 33,
    letterSpacing: 1.5,
    lineHeight: 25,
    whiteSpace: "pre-wrap",
    textAlign: "left",
    width: 310,
    height: 113,
    fontSize: FontSize.size_xl,
    top: 56,
    position: "absolute",
  },
  btnNext: {
    backgroundColor: Color.gold_100,
    width: 104,
    borderRadius: Border.br_3xs,
    left: 1,
    height: 29,
    position: "absolute",
  },
  send: {
    top: 7,
    left: 26,
    lineHeight: 17,
    width: 54,
    height: 17,
    color: Color.gray_2000,
    fontFamily: FontFamily.gentiumBookBasic,
  },
  okBtnChild: {
    shadowColor: "rgba(0, 0, 0, 0.8)",
    left: 0,
    top: 0,
  },
  tabArea: {
    left: 2,
    width: 102,
  },
  okBtn: {
    top: 252,
    left: 128,
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
    left: 38,
    width: 257,
    height: 23,
    position: "absolute",
  },
  groupChild: {
    borderColor: "#c1c1c1",
    top: 0,
  },
  groupItem: {
    borderColor: "#ccc",
    top: 56,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderStyle: "dashed",
  },
  ifTheInformation: {
    fontFamily: FontFamily.gentiumBasic,
    color: Color.iOSKeyLabel,
  },
  deposit: {
    fontFamily: FontFamily.gentiumBasic,
    color: Color.red_100,
    fontStyle: "italic",
  },
  ifTheInformationContainer: {
    top: 8,
    lineHeight: 22,
    width: 321,
    height: 48,
    left: 0,
  },
  lineParent: {
    top: 176,
    left: 12,
    height: 56,
    width: 337,
    position: "absolute",
  },
  cancelSvgrepoCom1Icon: {
    top: 14,
    left: 322,
    width: 10,
    height: 10,
    position: "absolute",
    overflow: "hidden",
  },
  depositRequestReviewChild: {
    top: 4,
    left: 297,
    backgroundColor: Color.gainsboro_400,
    width: 60,
    height: 40,
    opacity: 0,
    position: "absolute",
  },
  depositRequestReview: {
    borderTopLeftRadius: Border.br_2xl,
    borderTopRightRadius: Border.br_2xl,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 360,
    height: 296,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
});

export default DepositRequestReview;
