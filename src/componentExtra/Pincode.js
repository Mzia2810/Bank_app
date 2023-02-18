import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Border, Color, FontSize, FontFamily, Margin } from "../GlobalStyles";

const Pincode = ({ onClose }) => {
  return (
    <View style={styles.pincode}>
      <Text style={[styles.pleaseInputYourContainer, styles.containerLayout]}>
        <Text style={styles.pleaseInputYourSecretPinco}>
          <Text
            style={styles.pleaseInputYour}
          >{`Please input your secret pincode to confirm this `}</Text>
        </Text>
        <Text style={styles.transactionNoteThisTransa}>
          <Text style={styles.pleaseInputYour}>{`transaction. `}</Text>
          <Text>Note</Text>
          <Text>, this transaction cannot be cancelled after this</Text>
        </Text>
      </Text>
      <View style={styles.pincodeChild} />
      <View style={[styles.send, styles.sendPosition]}>
        <View style={[styles.sendChild, styles.tabChildShadowBox]} />
        <Text style={[styles.send1, styles.send1Position]}>SEND</Text>
        <View style={[styles.tabArea, styles.tabChildShadowBox]} />
      </View>
      <View style={[styles.cancel, styles.sendPosition]}>
        <View style={[styles.cancelChild, styles.tabChildShadowBox]} />
        <Text style={[styles.cancel1, styles.send1Position]}>CANCEL</Text>
        <View style={[styles.tabArea1, styles.tabChildShadowBox]} />
      </View>
      <View style={[styles.youAreAboutToMakeAPaymenParent, styles.youPosition]}>
        <Text
          style={[
            styles.youAreAboutContainer,
            styles.youPosition,
            styles.containerLayout,
          ]}
        >
          <Text style={styles.pleaseInputYourSecretPinco}>
            <Text
              style={styles.youAreAbout}
            >{`You are about to make a payment of `}</Text>
            <Text>18,000 XAF</Text>
          </Text>
          <Text style={styles.pleaseInputYourSecretPinco}>
            <Text style={styles.youAreAbout}> </Text>
          </Text>
          <Text style={styles.transactionNoteThisTransa}>
            <Text style={styles.youAreAbout}>
              {" "}
              From MoMo to your Target Saving
            </Text>
          </Text>
        </Text>
        <View style={[styles.notify, styles.textPosition]}>
          <Image
            style={styles.notifyChild}
            resizeMode="cover"
            source={require("../assets/ellipse-12.png")}
          />
          <Text style={[styles.text, styles.textPosition]}>!</Text>
        </View>
      </View>
      <Image
        style={styles.cancelIcon}
        resizeMode="cover"
        source={require("../assets/cancel.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerLayout: {
    height: 32,
    textAlign: "center",
  },
  sendPosition: {
    width: 88,
    marginTop: 66.5,
    height: 31,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  tabChildShadowBox: {
    elevation: 15,
    shadowRadius: 15,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    marginLeft: -44,
    marginTop: -15.5,
    width: 88,
    height: 31,
    borderRadius: Border.br_3xs,
    left: "50%",
    top: "50%",
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  send1Position: {
    color: Color.iOSKeyBackgroundHighlight,
    lineHeight: 9,
    marginTop: -4.5,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.gentiumBookBasic,
    textAlign: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  youPosition: {
    width: 321,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textPosition: {
    height: 22,
    top: 0,
    position: "absolute",
  },
  pleaseInputYour: {
    fontFamily: FontFamily.gentiumBookBasic,
  },
  pleaseInputYourSecretPinco: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  transactionNoteThisTransa: {
    margin: Margin.m_3xs,
  },
  pleaseInputYourContainer: {
    marginTop: -37.5,
    marginLeft: -148.5,
    fontSize: FontSize.size_xs,
    lineHeight: 15,
    color: "rgba(0, 0, 0, 0.65)",
    width: 297,
    left: "50%",
    top: "50%",
    textAlign: "center",
    position: "absolute",
  },
  pincodeChild: {
    marginTop: 15.5,
    borderStyle: "solid",
    borderColor: "#0000ee",
    borderWidth: 0.5,
    width: 300,
    height: 31,
    borderRadius: Border.br_3xs,
    marginLeft: -151.5,
    left: "50%",
    top: "50%",
    position: "absolute",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  sendChild: {
    backgroundColor: Color.blue_100,
  },
  send1: {
    marginLeft: -18,
  },
  tabArea: {
    backgroundColor: Color.blue_200,
  },
  send: {
    marginLeft: 60.5,
  },
  cancelChild: {
    backgroundColor: Color.red_200,
  },
  cancel1: {
    marginLeft: -27,
  },
  tabArea1: {
    backgroundColor: "rgba(226, 9, 9, 0)",
  },
  cancel: {
    marginLeft: -151.5,
    width: 88,
    marginTop: 66.5,
  },
  youAreAbout: {
    color: Color.iOSKeyLabel,
  },
  youAreAboutContainer: {
    marginTop: -12,
    marginLeft: -160.5,
    fontSize: FontSize.size_base,
    lineHeight: 8,
    fontFamily: FontFamily.gentiumBookBasic,
  },
  notifyChild: {
    top: 3,
    left: 0,
    height: 17,
    width: 13,
    position: "absolute",
  },
  text: {
    left: 5,
    lineHeight: 23,
    fontWeight: "600",
    fontFamily: FontFamily.rubik,
    width: 4,
    color: Color.iOSKeyLabel,
    fontSize: FontSize.size_xl,
    height: 22,
    textAlign: "center",
  },
  notify: {
    left: 7,
    width: 13,
  },
  youAreAboutToMakeAPaymenParent: {
    marginTop: -89.5,
    marginLeft: -166.5,
    height: 40,
  },
  cancelIcon: {
    right: 0,
    width: 48,
    height: 43,
    top: 0,
    position: "absolute",
  },
  pincode: {
    borderRadius: Border.br_xs,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 18,
    elevation: 18,
    width: 329,
    height: 231,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
});

export default Pincode;
