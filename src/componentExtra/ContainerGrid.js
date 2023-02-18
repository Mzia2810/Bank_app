import * as React from "react";
import { useMemo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const ContainerGrid = ({ group164Left, propLeft, propLeft1, propLeft2 }) => {
  const groupView3Style = useMemo(() => {
    return {
      ...getStyleValue("left", group164Left),
    };
  }, [group164Left]);

  const groupView4Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  const groupView5Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft1),
    };
  }, [propLeft1]);

  const groupView6Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft2),
    };
  }, [propLeft2]);

  return (
    <View style={styles.groupParent}>
      <View
        style={[
          styles.parent,
          styles.groupLayout1,
          styles.groupPosition,
          groupView3Style,
        ]}
      >
        <Text style={[styles.text, styles.textPosition]}>65 23 56 948</Text>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-1536.png")}
        />
      </View>
      <View
        style={[
          styles.group,
          styles.groupLayout1,
          styles.groupPosition,
          groupView4Style,
        ]}
      >
        <Text style={[styles.text, styles.textPosition]}>654 89 65 32</Text>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-171.png")}
        />
      </View>
      <View style={[styles.textPosition, styles.groupLayout1, groupView5Style]}>
        <Text style={[styles.text, styles.textPosition]}>654 23 56 45</Text>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-181.png")}
        />
      </View>
      <View
        style={[
          styles.groupView,
          styles.groupLayout1,
          styles.groupPosition,
          groupView6Style,
        ]}
      >
        <Text style={[styles.text, styles.textPosition]}>654 26 32 14</Text>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-191.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout1: {
    width: 69,
    top: 0,
    height: 57,
  },
  groupPosition: {
    position: "absolute",
    top: 0,
  },
  textPosition: {
    left: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 40,
    width: 40,
    top: 0,
    position: "absolute",
  },
  text: {
    top: 41,
    fontSize: FontSize.size_2xs,
    letterSpacing: 1.4,
    lineHeight: 16,
    fontFamily: FontFamily.gentiumBasic,
    color: Color.iOSKeyLabel,
    textAlign: "center",
  },
  groupChild: {
    left: 14,
  },
  parent: {
    left: 81,
  },
  groupItem: {
    left: 15,
  },
  group: {
    left: 162,
  },
  groupView: {
    left: 243,
  },
  groupParent: {
    top: 330,
    left: 24,
    width: 312,
    height: 57,
    position: "absolute",
  },
});

export default ContainerGrid;
