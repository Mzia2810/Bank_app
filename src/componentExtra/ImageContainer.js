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

const ImageContainer = ({
  cashOutPointText,
  cashOutPointImageUrl,
  propHeight,
  propHeight1,
  propLeft,
  propTextAlign,
  propLeft1,
  propLeft2,
  onTabAreaPress,
}) => {
  const groupView9Style = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight),
    };
  }, [propHeight]);

  const rectangleView22Style = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight1),
    };
  }, [propHeight1]);

  const cashOutPointStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
      ...getStyleValue("textAlign", propTextAlign),
    };
  }, [propLeft, propTextAlign]);

  const enterNumberOrStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft1),
    };
  }, [propLeft1]);

  const scanSvgrepoCom1Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft2),
    };
  }, [propLeft2]);

  return (
    <View style={[styles.rectangleParent, groupView9Style]}>
      <View
        style={[
          styles.groupChild,
          styles.groupChildLayout,
          rectangleView22Style,
        ]}
      />
      <Text
        style={[
          styles.cashOutPoint,
          styles.cashOutPointFlexBox,
          cashOutPointStyle,
        ]}
      >
        {cashOutPointText}
      </Text>
      <Text
        style={[
          styles.enterNumberOr,
          styles.cashOutPointFlexBox,
          enterNumberOrStyle,
        ]}
      >
        Enter Number or Scan Code
      </Text>
      <View
        style={[
          styles.scanSvgrepoCom1,
          styles.vectorIconPosition,
          styles.groupChildLayout,
          scanSvgrepoCom1Style,
        ]}
      >
        <View style={[styles.scanSvgrepoCom1Child, styles.tabAreaLayout]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconPosition]}
          resizeMode="cover"
          source={cashOutPointImageUrl}
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
  groupChildLayout: {
    height: 35,
    top: 32,
  },
  cashOutPointFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  vectorIconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  tabAreaLayout: {
    height: 41,
    width: 51,
    borderBottomRightRadius: Border.br_2xs,
    borderTopRightRadius: Border.br_2xs,
    left: -8,
    top: -3,
    borderWidth: 0.3,
    borderColor: "#feca18",
    borderStyle: "solid",
    position: "absolute",
  },
  groupChild: {
    left: 0,
    borderRadius: Border.br_2xs,
    borderWidth: 0.3,
    borderColor: "#feca18",
    borderStyle: "solid",
    height: 35,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    top: 32,
    width: 300,
    position: "absolute",
  },
  cashOutPoint: {
    top: 0,
    left: 4,
    fontSize: FontSize.size_lg,
    letterSpacing: 1.9,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.iOSKeyLabel,
  },
  enterNumberOr: {
    top: 40,
    left: 15,
    fontSize: FontSize.size_base,
    letterSpacing: 1.8,
    lineHeight: 20,
    fontFamily: FontFamily.gentiumBasic,
    color: Color.gray_2200,
  },
  scanSvgrepoCom1Child: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    width: 51,
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
    bottom: "9.62%",
    left: "3.85%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  tabArea: {
    backgroundColor: Color.gray_2300,
  },
  scanSvgrepoCom1: {
    left: 257,
    width: 35,
    height: 35,
    top: 32,
    overflow: "hidden",
  },
  rectangleParent: {
    top: 413,
    left: 30,
    height: 67,
    width: 300,
    position: "absolute",
  },
});

export default ImageContainer;
