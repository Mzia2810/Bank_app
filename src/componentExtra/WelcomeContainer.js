import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const WelcomeContainer = ({
  welcomeMessage,
  propBackgroundColor,
  propLeft,
  propWidth,
  onTaAreaPress,
}) => {
  const rectangleView8Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  const welcomeToYourStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
      ...getStyleValue("width", propWidth),
    };
  }, [propLeft, propWidth]);

  return (
    <View style={styles.headerPosition}>
      <View
        style={[styles.headerChild, styles.headerPosition, rectangleView8Style]}
      />
      <View
        style={[styles.backArrow, styles.taAreaLayout, styles.taAreaLayout1]}
      >
        <Image
          style={styles.backArrowChild}
          resizeMode="cover"
          source={require("../assets/line-161.png")}
        />
        <Pressable
          style={[styles.taArea, styles.taAreaLayout, styles.taAreaLayout1]}
          onPress={onTaAreaPress}
        />
      </View>
      <Image
        style={[styles.dotsIcon, styles.taAreaLayout]}
        resizeMode="cover"
        source={require("../assets/3-dots1.png")}
      />
      <Text style={[styles.welcomeToYour, welcomeToYourStyle]}>
        {welcomeMessage}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    height: 54,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  taAreaLayout: {
    height: 37,
    position: "absolute",
  },
  taAreaLayout1: {
    width: 52,
    height: 37,
  },
  headerChild: {
    backgroundColor: Color.orangeColor,
  },
  backArrowChild: {
    top: 11,
    left: 9,
    width: 28,
    height: 15,
    position: "absolute",
  },
  taArea: {
    backgroundColor: Color.gainsboro_700,
    left: 0,
    top: 0,
    width: 52,
  },
  backArrow: {
    left: 6,
    top: 10,
  },
  dotsIcon: {
    left: 306,
    width: 54,
    top: 10,
  },
  welcomeToYour: {
    top: 16,
    left: 55,
    fontSize: FontSize.size_lg,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.gray_1800,
    textAlign: "center",
    width: 250,
    position: "absolute",
  },
});

export default WelcomeContainer;
