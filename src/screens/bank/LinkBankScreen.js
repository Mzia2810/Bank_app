import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Text, Image, Pressable, Modal } from "react-native";
import MyActivity from "../../components/MainActivity";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Margin } from "../../../GlobalStyle";
import { TextInput } from "react-native-gesture-handler";
import HeaderCom from '../../components/HeaderCom'

const LinkBank = () => {
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
    <HeaderCom text='Link Bank'/>
      <View style={styles.linkBank}>
        <View style={[styles.linkBankChild, styles.groupPosition]} />
        <Text style={styles.linkBank1}>Link Bank</Text>
        <View style={[styles.group, styles.groupLayout1, styles.groupPosition]}>
          <Image
            style={[styles.vectorIcon, styles.groupPosition]}
            resizeMode="cover"
            source={require("../../../assets/vector1.png")}
          />
          <Pressable
            style={[styles.groupChild, styles.tabBg, styles.groupLayout1]}
            onPress={() => navigation.navigate("MoNkapHomeScreen")}
          />
        </View>
        <Text style={styles.addABankContainer}>
          <Text style={styles.addABank}>Add a bank using your debit</Text>
          <Text style={styles.card}>card</Text>
        </Text>
        <View style={styles.rectangleParent}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          {/* <Text style={[styles.debitCardNumber, styles.nextTypo]}>
           
          </Text> */}
          <TextInput placeholder=" Debit Card Number" style={{padding:5}}/>
        </View>
        <Pressable
          style={styles.rectangleGroup}
          onPress={() => navigation.navigate("NoCard9")}
        >
          <View
            style={[
              styles.groupInner,
              styles.groupInnerLayout,
              styles.groupLayout,
            ]}
          />
          <Text style={[styles.next, styles.nextTypo]}>Next</Text>
          <View style={styles.rectangleView} />
        </Pressable>
        <View style={[styles.rectangleContainer, styles.groupInnerLayout]}>
          <View style={[styles.groupChild1, styles.groupChild1Position]} />
          <Text style={styles.noCard}>No Card?</Text>
          <Pressable
            style={[styles.rectanglePressable, styles.groupChild1Position]}
            onPress={() => navigation.navigate("NoCard9")}
          />
        </View>
        <View style={[styles.footerMonkap, styles.groupInnerLayout]}>
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
              source={require("../../../assets/c14-house82.png")}
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
          <View style={[styles.linkBank2, styles.linkBank2Position]}>
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
                styles.linkBank2Position,
                styles.groupIconLayout,
              ]}
              resizeMode="cover"
              source={require("../../../assets/group133.png")}
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
  groupPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupLayout1: {
    height: 55,
    width: 88,
  },
  tabBg: {
    backgroundColor: Color.gainsboro_400,
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_xs,
    width: 305,
    left: "50%",
    top: "50%",
  },
  nextTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupInnerLayout: {
    height: 45,
    position: "absolute",
  },
  groupChild1Position: {
    borderWidth: 2,
    borderColor: "#0000ee",
    marginTop: -22.5,
    borderStyle: "solid",
    height: 45,
    borderRadius: Border.br_xs,
    marginLeft: -152.5,
    width: 305,
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
  linkBank2Position: {
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
  linkBankChild: {
    marginTop: -406,
    marginLeft: -188,
    width: 375,
    height: 100,
    backgroundColor: Color.blue_100,
  },
  linkBank1: {
    marginTop: -361,
    marginLeft: -40,
    fontSize: FontSize.size_2xl,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    color: Color.iOSKeyBackgroundHighlight,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  vectorIcon: {
    marginTop: -58.5,
    marginLeft: -105,
    width: 16,
    height: 13,
  },
  groupChild: {
    top: -55,
    left: -88,
  },
  group: {
    marginTop: -321,
    marginLeft: -92,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
  },
  addABank: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  card: {
    margin: Margin.m_3xs,
  },
  addABankContainer: {
    marginTop: -285,
    fontSize: FontSize.size_4xl,
    color: Color.gray_100,
    fontWeight: "600",
    marginLeft: -153,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupItem: {
    marginTop: -20,
    backgroundColor: Color.whitesmoke_500,
    marginLeft: -152.5,
    borderRadius: Border.br_xs,
    height: 40,
    position: "absolute",
  },
  debitCardNumber: {
    marginTop: -12,
    marginLeft: -122.5,
    color: Color.silver_100,
  },
  rectangleParent: {
    marginTop: -210,
    height: 40,
    width: 305,
    marginLeft: -153,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupInner: {
    marginTop: -20.5,
    marginLeft: -150,
    backgroundColor: Color.blue_100,
  },
  next: {
    marginTop: -9.5,
    marginLeft: -15,
    fontWeight: "600",
    color: Color.iOSKeyBackgroundHighlight,
    fontSize: FontSize.size_lg,
  },
  rectangleView: {
    left: 0,
    top: 0,
    height: 49,
    width: 310,
    backgroundColor: Color.gainsboro_400,
    position: "absolute",
  },
  rectangleGroup: {
    marginTop: 200,
    marginLeft: -158,
    height: 49,
    width: 310,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupChild1: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  noCard: {
    marginTop: -11.5,
    marginLeft: -35.5,
    color: Color.blue_100,
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  rectanglePressable: {
    backgroundColor: Color.gray_2000,
  },
  rectangleContainer: {
    marginTop: 265,
    width: 305,
    height: 45,
    marginLeft: -153,
    left: "50%",
    top: "50%",
  },
  footerMonkapChild: {
    bottom: "0%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 9,
    elevation: 9,
    height: "100%",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
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
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 17,
    letterSpacing: 0.5,
    fontSize: FontSize.size_xs,
    color: Color.blue_100,
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
  linkBank2: {
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
    borderColor: "#000",
    borderWidth: 1,
    width: 64,
    height: 36,
    display: "none",
    borderStyle: "solid",
    shadowOffset: {
      width: 3,
      height: -3,
    },
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
    width: 360,
    left: 0,
  },
  linkBank: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
});

export default LinkBank;
