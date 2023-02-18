import * as React from "react";
import { useMemo } from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const MoMoContainer = ({ propMarginTop, propMarginLeft, onTabAreaPress }) => {
  const mTNMoMoStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  const vectorIconStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  return (
    <View
      style={[
        styles.mtnMomo,
        styles.mtnMomoLayout,
        styles.mtnPosition,
        mTNMoMoStyle,
      ]}
    >
      <Image
        style={[styles.mtnMomoChild, styles.mtnPosition, styles.mtnPosition1]}
        resizeMode="cover"
        source={require("../assets/rectangle-10.png")}
      />
      <Text style={[styles.mtnMomo1, styles.mtnPosition, styles.mtnPosition1]}>
        MTN MoMo
      </Text>
      <Image
        style={[
          styles.vectorIcon,
          styles.mtnPosition,
          styles.mtnPosition1,
          vectorIconStyle,
        ]}
        resizeMode="cover"
        source={require("../assets/vector148.png")}
      />
      <Pressable
        style={[styles.tabArea, styles.mtnMomoLayout]}
        onPress={onTabAreaPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mtnMomoLayout: {
    height: 56,
    width: 335,
    position: "absolute",
  },
  mtnPosition: {
    left: "50%",
    top: "50%",
  },
  mtnPosition1: {
    position: "absolute",
    top: "50%",
  },
  mtnMomoChild: {
    marginTop: -21,
    marginLeft: -151.5,
    borderRadius: Border.br_xl,
    width: 42,
    height: 42,
  },
  mtnMomo1: {
    marginTop: -13,
    marginLeft: -93.5,
    fontSize: FontSize.size_2xl,
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
    color: Color.iOSKeyBackgroundHighlight,
    textAlign: "left",
  },
  vectorIcon: {
    marginTop: -6,
    marginLeft: 145.5,
    width: 8,
    height: 14,
  },
  tabArea: {
    top: 0,
    left: 0,
    backgroundColor: Color.gainsboro_700,
  },
  mtnMomo: {
    marginTop: -26,
    marginLeft: -166,
  },
});

export default MoMoContainer;
