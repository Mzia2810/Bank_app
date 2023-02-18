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
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const BundleDetailsContainer = ({
  gigaDataImageUrl,
  gigaDataText,
  activeBackgroundColor,
  activeBorderColor,
  rectangle8Color,
  vectorBackgroundColor,
  propBorderColor,
  propBackgroundColor,
  onTabAreaPress,
  onTabAreaPress1,
}) => {
  const lineHighlight1Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", activeBackgroundColor),
      ...getStyleValue("borderColor", activeBorderColor),
    };
  }, [activeBackgroundColor, activeBorderColor]);

  const dataStyle = useMemo(() => {
    return {
      ...getStyleValue("color", rectangle8Color),
    };
  }, [rectangle8Color]);

  const rectangleView13Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", vectorBackgroundColor),
    };
  }, [vectorBackgroundColor]);

  const rectangleView14Style = useMemo(() => {
    return {
      ...getStyleValue("borderColor", propBorderColor),
    };
  }, [propBorderColor]);

  const rectangleView15Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  return (
    <View style={styles.bundleDetails}>
      <View style={styles.bundleDetailsChild} />
      <View style={styles.voicesmsdataParent}>
        <View style={[styles.voicesmsdata, styles.tabAreaPosition]}>
          <View style={styles.voicesmsdataChild} />
          <View
            style={[
              styles.lineHighlight,
              styles.lineBorder,
              lineHighlight1Style,
            ]}
          />
          <View style={[styles.voice, styles.smsPosition]}>
            <Text style={[styles.voice1, styles.sms1Typo, styles.sms1Position]}>
              Voice
            </Text>
            <Pressable
              style={[styles.tabArea, styles.tabAreaPosition]}
              onPress={onTabAreaPress}
            />
          </View>
          <View style={[styles.sms, styles.smsPosition]}>
            <Text style={[styles.sms1, styles.sms1Typo, styles.sms1Position]}>
              SMS
            </Text>
            <Pressable
              style={[styles.tabArea, styles.tabAreaPosition]}
              onPress={onTabAreaPress1}
            />
          </View>
          <Text
            style={[
              styles.data,
              styles.dataTypo,
              styles.sms1Typo,
              styles.sms1Position,
              dataStyle,
            ]}
          >
            Data
          </Text>
        </View>
        <View style={styles.groupParent}>
          <View style={styles.ellipseParent}>
            <Image
              style={[styles.groupChild, styles.groupLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-36.png")}
            />
            <Image
              style={[
                styles.groupItem,
                styles.groupLayout,
                styles.myLineLayout,
              ]}
              resizeMode="cover"
              source={gigaDataImageUrl}
            />
            <Text style={[styles.text, styles.textTypo1]}>20%</Text>
            <Text style={[styles.text1, styles.textTypo1]}>80%</Text>
          </View>
          <View style={[styles.wandaDetails, styles.myLine1Position]}>
            <Text
              style={[
                styles.gigaDataActiveContainer,
                styles.myLine1Position,
                styles.dataTypo,
              ]}
            >
              <Text style={styles.gigaData}>{gigaDataText}</Text>
              <Text style={styles.active}>Active</Text>
            </Text>
            <Text style={[styles.bundle2199XafContainer, styles.containerTypo]}>
              <Text style={styles.bundle}>Bundle</Text>
              <Text style={styles.dataTypo}> :2199 XAF - 3.21GB</Text>
            </Text>
            <Text style={[styles.duration1DayContainer, styles.containerTypo]}>
              <Text style={styles.bundle}>Duration</Text>
              <Text style={styles.dataTypo}>: 1 day</Text>
            </Text>
            <View style={[styles.wandaDetailsChild, styles.wandaPosition]} />
            <View
              style={[
                styles.wandaDetailsItem,
                styles.wandaPosition,
                rectangleView13Style,
              ]}
            />
            <Text
              style={[
                styles.dataLeft642mbContainer,
                styles.dataContainerPosition,
              ]}
            >
              <Text style={styles.bundle}>Data left:</Text>
              <Text style={styles.dataTypo}> 642MB</Text>
            </Text>
            <Text
              style={[
                styles.dataUsed256gbContainer,
                styles.dataContainerPosition,
              ]}
            >
              <Text style={styles.bundle}>Data used:</Text>
              <Text style={styles.dataTypo}> 2.56GB</Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.topDownNumbers, styles.topLayout1]}>
        <View style={[styles.topDownNumbersChild, styles.topLayout]} />
        <Text
          style={[styles.text2, styles.textTypo]}
        >{`(+237) 688 54 23 68 `}</Text>
        <Text
          style={[styles.text3, styles.textTypo]}
        >{`(+237) 688 54 23 68 `}</Text>
      </View>
      <View style={[styles.omMyLine, styles.lineLayout1]}>
        <View style={[styles.myLineWrapper, styles.lineLayout1]}>
          <View style={[styles.myLine, styles.lineLayout, styles.myLineLayout]}>
            <View
              style={[
                styles.myLineChild,
                styles.topDownPosition,
                styles.lineLayout,
                styles.lineBorder,
                rectangleView14Style,
              ]}
            />
            <View style={[styles.topDown, styles.topDownPosition]}>
              <View
                style={[
                  styles.topDownChild,
                  styles.tabArea2Position,
                  rectangleView15Style,
                ]}
              />
              <Image
                style={[styles.vectorIcon, styles.groupLayout]}
                resizeMode="cover"
                source={require("../assets/vector83.png")}
              />
              <View style={[styles.tabArea2, styles.tabArea2Position]} />
            </View>
            <Text
              style={[styles.myLine1, styles.myLine1Position, styles.sms1Typo]}
            >
              My Line - Details
            </Text>
            <Text
              style={[styles.text4, styles.sms1Typo]}
            >{`(+237) 676 54 23 98 `}</Text>
            <View style={[styles.topDownNumbers1, styles.topLayout1]}>
              <View style={[styles.topDownNumbersItem, styles.topLayout]} />
              <Text
                style={[styles.text5, styles.textTypo]}
              >{`(+237) 688 54 23 68 `}</Text>
              <View
                style={[styles.topDownNumbersInner, styles.tabArea3Layout]}
              />
              <Text
                style={[styles.text6, styles.textTypo]}
              >{`(+237) 688 54 23 68 `}</Text>
              <View style={[styles.tabArea3, styles.tabArea3Layout]} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabAreaPosition: {
    height: 28,
    top: 0,
    left: 0,
    position: "absolute",
  },
  lineBorder: {
    borderColor: "#ea9311",
    borderStyle: "solid",
  },
  smsPosition: {
    width: "16.22%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  sms1Typo: {
    fontSize: FontSize.size_2xl,
    textAlign: "left",
  },
  sms1Position: {
    top: "17.86%",
    fontSize: FontSize.size_2xl,
    position: "absolute",
  },
  dataTypo: {
    fontWeight: "700",
    fontFamily: FontFamily.gentiumBookBasic,
  },
  groupLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  myLineLayout: {
    height: "100%",
    right: "0%",
  },
  textTypo1: {
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    textAlign: "left",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  myLine1Position: {
    left: "0%",
    position: "absolute",
  },
  containerTypo: {
    fontSize: FontSize.size_lg,
    left: "0%",
    textAlign: "left",
    color: Color.iOSKeyLabel,
    position: "absolute",
  },
  wandaPosition: {
    right: "84.48%",
    width: "15.52%",
    height: "13.13%",
    left: "0%",
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  dataContainerPosition: {
    left: "20.69%",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.iOSKeyLabel,
    position: "absolute",
  },
  topLayout1: {
    display: "none",
    width: 310,
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
  lineLayout1: {
    height: 51,
    width: 311,
    position: "absolute",
  },
  lineLayout: {
    width: "100%",
    left: "0%",
  },
  topDownPosition: {
    top: "45.1%",
    height: "54.9%",
    right: "0%",
    bottom: "0%",
    position: "absolute",
  },
  tabArea2Position: {
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
  tabArea3Layout: {
    height: 31,
    backgroundColor: Color.gray_1200,
    borderRadius: Border.br_4xs,
    width: 310,
    left: 0,
    position: "absolute",
  },
  bundleDetailsChild: {
    top: -15,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 9,
    elevation: 9,
    shadowOpacity: 1,
    width: 341,
    height: 221,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    borderRadius: Border.br_xs,
    left: 0,
    position: "absolute",
  },
  voicesmsdataChild: {
    top: 28,
    borderColor: "rgba(0, 0, 0, 0.25)",
    borderTopWidth: 1,
    width: 340,
    height: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  lineHighlight: {
    top: 27,
    left: 255,
    borderTopWidth: 2,
    width: 59,
    height: 2,
    backgroundColor: Color.orangeColor,
    position: "absolute",
  },
  voice1: {
    left: "12.73%",
    textAlign: "left",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
  },
  tabArea: {
    backgroundColor: Color.gainsboro_700,
    width: 55,
  },
  voice: {
    right: "76.7%",
    left: "7.08%",
    bottom: "0%",
    top: "0%",
  },
  sms1: {
    left: "20%",
    textAlign: "left",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
  },
  sms: {
    right: "41.59%",
    left: "42.18%",
    bottom: "0%",
    top: "0%",
  },
  data: {
    left: "78.17%",
    color: Color.orangeColor,
    textAlign: "left",
  },
  voicesmsdata: {
    width: 339,
  },
  groupChild: {
    height: "110.31%",
    width: "107%",
    top: "-4.12%",
    right: "-5%",
    bottom: "-6.19%",
    left: "-2%",
  },
  groupItem: {
    width: "97%",
    top: "1.23%",
    bottom: "-1.23%",
    left: "3%",
    right: "0%",
  },
  text: {
    top: 19,
    left: 0,
  },
  text1: {
    top: 11,
    left: 62,
  },
  ellipseParent: {
    height: "95.1%",
    width: "31.85%",
    bottom: "4.9%",
    left: "68.15%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  gigaData: {
    color: Color.iOSKeyLabel,
  },
  active: {
    color: Color.deeppink,
  },
  gigaDataActiveContainer: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    top: "0%",
  },
  bundle: {
    fontFamily: FontFamily.gentiumBookBasic,
  },
  bundle2199XafContainer: {
    top: "20.2%",
  },
  duration1DayContainer: {
    top: "41.41%",
  },
  wandaDetailsChild: {
    top: "64.65%",
    bottom: "22.22%",
    backgroundColor: Color.lemonchiffon,
  },
  wandaDetailsItem: {
    top: "83.84%",
    bottom: "3.03%",
    backgroundColor: Color.orangeColor,
  },
  dataLeft642mbContainer: {
    top: "82.83%",
  },
  dataUsed256gbContainer: {
    top: "61.62%",
  },
  wandaDetails: {
    height: "97.06%",
    width: "55.41%",
    top: "2.94%",
    right: "44.59%",
    bottom: "0%",
  },
  groupParent: {
    height: "70.83%",
    width: "92.63%",
    top: "29.17%",
    right: "3.54%",
    left: "3.83%",
    bottom: "0%",
    position: "absolute",
  },
  voicesmsdataParent: {
    top: 52,
    height: 144,
    left: 0,
    width: 339,
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
    top: -11,
    height: 57,
    display: "none",
    width: 310,
    left: 14,
  },
  myLineChild: {
    borderRadius: Border.br_3xs,
    borderWidth: 0.5,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
  },
  topDownChild: {
    backgroundColor: Color.orangeColor,
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
  },
  myLine1: {
    textAlign: "left",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    top: "0%",
  },
  text4: {
    top: "56.86%",
    left: "6.11%",
    textAlign: "left",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  topDownNumbersItem: {
    top: 2,
    borderColor: "#feca18",
    borderWidth: 1,
    borderStyle: "solid",
  },
  text5: {
    top: "52.38%",
  },
  topDownNumbersInner: {
    top: 32,
  },
  text6: {
    top: "15.87%",
  },
  tabArea3: {
    top: 0,
  },
  topDownNumbers1: {
    top: 51,
    height: 63,
    display: "none",
    width: 310,
    left: 0,
  },
  myLine: {
    right: "0%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  myLineWrapper: {
    top: 0,
    left: 0,
  },
  omMyLine: {
    top: -4,
    left: 14,
    height: 51,
    width: 311,
  },
  bundleDetails: {
    top: 79,
    left: 11,
    height: 188,
    width: 339,
    position: "absolute",
  },
});

export default BundleDetailsContainer;
