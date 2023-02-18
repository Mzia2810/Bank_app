import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Border, FontFamily, FontSize, Color, Margin } from "../GlobalStyles";

const RequestMoneyReview = ({ onClose }) => {
  return (
    <View style={styles.requestMoneyReview}>
      <Text style={styles.requesting58000XafContainer}>
        <Text style={styles.requesting58000Xaf}>
          <Text>{`Requesting: `}</Text>
          <Text>58,000 XAF</Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
        <Text style={styles.requesting58000Xaf}>
          <Text style={styles.text}>{`          From: `}</Text>
          <Text>
            <Text>JOHN DUDE</Text>
          </Text>
          <Text>
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
      <View style={styles.okBtn}>
        <View style={[styles.btnNext, styles.btnNextLayout]} />
        <Text
          style={[
            styles.send,
            styles.sendLayout,
            styles.sendTypo,
            styles.sendTypo1,
          ]}
        >
          Send
        </Text>
        <View style={[styles.okBtnChild, styles.tabAreaBg]} />
        <View
          style={[styles.tabArea, styles.tabAreaBg, styles.btnNextLayout]}
        />
      </View>
      <View style={[styles.notify, styles.text1Layout]}>
        <Image
          style={[styles.notifyChild, styles.sendLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-126.png")}
        />
        <Text
          style={[
            styles.text1,
            styles.text1Typo,
            styles.text1Layout,
            styles.sendTypo,
          ]}
        >
          !
        </Text>
      </View>
      <Text style={[styles.caution, styles.cautionTypo, styles.text1Typo]}>
        Caution !!!
      </Text>
      <View style={[styles.requestMoneyReviewChild, styles.requestLayout]} />
      <View style={[styles.requestMoneyReviewItem, styles.requestLayout]} />
      <Text
        style={[styles.ifTheInformation, styles.cautionTypo, styles.sendTypo1]}
      >
        If the information above is correct, click the send button to complete
        your request.
      </Text>
      <Image
        style={styles.cancelSvgrepoCom1Icon}
        resizeMode="cover"
        source={require("../assets/cancelsvgrepocom-1.png")}
      />
      <View style={[styles.requestMoneyReviewInner, styles.tabAreaBg]} />
    </View>
  );
};

const styles = StyleSheet.create({
  btnNextLayout: {
    height: 29,
    borderRadius: Border.br_3xs,
    top: 1,
  },
  sendLayout: {
    height: 17,
    position: "absolute",
  },
  sendTypo: {
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
  },
  sendTypo1: {
    letterSpacing: 1.3,
    fontSize: FontSize.size_base,
  },
  tabAreaBg: {
    backgroundColor: Color.gainsboro_700,
    position: "absolute",
  },
  text1Layout: {
    height: 22,
    position: "absolute",
  },
  text1Typo: {
    color: Color.red_100,
    fontWeight: "700",
    lineHeight: 23,
    fontSize: FontSize.size_xl,
  },
  cautionTypo: {
    fontFamily: FontFamily.gentiumBasic,
    textAlign: "center",
    position: "absolute",
  },
  requestLayout: {
    height: 1,
    width: 337,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderStyle: "dashed",
    left: 12,
    position: "absolute",
  },
  text: {
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
  },
  requesting58000Xaf: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
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
  requesting58000XafContainer: {
    top: 45,
    left: 67,
    letterSpacing: 1.5,
    lineHeight: 25,
    whiteSpace: "pre-wrap",
    textAlign: "left",
    width: 203,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  btnNext: {
    left: 1,
    backgroundColor: Color.gold_100,
    width: 104,
    position: "absolute",
  },
  send: {
    top: 7,
    left: 26,
    lineHeight: 17,
    width: 54,
    color: Color.gray_2000,
  },
  okBtnChild: {
    shadowColor: "rgba(0, 0, 0, 0.8)",
    left: 0,
    top: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.gainsboro_700,
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
    top: 210,
    height: 30,
    width: 105,
    left: 120,
    position: "absolute",
  },
  notifyChild: {
    top: 3,
    width: 15,
    left: 0,
  },
  text1: {
    left: 5,
    width: 4,
    top: 0,
  },
  notify: {
    top: 16,
    width: 15,
    left: 120,
    height: 22,
  },
  caution: {
    top: 15,
    left: 143,
  },
  requestMoneyReviewChild: {
    top: 182,
    borderColor: "#c1c1c1",
  },
  requestMoneyReviewItem: {
    top: 128,
    borderColor: "#ccc",
  },
  ifTheInformation: {
    top: 131,
    left: 15,
    lineHeight: 22,
    width: 321,
    height: 48,
    color: Color.iOSKeyLabel,
  },
  cancelSvgrepoCom1Icon: {
    top: 14,
    left: 322,
    width: 10,
    height: 10,
    position: "absolute",
    overflow: "hidden",
  },
  requestMoneyReviewInner: {
    left: 298,
    width: 59,
    height: 42,
    top: 1,
    backgroundColor: Color.gainsboro_700,
  },
  requestMoneyReview: {
    borderTopLeftRadius: Border.br_2xl,
    borderTopRightRadius: Border.br_2xl,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 360,
    height: 261,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
});

export default RequestMoneyReview;
