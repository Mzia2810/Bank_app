import * as React from "react";
import { useMemo } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageSourcePropType,
} from "react-native";
import { Color, Border, FontFamily, FontSize } from "../../GlobalStyle";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const ImageGallery = ({
  carouselImageUrls,
  carouselImageUrls2,
  carouselImageUrls3,
  carouselImageUrls4,
  propLeft,
  propWidth,
  propBorderRadius,
}) => {
  const amount21Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
      ...getStyleValue("width", propWidth),
    };
  }, [propLeft, propWidth]);

  const rectangleView25Style = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", propBorderRadius),
    };
  }, [propBorderRadius]);

  return (
    <View style={[styles.amount2, amount21Style]}>
      <View style={[styles.amount2Child, styles.amount2Position]} />
      <View style={[styles.amount2Position, rectangleView25Style]} />
      <Text style={[styles.text, styles.textTypo]}>**** ** *****</Text>
      <Text style={[styles.totalBalance, styles.textTypo]}>Total Balance</Text>
      <View style={styles.show}>
        <Text style={styles.show1}>Show</Text>
        <Image
          style={[
            styles.vectorIcon,
            styles.vectorIconLayout,
            styles.vectorIconLayout1,
          ]}
          resizeMode="cover"
          source={carouselImageUrls}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          resizeMode="cover"
          source={carouselImageUrls2}
        />
        <Image
          style={[
            styles.vectorIcon2,
            styles.vectorIconLayout,
            styles.vectorIconLayout1,
          ]}
          resizeMode="cover"
          source={carouselImageUrls3}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout]}
          resizeMode="cover"
          source={carouselImageUrls4}
        />
        <View style={styles.showChild} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  amount2Position: {
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    borderRadius: Border.br_2xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIconLayout1: {
    right: "31.71%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  amount2Child: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    display: "none",
  },
  text: {
    top: "13.83%",
    left: "21.41%",
    fontSize: FontSize.size_8xl,
    fontWeight: "600",
    color: Color.gray_100,
  },
  totalBalance: {
    top: "57.45%",
    left: "33.03%",
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    color: Color.darkgray_600,
  },
  show1: {
    top: "17.14%",
    fontSize: FontSize.size_5xs,
    letterSpacing: 0.2,
    lineHeight: 12,
    textTransform: "uppercase",
    fontFamily: FontFamily.gentiumBasic,
    color: Color.iOSKeyLabel,
    textAlign: "center",
    left: "21.95%",
    position: "absolute",
  },
  vectorIcon: {
    height: "25.71%",
    width: "46.34%",
    top: "45.71%",
    bottom: "28.57%",
    left: "21.95%",
  },
  vectorIcon1: {
    height: "11.43%",
    width: "7.32%",
    top: "48.57%",
    right: "51.22%",
    bottom: "40%",
    left: "41.46%",
  },
  vectorIcon2: {
    height: "20%",
    width: "19.51%",
    top: "65.71%",
    bottom: "14.29%",
    left: "48.78%",
  },
  vectorIcon3: {
    height: "8.57%",
    width: "9.76%",
    top: "71.43%",
    right: "36.59%",
    bottom: "20%",
    left: "53.66%",
  },
  showChild: {
    backgroundColor: Color.gainsboro_700,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  show: {
    height: "37.23%",
    width: "12.54%",
    top: "30.85%",
    right: "0.61%",
    bottom: "31.91%",
    left: "86.85%",
    position: "absolute",
  },
  amount2: {
    top: 115,
    left: 16,
    width: 327,
    height: 94,
    position: "absolute",
  },
});

export default ImageGallery;
