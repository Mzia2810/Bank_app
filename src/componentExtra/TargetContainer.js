import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const TargetContainer = ({ propMarginTop, onRectanglePressablePress }) => {
  const targetSavingsStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View
      style={[
        styles.targetSavings,
        styles.targetLayout,
        styles.targetPosition1,
        targetSavingsStyle,
      ]}
    >
      <View style={[styles.targetSavingsChild, styles.targetPosition]} />
      <View style={[styles.targetSavingsItem, styles.targetPosition]} />
      <Text style={[styles.targetSavings1, styles.targetPosition1]}>
        Target Savings
      </Text>
      <Image
        style={[styles.vectorIcon, styles.targetPosition1]}
        resizeMode="cover"
        source={require("../assets/vector148.png")}
      />
      <Image
        style={styles.diyCuboidUnfinishedWoodenMIcon}
        resizeMode="cover"
        source={require("../assets/diycuboidunfinishedwoodenmoneybankcoinmoneysavingboxcontainerforkidschildrencreativeeducationaljpg-q90-1.png")}
      />
      <Pressable
        style={[styles.targetSavingsInner, styles.targetLayout]}
        onPress={onRectanglePressablePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  targetLayout: {
    width: 335,
    position: "absolute",
  },
  targetPosition1: {
    left: "50%",
    top: "50%",
  },
  targetPosition: {
    marginLeft: -155.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  targetSavingsChild: {
    marginTop: 30.5,
    borderRadius: Border.br_2xl,
    backgroundColor: Color.mediumblue_100,
    width: 305,
    height: 2,
  },
  targetSavingsItem: {
    marginTop: -28.5,
    borderRadius: Border.br_xl,
    backgroundColor: Color.iOSKeyBackgroundHighlight,
    width: 42,
    height: 42,
  },
  targetSavings1: {
    marginTop: -20.5,
    marginLeft: -97.5,
    fontSize: FontSize.size_2xl,
    fontWeight: "500",
    fontFamily: FontFamily.poppins,
    color: Color.iOSKeyBackgroundHighlight,
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon: {
    marginTop: -13.5,
    marginLeft: 141.5,
    width: 8,
    height: 14,
    position: "absolute",
  },
  diyCuboidUnfinishedWoodenMIcon: {
    top: 7,
    left: 15,
    width: 36,
    height: 35,
    position: "absolute",
  },
  targetSavingsInner: {
    top: 0,
    left: 0,
    backgroundColor: Color.gainsboro_700,
    height: 56,
  },
  targetSavings: {
    marginTop: 120,
    marginLeft: -166,
    height: 65,
  },
});

export default TargetContainer;
