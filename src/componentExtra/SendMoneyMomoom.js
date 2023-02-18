import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Color, FontSize, Border, FontFamily, Margin } from "../../GlobalStyle";

const SendMoneyMomoom = ({ onClose }) => {
  return (
    <View
      style={[
        styles.sendMoneyMomoom,
        styles.mtnLayout,
        styles.okBtnChildShadowBox,
        
      ]}
    >
      <Text style={styles.sending58000XafContainer}>
        <Text style={styles.sending58000Xaf}>
          <Text>{`    Sending: `}</Text>
          <Text>58,000 XAF</Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
        <Text style={styles.sending58000Xaf}>
          <Text style={styles.text}>{`             To: `}</Text>
          <Text>
            <Text>JOHN DUDE</Text>
          </Text>
          <Text>
            <Text>{` `}</Text>
          </Text>
        </Text>
        <Text style={styles.phoneN0674390548}>
          <Text style={styles.phoneN0}>
            <Text> Phone N0:</Text>
            <Text style={styles.text1}>{` `}</Text>
          </Text>
          <Text>
            <Text>674 39 05 48</Text>
          </Text>
        </Text>
      </Text>
      <View style={styles.notify}>
        <Image
          style={styles.notifyChild}
          resizeMode="cover"
          source={require("../../assets/ellipse-122.png")}
        />
        <Text style={[styles.text2, styles.text2FlexBox, styles.text2Typo]}>
          !
        </Text>
      </View>
      <Text style={[styles.caution, styles.text2FlexBox, styles.text2Typo]}>
        Caution !!!
      </Text>
      <View style={[styles.sendMoneyMomoomChild, styles.sendLayout]} />
      <View style={[styles.sendMoneyMomoomItem, styles.sendLayout]} />
      <Text
        style={[styles.ifTheInformation, styles.sendTypo, styles.text2FlexBox]}
      >
        If the information above is correct, enter your MoMo PIN below to send
      </Text>
      <Image
        style={[styles.cancelSvgrepoCom1Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../../assets/cancelsvgrepocom-1.png")}
      />
      <View style={styles.pin1}>
        <View style={[styles.okBtn, styles.btnLayout]}>
          <View style={[styles.btnNext, styles.btnNextLayout]} />
          <Text style={[styles.send, styles.sendPosition, styles.sendTypo]}>
            Send
          </Text>
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
        <View style={styles.rectangleParent}>
          <View
            style={[
              styles.groupChild,
              styles.groupBorder,
              styles.groupChildPosition,
            ]}
          />
          <View style={[styles.rectangleWrapper, styles.groupInnerLayout]}>
            <View style={[styles.groupItem, styles.groupBorder]} />
          </View>
          <Text style={styles.enterYourMomo}>Enter Your MoMo PIN</Text>
          <Text style={styles.enterYourMomo1}>Enter your MoMo PIN Code</Text>
          <View style={[styles.showParent, styles.groupChildPosition]}>
            <Text style={[styles.show, styles.sendPosition]}>Show</Text>
            <Image
              style={[styles.icons8EyeUnchecked502, styles.iconPosition]}
              resizeMode="cover"
              source={require("../../assets/icons8eyeunchecked50-2.png")}
            />
            <View style={[styles.groupInner, styles.groupInnerLayout]} />
          </View>
        </View>
      </View>
      <Image
        style={[
          styles.mtnMmLogoGenericMtnMobileIcon,
          styles.iconPosition,
          styles.mtnLayout,
        ]}
        resizeMode="cover"
        source={require("../../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-12.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mtnLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  okBtnChildShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  text2FlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  text2Typo: {
    color: Color.red_100,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 23,
    fontSize: FontSize.size_xl,
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
  },
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  btnLayout: {
    height: 30,
    width: 105,
  },
  btnNextLayout: {
    height: 29,
    top: 1,
  },
  sendPosition: {
    top: 7,
    textAlign: "center",
    position: "absolute",
  },
  tabAreaBg: {
    backgroundColor: Color.gainsboro_700,
    borderRadius: Border.br_3xs,
    position: "absolute",
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
  text: {
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
  },
  sending58000Xaf: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text1: {
    color: Color.blue_100,
  },
  phoneN0: {
    fontFamily: FontFamily.gentiumBookBasic,
  },
  phoneN0674390548: {
    margin: Margin.m_3xs,
  },
  sending58000XafContainer: {
    top: 45,
    left: 67,
    letterSpacing: 1.5,
    lineHeight: 25,
    whiteSpace: "pre-wrap",
    width: 203,
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
  text2: {
    width: 4,
    left: 5,
    color: Color.red_100,
    fontWeight: "700",
    top: 0,
    height: 22,
    fontFamily: FontFamily.gentiumBookBasic,
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
  sendMoneyMomoomChild: {
    top: 182,
    borderColor: "#c1c1c1",
  },
  sendMoneyMomoomItem: {
    top: 128,
    borderColor: "#ccc",
  },
  ifTheInformation: {
    top: 136,
    left: 15,
    lineHeight: 22,
    width: 321,
    height: 48,
    fontFamily: FontFamily.gentiumBasic,
    color: Color.iOSKeyLabel,
  },
  cancelSvgrepoCom1Icon: {
    top: 14,
    left: 322,
    width: 10,
    height: 10,
  },
  btnNext: {
    left: 1,
    width: 104,
    backgroundColor: Color.blue_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  send: {
    left: 26,
    lineHeight: 17,
    color: Color.gray_2100,
    width: 54,
    height: 17,
    fontFamily: FontFamily.gentiumBookBasic,
  },
  okBtnChild: {
    shadowColor: "rgba(0, 0, 0, 0.8)",
    top: 0,
    left: 0,
  },
  tabArea: {
    left: 2,
    width: 102,
  },
  okBtn: {
    top: 95,
    left: 96,
    position: "absolute",
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
    backgroundColor: Color.blue_100,
    top: 0,
  },
  rectangleWrapper: {
    top: 29,
    height: 39,
    left: 236,
  },
  enterYourMomo: {
    width: 155,
    lineHeight: 23,
    top: 0,
    left: 0,
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    textAlign: "left",
    fontSize: FontSize.size_xl,
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
    top: 199,
    left: 30,
    height: 125,
    width: 300,
    position: "absolute",
  },
  mtnMmLogoGenericMtnMobileIcon: {
    height: "8.58%",
    width: "11.67%",
    top: "26.04%",
    right: "17.78%",
    bottom: "65.38%",
    left: "70.56%",
  },
  sendMoneyMomoom: {
    borderRadius: Border.br_2xl,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 360,
    height: 338,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
});

export default SendMoneyMomoom;
