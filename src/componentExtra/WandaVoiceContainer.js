import * as React from "react";
import { useMemo } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const WandaVoiceContainer = ({
  bonusImageUrl,
  bonusText,
  activeBorderColor,
  voiceUnit15000UColor,
  myLineDetailsBackgroundColor,
  propBorderColor,
  propBackgroundColor,
  onTabAreaPress,
  onTabAreaPress1,
}) => {
  const lineHighlight2Style = useMemo(() => {
    return {
      ...getStyleValue("borderColor", activeBorderColor),
    };
  }, [activeBorderColor]);

  const voiceStyle = useMemo(() => {
    return {
      ...getStyleValue("color", voiceUnit15000UColor),
    };
  }, [voiceUnit15000UColor]);

  const rectangleView16Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", myLineDetailsBackgroundColor),
    };
  }, [myLineDetailsBackgroundColor]);

  const rectangleView17Style = useMemo(() => {
    return {
      ...getStyleValue("borderColor", propBorderColor),
    };
  }, [propBorderColor]);

  const rectangleView18Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  return (
    <View style={styles.bundleDetails}>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <View style={[styles.voicesmsdata, styles.tabAreaLayout]}>
          <View style={styles.voicesmsdataChild} />
          <View style={[styles.lineHighlight, lineHighlight2Style]} />
          <Text
            style={[
              styles.voice,
              styles.sms1Typo,
              styles.sms1Position,
              voiceStyle,
            ]}
          >
            Voice
          </Text>
          <View style={[styles.sms, styles.smsPosition, styles.smsLayout]}>
            <Text style={[styles.sms1, styles.sms1Typo, styles.sms1Position]}>
              SMS
            </Text>
            <Pressable
              style={[styles.tabArea, styles.tabAreaLayout]}
              onPress={onTabAreaPress}
            />
          </View>
          <View style={[styles.data, styles.smsPosition, styles.smsLayout]}>
            <Text style={[styles.data1, styles.sms1Typo, styles.sms1Position]}>
              Data
            </Text>
            <Pressable
              style={[styles.tabArea, styles.tabAreaLayout]}
              onPress={onTabAreaPress1}
            />
          </View>
        </View>
        <View style={styles.groupParent}>
          <View style={styles.ellipseParent}>
            <Image
              style={[
                styles.groupItem,
                styles.groupLayout,
                styles.groupLayout1,
              ]}
              resizeMode="cover"
              source={require("../assets/ellipse-38.png")}
            />
            <Image
              style={[
                styles.groupInner,
                styles.groupLayout,
                styles.groupLayout1,
              ]}
              resizeMode="cover"
              source={bonusImageUrl}
            />
            <Text style={[styles.text, styles.textTypo1]}>67%</Text>
            <Text style={[styles.text1, styles.textTypo1]}>33%</Text>
          </View>
          <View style={[styles.wandaDetails, styles.smsPosition]}>
            <Text
              style={[
                styles.orangeBonusActiveContainer,
                styles.myLine1Position,
              ]}
            >
              <Text style={styles.orangeBonus}>{bonusText}</Text>
              <Text style={styles.active}>Active</Text>
            </Text>
            <Text
              style={[styles.voiceUnitContainer, styles.voiceContainerTypo]}
            >
              <Text style={styles.voiceUnit}>{`Voice unit `}</Text>
              <Text style={styles.u}>: 15,000 U</Text>
            </Text>
            <Text
              style={[styles.duration30Container, styles.voiceContainerTypo]}
            >
              <Text style={styles.voiceUnit}>{`Duration `}</Text>
              <Text style={styles.u}>: 30 days</Text>
            </Text>
            <View style={[styles.wandaDetailsChild, styles.wandaPosition]} />
            <View
              style={[
                styles.wandaDetailsItem,
                styles.wandaPosition,
                rectangleView16Style,
              ]}
            />
            <Text
              style={[
                styles.voiceLeft12000Container,
                styles.voiceContainerTypo,
              ]}
            >
              <Text style={styles.voiceUnit}>Voice left:</Text>
              <Text style={styles.u}> 12,000 U</Text>
            </Text>
            <Text
              style={[
                styles.voiceUsed3000uContainer,
                styles.voiceContainerTypo,
              ]}
            >
              <Text style={styles.voiceUnit}>Voice used:</Text>
              <Text style={styles.u}> 3,000U</Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.topDownNumbers, styles.topPosition1]}>
        <View style={[styles.topDownNumbersChild, styles.topLayout]} />
        <Text
          style={[styles.text2, styles.textTypo]}
        >{`(+237) 688 54 23 68 `}</Text>
        <Text
          style={[styles.text3, styles.textTypo]}
        >{`(+237) 688 54 23 68 `}</Text>
      </View>
      <View style={[styles.myLine, styles.topPosition1]}>
        <View style={[styles.myLineChild, styles.linePosition]} />
        <View style={styles.topDown}>
          <View style={[styles.topDownChild, styles.topPosition]} />
          <Image
            style={[styles.vectorIcon, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/vector83.png")}
          />
          <View style={[styles.tabArea2, styles.topPosition]} />
        </View>
        <Text style={[styles.myLine1, styles.myLine1Position]}>
          My Line - Details
        </Text>
        <Text
          style={[styles.text4, styles.sms1Typo]}
        >{`(+237) 676 54 23 98 `}</Text>
      </View>
      <View style={[styles.omMyLine, styles.lineLayout]}>
        <View style={[styles.myLineWrapper, styles.lineLayout]}>
          <View style={styles.myLine2}>
            <View
              style={[
                styles.myLineItem,
                styles.linePosition,
                rectangleView17Style,
              ]}
            />
            <View style={styles.topDown}>
              <View
                style={[
                  styles.topDownItem,
                  styles.topPosition,
                  rectangleView18Style,
                ]}
              />
              <Image
                style={[styles.vectorIcon, styles.groupLayout]}
                resizeMode="cover"
                source={require("../assets/vector83.png")}
              />
              <View style={[styles.tabArea2, styles.topPosition]} />
            </View>
            <Text style={[styles.myLine1, styles.myLine1Position]}>
              My Line - Details
            </Text>
            <Text
              style={[styles.text4, styles.sms1Typo]}
            >{`(+237) 676 54 23 98 `}</Text>
            <View style={[styles.topDownNumbers1, styles.topPosition1]}>
              <View style={[styles.topDownNumbersItem, styles.topLayout]} />
              <Text
                style={[styles.text6, styles.textTypo]}
              >{`(+237) 688 54 23 68 `}</Text>
              <View
                style={[styles.topDownNumbersInner, styles.tabArea4Layout]}
              />
              <Text
                style={[styles.text7, styles.textTypo]}
              >{`(+237) 688 54 23 68 `}</Text>
              <View style={[styles.tabArea4, styles.tabArea4Layout]} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabAreaLayout: {
    height: 26,
    position: "absolute",
  },
  sms1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    fontSize: FontSize.size_2xl,
    position: "absolute",
  },
  sms1Position: {
    top: "11.54%",
    textAlign: "left",
  },
  smsPosition: {
    bottom: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  smsLayout: {
    width: "12.98%",
    bottom: "0%",
    height: "100%",
  },
  groupLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  groupLayout1: {
    width: "95.1%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    height: "100%",
  },
  textTypo1: {
    fontSize: FontSize.size_3xl,
    color: Color.iOSKeyLabel,
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    fontWeight: "700",
    position: "absolute",
  },
  myLine1Position: {
    top: "0%",
    left: "0%",
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  voiceContainerTypo: {
    fontSize: FontSize.size_lg,
    color: Color.iOSKeyLabel,
    textAlign: "left",
    position: "absolute",
  },
  wandaPosition: {
    right: "83.23%",
    width: "16.77%",
    height: "12.75%",
    left: "0%",
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  topPosition1: {
    display: "none",
    position: "absolute",
  },
  topLayout: {
    backgroundColor: Color.gray_2900,
    borderRadius: Border.br_4xs,
    height: 57,
    width: 310,
    left: 0,
    position: "absolute",
  },
  textTypo: {
    color: Color.iOSKeyBackgroundHighlight,
    fontSize: FontSize.size_4xl,
    left: "4.84%",
    textAlign: "left",
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  linePosition: {
    borderWidth: 0.5,
    borderRadius: Border.br_3xs,
    top: "45.1%",
    width: "100%",
    height: "54.9%",
    left: "0%",
    right: "0%",
    bottom: "0%",
    borderStyle: "solid",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    position: "absolute",
  },
  topPosition: {
    borderBottomRightRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    width: "100%",
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  lineLayout: {
    height: 51,
    width: 311,
    position: "absolute",
  },
  tabArea4Layout: {
    height: 31,
    backgroundColor: Color.gray_1200,
    borderRadius: Border.br_4xs,
    width: 310,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 9,
    elevation: 9,
    shadowOpacity: 1,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
    height: 221,
    width: 341,
    position: "absolute",
  },
  voicesmsdataChild: {
    top: 26,
    borderColor: "rgba(0, 0, 0, 0.25)",
    borderTopWidth: 1,
    width: 340,
    height: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  lineHighlight: {
    top: 25,
    left: 25,
    borderTopWidth: 2,
    width: 59,
    height: 2,
    borderColor: "#ea9311",
    borderStyle: "solid",
    position: "absolute",
  },
  voice: {
    left: "9.14%",
    color: Color.orangeColor,
    fontWeight: "700",
  },
  sms1: {
    left: "18.18%",
    color: Color.iOSKeyLabel,
  },
  tabArea: {
    backgroundColor: Color.gainsboro_700,
    width: 44,
    left: 0,
    top: 0,
  },
  sms: {
    right: "43.95%",
    left: "43.07%",
  },
  data1: {
    left: "9.09%",
    color: Color.iOSKeyLabel,
  },
  data: {
    right: "10.03%",
    left: "76.99%",
  },
  voicesmsdata: {
    top: 70,
    left: 1,
    width: 339,
  },
  groupItem: {
    top: "-4.12%",
    right: "-19.74%",
    bottom: "4.12%",
    left: "24.64%",
  },
  groupInner: {
    top: "6.18%",
    bottom: "-6.18%",
    left: "4.9%",
    right: "0%",
  },
  text: {
    top: 62,
    left: 0,
  },
  text1: {
    top: 11,
    left: 64,
  },
  ellipseParent: {
    height: "95.1%",
    width: "31.78%",
    top: "1.96%",
    left: "68.22%",
    bottom: "2.94%",
    right: "0%",
    position: "absolute",
  },
  orangeBonus: {
    color: Color.iOSKeyLabel,
  },
  active: {
    color: Color.deeppink,
  },
  orangeBonusActiveContainer: {
    fontSize: FontSize.size_xl,
    left: "0%",
    fontWeight: "700",
  },
  voiceUnit: {
    fontFamily: FontFamily.gentiumBookBasic,
  },
  u: {
    fontFamily: FontFamily.gentiumBookBasic,
    fontWeight: "700",
  },
  voiceUnitContainer: {
    top: "40.2%",
    left: "0%",
  },
  duration30Container: {
    top: "19.61%",
    left: "0%",
  },
  wandaDetailsChild: {
    top: "63.73%",
    bottom: "23.53%",
    backgroundColor: Color.lemonchiffon,
  },
  wandaDetailsItem: {
    top: "84.31%",
    backgroundColor: Color.orangeColor,
    bottom: "2.94%",
  },
  voiceLeft12000Container: {
    top: "83.33%",
    left: "22.36%",
  },
  voiceUsed3000uContainer: {
    top: "60.78%",
    left: "21.12%",
  },
  wandaDetails: {
    width: "50.16%",
    right: "49.84%",
    left: "0%",
    bottom: "0%",
    height: "100%",
  },
  groupParent: {
    height: "46.15%",
    width: "94.13%",
    top: "48.42%",
    right: "2.93%",
    bottom: "5.43%",
    left: "2.93%",
    position: "absolute",
  },
  rectangleParent: {
    top: -16,
    left: -1,
    height: 221,
    width: 341,
    position: "absolute",
  },
  topDownNumbersChild: {
    top: 0,
  },
  text2: {
    top: "14.04%",
  },
  text3: {
    top: "56.14%",
  },
  topDownNumbers: {
    top: 49,
    height: 57,
    display: "none",
    width: 310,
    left: 14,
  },
  myLineChild: {
    borderColor: "#feca18",
  },
  topDownChild: {
    backgroundColor: Color.gold_100,
  },
  vectorIcon: {
    height: "50%",
    width: "37.5%",
    top: "28.57%",
    right: "29.17%",
    bottom: "21.43%",
    left: "33.33%",
  },
  tabArea2: {
    backgroundColor: Color.gold_400,
  },
  topDown: {
    width: "15.43%",
    left: "84.57%",
    top: "45.1%",
    height: "54.9%",
    right: "0%",
    bottom: "0%",
    position: "absolute",
  },
  myLine1: {
    left: "0%",
    color: Color.iOSKeyLabel,
    fontSize: FontSize.size_2xl,
    top: "0%",
  },
  text4: {
    top: "56.86%",
    left: "6.11%",
    color: Color.iOSKeyLabel,
  },
  myLine: {
    height: "27.13%",
    width: "91.74%",
    top: "-2.13%",
    right: "4.13%",
    bottom: "75%",
    left: "4.13%",
  },
  myLineItem: {
    borderColor: "#ea9311",
  },
  topDownItem: {
    backgroundColor: Color.orangeColor,
  },
  topDownNumbersItem: {
    top: 2,
    borderWidth: 1,
    borderColor: "#feca18",
    borderStyle: "solid",
  },
  text6: {
    top: "52.38%",
  },
  topDownNumbersInner: {
    top: 32,
  },
  text7: {
    top: "15.87%",
  },
  tabArea4: {
    top: 0,
  },
  topDownNumbers1: {
    top: 51,
    height: 63,
    width: 310,
    display: "none",
    left: 0,
  },
  myLine2: {
    width: "100%",
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  myLineWrapper: {
    left: 0,
    top: 0,
  },
  omMyLine: {
    top: -4,
    left: 14,
    height: 51,
    width: 311,
  },
  bundleDetails: {
    top: 80,
    left: 11,
    height: 188,
    width: 339,
    position: "absolute",
  },
});

export default WandaVoiceContainer;
