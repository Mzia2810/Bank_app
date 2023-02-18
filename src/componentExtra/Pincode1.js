import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Pincode1 = ({ onClose }) => {
  return (
    <View style={styles.pincode}>
      <View style={[styles.groupParent, styles.parentPosition]}>
        <View
          style={[styles.sorryThisPaymentMethodIsParent, styles.parentPosition]}
        >
          <Text
            style={[styles.sorryThisPayment, styles.sorryThisPaymentPosition]}
          >
            Sorry, this payment method is not associated to Target Savings
          </Text>
          <View style={[styles.notify, styles.textPosition]}>
            <Image
              style={[styles.notifyChild, styles.parentPosition]}
              resizeMode="cover"
              source={require("../assets/ellipse-121.png")}
            />
            <Text style={[styles.text, styles.textTypo, styles.textPosition]}>
              !
            </Text>
          </View>
        </View>
        <Text
          style={[
            styles.clickHereCreateContainer,
            styles.sorryThisPaymentPosition,
          ]}
        >
          <Text style={styles.clickHere}>Click here “</Text>
          <Text style={[styles.createAnAccount, styles.textTypo]}>
            Create An Account
          </Text>
          <Text style={styles.clickHere}>” to add one</Text>
        </Text>
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
  parentPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  sorryThisPaymentPosition: {
    color: Color.iOSKeyLabel,
    textAlign: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textPosition: {
    height: 24,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textTypo: {
    fontWeight: "700",
    fontFamily: FontFamily.gentiumBookBasic,
  },
  sorryThisPayment: {
    marginTop: -30,
    marginLeft: -110.5,
    fontSize: FontSize.size_lg,
    letterSpacing: 1.4,
    lineHeight: 22,
    width: 237,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
  },
  notifyChild: {
    marginTop: -11,
    marginLeft: -8.5,
    width: 17,
    height: 25,
  },
  text: {
    marginTop: -12,
    marginLeft: -1.21,
    fontSize: FontSize.size_4xl,
    letterSpacing: 1.9,
    lineHeight: 30,
    color: Color.red_200,
    width: 3,
    textAlign: "center",
  },
  notify: {
    marginTop: -36,
    marginLeft: -126.5,
    width: 13,
  },
  sorryThisPaymentMethodIsParent: {
    marginTop: -54.5,
    marginLeft: -138.5,
    width: 253,
    height: 72,
  },
  clickHere: {
    fontFamily: FontFamily.gentiumBookBasic,
  },
  createAnAccount: {
    textDecoration: "underline",
    fontStyle: "italic",
  },
  clickHereCreateContainer: {
    marginTop: 35.5,
    marginLeft: -139.5,
    fontSize: FontSize.size_sm,
    letterSpacing: 1.2,
    lineHeight: 19,
    textAlign: "center",
  },
  groupParent: {
    marginTop: -63.5,
    marginLeft: -134,
    width: 279,
    height: 109,
  },
  cancelIcon: {
    top: 0,
    right: 3,
    width: 48,
    height: 43,
    position: "absolute",
  },
  pincode: {
    borderRadius: Border.br_2xl,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    width: 336,
    height: 217,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default Pincode1;
