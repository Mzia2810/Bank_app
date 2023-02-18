import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import PendingContainer from "../components/PendingContainer";
import SelectPaymentMethod from "../components/SelectPaymentMethod";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const MabingoSection = () => {
  const [groupContainer27Visible, setGroupContainer27Visible] = useState(false);
  const navigation = useNavigation();

  const openGroupContainer27 = useCallback(() => {
    setGroupContainer27Visible(true);
  }, []);

  const closeGroupContainer27 = useCallback(() => {
    setGroupContainer27Visible(false);
  }, []);
  return (
    <>
      <View style={styles.tabAreaParent}>
        <View style={[styles.tabArea, styles.tabLayout]} />
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <View style={styles.mabingoNjangiDashboardParent}>
            <Text style={styles.mabingoNjangiDashboardContainer}>
              <Text style={styles.mabingo}>
                <Text style={styles.mabingo1}>Mabingo</Text>
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
            carouselImageUrl={{ uri: "crowdfundingpeoplesvgrepocom-14@3x.png" }}
            carouselImagePercentage="75%"
            carouselImageUrl2={{ uri: "ellipse-4029@3x.png" }}
            carouselImageUrl3={{ uri: "ellipse-3929@3x.png" }}
            carouselImageUrl4={{
              uri: "crowdfundingpeoplesvgrepocom-15@3x.png",
            }}
            propWidth={309}
            propLeft={0}
            propWidth1={106}
            propLeft1={33}
          />
          <View style={[styles.groupParent, styles.parentLayout]}>
            <View style={styles.aldanielsMabingoParent}>
              <Text style={[styles.aldanielsMabingo, styles.textTypo]}>
                Aldaniels Mabingo
              </Text>
              <Text style={[styles.nextBeneficiary, styles.playTypo]}>
                Next Beneficiary
              </Text>
            </View>
            <View style={[styles.parent, styles.parentLayout]}>
              <Text
                style={[styles.text, styles.textTypo]}
              >{`17 - 05 - 2022 `}</Text>
              <Text style={[styles.nextPlayDate, styles.playTypo]}>
                Next Play Date
              </Text>
            </View>
          </View>
          <Pressable
            style={[styles.tabAreaGroup, styles.groupLayout]}
            onPress={openGroupContainer27}
          >
            <View style={[styles.tabArea1, styles.tabLayout]} />
            <View
              style={[
                styles.groupItem,
                styles.groupLayout,
                styles.groupPosition,
              ]}
            />
            <Text style={[styles.playNow, styles.playTypo]}> Play Now</Text>
          </Pressable>
          <View style={[styles.groupContainer, styles.groupContainerLayout]}>
            <View style={styles.playedParent}>
              <Text style={[styles.played, styles.textTypo]}>Played</Text>
              <Text style={[styles.amount, styles.textTypo]}>Amount</Text>
              <Text style={[styles.beneficiaryCollects, styles.playTypo]}>
                Beneficiary Collects
              </Text>
            </View>
            <View
              style={[styles.xaf1000000Parent, styles.groupContainerLayout]}
            >
              <Text style={[styles.xaf1000, styles.xafTypo]}>
                XAF 1 000 000
              </Text>
              <Text style={[styles.xaf50000, styles.xafTypo]}>XAF 50 000</Text>
              <Text style={[styles.weekly, styles.textTypo]}>Weekly</Text>
            </View>
          </View>
        </View>
        <Pressable
          style={styles.viewMore}
          onPress={() => navigation.navigate("ViewScheduleMabingo1")}
        >
          <Text style={styles.viewMore1}>View More</Text>
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={groupContainer27Visible}>
        <View style={styles.groupContainer27Overlay}>
          <Pressable
            style={styles.groupContainer27Bg}
            onPress={closeGroupContainer27}
          />
          <SelectPaymentMethod onClose={closeGroupContainer27} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  tabLayout: {
    borderRadius: Border.br_xs,
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
  parentLayout: {
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
    fontStyle: "italic",
    fontFamily: FontFamily.gentiumBasic,
    position: "absolute",
  },
  groupLayout: {
    height: 21,
    width: 67,
    position: "absolute",
  },
  groupContainerLayout: {
    width: 309,
    position: "absolute",
  },
  xafTypo: {
    height: 15,
    textAlign: "center",
    lineHeight: 12,
    fontSize: FontSize.size_base,
    color: Color.blue_100,
    fontFamily: FontFamily.gentiumBasic,
    position: "absolute",
  },
  tabArea: {
    top: 27,
    width: 127,
    height: 181,
    left: 12,
  },
  groupChild: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    marginLeft: -165,
    marginTop: -137,
    borderRadius: Border.br_4xs,
    height: 274,
    width: 330,
    position: "absolute",
  },
  mabingo1: {
    color: Color.blue_100,
  },
  mabingo: {
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
  mabingoNjangiDashboardContainer: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    top: 0,
    left: 0,
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
    left: 26,
    width: 129,
    height: 16,
    position: "absolute",
  },
  mabingoNjangiDashboardParent: {
    top: 8,
    left: 74,
    width: 176,
    height: 35,
    position: "absolute",
  },
  aldanielsMabingo: {
    top: 14,
    color: Color.blue_300,
    left: 0,
  },
  nextBeneficiary: {
    left: 20,
    lineHeight: 12,
    color: Color.gray_2900,
    top: 0,
  },
  aldanielsMabingoParent: {
    left: 201,
    width: 107,
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
    color: Color.gray_2900,
    top: 0,
    left: 0,
  },
  parent: {
    width: 80,
    top: 0,
    left: 0,
  },
  groupParent: {
    top: 224,
    left: 11,
    width: 308,
  },
  groupContainer27Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainer27Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  tabArea1: {
    width: 26,
    height: 18,
    top: 0,
    left: 0,
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
  },
  tabAreaGroup: {
    top: 54,
    left: 133,
  },
  played: {
    fontStyle: "italic",
    color: Color.gray_2900,
    fontWeight: "700",
    top: 0,
    left: 0,
  },
  amount: {
    left: 97,
    fontStyle: "italic",
    color: Color.gray_2900,
    fontWeight: "700",
    top: 0,
  },
  beneficiaryCollects: {
    left: 196,
    lineHeight: 12,
    color: Color.gray_2900,
    fontWeight: "700",
    top: 0,
  },
  playedParent: {
    width: 307,
    height: 16,
    top: 0,
    left: 0,
    position: "absolute",
  },
  xaf1000: {
    left: 217,
    width: 92,
    top: 0,
  },
  xaf50000: {
    left: 82,
    width: 74,
    top: 1,
  },
  weekly: {
    width: 47,
    height: 14,
    top: 1,
    lineHeight: 12,
    color: Color.blue_100,
    left: 0,
  },
  xaf1000000Parent: {
    top: 16,
    height: 16,
    left: 0,
  },
  groupContainer: {
    top: 102,
    height: 32,
    left: 12,
  },
  rectangleParent: {
    left: "50%",
    top: "50%",
    marginLeft: -165,
    marginTop: -137,
    height: 274,
    width: 330,
    position: "absolute",
  },
  viewMore1: {
    fontSize: FontSize.size_lg,
    textDecoration: "underline",
    fontFamily: FontFamily.gentiumBookBasic,
    fontStyle: "italic",
    color: Color.blue_100,
    textAlign: "left",
  },
  viewMore: {
    left: 131,
    top: 222,
    position: "absolute",
  },
  tabAreaParent: {
    top: 266,
    height: 274,
    width: 330,
    left: 0,
    position: "absolute",
  },
});

export default MabingoSection;
