import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { FontFamily, FontSize, Color, Border, Margin } from "../GlobalStyles";

const SelectPaymentMethod = ({ onClose }) => {
  return (
    <View style={[styles.selectPaymentMethod, styles.radioIconLayout]}>
      <View style={styles.group}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector3.png")}
        />
        <View style={styles.groupChild} />
      </View>
      <Text style={[styles.selectPaymentMethod1, styles.nextTypo]}>
        Select Payment Method
      </Text>
      <View style={[styles.monkap, styles.monkapPosition]}>
        <Text style={styles.monkap1}>MoNkap</Text>
        <Text style={styles.payFromMonkapContainer}>
          <Text style={styles.payFromMonkap}>
            Pay from MoNkap account using MoNkap
          </Text>
          <Text style={styles.paymentGateway}>payment gateway</Text>
        </Text>
        <Image
          style={styles.radioBtnIcon}
          resizeMode="cover"
          source={require("../assets/radio-btn.png")}
        />
        <View style={styles.monkapChild} />
      </View>
      <Text style={[styles.payingXaf2500Container, styles.selectTheNumberTypo]}>
        <Text style={styles.paying}>Paying</Text>
        <Text style={styles.xaf2500}> XAF 2500</Text>
        <Text style={styles.paying}> for Veterans Njangi</Text>
      </Text>
      <Text style={[styles.selectTheNumber, styles.selectTheNumberTypo]}>
        Select the number of days you want to play for
      </Text>
      <Text style={[styles.next, styles.nextTypo]}>Next</Text>
      <View style={[styles.paymentMethod, styles.monkapPosition]}>
        <View style={[styles.momo, styles.radioIconPosition]}>
          <Text style={[styles.mtnMobileMoneyPosition, styles.moneyPosition]}>
            MTN mobile money
          </Text>
          <Text
            style={[styles.payContainerPosition, styles.mtnMobileMoneyPosition]}
          >
            <Text style={styles.payFromMonkap}>
              Pay from MoMo account using MoMo
            </Text>
            <Text style={styles.paymentGateway}>payment gateway</Text>
          </Text>
          <Image
            style={[styles.momoChild, styles.childLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-211.png")}
          />
          <View style={[styles.momoItem, styles.itemPosition]} />
          <Image
            style={[
              styles.mtnMmLogoGenericMtnMobileIcon,
              styles.iconLayout,
              styles.radioIconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-1.png")}
          />
          <Image
            style={[
              styles.radioBtnIcon1,
              styles.radioIconPosition,
              styles.radioIconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/radio-btn1.png")}
          />
        </View>
        <View style={[styles.om, styles.omPosition]}>
          <Text style={[styles.orangeMoneyPosition, styles.moneyPosition]}>
            Orange Money
          </Text>
          <Text
            style={[styles.orangeMoneyPosition, styles.payContainerPosition]}
          >
            <Text style={styles.payFromMonkap}>
              Pay from OM account using OM
            </Text>
            <Text style={styles.paymentGateway}>payment gateway</Text>
          </Text>
          <Image
            style={[styles.omChild, styles.childLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-211.png")}
          />
          <View style={[styles.omItem, styles.itemPosition]} />
          <View style={[styles.orangeMoneyIcon, styles.iconLayout]}>
            <View style={[styles.orangeMoneyIconChild, styles.omPosition]} />
            <Image
              style={[styles.orangeMoneyIconItem, styles.orangeIconLayout]}
              resizeMode="cover"
              source={require("../assets/arrow-2.png")}
            />
            <Image
              style={[styles.orangeMoneyIconInner, styles.orangeIconLayout]}
              resizeMode="cover"
              source={require("../assets/arrow-3.png")}
            />
            <Text style={styles.orangeMoney1}>Orange Money</Text>
          </View>
          <Image
            style={[
              styles.radioBtnIcon2,
              styles.radioIconPosition,
              styles.radioIconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/radio-btn2.png")}
          />
        </View>
      </View>
      <Image
        style={styles.selectPaymentMethodChild}
        resizeMode="cover"
        source={require("../assets/group-231.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  radioIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  nextTypo: {
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  monkapPosition: {
    width: 309,
    left: 25,
    position: "absolute",
  },
  selectTheNumberTypo: {
    fontFamily: FontFamily.gentiumBasic,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  radioIconPosition: {
    left: "0%",
    bottom: "50%",
    top: "0%",
    height: "50%",
    position: "absolute",
  },
  moneyPosition: {
    top: "11.67%",
    color: Color.iOSKeyLabel,
    lineHeight: 8,
    fontSize: FontSize.size_sm,
  },
  mtnMobileMoneyPosition: {
    left: "10.78%",
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  childLayout: {
    display: "none",
    height: "25%",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  itemPosition: {
    bottom: "-0.42%",
    right: "-0.08%",
    top: "99.58%",
    height: "0.83%",
    borderTopWidth: 0.5,
    borderStyle: "solid",
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.43)",
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  iconLayout: {
    height: "70%",
    position: "absolute",
  },
  omPosition: {
    bottom: "0%",
    right: "0%",
    width: "100%",
    left: "0%",
    position: "absolute",
  },
  payContainerPosition: {
    top: "36.67%",
    color: Color.gray_2700,
    lineHeight: 11,
    fontSize: FontSize.size_xs,
  },
  orangeIconLayout: {
    borderRadius: Border.br_5xl,
    width: "40.13%",
    height: "38.42%",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorIcon: {
    width: "17.86%",
    top: 14,
    right: "39.29%",
    left: "42.86%",
    height: 10,
    position: "absolute",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChild: {
    width: 56,
    backgroundColor: Color.gainsboro_700,
    left: 0,
    height: 45,
    top: 0,
    position: "absolute",
  },
  group: {
    width: "15.56%",
    right: "1.67%",
    left: "82.78%",
    height: 45,
    top: 0,
    position: "absolute",
  },
  selectPaymentMethod1: {
    top: 120,
    left: 111,
    color: Color.iOSKeyLabel,
    fontWeight: "700",
    lineHeight: 8,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.gentiumBookBasic,
  },
  monkap1: {
    top: 9,
    left: 33,
    textAlign: "left",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    lineHeight: 8,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  payFromMonkap: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  paymentGateway: {
    margin: Margin.m_3xs,
  },
  payFromMonkapContainer: {
    top: 24,
    color: Color.gray_2700,
    lineHeight: 11,
    fontSize: FontSize.size_xs,
    left: 33,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  radioBtnIcon: {
    width: 31,
    height: 30,
    left: 0,
    top: 0,
    position: "absolute",
  },
  monkapChild: {
    top: 62,
    left: 12,
    borderColor: "#e1e1e1",
    width: 298,
    height: 1,
    borderTopWidth: 0.5,
    borderStyle: "solid",
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.43)",
    backgroundColor: Color.gainsboro_700,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  monkap: {
    top: 269,
    height: 62,
  },
  paying: {
    color: Color.iOSKeyLabel,
  },
  xaf2500: {
    color: Color.blue_100,
  },
  payingXaf2500Container: {
    top: 76,
    left: 88,
  },
  selectTheNumber: {
    top: 31,
    left: 62,
    width: 235,
    color: Color.iOSKeyLabel,
  },
  next: {
    top: 341,
    left: 284,
    fontSize: FontSize.size_lg,
    textDecoration: "underline",
    fontStyle: "italic",
    color: Color.blue_100,
  },
  momoChild: {
    width: "4.9%",
    top: "8.33%",
    right: "92.48%",
    bottom: "66.67%",
    left: "2.61%",
  },
  momoItem: {
    width: "96.24%",
    left: "3.84%",
    borderColor: "#ededed",
  },
  mtnMmLogoGenericMtnMobileIcon: {
    width: "18.63%",
    top: "21.67%",
    right: "1.31%",
    bottom: "8.33%",
    left: "80.07%",
  },
  radioBtnIcon1: {
    width: "10.17%",
    right: "89.83%",
  },
  momo: {
    width: "99.03%",
    right: "0.97%",
  },
  orangeMoneyPosition: {
    left: "10.68%",
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  omChild: {
    width: "4.85%",
    top: "108.33%",
    right: "92.56%",
    bottom: "-33.33%",
    left: "2.59%",
  },
  omItem: {
    width: "96.28%",
    left: "3.8%",
    borderColor: "#e8e8e8",
  },
  orangeMoneyIconChild: {
    height: "100%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.gray_400,
    top: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  orangeMoneyIconItem: {
    top: "20.79%",
    right: "7.17%",
    bottom: "40.78%",
    left: "52.7%",
  },
  orangeMoneyIconInner: {
    top: "22.44%",
    right: "51.11%",
    bottom: "39.13%",
    left: "8.76%",
  },
  orangeMoney1: {
    height: "16.67%",
    width: "90.48%",
    top: "66.67%",
    left: "4.76%",
    fontSize: FontSize.size_7xs,
    lineHeight: 7,
    fontFamily: FontFamily.rubik,
    color: Color.orangeColor,
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
  },
  orangeMoneyIcon: {
    width: "13.59%",
    top: "20%",
    right: "3.56%",
    bottom: "10%",
    left: "82.85%",
  },
  radioBtnIcon2: {
    width: "10.07%",
    right: "89.93%",
  },
  om: {
    top: "50%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    height: "50%",
  },
  paymentMethod: {
    top: 143,
    height: 120,
  },
  selectPaymentMethodChild: {
    top: 51,
    left: 87,
    width: 185,
    height: 21,
    position: "absolute",
  },
  selectPaymentMethod: {
    borderRadius: Border.br_2xl,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    shadowColor: "rgba(0, 0, 0, 0.36)",
    shadowRadius: 10,
    elevation: 10,
    width: 360,
    height: 369,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    maxHeight: "100%",
  },
});

export default SelectPaymentMethod;
