import * as React from "react";
import { useMemo } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import { Margin, Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const RecipientContainer = ({
  carouselImageUrls,
  carouselImageUrls2,
  carouselImageUrls3,
  ellipse19Left,
  ellipse19Width,
  propLeft,
  propLeft1,
  propLeft2,
  propLeft3,
  propLeft4,
}) => {
  const groupView2Style = useMemo(() => {
    return {
      ...getStyleValue("left", ellipse19Left),
      ...getStyleValue("width", ellipse19Width),
    };
  }, [ellipse19Left, ellipse19Width]);

  const danielStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  const stellaStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft1),
    };
  }, [propLeft1]);

  const preciousStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft2),
    };
  }, [propLeft2]);

  const mirabelleStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft3),
    };
  }, [propLeft3]);

  const janeStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft4),
    };
  }, [propLeft4]);

  return (
    <View style={styles.groupParent}>
      <View style={[styles.danielParent, groupView2Style]}>
        <Text
          style={[
            styles.daniel,
            styles.janeTypo,
            styles.janePosition,
            danielStyle,
          ]}
        >
          Daniel
        </Text>
        <Text
          style={[
            styles.stella,
            styles.stellaPosition,
            styles.janeTypo,
            stellaStyle,
          ]}
        >
          Stella
        </Text>
        <Text
          style={[
            styles.precious,
            styles.janeTypo,
            styles.janePosition,
            preciousStyle,
          ]}
        >
          Precious
        </Text>
        <Text
          style={[
            styles.mirabelle,
            styles.janeTypo,
            styles.janePosition,
            mirabelleStyle,
          ]}
        >
          Mirabelle
        </Text>
        <Text
          style={[styles.jane, styles.janeTypo, styles.janePosition, janeStyle]}
        >
          Jane
        </Text>
      </View>
      <View style={[styles.ellipseParent, styles.stellaPosition]}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={carouselImageUrls}
        />
        <Image
          style={[styles.frameChild, styles.ml25]}
          resizeMode="cover"
          source={require("../assets/ellipse-161.png")}
        />
        <Image
          style={[styles.frameChild, styles.ml25]}
          resizeMode="cover"
          source={require("../assets/ellipse-171.png")}
        />
        <Image
          style={[styles.frameChild, styles.ml25]}
          resizeMode="cover"
          source={carouselImageUrls2}
        />
        <Image
          style={[styles.frameChild, styles.ml25]}
          resizeMode="cover"
          source={carouselImageUrls3}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml25: {
    marginLeft: Margin.m_3xl,
  },
  janeTypo: {
    textAlign: "center",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 16,
    letterSpacing: 1.4,
    fontSize: FontSize.size_2xs,
  },
  janePosition: {
    top: 1,
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 16,
    letterSpacing: 1.4,
    fontSize: FontSize.size_2xs,
    position: "absolute",
  },
  stellaPosition: {
    top: 0,
    position: "absolute",
  },
  daniel: {
    left: 0,
  },
  stella: {
    left: 67,
  },
  precious: {
    left: 123,
  },
  mirabelle: {
    left: 189,
  },
  jane: {
    left: 269,
  },
  danielParent: {
    top: 43,
    left: 2,
    width: 293,
    height: 17,
    position: "absolute",
  },
  frameChild: {
    width: 40,
    height: 40,
  },
  ellipseParent: {
    flexDirection: "row",
    left: 0,
  },
  groupParent: {
    top: 297,
    left: 32,
    width: 300,
    height: 60,
    position: "absolute",
  },
});

export default RecipientContainer;
