import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Image, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyActivity from "../../components/MainActivity";
import EneoBill from "../../componentExtra/EneoBill";
import ContainerMonkap from "../../componentExtra/ContainerMonkap";
import PaymentSection from "../../componentExtra/PaymentSection";
import ImageGallery from "../../componentExtra/ImageGallery";
import CableTVSection from "../../componentExtra/CableTVSection";
import PaymentContainer from "../../componentExtra/PaymentContainer";
import { FontFamily, FontSize, Color, Border } from "../../../GlobalStyle";

const Pay1 = ({navigation}) => {
  const [tabArea1Visible, setTabArea1Visible] = useState(false);
  const [groupContainer9Visible, setGroupContainer9Visible] = useState(false);
  const [groupContainer16Visible, setGroupContainer16Visible] = useState(false);
  const [groupContainer22Visible, setGroupContainer22Visible] = useState(false);
  const [groupContainer28Visible, setGroupContainer28Visible] = useState(false);
//   const navigation = useNavigation();

  const openTabArea1 = useCallback(() => {
    setTabArea1Visible(true);
  }, []);

  const closeTabArea1 = useCallback(() => {
    setTabArea1Visible(false);
  }, []);

  const openGroupContainer9 = useCallback(() => {
    setGroupContainer9Visible(true);
  }, []);

  const closeGroupContainer9 = useCallback(() => {
    setGroupContainer9Visible(false);
  }, []);

  const openGroupContainer16 = useCallback(() => {
    setGroupContainer16Visible(true);
  }, []);

  const closeGroupContainer16 = useCallback(() => {
    setGroupContainer16Visible(false);
  }, []);

  const openGroupContainer22 = useCallback(() => {
    setGroupContainer22Visible(true);
  }, []);

  const closeGroupContainer22 = useCallback(() => {
    setGroupContainer22Visible(false);
  }, []);

  const openGroupContainer28 = useCallback(() => {
    setGroupContainer28Visible(true);
  }, []);

  const closeGroupContainer28 = useCallback(() => {
    setGroupContainer28Visible(false);
  }, []);
  return (
    <>
      <View style={styles.pay}>
        {/* <ContainerMonkap
          carouselImageUrls={require("../assets/c14-house.png")}
          carouselImageUrls2={require("../assets/group.png")}
          carouselImageUrls3={require("../assets/group1.png")}
          carouselImageUrls4={{ uri: "group232@3x.png" }}
          onTabAreaPress={() => navigation.navigate("MoNkapHomeScreen2")}
          onTabAreaPress1={openTabArea1}
          onImageedit341319179892Press={() =>
            navigation.navigate("BottomTabsRoot", { screen: "LinkBank" })
          }
          onTabAreaPress2={() =>
            navigation.navigate("BottomTabsRoot", { screen: "MTNSplashScreen" })
          }
          onTabAreaPress3={() => navigation.navigate("OMoneySplashScreen")}
        />
        <PaymentSection
          paymentText="PAY"
          onGroupPress={() => navigation.navigate("MoNkapHomeScreen2")}
        /> */}
        {/* <ImageGallery
          carouselImageUrls={{ uri: "vector100@3x.png" }}
          carouselImageUrls2={{ uri: "vector101@3x.png" }}
          carouselImageUrls3={{ uri: "vector102@3x.png" }}
          carouselImageUrls4={{ uri: "vector103@3x.png" }}
        /> */}
        <View style={styles.rectangleParent}>
          <View style={styles.groupChild} />
          <View style={styles.groupItem} />
          <Text style={[styles.utilities, styles.utilitiesTypo]}>
            Utilities
          </Text>
          <View style={[styles.tabArea, styles.tabLayout]} />
          <Text style={[styles.schoolFee, styles.utilitiesTypo]}>
            School Fee
          </Text>
          <Pressable
            style={[styles.tabArea1, styles.tabLayout]}
            onPress={() => navigation.navigate("Pay")}
          />
        </View>
        <View style={styles.utilities1}>
          {/* <CableTVSection /> */}
          <View style={[styles.rectangleGroup, styles.getBillPosition]}>
            <View style={[styles.groupInner, styles.groupInnerPosition]} />
            <Text style={[styles.searchForAgency, styles.getBill1Typo]}>
              search for agency
            </Text>
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../../../assets/vector87.png")}
            />
          </View>
          <View style={[styles.getBill, styles.getBillPosition]}>
            <View style={[styles.getBillChild, styles.groupInnerPosition]} />
            <Text style={[styles.getBill1, styles.getBill1Typo]}>GET BILL</Text>
          </View>
          {/* <PaymentContainer
            onGroupPressablePress={openGroupContainer9}
            onGroupPressablePress1={openGroupContainer16}
            onGroupPressablePress2={openGroupContainer22}
            onGroupPressablePress3={openGroupContainer28}
          /> */}
        </View>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../../../assets/vector87.png")}
        />
      </View>

      {/* <Modal animationType="fade" transparent visible={tabArea1Visible}>
        <View style={styles.tabArea1Overlay}>
          <Pressable style={styles.tabArea1Bg} onPress={closeTabArea1} />
          <MyActivity onClose={closeTabArea1} />
        </View>
      </Modal> */}

      {/* <Modal animationType="fade" transparent visible={groupContainer9Visible}>
        <View style={styles.groupContainer9Overlay}>
          <Pressable
            style={styles.groupContainer9Bg}
            onPress={closeGroupContainer9}
          />
          <EneoBill onClose={closeGroupContainer9} />
        </View>
      </Modal> */}

      {/* <Modal animationType="fade" transparent visible={groupContainer16Visible}>
        <View style={styles.groupContainer16Overlay}>
          <Pressable
            style={styles.groupContainer16Bg}
            onPress={closeGroupContainer16}
          />
          <EneoBill onClose={closeGroupContainer16} />
        </View>
      </Modal> */}

      {/* <Modal animationType="fade" transparent visible={groupContainer22Visible}>
        <View style={styles.groupContainer22Overlay}>
          <Pressable
            style={styles.groupContainer22Bg}
            onPress={closeGroupContainer22}
          />
          <EneoBill onClose={closeGroupContainer22} />
        </View>
      </Modal> */}

      {/* <Modal animationType="fade" transparent visible={groupContainer28Visible}>
        <View style={styles.groupContainer28Overlay}>
          <Pressable
            style={styles.groupContainer28Bg}
            onPress={closeGroupContainer28}
          />
          <EneoBill onClose={closeGroupContainer28} />
        </View>
      </Modal> */}
    </>
  );
};

const styles = StyleSheet.create({
  utilitiesTypo: {
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
    letterSpacing: 1.1,
    top: 7,
    lineHeight: 22,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  tabLayout: {
    backgroundColor: Color.gold_400,
    width: 168,
    borderBottomLeftRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
    top: 0,
    height: 33,
    position: "absolute",
  },
  getBillPosition: {
    bottom: "79.55%",
    top: "14.17%",
    height: "6.28%",
    position: "absolute",
  },
  groupInnerPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    borderRadius: Border.br_3xs,
    position: "absolute",
    width: "100%",
  },
  getBill1Typo: {
    fontFamily: FontFamily.gentiumBookBasic,
    textAlign: "center",
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
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
  groupContainer9Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainer9Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupContainer16Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainer16Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupContainer22Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainer22Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
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
  groupChild: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
    height: 33,
    width: 336,
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.blue_100,
    width: 168,
    borderBottomLeftRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
    left: 0,
    top: 0,
    height: 33,
    position: "absolute",
  },
  utilities: {
    left: 53,
    fontWeight: "700",
    color: Color.iOSKeyBackgroundHighlight,
  },
  tabArea: {
    left: 0,
  },
  schoolFee: {
    left: 213,
    color: Color.iOSKeyLabel,
  },
  tabArea1: {
    left: 168,
  },
  rectangleParent: {
    top: 221,
    left: 10,
    height: 33,
    width: 336,
    position: "absolute",
  },
  groupInner: {
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  searchForAgency: {
    top: "16.13%",
    left: "11.16%",
    letterSpacing: 1.9,
    color: Color.gray_2200,
    lineHeight: 22,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.gentiumBookBasic,
  },
  vectorIcon: {
    height: "61.29%",
    width: "6.61%",
    right: "5.37%",
    bottom: "12.9%",
    left: "88.02%",
    top: "25.81%",
  },
  rectangleGroup: {
    width: "67.22%",
    right: "29.44%",
    left: "3.33%",
  },
  getBillChild: {
    backgroundColor: Color.gainsboro_400,
  },
  getBill1: {
    height: "45.16%",
    width: "70.59%",
    left: "15.29%",
    fontSize: FontSize.size_sm,
    letterSpacing: 1.6,
    lineHeight: 19,
    top: "25.81%",
    color: Color.iOSKeyLabel,
  },
  getBill: {
    width: "24.17%",
    right: "3.33%",
    left: "72.5%",
  },
  utilities1: {
    top: 259,
    width: 360,
    height: 494,
    left: 0,
    position: "absolute",
  },
  vectorIcon1: {
    height: "4.25%",
    width: "8.06%",
    top: "4.25%",
    right: "59.17%",
    bottom: "91.5%",
    left: "32.78%",
  },
  pay: {
    backgroundColor: Color.whitesmoke_200,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Pay1;
