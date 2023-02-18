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

const MTNContainer = ({
  carouselImageUrls,
  carouselImageUrls2,
  carouselImageUrls3,
  propTop,
  propLeft,
  onTabAreaPress,
  onTabAreaPress1,
  onTabAreaPress2,
  onImageedit341319179892Press,
}) => {
  const footerStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.footer, footerStyle]}>
      <View
        style={[
          styles.footerChild,
          styles.childShadowBox,
          styles.tabAreaPosition,
        ]}
      />
      <View style={[styles.home, styles.homePosition]}>
        <Image
          style={[
            styles.c14HouseIcon,
            styles.groupIconLayout,
            styles.iconLayout,
          ]}
          resizeMode="cover"
          source={carouselImageUrls}
        />
        <Pressable
          style={[styles.tabArea, styles.tabAreaPosition]}
          onPress={onTabAreaPress}
        />
        <Text style={[styles.home1, styles.mtnTypo, styles.home1Typo]}>
          Home
        </Text>
      </View>
      <View style={[styles.profile, styles.homePosition]}>
        <Image
          style={[styles.profileChild, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group-15723.png")}
        />
        <Text style={[styles.profile1, styles.mtnTypo, styles.home1Typo]}>
          Profile
        </Text>
        <Pressable style={styles.tabArea1} onPress={onTabAreaPress1} />
      </View>
      <View style={styles.orange}>
        <View
          style={[
            styles.orangeChild,
            styles.tabArea2Position,
            styles.childShadowBox,
          ]}
        />
        <Image
          style={[styles.groupIcon, styles.groupIconLayout, styles.iconLayout]}
          resizeMode="cover"
          source={carouselImageUrls2}
        />
        <Text style={[styles.orange1, styles.mtnTypo, styles.home1Typo]}>
          Orange
        </Text>
        <Pressable
          style={[styles.tabArea2, styles.tabArea2Position]}
          onPress={onTabAreaPress2}
        />
      </View>
      <View style={styles.linkBanks}>
        <Image
          style={styles.imageedit341319179891Icon}
          resizeMode="cover"
          source={require("../assets/imageedit-3-4131917989-1.png")}
        />
        <Text style={[styles.profile1, styles.mtnTypo, styles.home1Typo]}>
          Link Banks
        </Text>
        <Pressable
          style={[styles.imageedit341319179892, styles.tabArea2Position]}
          onPress={onImageedit341319179892Press}
        />
      </View>
      <View style={styles.group}>
        <Image
          style={[styles.groupIcon1, styles.groupIconLayout]}
          resizeMode="cover"
          source={carouselImageUrls3}
        />
        <Text style={[styles.mtn, styles.mtnTypo]}>MTN</Text>
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
  },
  tabAreaPosition: {
    left: "0%",
    width: "100%",
    right: "0%",
    top: "0%",
    position: "absolute",
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
  iconLayout: {
    width: "58.14%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  mtnTypo: {
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 17,
    letterSpacing: 0.5,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  home1Typo: {
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
  footerChild: {
    height: "100%",
    backgroundColor: Color.gold_100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 13,
    elevation: 13,
    bottom: "0%",
  },
  c14HouseIcon: {
    height: "46.15%",
    top: "22.92%",
    right: "27.91%",
    bottom: "30.93%",
    left: "13.95%",
  },
  tabArea: {
    height: "93.75%",
    bottom: "6.25%",
    backgroundColor: Color.gainsboro_700,
  },
  home1: {
    top: 31,
    left: 3,
  },
  home: {
    height: "106.67%",
    width: "11.94%",
    right: "80.28%",
    left: "7.78%",
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
    left: -10,
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
    height: "57.24%",
    top: "14.89%",
    right: "23.26%",
    bottom: "27.87%",
    left: "18.6%",
  },
  orange1: {
    top: 30,
    left: 2,
  },
  tabArea2: {
    height: 42,
    width: 43,
    left: 0,
    backgroundColor: Color.gainsboro_700,
  },
  orange: {
    top: -1,
    left: 93,
    height: 47,
    width: 43,
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
    height: "67.42%",
    width: "74.07%",
    right: "14.81%",
    bottom: "32.58%",
    left: "11.11%",
    top: "0%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  mtn: {
    top: 25,
    fontWeight: "700",
    color: Color.iOSKeyBackgroundHighlight,
    left: 0,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 17,
    letterSpacing: 0.5,
    fontSize: FontSize.size_xs,
  },
  group: {
    height: "93.33%",
    width: "7.5%",
    top: "11.11%",
    right: "26.39%",
    bottom: "-4.44%",
    left: "66.11%",
    position: "absolute",
  },
  footer: {
    top: 755,
    left: 1,
    width: 360,
    height: 45,
    position: "absolute",
  },
});

export default MTNContainer;
