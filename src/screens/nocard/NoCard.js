import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Pressable, Text, Modal } from "react-native";
import MyActivity from "../../components/MainActivity";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../../../GlobalStyle";
import HeaderCom from "../../components/HeaderCom";

const NoCard = () => {
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
        <View style={[styles.noCardChild, styles.groupPosition1]} />
        <View style={[styles.group, styles.groupLayout, styles.groupPosition1]}>
          <Image
            style={[styles.vectorIcon, styles.groupPosition1]}
            resizeMode="cover"
            source={require("../../../assets/vector1.png")}
          />
          <Pressable
            style={[styles.groupChild, styles.groupLayout]}
            onPress={() => navigation.navigate("NoCard8")}
          />
        </View>
        <View
          style={[
            styles.rectangleParent,
            styles.rectangleLayout,
            styles.rectanglePosition,
          ]}
        >
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Text style={styles.next}>Next</Text>
          <Pressable
            style={[styles.groupInner, styles.groupPosition]}
            onPress={() => navigation.navigate("NoCard4")}
          />
        </View>
        <View
          style={[
            styles.rectangleGroup,
            styles.rectangleLayout,
            styles.rectanglePosition,
          ]}
        >
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Text style={styles.next}>SCAN</Text>
          <Pressable
            style={[styles.groupInner, styles.groupPosition]}
            onPress={() => navigation.navigate("NoCard6")}
          />
        </View>
        <Text style={[styles.scanTheQr, styles.orGoToTypo]}>
          Scan the QR Code your debit card link to this bank
        </Text>
        <Text style={[styles.orGoTo, styles.orGoToTypo]}>
          Or go to Next to manually link to this bank
        </Text>
        <View style={[styles.ccaBank,{backgroundColor:'white'}]}>
          <View
            style={[
              styles.ccaBankChild,
              styles.childShadowBox,
              styles.childShadowBox1,
            ]}
          />
          <Text style={styles.ccaBank1}>CCA Bank</Text>
          <Image
            style={[styles.download31, styles.download31Layout]}
            resizeMode="cover"
            source={require("../../../assets/download-3-1.png")}
          />
        </View>
        <View style={[styles.footerMonkap, styles.rectangleLayout]}>
          <View
            style={[
              styles.footerMonkapChild,
              styles.tabPosition,
              styles.childShadowBox,
              styles.childShadowBox1,
            ]}
          />
          <View style={[styles.home, styles.homeLayout]}>
            <Image
              style={[styles.c14HouseIcon, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../../../assets/c14-house12.png")}
            />
            <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
            <Pressable
              style={[styles.tabArea, styles.tabPosition]}
              onPress={() => navigation.navigate("MoNkapHomeScreen")}
            />
          </View>
          <View style={[styles.profile, styles.homeLayout]}>
            <Image
              style={[styles.profileChild, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../../../assets/group-157.png")}
            />
            <Text style={[styles.profile1, styles.home1Typo]}>Profile</Text>
            <Pressable
              style={[styles.tabArea1, styles.tabPosition]}
              onPress={openTabArea1}
            />
          </View>
          <View style={[styles.linkBank, styles.linkBankPosition]}>
            <Image
              style={[styles.groupIcon, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../../../assets/group.png")}
            />
            <Text style={[styles.linkBanks, styles.home1Typo]}>Link Banks</Text>
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
            <Text style={[styles.momo1, styles.home1Typo]}>MoMo</Text>
            <Pressable
              style={[styles.tabArea2, styles.tabLayout]}
              onPress={() => navigation.navigate("MTNSplashScreen")}
            />
          </View>
          <View style={styles.orange}>
            <View
              style={[
                styles.orangeChild,
                styles.download31Layout,
                styles.childShadowBox,
              ]}
            />
            <Image
              style={[styles.groupIcon2, styles.groupIconLayout]}
              resizeMode="cover"
              source={require("../../../assets/group2.png")}
            />
            <Text style={[styles.omoney, styles.home1Typo]}>OMoney</Text>
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
  groupPosition1: {
    left: "50%",
    top: "50%",
  },
  groupLayout: {
    height: 51,
    width: 55,
    position: "absolute",
  },
  rectangleLayout: {
    height: 45,
    position: "absolute",
  },
  rectanglePosition: {
    width: 305,
    marginLeft: -152,
    height: 45,
    left: "50%",
    top: "50%",
  },
  groupPosition: {
    borderRadius: Border.br_xs,
    marginLeft: -152.5,
    marginTop: -22.5,
    height: 45,
    width: 305,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  orGoToTypo: {
    width: 284,
    textAlign: "center",
    color: Color.gray_100,
    fontSize: FontSize.size_4xl,
    marginLeft: -142,
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  childShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  childShadowBox1: {
    elevation: 9,
    shadowRadius: 9,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  download31Layout: {
    width: 64,
    position: "absolute",
  },
  tabPosition: {
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
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
  home1Typo: {
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 17,
    letterSpacing: 0.5,
    fontSize: FontSize.size_xs,
    textAlign: "center",
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
    backgroundColor: Color.gainsboro_400,
  },
  group: {
    marginTop: -321,
    marginLeft: -118,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
  },
  groupItem: {
    backgroundColor: Color.blue_100,
  },
  next: {
    marginTop: -11.5,
    marginLeft: -21.5,
    fontSize: FontSize.size_lg,
    color: Color.iOSKeyBackgroundHighlight,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupInner: {
    backgroundColor: Color.blue_200,
  },
  rectangleParent: {
    marginTop: 283,
  },
  rectangleGroup: {
    marginTop: 213,
  },
  scanTheQr: {
    marginTop: -258,
  },
  orGoTo: {
    marginTop: -69,
  },
  ccaBankChild: {
    borderRadius: Border.br_2xs,
    left: 0,
    top: 0,
    elevation: 9,
    shadowRadius: 9,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    height: 90,
    width: 90,
    position: "absolute",
  },
  ccaBank1: {
    top: 74,
    fontSize: FontSize.size_3xs,
    letterSpacing: -0.4,
    lineHeight: 10,
    fontWeight: "300",
    height: 12,
    color: Color.iOSKeyLabel,
    left: 0,
    width: 90,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  download31: {
    top: 10,
    height: 64,
    left: 13,
  },
  ccaBank: {
    top: 180,
    left: 135,
    height: 90,
    width: 90,
    position: "absolute",
  },
  footerMonkapChild: {
    bottom: "0%",
    height: "100%",
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
  },
  tabArea: {
    height: "95.74%",
    bottom: "4.26%",
    backgroundColor: Color.gainsboro_400,
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
    color: Color.iOSKeyLabel,
  },
  tabArea1: {
    height: "93.75%",
    bottom: "6.25%",
    backgroundColor: Color.gainsboro_400,
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
    color: Color.iOSKeyLabel,
    left: 0,
  },
  imageedit341319179892: {
    top: 1,
    backgroundColor: Color.silver_400,
    width: 32,
    height: 32,
    left: 13,
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
    color: Color.iOSKeyLabel,
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
    height: 36,
    display: "none",
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    width: 64,
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
    color: Color.iOSKeyLabel,
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
    backgroundColor: Color.gainsboro_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default NoCard;
