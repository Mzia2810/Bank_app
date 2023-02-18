import * as React from "react";
import { useMemo } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageSourcePropType,
} from "react-native";
import { Margin, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const PendingContainer = ({
  carouselImageUrl,
  carouselImagePercentage,
  carouselImageUrl2,
  carouselImageUrl3,
  carouselImageUrl4,
  propWidth,
  propLeft,
  propWidth1,
  propLeft1,
}) => {
  const groupView15Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const ellipseIconStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  const groupView16Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth1),
    };
  }, [propWidth1]);

  const pending15Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft1),
    };
  }, [propLeft1]);

  return (
    <View style={[styles.frameWrapper, groupView15Style]}>
      <View style={[styles.groupParent, styles.groupPosition]}>
        <View style={styles.collected20Parent}>
          <Text style={[styles.collected20, styles.pending15Typo]}>
            Collected [20]
          </Text>
          <Image
            style={[
              styles.crowdFundingPeopleSvgrepoCIcon,
              styles.groupChildPosition,
            ]}
            resizeMode="cover"
            source={carouselImageUrl}
          />
        </View>
        <View style={[styles.groupLayout, styles.ml16]}>
          <Image
            style={[
              styles.groupLayout,
              styles.groupChildPosition,
              styles.groupPosition1,
            ]}
            resizeMode="cover"
            source={require("../assets/ellipse-37.png")}
          />
          <Text style={[styles.toEnd, styles.textTypo]}>To End</Text>
          <Text style={[styles.text, styles.textTypo]}>
            {carouselImagePercentage}
          </Text>
          <Image
            style={[styles.groupLayout, styles.groupPosition]}
            resizeMode="cover"
            source={carouselImageUrl2}
          />
          <Image
            style={[
              styles.pending15Position,
              styles.groupLayout,
              styles.groupPosition1,
              ellipseIconStyle,
            ]}
            resizeMode="cover"
            source={carouselImageUrl3}
          />
        </View>
        <View style={[styles.pending15Parent, styles.ml16, groupView16Style]}>
          <Text
            style={[
              styles.pending15,
              styles.pending15Position,
              styles.pending15Typo,
              pending15Style,
            ]}
          >
            Pending [15]
          </Text>
          <Image
            style={[
              styles.crowdFundingPeopleSvgrepoCIcon,
              styles.groupChildPosition,
            ]}
            resizeMode="cover"
            source={carouselImageUrl4}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml16: {
    marginLeft: Margin.m_2xl,
  },
  groupPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  pending15Typo: {
    color: Color.gray_2900,
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 12,
    fontSize: FontSize.size_base,
    top: 7,
    textAlign: "center",
  },
  groupChildPosition: {
    borderRadius: Border.br_xs,
    left: 0,
    position: "absolute",
  },
  groupPosition1: {
    top: 0,
    width: 62,
  },
  textTypo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.gentiumBasic,
    position: "absolute",
  },
  groupLayout: {
    width: 62,
    height: 59,
  },
  pending15Position: {
    left: 31,
    position: "absolute",
  },
  collected20: {
    left: 30,
    textAlign: "center",
    position: "absolute",
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 12,
    fontSize: FontSize.size_base,
    top: 7,
  },
  crowdFundingPeopleSvgrepoCIcon: {
    top: -1,
    width: 27,
    height: 26,
  },
  collected20Parent: {
    width: 109,
    height: 25,
  },
  toEnd: {
    top: 32,
    left: 17,
    color: Color.iOSKeyLabel,
    textAlign: "left",
  },
  text: {
    top: 19,
    left: 22,
    fontWeight: "700",
    color: Color.blue_100,
    textAlign: "center",
  },
  pending15: {
    textAlign: "center",
  },
  pending15Parent: {
    width: 104,
    height: 25,
  },
  groupParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameWrapper: {
    top: 149,
    left: 10,
    width: 307,
    height: 59,
    position: "absolute",
  },
});

export default PendingContainer;
