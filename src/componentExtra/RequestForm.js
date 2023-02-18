import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MotiveTransferContainer from "../components/MotiveTransferContainer";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const RequestForm = () => {
  return (
    <View style={styles.formToFill}>
      <View style={[styles.formToFillChild, styles.childBg]} />
      <MotiveTransferContainer
        bankTransferDetails="Swift Code"
        transferMotive="Enter your motive for transfer"
        swiftCodeTop="3.92%"
        swiftCodeBottom="68.63%"
      />
      <MotiveTransferContainer
        bankTransferDetails="Account Number"
        transferMotive="Enter your account number"
        swiftCodeTop="36.27%"
        swiftCodeBottom="36.27%"
      />
      <View style={styles.amount}>
        <View style={styles.rectangleParent}>
          <View
            style={[
              styles.groupChild,
              styles.groupBorder,
              styles.groupPosition,
              styles.childBg,
            ]}
          />
          <Text style={[styles.amount1, styles.amountTypo, styles.xafTypo]}>
            Amount
          </Text>
          <View style={[styles.rectangleGroup, styles.groupPosition]}>
            <View style={[styles.groupItem, styles.groupBorder]} />
            <Text style={[styles.xaf, styles.amountTypo, styles.xafTypo]}>
              XAF
            </Text>
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require("../assets/group65.png")}
            />
          </View>
          <Text style={[styles.enterAmountTo, styles.amountTypo]}>
            Enter amount to Request
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childBg: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    left: "0%",
    width: "100%",
  },
  groupBorder: {
    borderColor: "#0000ee",
    borderStyle: "solid",
    position: "absolute",
  },
  groupPosition: {
    top: "35.71%",
    height: "64.29%",
    bottom: "0%",
    right: "0%",
  },
  amountTypo: {
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 1.8,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  xafTypo: {
    fontFamily: FontFamily.gentiumBookBasic,
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 1.8,
    fontSize: FontSize.size_base,
  },
  formToFillChild: {
    borderRadius: Border.br_3xs,
    bottom: "0%",
    right: "0%",
    height: "100%",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    top: "0%",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_2xs,
    borderWidth: 0.3,
  },
  amount1: {
    left: "0.38%",
    color: Color.iOSKeyLabel,
    top: "0%",
    fontFamily: FontFamily.gentiumBookBasic,
  },
  groupItem: {
    height: "102.78%",
    width: "101.23%",
    top: "-1.39%",
    right: "-0.62%",
    bottom: "-1.39%",
    left: "-0.62%",
    borderTopRightRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    backgroundColor: Color.blue_100,
    borderWidth: 1,
  },
  xaf: {
    height: "52.78%",
    width: "40.74%",
    top: "33.33%",
    left: "16.05%",
    fontWeight: "700",
    color: Color.iOSKeyBackgroundHighlight,
  },
  groupIcon: {
    height: "65.28%",
    width: "27.47%",
    top: "19.44%",
    right: "9.57%",
    bottom: "15.28%",
    left: "62.96%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  rectangleGroup: {
    width: "27%",
    left: "73%",
    position: "absolute",
  },
  enterAmountTo: {
    top: "55.36%",
    left: "2.67%",
    fontFamily: FontFamily.gentiumBasic,
    color: Color.gray_2200,
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 1.8,
    fontSize: FontSize.size_base,
  },
  rectangleParent: {
    left: "0%",
    width: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  amount: {
    height: "27.45%",
    width: "90.91%",
    top: "68.63%",
    right: "4.85%",
    bottom: "3.92%",
    left: "4.24%",
    position: "absolute",
  },
  formToFill: {
    height: "25.5%",
    width: "91.67%",
    top: "59.38%",
    right: "4.17%",
    bottom: "15.13%",
    left: "4.17%",
    position: "absolute",
  },
});

export default RequestForm;
