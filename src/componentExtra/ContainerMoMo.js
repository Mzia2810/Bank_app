import * as React from "react";
import { useMemo } from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const ContainerMoMo = ({
  carouselImageUrls,
  carouselImageUrls2,
  carouselImageUrls3,
  propTop,
  propLeft,
  onTabAreaPress,
  onTabAreaPress1,
  onImageedit341319179892Press,
  onTabAreaPress2,
}) => {
  const footerOMStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.footerOm, footerOMStyle]}>
      <View
        style={[
          styles.footerOmChild,
          styles.childShadowBox,
          styles.tabAreaPosition,
        ]}
      />
      <View style={[styles.home, styles.homePosition]}>
        <Image
          style={[
            styles.c14HouseIcon,
            styles.groupIconLayout,
            styles.iconPosition,
          ]}
          resizeMode="cover"
          source={carouselImageUrls}
        />
        <Pressable
          style={[styles.tabArea, styles.tabAreaPosition]}
          onPress={onTabAreaPress}
        />
        <Text style={[styles.home1, styles.home1Typo, styles.home1Typo1]}>
          Home
        </Text>
      </View>
      <View style={[styles.profile, styles.homePosition]}>
        <Image
          style={[styles.profileChild, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group-15723.png")}
        />
        <Text style={[styles.profile1, styles.home1Typo, styles.home1Typo1]}>
          Profile
        </Text>
        <Pressable style={styles.tabArea1} onPress={onTabAreaPress1} />
      </View>
      <View style={styles.orange}>
        <View style={[styles.orangeChild, styles.childShadowBox]} />
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          resizeMode="cover"
          source={carouselImageUrls2}
        />
        <Text style={[styles.omoney, styles.home1Typo]}>OMoney</Text>
      </View>
      <View style={styles.linkBanks}>
        <Image
          style={styles.imageedit341319179891Icon}
          resizeMode="cover"
          source={require("../assets/imageedit-3-4131917989-1.png")}
        />
        <Text style={[styles.profile1, styles.home1Typo, styles.home1Typo1]}>
          Link Banks
        </Text>
        <Pressable
          style={[styles.imageedit341319179892, styles.tabArea2Position]}
          onPress={onImageedit341319179892Press}
        />
      </View>
      <View style={styles.momo}>
        <Image
          style={[
            styles.groupIcon1,
            styles.groupIconLayout,
            styles.iconPosition,
          ]}
          resizeMode="cover"
          source={carouselImageUrls3}
        />
        <Text style={[styles.momo1, styles.home1Typo, styles.home1Typo1]}>
          MoMo
        </Text>
        <Pressable
          style={[styles.tabArea2, styles.tabArea2Position]}
          onPress={onTabAreaPress2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: -3,
    },
    position: "absolute",
  },
  tabAreaPosition: {
    left: "0%",
    width: "100%",
    right: "0%",
    top: "0%",
  },
  homePosition: {
    top: "-6.67%",
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  iconPosition: {
    right: "27.91%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  home1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 17,
    letterSpacing: 0.5,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  home1Typo1: {
    color: Color.iOSKeyLabel,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 17,
    letterSpacing: 0.5,
    fontSize: FontSize.size_xs,
  },
  tabArea2Position: {
    top: 0,
    position: "absolute",
  },
  footerOmChild: {
    backgroundColor: Color.orangeColor,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 13,
    elevation: 13,
    bottom: "0%",
    height: "100%",
  },
  c14HouseIcon: {
    height: "46.15%",
    width: "58.14%",
    top: "22.92%",
    bottom: "30.93%",
    left: "13.95%",
  },
  tabArea: {
    height: "93.75%",
    bottom: "6.25%",
    backgroundColor: Color.gainsboro_700,
    position: "absolute",
  },
  home1: {
    top: 31,
    left: 3,
  },
  home: {
    height: "106.67%",
    right: "80.28%",
    left: "7.78%",
    width: "11.94%",
    bottom: "0%",
  },
  profileChild: {
    height: "51.02%",
    width: "60.98%",
    top: "20.41%",
    right: "26.83%",
    bottom: "28.57%",
    left: "12.2%",
  },
  profile1: {
    top: 32,
    left: 0,
  },
  tabArea1: {
    height: "91.84%",
    width: "97.56%",
    bottom: "8.16%",
    left: "2.44%",
    backgroundColor: Color.gainsboro_700,
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  profile: {
    height: "108.89%",
    width: "11.39%",
    right: "6.67%",
    bottom: "-2.22%",
    left: "81.94%",
  },
  orangeChild: {
    top: -7,
    left: -8,
    borderRadius: Border.br_xs,
    backgroundColor: Color.iOSKeyLabel,
    shadowColor: "rgba(0, 0, 0, 0.94)",
    shadowRadius: 4,
    elevation: 4,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 64,
    height: 36,
    display: "none",
  },
  groupIcon: {
    height: "67.26%",
    width: "54.35%",
    right: "23.91%",
    bottom: "32.74%",
    left: "21.74%",
    top: "0%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  omoney: {
    top: 23,
    fontWeight: "700",
    color: Color.iOSKeyBackgroundHighlight,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 17,
    letterSpacing: 0.5,
    fontSize: FontSize.size_xs,
    left: 0,
  },
  orange: {
    top: 6,
    left: 91,
    width: 46,
    height: 40,
    position: "absolute",
  },
  imageedit341319179891Icon: {
    top: 8,
    left: 14,
    width: 28,
    height: 28,
    position: "absolute",
  },
  imageedit341319179892: {
    left: 9,
    backgroundColor: Color.silver_500,
    width: 39,
    height: 45,
  },
  linkBanks: {
    top: -3,
    left: 154,
    width: 58,
    height: 49,
    position: "absolute",
  },
  groupIcon1: {
    height: "62.92%",
    width: "46.51%",
    top: "6.67%",
    bottom: "30.41%",
    left: "25.58%",
  },
  momo1: {
    top: 28,
    left: 5,
  },
  tabArea2: {
    width: 43,
    height: 42,
    backgroundColor: Color.gainsboro_700,
    left: 0,
  },
  momo: {
    top: "4.44%",
    right: "24.17%",
    bottom: "-4.44%",
    left: "63.89%",
    width: "11.94%",
    height: "100%",
    position: "absolute",
  },
  footerOm: {
    top: 755,
    width: 360,
    height: 45,
    left: 0,
    position: "absolute",
  },
});

export default ContainerMoMo;
