import * as React from "react";
import { useMemo } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Color, FontFamily, FontSize, Border } from "../../GlobalStyle";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const ContainerMonkap = ({
  carouselImageUrls,
  carouselImageUrls2,
  carouselImageUrls3,
  carouselImageUrls4,
  propOpacity,
  propTop,
  propLeft,
  propColor,
  propHeight,
  onTabAreaPress,
  onTabAreaPress1,
  onImageedit341319179892Press,
  onTabAreaPress2,
  onTabAreaPress3,
}) => {
  const footerMoNkapStyle = useMemo(() => {
    return {
      ...getStyleValue("opacity", propOpacity),
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propOpacity, propTop, propLeft]);

  const homeStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  const groupIcon1Style = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight),
    };
  }, [propHeight]);

  return (
    <View style={[styles.footerMonkap, footerMoNkapStyle]}>
      <View style={[styles.footerMonkapChild, styles.childShadowBox]} />
      <View style={[styles.home, styles.homeLayout]}>
        <Image
          style={[styles.c14HouseIcon, styles.groupIconLayout]}
          resizeMode="cover"
          source={carouselImageUrls}
        />
        <Text style={[styles.home1, homeStyle]}>Home</Text>
        <Pressable
          style={[styles.tabArea, styles.tabPosition]}
          onPress={onTabAreaPress}
        />
      </View>
      <View style={[styles.profile, styles.homeLayout]}>
        <Image
          style={[styles.profileChild, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../../assets/group-157.png")}
        />
        <Text style={[styles.profile1, styles.momo1Typo]}>Profile</Text>
        <Pressable
          style={[styles.tabArea1, styles.tabPosition]}
          onPress={onTabAreaPress1}
        />
      </View>
      <View style={[styles.linkBank, styles.linkBankPosition]}>
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          resizeMode="cover"
          source={carouselImageUrls2}
        />
        <Text style={[styles.linkBanks, styles.momo1Typo]}>Link Banks</Text>
        <Pressable
          style={styles.imageedit341319179892}
          onPress={onImageedit341319179892Press}
        />
      </View>
      <View style={styles.momo}>
        <Image
          style={[
            styles.groupIcon1,
            styles.linkBankPosition,
            styles.groupIconLayout,
          ]}
          resizeMode="cover"
          source={carouselImageUrls3}
        />
        <Text style={[styles.momo1, styles.momo1Typo]}>MoMo</Text>
        <Pressable
          style={[styles.tabArea2, styles.tabLayout]}
          onPress={onTabAreaPress2}
        />
      </View>
      <View style={styles.orange}>
        <View style={[styles.orangeChild, styles.childShadowBox]} />
        <Image
          style={[styles.groupIcon2, styles.groupIconLayout, groupIcon1Style]}
          resizeMode="cover"
          source={carouselImageUrls4}
        />
        <Text style={[styles.omoney, styles.momo1Typo]}>OMoney</Text>
        <Pressable
          style={[styles.tabArea3, styles.tabLayout]}
          onPress={onTabAreaPress3}
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
  homeLayout: {
    width: "18.06%",
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  tabPosition: {
    backgroundColor: Color.gainsboro_700,
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  momo1Typo: {
    color: Color.iOSKeyLabel,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 17,
    letterSpacing: 0.5,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  linkBankPosition: {
    top: "6.67%",
    position: "absolute",
  },
  tabLayout: {
    height: 42,
    width: 43,
    top: 0,
    backgroundColor: Color.gainsboro_700,
    position: "absolute",
  },
  footerMonkapChild: {
    bottom: "0%",
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 9,
    elevation: 9,
    left: "0%",
    right: "0%",
    width: "100%",
    shadowOffset: {
      width: 3,
      height: -3,
    },
    top: "0%",
    height: "100%",
  },
  c14HouseIcon: {
    height: "60.33%",
    width: "49.23%",
    top: "6.38%",
    right: "30.77%",
    bottom: "33.29%",
    left: "20%",
    position: "absolute",
  },
  home1: {
    top: 30,
    left: 12,
    fontWeight: "700",
    color: Color.blue_100,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 17,
    letterSpacing: 0.5,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  tabArea: {
    height: "95.74%",
    bottom: "4.26%",
  },
  home: {
    height: "104.44%",
    right: "77.5%",
    left: "4.44%",
    bottom: "-4.44%",
    top: "0%",
  },
  profileChild: {
    height: "64.58%",
    width: "47.69%",
    top: "12.5%",
    right: "24.62%",
    bottom: "22.92%",
    left: "27.69%",
    position: "absolute",
  },
  profile1: {
    top: 34,
    left: 17,
    width: 36,
    height: 14,
  },
  tabArea1: {
    height: "93.75%",
    bottom: "6.25%",
  },
  profile: {
    height: "106.67%",
    top: "-8.89%",
    right: "3.33%",
    bottom: "2.22%",
    left: "78.61%",
  },
  groupIcon: {
    height: "65.28%",
    width: "49.51%",
    right: "26.66%",
    bottom: "34.72%",
    left: "23.83%",
    top: "0%",
    position: "absolute",
  },
  linkBanks: {
    top: 27,
    left: 0,
  },
  imageedit341319179892: {
    top: 1,
    left: 13,
    backgroundColor: Color.silver_500,
    width: 32,
    height: 32,
    position: "absolute",
  },
  linkBank: {
    height: "97.78%",
    width: "16.11%",
    right: "40.56%",
    left: "43.33%",
    bottom: "-4.44%",
  },
  groupIcon1: {
    height: "62.92%",
    width: "46.51%",
    right: "27.91%",
    bottom: "30.41%",
    left: "25.58%",
  },
  momo1: {
    top: 28,
    left: 5,
  },
  tabArea2: {
    left: 0,
  },
  momo: {
    width: "11.94%",
    top: "2.22%",
    right: "24.17%",
    bottom: "-2.22%",
    left: "63.89%",
    height: "100%",
    position: "absolute",
  },
  orangeChild: {
    top: -4,
    left: -9,
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
  groupIcon2: {
    height: "62.56%",
    width: "56.82%",
    top: "6.98%",
    right: "22.73%",
    bottom: "30.46%",
    left: "20.45%",
    position: "absolute",
  },
  omoney: {
    top: 26,
    left: 0,
  },
  tabArea3: {
    left: 1,
  },
  orange: {
    top: 2,
    left: 92,
    width: 44,
    height: 43,
    position: "absolute",
  },
  footerMonkap: {
    top: 755,
    width: 360,
    height: 45,
    left: 0,
    position: "absolute",
  },
});

export default ContainerMonkap;
