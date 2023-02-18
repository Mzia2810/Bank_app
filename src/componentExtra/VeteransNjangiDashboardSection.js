import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Image, Modal } from "react-native";
import PendingContainer from "../components/PendingContainer";
import SelectPaymentMethod from "../components/SelectPaymentMethod";
import AddContact from "../components/AddContact";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const VeteransNjangiDashboardSection = () => {
  const [groupContainer31Visible, setGroupContainer31Visible] = useState(false);
  const [tabArea6Visible, setTabArea6Visible] = useState(false);

  const openGroupContainer31 = useCallback(() => {
    setGroupContainer31Visible(true);
  }, []);

  const closeGroupContainer31 = useCallback(() => {
    setGroupContainer31Visible(false);
  }, []);

  const openTabArea6 = useCallback(() => {
    setTabArea6Visible(true);
  }, []);

  const closeTabArea6 = useCallback(() => {
    setTabArea6Visible(false);
  }, []);
  return (
    <>
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <View style={styles.veteransNjangiDashboardParent}>
          <Text
            style={[
              styles.veteransNjangiDashboardContainer,
              styles.textFlexBox,
            ]}
          >
            <Text style={styles.veterans}>
              <Text style={styles.veterans1}>Veterans</Text>
            </Text>
            <Text style={styles.njangiDashboard}>
              <Text>{`  `}</Text>
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
          carouselImagePercentage="75%"
          carouselImageUrl2={{ uri: "ellipse-4029@3x.png" }}
          carouselImageUrl3={{ uri: "ellipse-3929@3x.png" }}
          carouselImageUrl4={require("../assets/crowdfundingpeoplesvgrepocom-11.png")}
          propWidth={309}
          propLeft={0}
          propWidth1={106}
          propLeft1={33}
        />
        <View style={[styles.groupParent, styles.parentLayout1]}>
          <View style={[styles.hillaryOkengParent, styles.parentLayout]}>
            <Text style={[styles.hillaryOkeng, styles.textFlexBox]}>
              Hillary Okeng
            </Text>
            <Text style={[styles.beneficiary, styles.xafTypo]}>
              Beneficiary
            </Text>
          </View>
          <View style={[styles.parent, styles.parentLayout]}>
            <Text
              style={[styles.text, styles.textFlexBox]}
            >{`17 - 05 - 2022 `}</Text>
            <Text style={[styles.nextPlayDate, styles.xafTypo]}>
              Next Play Date
            </Text>
          </View>
        </View>
        <View style={[styles.groupContainer, styles.groupContainerLayout]}>
          <View style={[styles.playedParent, styles.parentLayout1]}>
            <Text style={[styles.played, styles.textFlexBox]}>Played</Text>
            <Text style={[styles.amount, styles.textFlexBox]}>Amount</Text>
            <Text style={[styles.beneficiaryCollects, styles.xafTypo]}>
              Beneficiary Collects
            </Text>
          </View>
          <View style={[styles.xaf50000Parent, styles.groupContainerLayout]}>
            <Text style={[styles.xaf50000, styles.xafTypo]}>XAF 50 000</Text>
            <Text style={[styles.xaf2500, styles.xafTypo]}>XAF 2500</Text>
            <Text style={[styles.daily, styles.dailyTypo]}>Daily</Text>
          </View>
        </View>
        <Pressable
          style={[styles.rectangleGroup, styles.groupPosition]}
          onPress={openGroupContainer31}
        >
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Text style={[styles.playNow, styles.xafTypo]}> Play Now</Text>
        </Pressable>
        <View style={[styles.addNew, styles.addNewLayout]}>
          <Text style={[styles.addNewMember, styles.dailyTypo]}>
            Add New Member
          </Text>
          <Image
            style={styles.addIcon}
            resizeMode="cover"
            source={require("../assets/add.png")}
          />
          <Pressable
            style={[styles.tabArea, styles.addNewLayout]}
            onPress={openTabArea6}
          />
        </View>
      </View>

      <Modal animationType="fade" transparent visible={groupContainer31Visible}>
        <View style={styles.groupContainer31Overlay}>
          <Pressable
            style={styles.groupContainer31Bg}
            onPress={closeGroupContainer31}
          />
          <SelectPaymentMethod onClose={closeGroupContainer31} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={tabArea6Visible}>
        <View style={styles.tabArea6Overlay}>
          <Pressable style={styles.tabArea6Bg} onPress={closeTabArea6} />
          <AddContact onClose={closeTabArea6} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 274,
    width: 330,
    left: "50%",
    top: "50%",
    marginLeft: -165,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  myTurnTypo: {
    textAlign: "right",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.gentiumBasic,
    position: "absolute",
  },
  parentLayout1: {
    width: 304,
    position: "absolute",
  },
  parentLayout: {
    width: 80,
    position: "absolute",
  },
  xafTypo: {
    textAlign: "center",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.gentiumBasic,
    position: "absolute",
  },
  groupContainerLayout: {
    width: 309,
    position: "absolute",
  },
  dailyTypo: {
    height: 14,
    fontFamily: FontFamily.gentiumBasic,
    textAlign: "left",
    position: "absolute",
  },
  groupPosition: {
    height: 21,
    width: 67,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  addNewLayout: {
    height: 37,
    position: "absolute",
  },
  groupChild: {
    marginTop: -137,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    borderRadius: Border.br_4xs,
  },
  veterans1: {
    color: Color.blue_100,
  },
  veterans: {
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
  veteransNjangiDashboardContainer: {
    fontSize: FontSize.size_xl,
    left: 0,
    top: 0,
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
    left: 26,
    width: 129,
    height: 16,
    position: "absolute",
  },
  veteransNjangiDashboardParent: {
    top: 8,
    left: 74,
    width: 179,
    height: 35,
    position: "absolute",
  },
  hillaryOkeng: {
    top: 14,
    color: Color.blue_300,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.gentiumBasic,
    left: 0,
  },
  beneficiary: {
    left: 21,
    lineHeight: 12,
    fontStyle: "italic",
    color: Color.gray_2900,
    top: 0,
  },
  hillaryOkengParent: {
    left: 224,
    height: 30,
    top: 1,
  },
  text: {
    top: 15,
    left: 1,
    color: Color.blue_300,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.gentiumBasic,
  },
  nextPlayDate: {
    lineHeight: 12,
    fontStyle: "italic",
    color: Color.gray_2900,
    left: 0,
    top: 0,
  },
  parent: {
    height: 31,
    left: 0,
    top: 0,
  },
  groupParent: {
    top: 224,
    left: 11,
    height: 31,
  },
  played: {
    fontSize: FontSize.size_base,
    fontStyle: "italic",
    color: Color.gray_2900,
    fontFamily: FontFamily.gentiumBasic,
    fontWeight: "700",
    left: 0,
    top: 0,
  },
  amount: {
    left: 95,
    fontSize: FontSize.size_base,
    fontStyle: "italic",
    color: Color.gray_2900,
    fontFamily: FontFamily.gentiumBasic,
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
  playedParent: {
    height: 16,
    left: 0,
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
    lineHeight: 12,
    top: 2,
    fontSize: FontSize.size_base,
    color: Color.blue_100,
    left: 0,
  },
  xaf50000Parent: {
    top: 16,
    height: 16,
    left: 0,
  },
  groupContainer: {
    top: 102,
    left: 12,
    height: 32,
  },
  groupContainer31Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainer31Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupItem: {
    marginTop: -10.5,
    marginLeft: -33.5,
    backgroundColor: Color.blue_100,
    borderRadius: Border.br_4xs,
  },
  playNow: {
    left: 5,
    color: Color.iOSKeyBackgroundHighlight,
    width: 57,
    top: 2,
    height: 16,
    fontStyle: "italic",
  },
  rectangleGroup: {
    marginTop: -82,
    marginLeft: 84,
  },
  addNewMember: {
    top: 12,
    left: 30,
    fontSize: FontSize.size_xs,
    color: Color.iOSKeyLabel,
    width: 92,
  },
  addIcon: {
    height: "62.16%",
    width: "18.85%",
    top: "18.92%",
    right: "77.87%",
    bottom: "18.92%",
    left: "3.28%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  tabArea6Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  tabArea6Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  tabArea: {
    backgroundColor: Color.gainsboro_700,
    width: 118,
    left: 0,
    top: 0,
  },
  addNew: {
    top: 47,
    left: 6,
    width: 122,
  },
  rectangleParent: {
    marginTop: -29,
  },
});

export default VeteransNjangiDashboardSection;
