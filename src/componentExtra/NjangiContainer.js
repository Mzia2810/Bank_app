import * as React from "react";
import { useMemo } from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const NjangiContainer = ({ propMarginTop, onTabAreaPress }) => {
  const njangiStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View
      style={[
        styles.njangi,
        styles.njangiLayout,
        styles.njangiPosition,
        njangiStyle,
      ]}
    >
      <Image
        style={[styles.njangiChild, styles.tabAreaPosition]}
        resizeMode="cover"
        source={require("../assets/group-117.png")}
      />
      <Text style={[styles.njangiTontin, styles.njangiPosition]}>
        Njangi [Tontin]
      </Text>
      <Image
        style={[styles.vectorIcon, styles.njangiPosition]}
        resizeMode="cover"
        source={require("../assets/vector148.png")}
      />
      <Pressable
        style={[styles.tabArea, styles.tabAreaPosition, styles.njangiLayout]}
        onPress={onTabAreaPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  njangiLayout: {
    height: 70,
    width: 305,
  },
  njangiPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  tabAreaPosition: {
    marginLeft: -152.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  njangiChild: {
    marginTop: -24,
    width: 42,
    height: 42,
  },
  njangiTontin: {
    marginTop: -16,
    marginLeft: -94.5,
    fontSize: FontSize.size_2xl,
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
    color: Color.iOSKeyBackgroundHighlight,
    textAlign: "left",
  },
  vectorIcon: {
    marginTop: -9,
    marginLeft: 144.5,
    width: 8,
    height: 14,
  },
  tabArea: {
    marginTop: -35,
    borderRadius: Border.br_2xl,
    backgroundColor: Color.mediumblue_200,
  },
  njangi: {
    marginTop: 187,
    marginLeft: -154,
  },
});

export default NjangiContainer;
