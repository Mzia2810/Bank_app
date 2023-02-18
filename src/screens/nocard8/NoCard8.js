import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Image, Pressable, Text, Modal } from "react-native";
import MyActivity from "../../components/MainActivity";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../../../GlobalStyle";
import HeaderCom from "../../components/HeaderCom";

const NoCard8 = () => {
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
        <Pressable
          style={[styles.group, styles.groupLayout, styles.groupPosition1]}
          onPress={() => navigation.navigate("NoCard9")}
        >
          <Image
            style={[styles.vectorIcon, styles.groupPosition1]}
            resizeMode="cover"
            source={require("../../../assets/vector1.png")}
          />
          <View style={[styles.groupChild, styles.groupLayout]} />
        </Pressable>
        <View style={[styles.rectangleParent, styles.footerMonkapLayout]}>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Text style={styles.continue}>Continue</Text>
          <View style={[styles.groupInner, styles.groupPosition]} />
        </View>
        <Text style={styles.chooseTheBank}>
          Choose the bank you want to link your e-wallet to
        </Text>
        <View style={[styles.afriklandFirstBank, styles.bankLayout,]}>
          <View
            style={[
              styles.bankItemShadowBox,
              styles.bankItemShadowBox1,
              styles.childShadowBox,
              styles.bankItemLayout,
            ]}
          />
          <Image
            style={styles.download41}
            resizeMode="cover"
            source={require("../../../assets/download-4-11.png")}
          />
          <Text
            style={[
              styles.afriklandFirstBank1,
              styles.bankTypo,
              styles.bankPosition,
              styles.bankPosition1,
            ]}
          >
            Afrikland first bank
          </Text>
          <Pressable
            style={[
              styles.afriklandFirstBankItem,
              styles.bankItemShadowBox,
              styles.bankItemShadowBox1,
              styles.bankItemLayout,
            ]}
            onPress={() => navigation.navigate("NoCard5")}
          />
        </View>
        <View style={[styles.ccaBank, styles.bankLayout]}>
          <View
            style={[
              styles.bankItemShadowBox1,
              styles.childShadowBox,
              styles.bankItemLayout,
            ]}
          />
          <Text
            style={[
              styles.ccaBank1,
              styles.bankTypo,
              styles.bankPosition,
              styles.bankPosition1,
            ]}
          >
            CCA Bank
          </Text>
          <Image
            style={[styles.download31, styles.download31Layout]}
            resizeMode="cover"
            source={require("../../../assets/download-3-1.png")}
          />
          <Pressable
            style={[
              styles.ccaBankItem,
              styles.bankItemShadowBox,
              styles.bankItemShadowBox1,
              styles.bankItemLayout,
            ]}
            onPress={() => navigation.navigate("NoCard")}
          />
        </View>
        <View style={[styles.cbcBank, styles.bankLayout]}>
          <View style={[styles.childShadowBox, styles.bankItemLayout]} />
          <Text
            style={[
              styles.ccaBank1,
              styles.bankTypo,
              styles.bankPosition,
              styles.bankPosition1,
            ]}
          >
            CBC Bank
          </Text>
          <Image
            style={styles.download1Icon}
            resizeMode="cover"
            source={require("../../../assets/download-1.png")}
          />
          <Pressable
            style={[
              styles.ccaBankItem,
              styles.bankItemShadowBox,
              styles.bankItemShadowBox1,
              styles.bankItemLayout,
            ]}
            onPress={() => navigation.navigate("NoCard1")}
          />
        </View>
        <View style={[styles.yup, styles.yupPosition , {backgroundColor:'white'}]}>
          <View style={styles.bankItemLayout} />
          <Text style={[styles.yup1, styles.bankTypo, styles.bankPosition]}>
            YUP
          </Text>
          <Image
            style={styles.x630wa1Icon}
            resizeMode="cover"
            source={require("../../../assets/1200x630wa-1.png")}
          />
          <Pressable
            style={[
              styles.ccaBankItem,
              styles.bankItemShadowBox,
              styles.bankItemShadowBox1,
              styles.bankItemLayout,
            ]}
            onPress={() => navigation.navigate("NoCard2")}
          />
        </View>


        <View style={[styles.ubc, styles.yupPosition,{backgroundColor:'white'}]}>
          <View style={styles.bankItemLayout} />
          <Text
            style={[styles.ubc1, styles.bankTypo, styles.bankPosition]}
          >{`UBC `}</Text>
          <Image
            style={styles.ubcPlc1Icon}
            resizeMode="cover"
            source={require("../../../assets/ubcplc-1.png")}
          />
          <Pressable
            style={[
              styles.ccaBankItem,
              styles.bankItemShadowBox,
              styles.bankItemShadowBox1,
              styles.bankItemLayout,
            ]}
            onPress={() => navigation.navigate("NoCard7")}
          />
        </View>


        
        <View style={[styles.more, styles.yupPosition,{backgroundColor:'white'}]}>
          <View style={styles.bankItemLayout} />
          <Text style={[styles.more1, styles.bankTypo]}>MORE</Text>
          <Image
            style={styles.plusSignIcon}
            resizeMode="cover"
            source={require("../../../assets/plus-sign1.png")}
          />
        </View>


        {/* ............... */}
        
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
  footerMonkapLayout: {
    height: 45,
    position: "absolute",
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
  bankLayout: {
    height: 90,
    top: 291,
    width: 90,
    position: "absolute",
  },
  bankItemShadowBox1: {
    elevation: 9,
    shadowRadius: 9,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  childShadowBox: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    shadowRadius: 9,
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  bankItemLayout: {
    borderRadius: Border.br_2xs,
    top: 0,
    left: 0,
    height: 90,
    width: 90,
    position: "absolute",
  },
  bankTypo: {
    fontWeight: "300",
    lineHeight: 10,
    letterSpacing: -0.4,
    fontSize: FontSize.size_3xs,
    color: Color.iOSKeyLabel,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  bankPosition: {
    top: 74,
    lineHeight: 10,
    letterSpacing: -0.4,
    fontSize: FontSize.size_3xs,
  },
  bankPosition1: {
    width: 90,
    top: 74,
    left: 0,
  },
  bankItemShadowBox: {
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
  yupPosition: {
    top: 415,
    height: 90,
    width: 90,
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
  continue: {
    marginTop: -11.5,
    marginLeft: -35.5,
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
    marginLeft: -152,
    width: 305,
    height: 45,
    left: "50%",
    top: "50%",
  },
  chooseTheBank: {
    marginTop: -258,
    marginLeft: -142,
    fontSize: FontSize.size_4xl,
    color: Color.gray_100,
    width: 284,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  download41: {
    left: 10,
    width: 71,
    height: 56,
    top: 10,
    position: "absolute",
  },
  afriklandFirstBank1: {
    height: 16,
    color: Color.iOSKeyLabel,
    left: 0,
  },
  afriklandFirstBankItem: {
    backgroundColor: Color.gainsboro_300,
  },
  afriklandFirstBank: {
    left: 26,
  },
  ccaBank1: {
    height: 12,
    color: Color.iOSKeyLabel,
    left: 0,
  },
  download31: {
    height: 64,
    left: 13,
    top: 10,
  },
  ccaBankItem: {
    backgroundColor: Color.gray_2000,
  },
  ccaBank: {
    left: 138,
  },
  download1Icon: {
    top: 8,
    left: 7,
    width: 77,
    height: 60,
    position: "absolute",
  },
  cbcBank: {
    left: 250,
  },
  yup1: {
    left: 36,
    color: Color.iOSKeyLabel,
  },
  x630wa1Icon: {
    left: 18,
    borderRadius: Border.br_2xl,
    height: 55,
    top: 10,
    width: 55,
    position: "absolute",
  },
  yup: {
    left: 26,
  },
  ubc1: {
    left: 35,
    color: Color.iOSKeyLabel,
  },
  ubcPlc1Icon: {
    left: 16,
    width: 59,
    height: 59,
    top: 10,
    position: "absolute",
  },
  ubc: {
    left: 138,
  },
  more1: {
    top: 67,
    left: 33,
    color: Color.iOSKeyLabel,
  },
  plusSignIcon: {
    top: 11,
    left: 20,
    width: 50,
    height: 50,
    position: "absolute",
  },
  more: {
    left: 251,
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

export default NoCard8;
