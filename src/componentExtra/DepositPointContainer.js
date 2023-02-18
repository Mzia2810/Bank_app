import * as React from "react";
import { useMemo } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const DepositPointContainer = ({
  depositPointText,
  depositPointImageUrl,
  propTop,
  propLeft,
  propTextAlign,
  onTabAreaPress,
}) => {
  const rectangleView6Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const depositPointStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
      ...getStyleValue("textAlign", propTextAlign),
    };
  }, [propLeft, propTextAlign]);

  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.groupChild, rectangleView6Style]} />
      <Text style={[styles.depositPoint, depositPointStyle]}>
        {depositPointText}
      </Text>
      <Text style={styles.enterNumberOr}>Enter Number or Scan Code</Text>
      <View style={[styles.scanSvgrepoCom1, styles.vectorIconPosition]}>
        <View style={[styles.scanSvgrepoCom1Child, styles.tabAreaLayout]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconPosition]}
          resizeMode="cover"
          source={depositPointImageUrl}
        />
        <Pressable
          style={[styles.tabArea, styles.tabAreaLayout]}
          onPress={onTabAreaPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  tabAreaLayout: {
    height: 41,
    width: 51,
    borderColor: "#feca18",
    borderBottomRightRadius: Border.br_2xs,
    borderTopRightRadius: Border.br_2xs,
    left: -8,
    top: -3,
    borderWidth: 0.3,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChild: {
    top: 29,
    left: 0,
    borderRadius: Border.br_2xs,
    borderColor: "#ea9311",
    height: 36,
    borderWidth: 0.3,
    borderStyle: "solid",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    width: 300,
    position: "absolute",
  },
  depositPoint: {
    top: 0,
    left: 4,
    fontSize: FontSize.size_lg,
    letterSpacing: 1.9,
    lineHeight: 22,
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.iOSKeyLabel,
    textAlign: "left",
    position: "absolute",
  },
  enterNumberOr: {
    top: 40,
    left: 15,
    fontSize: FontSize.size_base,
    letterSpacing: 1.8,
    lineHeight: 20,
    fontFamily: FontFamily.gentiumBasic,
    color: Color.gray_2200,
    textAlign: "center",
    position: "absolute",
  },
  scanSvgrepoCom1Child: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    width: 51,
    borderColor: "#feca18",
    borderBottomRightRadius: Border.br_2xs,
    borderTopRightRadius: Border.br_2xs,
    left: -8,
    top: -3,
  },
  vectorIcon: {
    height: "80.77%",
    width: "92.31%",
    top: "9.62%",
    right: "3.85%",
    bottom: "9.61%",
    left: "3.85%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  tabArea: {
    backgroundColor: Color.gray_2300,
  },
  scanSvgrepoCom1: {
    top: 32,
    left: 257,
    width: 35,
    height: 35,
  },
  rectangleParent: {
    top: 413,
    left: 24,
    height: 67,
    width: 300,
    position: "absolute",
  },
});

export default DepositPointContainer;
