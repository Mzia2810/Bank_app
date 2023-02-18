import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Pressable, Text, Modal } from "react-native";
import MyActivity from "../../components/MainActivity";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../../../GlobalStyle";
import HeaderCom from "../../components/HeaderCom";
import { TextInput } from "react-native-gesture-handler";

const NoCard3 = () => {
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
        <View
          style={[styles.group, styles.groupLayout3, styles.groupPosition1]}
        >
          <Image
            style={[styles.vectorIcon, styles.groupPosition1]}
            resizeMode="cover"
            source={require("../../../assets/vector1.png")}
          />
          <Pressable
            style={[styles.groupChild, styles.groupLayout3]}
            onPress={() => navigation.navigate("NoCard4")}
          />
        </View>
        <View
          style={[
            styles.noCardItem,
            styles.childShadowBox,
            styles.noCardItemShadowBox,
            // {backgroundColor:'yellow'}

          ]}
        />
        <Text style={[styles.pleaseFillIn ,]}>
          Please fill in the infomation below
        </Text>
        {/* <Text style={[styles.cardAccount, styles.cardPosition]}>
          Card / Account number
        </Text> */}
        <View style={[styles.noCardInner, styles.noCardInnerLayout,]} 

        >
           <Text style={{position:'absolute',marginTop:-30}}>
          Card / Account number
        </Text>
          <TextInput placeholder="Muhammad" keyboardType="phone-pad" />
          </View>
       
        <View
          style={[
            styles.rectangleView,
            styles.orangeChildLayout,
            styles.noCardInnerLayout,
          ]}
        >
        <Text style={{position:'absolute',marginTop:-30}}>Card / Account name</Text>

          <TextInput placeholder="Zia" keyboardType="phone-pad"  style={{padding:5}}/>
          </View>
        <View style={[styles.rectangleParent, styles.footerMonkapLayout]}>
          <View
            style={[
              styles.groupItem,
              styles.groupLayout2,
              styles.groupPosition,
              
            ]}
          />
          <Text style={styles.linkBank}>Link Bank</Text>
          <Pressable
            style={[
              styles.groupInner,
              styles.groupLayout2,
              styles.groupPosition,
            ]}
            onPress={() => navigation.navigate("BottomTabScreen")}
          />
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
  groupLayout3: {
    height: 51,
    width: 55,
    position: "absolute",
  },
  childShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  noCardItemShadowBox: {
    elevation: 9,
    shadowRadius: 9,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  cardPosition: {
    marginLeft: -159,
    textAlign: "left",
    color: Color.gray_100,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_sm,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  noCardInnerLayout: {
    width: 317,
    borderWidth: 0.5,
    borderColor: "#0000ee",
    left: 21,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  orangeChildLayout: {
    height: 36,
    borderStyle: "solid",
  },
  footerMonkapLayout: {
    height: 45,
    position: "absolute",
  },
  groupLayout2: {
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  groupPosition: {
    marginLeft: -152.5,
    marginTop: -22.5,
    borderRadius: Border.br_xs,
    height: 45,
    width: 305,
    left: "50%",
    top: "50%",
  },
  groupLayout: {
    height: 50,
    position: "absolute",
  },
  groupLayout1: {
    width: 101,
    left: 10,
  },
  textTypo: {
    fontSize: FontSize.size_4xl,
    top: 14,
    color: Color.iOSKeyLabel,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  rectangleParentPosition1: {
    left: 130,
    height: 50,
    width: 101,
    position: "absolute",
  },
  rectangleParentPosition2: {
    top: 678,
    height: 50,
    position: "absolute",
  },
  rectangleParentPosition: {
    left: 250,
    height: 50,
    width: 101,
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
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 17,
    letterSpacing: 0.5,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  linkBank1Position: {
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
  noCardItem: {
    top: 196,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    width: 335,
    height: 179,
    borderRadius: Border.br_3xs,
    elevation: 9,
    shadowRadius: 9,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    left: 12,
    position: "absolute",
  },
  pleaseFillIn: {
    marginTop: -252,
    marginLeft: -163,
    textAlign: "left",
    color: Color.gray_100,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_sm,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  cardAccount: {
    marginTop: -193,
  },
  cardAccount1: {
    marginTop: -112,
  },
  noCardInner: {
    top: 233,
    height: 35,
    borderStyle: "solid",
    width: 317,
    borderWidth: 0.5,
    borderColor: "#0000ee",
    left: 21,
  },
  rectangleView: {
    top: 314,
    width: 317,
    borderWidth: 0.5,
    borderColor: "#0000ee",
    left: 21,
    height: 36,
  },
  groupItem: {
    backgroundColor: Color.blue_100,
  },
  linkBank: {
    // justifyContent:'flex-end',
    marginTop: -11.5,
    marginLeft: -35.5,
    fontSize: FontSize.size_lg,
    color: Color.iOSKeyBackgroundHighlight,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupInner: {
    backgroundColor: Color.blue_200,
  },
  rectangleParent: {
    marginTop: 220,
    marginLeft: -149,
    width: 305,
    height: 45,
    left: "50%",
    top: "50%",
  },
  groupChild1: {
    borderRadius: Border.br_2xs,
    backgroundColor: Color.gainsboro_100,
    left: 0,
    top: 0,
    height: 50,
    width: 101,
    position: "absolute",
  },
  text: {
    left: 47,
    color: Color.iOSKeyLabel,
  },
  rectangleGroup: {
    top: 504,
  },
  rectangleContainer: {
    top: 562,
  },
  groupView: {
    top: 620,
  },
  rectangleParent2: {
    top: 504,
  },
  rectangleParent3: {
    top: 562,
  },
  rectangleParent4: {
    top: 620,
  },
  text7: {
    left: 48,
    color: Color.iOSKeyLabel,
  },
  rectangleIcon: {
    top: 6,
    left: 118,
    width: 96,
    height: 38,
    position: "absolute",
  },
  rectangleParent5: {
    left: 132,
    width: 214,
  },
  rectangleParent6: {
    top: 504,
  },
  rectangleParent7: {
    top: 562,
  },
  rectangleParent8: {
    top: 620,
  },
  plusSignIcon: {
    top: 679,
    left: 284,
    width: 50,
  },
  footerMonkapChild: {
    bottom: "0%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
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
    fontWeight: "700",
    color: Color.blue_100,
    left: 12,
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 17,
    letterSpacing: 0.5,
    fontSize: FontSize.size_xs,
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
    left: 13,
    backgroundColor: Color.silver_400,
    width: 32,
    height: 32,
    position: "absolute",
  },
  linkBank1: {
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
    borderColor: "#000",
    borderWidth: 1,
    width: 64,
    display: "none",
    borderRadius: Border.br_xs,
    height: 36,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
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
    backgroundColor: Color.whitesmoke_400,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default NoCard3;
