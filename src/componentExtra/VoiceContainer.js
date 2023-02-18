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

const VoiceContainer = ({
  carImageUrl,
  propBorderColor,
  propColor,
  propBackgroundColor,
  propBorderColor1,
  propBackgroundColor1,
  onTabAreaPress,
  onTabAreaPress1,
}) => {
  const lineHighlightStyle = useMemo(() => {
    return {
      ...getStyleValue("borderColor", propBorderColor),
    };
  }, [propBorderColor]);

  const sMSStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  const rectangleView10Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  const rectangleView11Style = useMemo(() => {
    return {
      ...getStyleValue("borderColor", propBorderColor1),
    };
  }, [propBorderColor1]);

  const rectangleView12Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor1),
    };
  }, [propBackgroundColor1]);

  return (
    <View style={styles.bundleDetails}>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <View style={[styles.voicesmsdata, styles.tabAreaPosition]}>
          <View style={styles.voicesmsdataChild} />
          <View
            style={[
              styles.lineHighlight,
              styles.lineBorder,
              lineHighlightStyle,
            ]}
          />
          <View style={[styles.voice, styles.dataPosition]}>
            <Text style={[styles.voice1, styles.smsTypo1, styles.smsPosition]}>
              Voice
            </Text>
            <Pressable
              style={[styles.tabArea, styles.tabAreaPosition]}
              onPress={onTabAreaPress}
            />
          </View>
          <Text
            style={[
              styles.sms,
              styles.smsTypo,
              styles.smsTypo1,
              styles.smsPosition,
              sMSStyle,
            ]}
          >
            SMS
          </Text>
          <View style={[styles.data, styles.dataPosition]}>
            <Text style={[styles.data1, styles.smsTypo1, styles.smsPosition]}>
              Data
            </Text>
            <Pressable
              style={[styles.tabArea, styles.tabAreaPosition]}
              onPress={onTabAreaPress1}
            />
          </View>
        </View>
        <View style={styles.groupParent}>
          <View style={[styles.ellipseParent, styles.myLinePosition]}>
            <Image
              style={[styles.groupItem, styles.groupLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-3.png")}
            />
            <Image
              style={[styles.groupInner, styles.groupLayout]}
              resizeMode="cover"
              source={carImageUrl}
            />
            <Text style={[styles.text, styles.textTypo1]}>50%</Text>
            <Text style={[styles.text1, styles.textTypo1]}>50%</Text>
          </View>
          <View style={[styles.wandaDetails, styles.myLine1Position]}>
            <Text
              style={[
                styles.unlimitedSmsactive,
                styles.myLine1Position,
                styles.smsTypo,
                styles.myLine1Position1,
              ]}
            >
              <Text style={styles.unlimitedSms}>Unlimited SMS:</Text>
              <Text style={styles.active}>Active</Text>
            </Text>
            <Text style={styles.smsBundle30daysContainer}>
              <Text style={styles.smsBundle}>SMS Bundle</Text>
              <Text style={styles.smsTypo}>:30days - 500 XAF</Text>
            </Text>
            <View style={[styles.wandaDetailsChild, styles.wandaPosition]} />
            <View
              style={[
                styles.wandaDetailsItem,
                styles.wandaPosition,
                rectangleView10Style,
              ]}
            />
            <Text
              style={[styles.smsLeft15Container, styles.smsContainerPosition]}
            >
              <Text style={styles.smsBundle}>SMS left</Text>
              <Text style={styles.smsTypo}>: 15 days</Text>
            </Text>
            <Text
              style={[styles.smsUsed15Container, styles.smsContainerPosition]}
            >
              <Text style={styles.smsBundle}>SMS used</Text>
              <Text style={styles.smsTypo}>: 15 days</Text>
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
          <View style={[styles.lineLayout, styles.myLinePosition]}>
            <View
              style={[
                styles.myLineChild,
                styles.topDownPosition,
                styles.lineLayout,
                styles.lineBorder,
                rectangleView11Style,
              ]}
            />
            <View style={[styles.topDown, styles.topDownPosition]}>
              <View
                style={[
                  styles.topDownChild,
                  styles.tabArea2Position,
                  rectangleView12Style,
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
              style={[
                styles.myLine1,
                styles.myLine1Position,
                styles.smsTypo1,
                styles.myLine1Position1,
              ]}
            >
              My Line - Details
            </Text>
            <Text
              style={[styles.text4, styles.smsTypo1]}
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
    left: 0,
    position: "absolute",
  },
  lineBorder: {
    borderColor: "#ea9311",
    borderStyle: "solid",
  },
  dataPosition: {
    bottom: "0%",
    width: "16.22%",
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  smsTypo1: {
    fontSize: FontSize.size_2xl,
    textAlign: "left",
  },
  smsPosition: {
    top: "17.86%",
    fontSize: FontSize.size_2xl,
    position: "absolute",
  },
  smsTypo: {
    fontWeight: "700",
    fontFamily: FontFamily.gentiumBookBasic,
  },
  myLinePosition: {
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  groupLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
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
  myLine1Position1: {
    top: "0%",
    left: "0%",
  },
  wandaPosition: {
    left: "1.04%",
    right: "84.97%",
    width: "13.99%",
    height: "15.12%",
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  smsContainerPosition: {
    left: "18.65%",
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
  topDownPosition: {
    top: "45.1%",
    height: "54.9%",
    right: "0%",
    bottom: "0%",
    position: "absolute",
  },
  lineLayout: {
    width: "100%",
    left: "0%",
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
    top: 0,
    height: 221,
    width: 341,
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
    left: 142,
    borderTopWidth: 2,
    width: 59,
    height: 2,
    position: "absolute",
  },
  voice1: {
    left: "7.27%",
    textAlign: "left",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
  },
  tabArea: {
    backgroundColor: Color.gainsboro_700,
    width: 55,
    top: 0,
  },
  voice: {
    right: "75.81%",
    left: "7.96%",
  },
  sms: {
    left: "45.43%",
    color: Color.orangeColor,
    textAlign: "left",
  },
  data1: {
    left: "21.82%",
    textAlign: "left",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
  },
  data: {
    right: "9.14%",
    left: "74.63%",
  },
  voicesmsdata: {
    top: 70,
    width: 339,
  },
  groupItem: {
    height: "109.47%",
    width: "57.51%",
    top: "-3.71%",
    right: "-4.52%",
    bottom: "-5.76%",
    left: "47.01%",
  },
  groupInner: {
    height: "99.24%",
    width: "47.74%",
    top: "0.38%",
    right: "47.38%",
    bottom: "0.38%",
    left: "4.88%",
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
    width: "31.37%",
    left: "68.63%",
  },
  unlimitedSms: {
    color: Color.iOSKeyLabel,
  },
  active: {
    color: Color.deeppink,
  },
  unlimitedSmsactive: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  smsBundle: {
    fontFamily: FontFamily.gentiumBookBasic,
  },
  smsBundle30daysContainer: {
    top: "27.91%",
    fontSize: FontSize.size_lg,
    left: "0%",
    textAlign: "left",
    color: Color.iOSKeyLabel,
    position: "absolute",
  },
  wandaDetailsChild: {
    top: "55.81%",
    bottom: "29.07%",
    backgroundColor: Color.lemonchiffon,
  },
  wandaDetailsItem: {
    bottom: "4.65%",
    backgroundColor: Color.orangeColor,
    top: "80.23%",
  },
  smsLeft15Container: {
    top: "80.23%",
  },
  smsUsed15Container: {
    top: "52.33%",
  },
  wandaDetails: {
    height: "87.99%",
    width: "59.14%",
    top: "3.45%",
    right: "40.86%",
    bottom: "8.56%",
  },
  groupParent: {
    height: "44.23%",
    width: "95.71%",
    top: "50.06%",
    right: "2.24%",
    bottom: "5.71%",
    left: "2.05%",
    position: "absolute",
  },
  rectangleParent: {
    top: -18,
    height: 221,
    width: 341,
    left: 0,
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
    top: 82,
    left: 11,
    height: 188,
    width: 339,
    position: "absolute",
  },
});

export default VoiceContainer;
