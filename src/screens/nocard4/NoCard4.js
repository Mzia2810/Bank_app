import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Pressable, Text, Modal } from "react-native";
import MyActivity from "../../components/MainActivity";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Margin } from "../../../GlobalStyle";
import HeaderCom from "../../components/HeaderCom";

const NoCard4 = () => {
  const [tabArea1Visible, setTabArea1Visible] = useState(false);
  const navigation = useNavigation();

  const openTabArea1 = useCallback(() => {
    setTabArea1Visible(true);
  }, []);

  const closeTabArea1 = useCallback(() => {
    setTabArea1Visible(false);
  }, []);
  return (
    <>
    <HeaderCom/>
      <View style={styles.noCard}>
        <View style={[styles.noCardChild, styles.groupCardPosition]} />
        <View
          style={[styles.group, styles.groupLayout, styles.groupCardPosition]}
        >
          <Image
            style={[styles.vectorIcon, styles.groupCardPosition]}
            resizeMode="cover"
            source={require("../../../assets/vector1.png")}
          />
          <Pressable
            style={[styles.groupChild, styles.tabBg, styles.groupLayout]}
            onPress={() => navigation.navigate("NoCard5")}
          />
        </View>
        <View
          style={[
            styles.rectangleParent,
            styles.footerMonkapLayout,
            styles.groupCardPosition,
          ]}
        >
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Text style={[styles.continue, styles.warningTypo]}>Continue</Text>
          <Pressable
            style={[styles.groupInner, styles.groupPosition]}
            onPress={() => navigation.navigate("NoCard3")}
          />
        </View>
        <View style={[styles.warningParent, styles.groupCardPosition]}>
          <Text style={[styles.warning, styles.warningTypo]}>Warning!</Text>
          <Text
            style={[
              styles.activeCheckingAccount,
              styles.makeSureYourPosition,
              styles.makeSureYourTypo,
            ]}
          >
            Active checking account or domestic debit card
          </Text>
        </View>
        <Image
          style={[styles.noCardItem, styles.groupCardPosition]}
          resizeMode="cover"
          source={require("../../../assets/group-59.png")}
        />
        <View style={[styles.vectorParent, styles.groupCardPosition]}>
          <Image
            style={[styles.vectorIcon1, styles.vectorIconPosition]}
            resizeMode="cover"
            source={require("../../../assets/vector124.png")}
          />
          <Text
            style={[
              styles.makeSureYour,
              styles.makeSureYourPosition,
              styles.makeSureYourTypo,
            ]}
          >
            Make sure your phone number and your personal infomations are
            identical with the ones registered at the bank
          </Text>
        </View>
        <View style={[styles.vectorGroup, styles.groupCardPosition]}>
          <Image
            style={[styles.vectorIcon2, styles.vectorIconPosition]}
            resizeMode="cover"
            source={require("../../../assets/vector124.png")}
          />
          <Text
            style={[
              styles.helpingPreventFraud,
              styles.makeSureYourPosition,
              styles.makeSureYourTypo,
            ]}
          >
            Helping prevent fraud
          </Text>
        </View>
        <Text
          style={[
            styles.byClickingContinueyouContainer,
            styles.makeSureYourPosition,
          ]}
        >
          <Text style={styles.byClickingContinueyouAgr}>
            {`By clicking ‘Continue’,you agree that `}
            <Text style={styles.plaidsPrivacyPolicy}>
              Plaid’s Privacy Policy.
            </Text>
          </Text>
          <Text style={styles.appliesToYourUseOfTheirS}>
            <Text style={styles.plaidsPrivacyPolicy}>
              applies to your use of their services.
            </Text>
          </Text>
        </Text>
        <View style={[styles.footerMonkap, styles.footerMonkapLayout]}>
          <View
            style={[
              styles.footerMonkapChild,
              styles.childShadowBox,
              styles.tabPosition,
            ]}
          />
          <View style={[styles.home, styles.homeLayout]}>
            <Image
              style={[styles.c14HouseIcon, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../../../assets/c14-house12.png")}
            />
            <Text style={styles.home1}>Home</Text>
            <Pressable
              style={[styles.tabArea, styles.tabPosition, styles.tabBg]}
              onPress={() => navigation.navigate("MoNkapHomeScreen")}
            />
          </View>
          <View style={[styles.profile, styles.homeLayout]}>
            <Image
              style={[styles.profileChild, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../../../assets/group-157.png")}
            />
            <Text style={[styles.profile1, styles.momo1Typo]}>Profile</Text>
            <Pressable
              style={[styles.tabArea1, styles.tabPosition, styles.tabBg]}
              onPress={openTabArea1}
            />
          </View>
          <View style={[styles.linkBank, styles.linkBankPosition]}>
            <Image
              style={[styles.groupIcon, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../../../assets/group.png")}
            />
            <Text style={[styles.linkBanks, styles.momo1Typo]}>Link Banks</Text>
            <Pressable
              style={styles.imageedit341319179892}
              onPress={() => navigation.navigate("LinkBank")}
            />
          </View>
          <View style={styles.momo}>
            <Image
              style={[
                styles.groupIcon1,
                styles.linkBankPosition,
                styles.groupIconLayout,
              ]}
              resizeMode="cover"
              source={require("../../../assets/group1.png")}
            />
            <Text style={[styles.momo1, styles.momo1Typo]}>MoMo</Text>
            <Pressable
              style={[styles.tabArea2, styles.tabLayout]}
              onPress={() => navigation.navigate("MTNSplashScreen")}
            />
          </View>
          <View style={styles.orange}>
            <View style={[styles.orangeChild, styles.childShadowBox]} />
            <Image
              style={[styles.groupIcon2, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../../../assets/group12.png")}
            />
            <Text style={[styles.omoney, styles.momo1Typo]}>OMoney</Text>
            <Pressable
              style={[styles.tabArea3, styles.tabLayout]}
              onPress={() => navigation.navigate("OMoneySplashScreen")}
            />
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={tabArea1Visible}>
        <View style={styles.tabArea1Overlay}>
          <Pressable style={styles.tabArea1Bg} onPress={closeTabArea1} />
          <MyActivity onClose={closeTabArea1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  tabArea1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  tabArea1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupCardPosition: {
    left: "50%",
    top: "50%",
  },
  groupLayout: {
    height: 51,
    width: 55,
  },
  tabBg: {
    backgroundColor: Color.gainsboro_400,
    position: "absolute",
  },
  footerMonkapLayout: {
    height: 45,
    position: "absolute",
  },
  groupPosition: {
    marginTop: -22.5,
    borderRadius: Border.br_xs,
    marginLeft: -152.5,
    height: 45,
    width: 305,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  warningTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  makeSureYourPosition: {
    color: Color.darkgray_100,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  makeSureYourTypo: {
    fontSize: FontSize.size_base,
    color: Color.darkgray_100,
  },
  vectorIconPosition: {
    height: 12,
    width: 14,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  childShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: -3,
    },
    position: "absolute",
  },
  tabPosition: {
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  homeLayout: {
    width: "18.06%",
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  momo1Typo: {
    color: Color.iOSKeyLabel,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 17,
    letterSpacing: 0.5,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  linkBankPosition: {
    top: "6.67%",
    position: "absolute",
  },
  tabLayout: {
    height: 42,
    width: 43,
    top: 0,
    backgroundColor: Color.gainsboro_400,
    position: "absolute",
  },
  noCardChild: {
    marginTop: -400,
    marginLeft: -180,
    height: 94,
    width: 360,
    backgroundColor: Color.blue_100,
    position: "absolute",
  },
  vectorIcon: {
    marginTop: -56.5,
    marginLeft: -62.5,
    width: 16,
    height: 13,
    position: "absolute",
  },
  groupChild: {
    top: -51,
    left: -55,
  },
  group: {
    marginTop: -321,
    marginLeft: -118,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_xs,
    marginLeft: -152.5,
    backgroundColor: Color.blue_100,
  },
  continue: {
    marginTop: -11.5,
    marginLeft: -35.5,
    fontSize: FontSize.size_lg,
    color: Color.iOSKeyBackgroundHighlight,
  },
  groupInner: {
    backgroundColor: Color.blue_200,
    borderRadius: Border.br_xs,
    marginLeft: -152.5,
  },
  rectangleParent: {
    marginTop: 283,
    marginLeft: -152,
    width: 305,
  },
  warning: {
    marginTop: -36,
    fontSize: FontSize.size_4xl,
    color: Color.gray_100,
    marginLeft: -152.5,
  },
  activeCheckingAccount: {
    marginTop: -6,
    marginLeft: -152.5,
    width: 305,
  },
  warningParent: {
    marginTop: -205,
    height: 72,
    marginLeft: -153,
    width: 305,
    position: "absolute",
  },
  noCardItem: {
    marginTop: -292,
    width: 35,
    height: 35,
    marginLeft: -153,
    position: "absolute",
  },
  vectorIcon1: {
    marginTop: -25.5,
    marginLeft: -151,
  },
  makeSureYour: {
    marginTop: -31.5,
    marginLeft: -128,
    width: 279,
  },
  vectorParent: {
    marginTop: -115,
    width: 302,
    height: 63,
    marginLeft: -153,
    position: "absolute",
  },
  vectorIcon2: {
    marginTop: -4.5,
    marginLeft: -88,
  },
  helpingPreventFraud: {
    marginTop: -10.5,
    marginLeft: -65,
  },
  vectorGroup: {
    marginTop: -40,
    width: 176,
    height: 21,
    marginLeft: -153,
    position: "absolute",
  },
  plaidsPrivacyPolicy: {
    textDecoration: "underline",
  },
  byClickingContinueyouAgr: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  appliesToYourUseOfTheirS: {
    margin: Margin.m_3xs,
  },
  byClickingContinueyouContainer: {
    marginTop: 239,
    fontSize: FontSize.size_3xs,
    marginLeft: -153,
  },
  footerMonkapChild: {
    bottom: "0%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 9,
    elevation: 9,
    height: "100%",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    shadowOffset: {
      width: 3,
      height: -3,
    },
    right: "0%",
  },
  c14HouseIcon: {
    height: "60.33%",
    width: "49.23%",
    top: "6.38%",
    right: "30.77%",
    bottom: "33.29%",
    left: "20%",
    position: "absolute",
  },
  home1: {
    top: 30,
    left: 12,
    fontWeight: "700",
    color: Color.blue_100,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 17,
    letterSpacing: 0.5,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  tabArea: {
    height: "95.74%",
    bottom: "4.26%",
  },
  home: {
    height: "104.44%",
    right: "77.5%",
    left: "4.44%",
    bottom: "-4.44%",
    top: "0%",
  },
  profileChild: {
    height: "64.58%",
    width: "47.69%",
    top: "12.5%",
    right: "24.62%",
    bottom: "22.92%",
    left: "27.69%",
    position: "absolute",
  },
  profile1: {
    top: 34,
    left: 17,
    width: 36,
    height: 14,
  },
  tabArea1: {
    height: "93.75%",
    bottom: "6.25%",
  },
  profile: {
    height: "106.67%",
    top: "-8.89%",
    right: "3.33%",
    bottom: "2.22%",
    left: "78.61%",
  },
  groupIcon: {
    height: "65.28%",
    width: "49.51%",
    right: "26.66%",
    bottom: "34.72%",
    left: "23.83%",
    top: "0%",
    position: "absolute",
  },
  linkBanks: {
    top: 27,
    left: 0,
  },
  imageedit341319179892: {
    top: 1,
    left: 13,
    backgroundColor: Color.silver_400,
    width: 32,
    height: 32,
    position: "absolute",
  },
  linkBank: {
    height: "97.78%",
    width: "16.11%",
    right: "40.56%",
    left: "43.33%",
    bottom: "-4.44%",
  },
  groupIcon1: {
    height: "62.92%",
    width: "46.51%",
    right: "27.91%",
    bottom: "30.41%",
    left: "25.58%",
  },
  momo1: {
    top: 28,
    left: 5,
  },
  tabArea2: {
    left: 0,
  },
  momo: {
    width: "11.94%",
    top: "2.22%",
    right: "24.17%",
    bottom: "-2.22%",
    left: "63.89%",
    height: "100%",
    position: "absolute",
  },
  orangeChild: {
    top: -4,
    left: -9,
    backgroundColor: Color.iOSKeyLabel,
    shadowColor: "rgba(0, 0, 0, 0.94)",
    shadowRadius: 4,
    elevation: 4,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 64,
    height: 36,
    display: "none",
    borderRadius: Border.br_xs,
  },
  groupIcon2: {
    height: "62.57%",
    width: "56.82%",
    top: "6.98%",
    right: "22.73%",
    bottom: "30.46%",
    left: "20.45%",
    position: "absolute",
  },
  omoney: {
    top: 26,
    left: 0,
  },
  tabArea3: {
    left: 1,
  },
  orange: {
    top: 2,
    left: 92,
    width: 44,
    height: 43,
    position: "absolute",
  },
  footerMonkap: {
    top: 755,
    left: 0,
    width: 360,
  },
  noCard: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
});

export default NoCard4;
