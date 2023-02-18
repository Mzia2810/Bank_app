import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Color, FontSize, FontFamily, Border, Margin } from "../GlobalStyles";

const SendMoneyOthers = ({ onClose }) => {
  return (
    <View style={styles.sendMoneyOthers}>
      <View style={styles.notify}>
        <Image
          style={styles.notifyChild}
          resizeMode="cover"
          source={require("../assets/ellipse-122.png")}
        />
        <Text style={[styles.text, styles.textFlexBox, styles.textTypo]}>
          !
        </Text>
      </View>
      <Text style={[styles.caution, styles.textFlexBox, styles.textTypo]}>
        Caution !!!
      </Text>
      <View style={[styles.sendMoneyOthersChild, styles.sendLayout]} />
      <View style={[styles.sendMoneyOthersItem, styles.sendLayout]} />
      <Text style={[styles.ifTheInformation, styles.sendTypo]}>
        If the information above is correct, enter your MoMo PIN below to send
      </Text>
      <Image
        style={[
          styles.cancelSvgrepoCom1Icon,
          styles.cancelSvgrepoCom1IconPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/cancelsvgrepocom-1.png")}
      />
      <View style={styles.pin1}>
        <View style={[styles.okBtn, styles.btnLayout, styles.btnLayout1]}>
          <View
            style={[
              styles.btnNext,
              styles.btnNextBg,
              styles.btnLayout,
              styles.btnLayout1,
            ]}
          />
          <Text style={[styles.send, styles.sendTypo]}>Send</Text>
          <View style={[styles.tabArea, styles.btnLayout]} />
        </View>
        <View style={styles.rectangleParent}>
          <View
            style={[
              styles.groupChild,
              styles.groupBorder,
              styles.groupChildPosition,
            ]}
          />
          <View style={[styles.rectangleWrapper, styles.groupInnerLayout]}>
            <View
              style={[styles.groupItem, styles.groupBorder, styles.btnNextBg]}
            />
          </View>
          <Text style={styles.enterYourMomo}>Enter Your MoMo PIN</Text>
          <Text style={styles.enterYourMomo1}>Enter your MoMo PIN Code</Text>
          <View style={[styles.showParent, styles.groupChildPosition]}>
            <Text style={[styles.show, styles.textFlexBox]}>Show</Text>
            <Image
              style={[
                styles.icons8EyeUnchecked502,
                styles.cancelSvgrepoCom1IconPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/icons8eyeunchecked50-2.png")}
            />
            <View style={[styles.groupInner, styles.groupInnerLayout]} />
          </View>
        </View>
      </View>
      <Text style={[styles.amount92000XafContainer, styles.sendingTypo]}>
        <Text style={styles.amount92000Xaf}>
          <Text>{`       Amount: `}</Text>
          <Text>92,000 XAF</Text>
          <Text style={styles.text1}>{` `}</Text>
        </Text>
        <Text style={styles.amount92000Xaf}>
          <Text style={styles.text1}> TO</Text>
        </Text>
        <Text style={styles.amount92000Xaf}>
          <Text style={styles.text1}>{`   Swift Code: `}</Text>
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
      <Text style={[styles.sending, styles.sendingTypo]}>SENDING</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  textTypo: {
    color: Color.red_100,
    fontWeight: "700",
    lineHeight: 23,
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  sendLayout: {
    height: 1,
    width: 337,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderStyle: "dashed",
    left: 12,
    position: "absolute",
  },
  sendTypo: {
    letterSpacing: 1.3,
    fontSize: FontSize.size_base,
    textAlign: "center",
    position: "absolute",
  },
  cancelSvgrepoCom1IconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  btnLayout: {
    height: 29,
    position: "absolute",
  },
  btnLayout1: {
    width: 104,
    height: 29,
  },
  btnNextBg: {
    backgroundColor: Color.blue_100,
    top: 0,
  },
  groupBorder: {
    borderColor: "#0000ee",
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  groupChildPosition: {
    top: 28,
    height: 41,
  },
  groupInnerLayout: {
    width: 64,
    position: "absolute",
  },
  sendingTypo: {
    lineHeight: 25,
    letterSpacing: 1.5,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  notifyChild: {
    top: 3,
    height: 17,
    left: 0,
    width: 15,
    position: "absolute",
  },
  text: {
    width: 4,
    fontFamily: FontFamily.gentiumBookBasic,
    left: 5,
    color: Color.red_100,
    fontWeight: "700",
    lineHeight: 23,
    fontSize: FontSize.size_xl,
    top: 0,
    height: 22,
  },
  notify: {
    top: 16,
    left: 120,
    height: 22,
    width: 15,
    position: "absolute",
  },
  caution: {
    top: 15,
    left: 143,
    fontFamily: FontFamily.gentiumBasic,
  },
  sendMoneyOthersChild: {
    borderColor: "#c1c1c1",
    top: 199,
  },
  sendMoneyOthersItem: {
    top: 159,
    borderColor: "#ccc",
  },
  ifTheInformation: {
    top: 156,
    left: 15,
    lineHeight: 22,
    width: 321,
    height: 48,
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBasic,
  },
  cancelSvgrepoCom1Icon: {
    top: 14,
    left: 322,
    width: 10,
    height: 10,
  },
  btnNext: {
    borderRadius: Border.br_3xs,
    left: 0,
  },
  send: {
    top: 6,
    left: 25,
    lineHeight: 17,
    color: Color.gray_2100,
    width: 54,
    fontFamily: FontFamily.gentiumBookBasic,
    height: 17,
  },
  tabArea: {
    left: 1,
    backgroundColor: Color.gainsboro_700,
    width: 102,
    borderRadius: Border.br_3xs,
    top: 0,
  },
  okBtn: {
    top: 96,
    left: 97,
  },
  groupChild: {
    borderWidth: 0.3,
    height: 41,
    borderRadius: Border.br_3xs,
    width: 300,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  groupItem: {
    borderRadius: Border.br_6xs,
    borderWidth: 1,
    width: 65,
    height: 40,
  },
  rectangleWrapper: {
    top: 29,
    height: 39,
    left: 236,
  },
  enterYourMomo: {
    width: 155,
    textAlign: "left",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    lineHeight: 23,
    fontSize: FontSize.size_xl,
    top: 0,
    left: 0,
    position: "absolute",
  },
  enterYourMomo1: {
    top: 37,
    letterSpacing: 1.8,
    lineHeight: 20,
    color: Color.gray_2200,
    width: 212,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.gentiumBasic,
    textAlign: "center",
    left: 5,
    position: "absolute",
  },
  show: {
    top: 7,
    left: 13,
    fontSize: FontSize.size_3xs,
    letterSpacing: 2.3,
    lineHeight: 14,
    textTransform: "uppercase",
    color: Color.iOSKeyBackgroundHighlight,
    width: 37,
    height: 15,
    fontFamily: FontFamily.gentiumBasic,
  },
  icons8EyeUnchecked502: {
    top: 17,
    left: 21,
    width: 19,
    height: 19,
  },
  groupInner: {
    backgroundColor: Color.gray_2300,
    height: 41,
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
  },
  showParent: {
    right: 0,
    left: 236,
    height: 41,
    position: "absolute",
  },
  rectangleParent: {
    height: 69,
    width: 300,
    top: 0,
    left: 0,
    position: "absolute",
  },
  pin1: {
    left: 30,
    height: 125,
    width: 300,
    top: 199,
    position: "absolute",
  },
  text1: {
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
    top: 55,
    left: 61,
    whiteSpace: "pre-wrap",
    width: 226,
    height: 94,
  },
  sending: {
    top: 38,
    left: 144,
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
  },
  sendMoneyOthers: {
    borderRadius: Border.br_2xl,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 360,
    height: 338,
    maxWidth: "100%",
    maxHeight: "100%",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
});

export default SendMoneyOthers;
