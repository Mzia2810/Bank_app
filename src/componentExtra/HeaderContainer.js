import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const HeaderContainer = ({ taAreaBackgroundColor, onTaAreaPress }) => {
  const rectangleView19Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", taAreaBackgroundColor),
    };
  }, [taAreaBackgroundColor]);

  return (
    <View style={styles.headerPosition}>
      <View
        style={[
          styles.headerChild,
          styles.headerPosition,
          rectangleView19Style,
        ]}
      />
      <View style={[styles.backArrow, styles.taAreaLayout]}>
        <Image
          style={styles.backArrowChild}
          resizeMode="cover"
          source={require("../assets/line-161.png")}
        />
        <Pressable
          style={[styles.taArea, styles.taAreaLayout]}
          onPress={onTaAreaPress}
        />
      </View>
      <Text style={styles.momoPay}>
        <Text style={styles.m}>M</Text>
        <Text style={styles.o}>o</Text>
        <Text style={styles.m}>M</Text>
        <Text style={styles.o}>o</Text>
        <Text style={styles.m}> P</Text>
        <Text style={styles.ay}>ay</Text>
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
    width: 52,
    position: "absolute",
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
    top: 10,
    left: 6,
  },
  m: {
    fontSize: FontSize.size_4xl,
  },
  o: {
    fontSize: FontSize.size_2xl,
  },
  ay: {
    fontSize: FontSize.size_3xl,
  },
  momoPay: {
    top: 13,
    left: 126,
    letterSpacing: "9.5%",
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.iOSKeyLabel,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    position: "absolute",
  },
});

export default HeaderContainer;
