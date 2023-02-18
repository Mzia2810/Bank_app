import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import PendingContainer from "../components/PendingContainer";
import SelectPaymentMethod from "../components/SelectPaymentMethod";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const KupexanDashboardSection = () => {
  const [groupContainer28Visible, setGroupContainer28Visible] = useState(false);

  const openGroupContainer28 = useCallback(() => {
    setGroupContainer28Visible(true);
  }, []);

  const closeGroupContainer28 = useCallback(() => {
    setGroupContainer28Visible(false);
  }, []);
  return (
    <>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View
          style={[
            styles.groupChild,
            styles.groupPosition,
            styles.groupChildLayout,
          ]}
        />
        <View style={styles.kupexanClassOf83NjangiDParent}>
          <Text style={styles.kupexanClassContainer}>
            <Text style={styles.kupexanClassOf83}>
              <Text style={styles.kupexanClass}>Kupexan - Class of 83</Text>
              <Text>{` `}</Text>
            </Text>
            <Text style={styles.njangiDashboard}>
              <Text style={styles.njangiDashboard1}>Njangi Dashboard</Text>
            </Text>
          </Text>
          <View style={styles.jan25th2023Parent}>
            <Text style={[styles.jan25th2023, styles.myTurnTypo]}>
              Jan 25th 2023
            </Text>
            <Text style={[styles.myTurn, styles.myTurnTypo]}>My Turn</Text>
          </View>
        </View>
        <PendingContainer
          carouselImageUrl={require("../assets/crowdfundingpeoplesvgrepocom-1.png")}
          carouselImagePercentage="40%"
          carouselImageUrl2={require("../assets/ellipse-4014.png")}
          carouselImageUrl3={require("../assets/ellipse-3914.png")}
          carouselImageUrl4={require("../assets/crowdfundingpeoplesvgrepocom-11.png")}
          propWidth={307}
          propLeft={31}
          propWidth1={104}
          propLeft1={31}
        />
        <View style={[styles.groupParent, styles.parentLayout1]}>
          <View style={styles.hillaryOkengParent}>
            <Text style={[styles.hillaryOkeng, styles.textTypo]}>
              Hillary Okeng
            </Text>
            <Text style={[styles.beneficiary, styles.playTypo]}>
              Beneficiary
            </Text>
          </View>
          <View style={[styles.parent, styles.parentLayout1]}>
            <Text
              style={[styles.text, styles.textTypo]}
            >{`17 - 05 - 2022 `}</Text>
            <Text style={[styles.nextPlayDate, styles.playTypo]}>
              Next Play Date
            </Text>
          </View>
        </View>
        <Pressable
          style={[styles.tabAreaParent, styles.groupItemLayout]}
          onPress={openGroupContainer28}
        >
          <View style={styles.tabArea} />
          <View
            style={[
              styles.groupItem,
              styles.groupItemLayout,
              styles.groupPosition,
            ]}
          />
          <Text style={[styles.playNow, styles.playTypo]}> Play Now</Text>
        </Pressable>
        <View style={[styles.playedParent, styles.parentLayout]}>
          <Text style={[styles.played, styles.textTypo]}>Played</Text>
          <Text style={[styles.amount, styles.textTypo]}>Amount</Text>
          <Text style={[styles.beneficiaryCollects, styles.playTypo]}>
            Beneficiary Collects
          </Text>
          <View style={[styles.xaf50000Parent, styles.parentLayout]}>
            <Text style={[styles.xaf50000, styles.playTypo]}>XAF 50 000</Text>
            <Text style={[styles.xaf2500, styles.playTypo]}>XAF 2500</Text>
            <Text style={[styles.daily, styles.textTypo]}>Daily</Text>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={groupContainer28Visible}>
        <View style={styles.groupContainer28Overlay}>
          <Pressable
            style={styles.groupContainer28Bg}
            onPress={closeGroupContainer28}
          />
          <SelectPaymentMethod onClose={closeGroupContainer28} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 274,
    width: 330,
    marginLeft: -165,
    position: "absolute",
  },
  groupPosition: {
    borderRadius: Border.br_4xs,
    left: "50%",
    top: "50%",
  },
  myTurnTypo: {
    textAlign: "right",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.gentiumBasic,
    position: "absolute",
  },
  parentLayout1: {
    height: 31,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.gentiumBasic,
    textAlign: "left",
    position: "absolute",
  },
  playTypo: {
    textAlign: "center",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.gentiumBasic,
    position: "absolute",
  },
  groupItemLayout: {
    height: 21,
    width: 67,
    position: "absolute",
  },
  parentLayout: {
    width: 309,
    position: "absolute",
  },
  groupChild: {
    marginTop: -137,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    width: 330,
    marginLeft: -165,
    borderRadius: Border.br_4xs,
  },
  kupexanClass: {
    color: Color.blue_100,
  },
  kupexanClassOf83: {
    fontFamily: FontFamily.gentiumBasic,
    fontWeight: "700",
  },
  njangiDashboard1: {
    fontStyle: "italic",
    fontFamily: FontFamily.gentiumBasic,
  },
  njangiDashboard: {
    color: Color.gray_2900,
  },
  kupexanClassContainer: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  jan25th2023: {
    left: 52,
    color: Color.blue_300,
    top: 0,
  },
  myTurn: {
    lineHeight: 12,
    top: 2,
    fontStyle: "italic",
    color: Color.gray_2900,
    left: 0,
  },
  jan25th2023Parent: {
    top: 19,
    left: 62,
    width: 129,
    height: 16,
    position: "absolute",
  },
  kupexanClassOf83NjangiDParent: {
    top: 8,
    left: 38,
    width: 260,
    height: 35,
    position: "absolute",
  },
  hillaryOkeng: {
    top: 14,
    color: Color.blue_300,
    left: 0,
  },
  beneficiary: {
    left: 20,
    lineHeight: 12,
    fontStyle: "italic",
    color: Color.gray_2900,
    top: 0,
  },
  hillaryOkengParent: {
    left: 224,
    width: 79,
    height: 30,
    top: 1,
    position: "absolute",
  },
  text: {
    top: 15,
    left: 1,
    color: Color.blue_300,
  },
  nextPlayDate: {
    lineHeight: 12,
    fontStyle: "italic",
    color: Color.gray_2900,
    left: 0,
    top: 0,
  },
  parent: {
    width: 80,
    left: 0,
    top: 0,
  },
  groupParent: {
    top: 224,
    left: 11,
    width: 303,
  },
  groupContainer28Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainer28Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  tabArea: {
    borderRadius: Border.br_xs,
    width: 26,
    height: 18,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    marginTop: -10.5,
    marginLeft: -33.5,
    backgroundColor: Color.blue_100,
  },
  playNow: {
    left: 5,
    color: Color.iOSKeyBackgroundHighlight,
    width: 57,
    top: 2,
    height: 16,
    fontStyle: "italic",
  },
  tabAreaParent: {
    top: 54,
    left: 133,
  },
  played: {
    fontStyle: "italic",
    color: Color.gray_2900,
    fontWeight: "700",
    left: 0,
    top: 0,
  },
  amount: {
    left: 93,
    fontStyle: "italic",
    color: Color.gray_2900,
    fontWeight: "700",
    top: 0,
  },
  beneficiaryCollects: {
    left: 193,
    lineHeight: 12,
    fontStyle: "italic",
    color: Color.gray_2900,
    fontWeight: "700",
    top: 0,
  },
  xaf50000: {
    left: 235,
    width: 74,
    height: 15,
    lineHeight: 12,
    color: Color.blue_100,
    top: 0,
  },
  xaf2500: {
    left: 90,
    top: 1,
    lineHeight: 12,
    color: Color.blue_100,
  },
  daily: {
    width: 34,
    height: 14,
    lineHeight: 12,
    top: 2,
    color: Color.blue_100,
    left: 0,
  },
  xaf50000Parent: {
    top: 16,
    height: 16,
    left: 0,
  },
  playedParent: {
    top: 102,
    left: 12,
    height: 32,
  },
  rectangleParent: {
    marginTop: -29,
    left: "50%",
    top: "50%",
    width: 330,
    marginLeft: -165,
  },
});

export default KupexanDashboardSection;
