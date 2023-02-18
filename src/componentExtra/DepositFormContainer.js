import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Text, Image, Pressable, Modal } from "react-native";
import MoNkapDepositRequestReview from "../components/MoNkapDepositRequestReview";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const DepositFormContainer = () => {
  const [rectangle14Visible, setRectangle14Visible] = useState(false);

  const openRectangle14 = useCallback(() => {
    setRectangle14Visible(true);
  }, []);

  const closeRectangle14 = useCallback(() => {
    setRectangle14Visible(false);
  }, []);
  return (
    <>
      <View style={styles.depositFrom}>
        <View style={[styles.depositFrom1, styles.tabAreaLayout]}>
          <View style={styles.depositFromChild} />
          <View style={[styles.rectangleParent, styles.rectanglePosition]}>
            <View style={[styles.groupChild, styles.groupBorder]} />
            <Text
              style={[
                styles.swiftCode,
                styles.depositTypo,
                styles.amount1Layout,
              ]}
            >
              Swift Code
            </Text>
            <Text
              style={[
                styles.enterSwiftCode,
                styles.amountFlexBox,
                styles.enterTypo,
                styles.enterTypo1,
              ]}
            >
              Enter Swift code
            </Text>
          </View>
          <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
            <View style={[styles.groupChild, styles.groupBorder]} />
            <Text
              style={[
                styles.swiftCode,
                styles.depositTypo,
                styles.amount1Layout,
              ]}
            >
              Account Number
            </Text>
            <Text
              style={[
                styles.enterYouraccountNumber,
                styles.amountFlexBox,
                styles.enterTypo,
              ]}
            >
              Enter yourAccount Number
            </Text>
          </View>
          <View style={styles.amount}>
            <View style={styles.rectangleContainerPosition}>
              <View style={[styles.groupPosition, styles.groupBorder]} />
              <Text
                style={[
                  styles.amount1,
                  styles.amountFlexBox,
                  styles.amount1Layout,
                ]}
              >
                Amount
              </Text>
              <View style={[styles.groupView, styles.groupPosition]}>
                <View style={[styles.rectangleView, styles.groupChild1Bg]} />
                <Text
                  style={[
                    styles.xaf,
                    styles.xafClr,
                    styles.xafTypo,
                    styles.xafTypo1,
                  ]}
                >
                  XAF
                </Text>
                <Image
                  style={[styles.groupIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/group65.png")}
                />
              </View>
              <Text
                style={[
                  styles.enterAmountTo,
                  styles.amountFlexBox,
                  styles.enterTypo,
                  styles.enterTypo1,
                ]}
              >
                Enter amount to Request
              </Text>
            </View>
          </View>
          <Text
            style={[styles.depositeFrom, styles.amountFlexBox, styles.xafTypo1]}
          >
            Deposite From
          </Text>
          <View style={styles.others}>
            <View style={styles.othersChild} />
            <Text style={[styles.others1, styles.others1Typo]}>Others</Text>
            <Image
              style={[styles.othersItem, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/group-2394.png")}
            />
            <View
              style={[
                styles.tabArea,
                styles.tabAreaPosition,
                styles.tabAreaLayout,
              ]}
            />
          </View>
          <View style={[styles.omoney, styles.momoPosition]}>
            <Text style={[styles.omoney1, styles.others1Typo]}>OMoney</Text>
            <View style={[styles.orangeMoneyIcon, styles.iconLayout]}>
              <View
                style={[
                  styles.orangeMoneyIconChild,
                  styles.rectangleContainerPosition,
                ]}
              />
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
              <Text style={[styles.orangeMoney, styles.xafTypo]}>
                Orange Money
              </Text>
            </View>
            <View
              style={[
                styles.tabArea,
                styles.tabAreaPosition,
                styles.tabAreaLayout,
              ]}
            />
          </View>
          <View style={[styles.momo, styles.momoPosition]}>
            <Text style={[styles.omoney1, styles.others1Typo]}>MoMo</Text>
            <Image
              style={[
                styles.mtnMmLogoGenericMtnMobileIcon,
                styles.iconLayout,
                styles.iconLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/69691715-mtnmmlogogenericmtnmobilemoneylogo-12.png")}
            />
            <View
              style={[
                styles.tabArea,
                styles.tabAreaPosition,
                styles.tabAreaLayout,
              ]}
            />
          </View>
        </View>
        <View style={styles.rectangleParent1}>
          <View
            style={[
              styles.groupChild1,
              styles.groupChild1Bg,
              styles.tabAreaLayout,
            ]}
          />
          <Text style={[styles.deposit, styles.xafClr, styles.depositTypo]}>
            Deposit
          </Text>
          <Pressable
            style={[styles.rectanglePressable, styles.tabAreaPosition]}
            onPress={openRectangle14}
          />
        </View>
      </View>

      <Modal animationType="fade" transparent visible={rectangle14Visible}>
        <View style={styles.rectangle14Overlay}>
          <Pressable style={styles.rectangle14Bg} onPress={closeRectangle14} />
          <MoNkapDepositRequestReview onClose={closeRectangle14} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  tabAreaLayout: {
    width: "100%",
    right: "0%",
  },
  rectanglePosition: {
    left: "3.98%",
    right: "4.28%",
    width: "91.74%",
    height: "18.63%",
    position: "absolute",
  },
  groupBorder: {
    borderWidth: 0.3,
    borderRadius: Border.br_2xs,
    borderColor: "#0000ee",
    borderStyle: "solid",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    left: "0%",
    width: "100%",
  },
  depositTypo: {
    textAlign: "left",
    fontSize: FontSize.size_lg,
  },
  amount1Layout: {
    lineHeight: 22,
    letterSpacing: 1.9,
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    top: "0%",
  },
  amountFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  enterTypo: {
    color: Color.gray_2200,
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 1.8,
    fontSize: FontSize.size_base,
  },
  enterTypo1: {
    fontFamily: FontFamily.gentiumBasic,
    color: Color.gray_2200,
  },
  groupPosition: {
    top: "34.55%",
    height: "65.45%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  groupChild1Bg: {
    backgroundColor: Color.blue_100,
    position: "absolute",
  },
  xafClr: {
    color: Color.iOSKeyBackgroundHighlight,
    position: "absolute",
  },
  xafTypo: {
    fontWeight: "700",
    textAlign: "center",
  },
  xafTypo1: {
    lineHeight: 20,
    letterSpacing: 1.8,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.gentiumBookBasic,
  },
  iconLayout1: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  others1Typo: {
    lineHeight: 23,
    letterSpacing: 2,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  tabAreaPosition: {
    backgroundColor: Color.gainsboro_700,
    height: "100%",
    bottom: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  momoPosition: {
    bottom: "77.02%",
    top: "5.9%",
    height: "17.08%",
    position: "absolute",
  },
  iconLayout: {
    height: "52.73%",
    position: "absolute",
  },
  rectangleContainerPosition: {
    height: "100%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
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
  depositFromChild: {
    height: "101.55%",
    top: "-3.73%",
    bottom: "2.17%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  groupChild: {
    height: "60%",
    top: "40%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  swiftCode: {
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    left: "0%",
    position: "absolute",
  },
  enterSwiftCode: {
    left: "1.67%",
    top: "58.33%",
  },
  rectangleParent: {
    top: "22.36%",
    bottom: "59.01%",
  },
  enterYouraccountNumber: {
    left: "1%",
    top: "58.33%",
    fontFamily: FontFamily.gentiumBookBasic,
  },
  rectangleGroup: {
    top: "45.03%",
    bottom: "36.34%",
  },
  amount1: {
    width: "21.72%",
    left: "0.05%",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    letterSpacing: 1.9,
  },
  rectangleView: {
    height: "102.78%",
    width: "101.23%",
    top: "-1.39%",
    right: "-0.62%",
    bottom: "-1.39%",
    left: "-0.62%",
    borderTopRightRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    borderWidth: 1,
    borderColor: "#0000ee",
    backgroundColor: Color.blue_100,
    borderStyle: "solid",
  },
  xaf: {
    height: "52.78%",
    width: "40.74%",
    top: "33.33%",
    left: "16.05%",
  },
  groupIcon: {
    height: "65.28%",
    width: "27.47%",
    top: "19.44%",
    right: "9.57%",
    bottom: "15.28%",
    left: "62.96%",
    position: "absolute",
  },
  groupView: {
    width: "27%",
    left: "73%",
  },
  enterAmountTo: {
    top: "54.55%",
    left: "2.67%",
  },
  amount: {
    top: "67.08%",
    bottom: "15.84%",
    height: "17.08%",
    left: "3.98%",
    right: "4.28%",
    width: "91.74%",
    position: "absolute",
  },
  depositeFrom: {
    top: "-1.55%",
    left: "34.56%",
    color: Color.iOSKeyLabel,
  },
  othersChild: {
    height: "1.75%",
    width: "88.89%",
    top: "88.6%",
    right: "5.56%",
    bottom: "9.65%",
    left: "5.56%",
    borderColor: "#000",
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  others1: {
    top: "52.63%",
    left: "6.35%",
    color: Color.iOSKeyLabel,
  },
  othersItem: {
    height: "56.14%",
    width: "50.79%",
    top: "1.75%",
    right: "25.4%",
    bottom: "42.1%",
    left: "23.81%",
    position: "absolute",
  },
  tabArea: {
    right: "0%",
  },
  others: {
    height: "17.7%",
    width: "19.27%",
    top: "5.59%",
    right: "8.87%",
    bottom: "76.71%",
    left: "71.87%",
    position: "absolute",
  },
  omoney1: {
    top: "52.73%",
    color: Color.gray_3000,
    left: "0%",
  },
  orangeMoneyIconChild: {
    borderRadius: Border.br_sm,
    backgroundColor: Color.gray_400,
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
    fontFamily: FontFamily.rubik,
    color: Color.orangeColor,
    position: "absolute",
  },
  orangeMoneyIcon: {
    width: "63.64%",
    top: "5.45%",
    right: "18.18%",
    bottom: "41.82%",
    left: "18.18%",
  },
  omoney: {
    width: "20.18%",
    right: "42.51%",
    left: "37.31%",
  },
  mtnMmLogoGenericMtnMobileIcon: {
    width: "85.71%",
    right: "8.16%",
    bottom: "47.27%",
    left: "6.12%",
    top: "0%",
  },
  momo: {
    width: "14.98%",
    right: "76.15%",
    left: "8.87%",
  },
  depositFrom1: {
    height: "65.18%",
    bottom: "34.82%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  groupChild1: {
    height: "97.83%",
    top: "2.17%",
    borderRadius: Border.br_xs,
    bottom: "0%",
    left: "0%",
    right: "0%",
  },
  deposit: {
    top: "26.09%",
    left: "40.33%",
    fontWeight: "600",
    fontFamily: FontFamily.poppins,
  },
  rectangle14Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  rectangle14Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  rectanglePressable: {
    width: "99.67%",
    right: "0.33%",
  },
  rectangleParent1: {
    height: "9.31%",
    width: "93.27%",
    top: "90.69%",
    right: "3.36%",
    left: "3.36%",
    bottom: "0%",
    position: "absolute",
  },
  depositFrom: {
    top: 236,
    left: 19,
    width: 327,
    height: 494,
    position: "absolute",
  },
});

export default DepositFormContainer;
