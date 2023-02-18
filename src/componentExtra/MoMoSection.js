import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const MoMoSection = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.groupChild, styles.childPosition]} />
      <View style={[styles.monkapUserParent, styles.parentPosition]}>
        <Text
          style={[
            styles.monkapUser,
            styles.momo1FlexBox,
            styles.recipientTypo,
            styles.othersLayout,
          ]}
        >
          MoNkap User
        </Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector32.png")}
        />
        <Pressable
          style={[styles.tabArea, styles.childPosition]}
          onPress={() => navigation.navigate("TransferMonkapUser")}
        />
      </View>
      <View style={[styles.lineParent, styles.parentPosition]}>
        <View style={styles.groupItem} />
        <Text
          style={[
            styles.others,
            styles.momo1FlexBox,
            styles.momo1Typo,
            styles.othersLayout,
          ]}
        >
          Others
        </Text>
        <Image
          style={[styles.groupInner, styles.iconLayout1, styles.mtnLayout]}
          resizeMode="cover"
          source={require("../assets/group-239.png")}
        />
        <View style={[styles.tabArea, styles.childPosition]} />
      </View>
      <View style={[styles.momo, styles.momoPosition]}>
        <Text style={[styles.momo1, styles.momo1FlexBox, styles.momo1Typo]}>
          MoMo
        </Text>
        <Image
          style={[
            styles.mtnMmLogoGenericMtnMobileIcon,
            styles.iconLayout,
            styles.iconLayout1,
            styles.mtnLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-12.png")}
        />
        <Pressable
          style={[styles.tabArea, styles.childPosition]}
          onPress={() => navigation.navigate("TransferMomo")}
        />
      </View>
      <View style={[styles.omoney, styles.momoPosition]}>
        <Text style={[styles.momo1, styles.momo1FlexBox, styles.momo1Typo]}>
          OMoney
        </Text>
        <View style={[styles.orangeMoneyIcon, styles.iconLayout]}>
          <View style={[styles.orangeMoneyIconChild, styles.childPosition]} />
          <Image
            style={[styles.orangeMoneyIconItem, styles.orangeIconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-23.png")}
          />
          <Image
            style={[styles.orangeMoneyIconInner, styles.orangeIconLayout]}
            resizeMode="cover"
            source={require("../assets/arrow-33.png")}
          />
          <Text style={[styles.orangeMoney, styles.momo1FlexBox]}>
            Orange Money
          </Text>
        </View>
        <Pressable
          style={[styles.tabArea, styles.childPosition]}
          onPress={() => navigation.navigate("TransferOmoney")}
        />
      </View>
      <Text
        style={[styles.recipient, styles.momo1FlexBox, styles.recipientTypo]}
      >
        Recipient
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    bottom: "0%",
    right: "0%",
    width: "100%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  parentPosition: {
    top: "26.19%",
    position: "absolute",
  },
  momo1FlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  recipientTypo: {
    color: Color.iOSKeyLabel,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
  },
  othersLayout: {
    lineHeight: 19,
    letterSpacing: 1.6,
    fontSize: FontSize.size_sm,
  },
  iconLayout1: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  momo1Typo: {
    fontFamily: FontFamily.gentiumBookBasic,
    textAlign: "center",
  },
  mtnLayout: {
    top: "0%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  momoPosition: {
    bottom: "9.52%",
    top: "25%",
    height: "65.48%",
    position: "absolute",
  },
  iconLayout: {
    height: "52.73%",
    position: "absolute",
  },
  orangeIconLayout: {
    borderRadius: Border.br_5xl,
    width: "42.95%",
    height: "51.03%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    left: "0%",
  },
  monkapUser: {
    top: "59.62%",
    left: "5.83%",
  },
  vectorIcon: {
    height: "55.77%",
    width: "42.72%",
    top: "5.77%",
    right: "32.04%",
    bottom: "38.46%",
    left: "25.24%",
    position: "absolute",
  },
  tabArea: {
    backgroundColor: Color.gainsboro_700,
    left: "0%",
  },
  monkapUserParent: {
    height: "61.9%",
    width: "31.21%",
    right: "68.18%",
    bottom: "11.9%",
    left: "0.61%",
    opacity: 0.5,
  },
  groupItem: {
    height: "1.89%",
    width: "76.67%",
    top: "91.51%",
    right: "10.83%",
    bottom: "6.6%",
    left: "12.5%",
    borderStyle: "solid",
    borderColor: "#0000ee",
    borderTopWidth: 1,
    position: "absolute",
  },
  others: {
    top: "58.49%",
    left: "13.33%",
    color: Color.blue_100,
  },
  groupInner: {
    height: "60.38%",
    width: "53.33%",
    right: "21.67%",
    bottom: "39.62%",
    left: "25%",
    position: "absolute",
  },
  lineParent: {
    height: "63.1%",
    width: "18.18%",
    right: "2.42%",
    bottom: "10.71%",
    left: "79.39%",
  },
  momo1: {
    top: "52.73%",
    fontSize: FontSize.size_xl,
    letterSpacing: 2,
    lineHeight: 23,
    color: Color.gray_3000,
    left: "0%",
  },
  mtnMmLogoGenericMtnMobileIcon: {
    width: "85.71%",
    right: "8.16%",
    bottom: "47.27%",
    left: "6.12%",
  },
  momo: {
    width: "14.85%",
    right: "52.42%",
    left: "32.73%",
  },
  orangeMoneyIconChild: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.gray_400,
    left: "0%",
  },
  orangeMoneyIconItem: {
    top: "9.64%",
    right: "5.51%",
    bottom: "39.33%",
    left: "51.54%",
  },
  orangeMoneyIconInner: {
    top: "15.19%",
    right: "51.54%",
    bottom: "33.78%",
    left: "5.51%",
  },
  orangeMoney: {
    height: "24.14%",
    width: "90.48%",
    top: "65.52%",
    left: "4.76%",
    fontSize: FontSize.size_7xs,
    lineHeight: 7,
    fontWeight: "700",
    fontFamily: FontFamily.rubik,
    color: Color.orangeColor,
  },
  orangeMoneyIcon: {
    width: "63.64%",
    top: "5.45%",
    right: "18.18%",
    bottom: "41.82%",
    left: "18.18%",
  },
  omoney: {
    width: "20%",
    right: "25.76%",
    left: "54.24%",
  },
  recipient: {
    top: "2.38%",
    left: "41.82%",
    fontSize: FontSize.size_base,
    letterSpacing: 1.8,
    lineHeight: 20,
  },
  rectangleParent: {
    height: "10.5%",
    width: "91.67%",
    top: "27.5%",
    right: "4.17%",
    bottom: "62%",
    left: "4.17%",
    position: "absolute",
  },
});

export default MoMoSection;
