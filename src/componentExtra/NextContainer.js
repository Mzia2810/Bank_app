import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const NextContainer = ({
  actionText,
  propMarginTop,
  propMarginLeft,
  propMarginLeft1,
  onRectanglePressablePress,
}) => {
  const groupView10Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginTop, propMarginLeft]);

  const nextStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft1),
    };
  }, [propMarginLeft1]);

  return (
    <View style={[styles.rectangleParent, groupView10Style]}>
      <View style={[styles.groupChild, styles.groupPosition]} />
      <Text style={[styles.next, nextStyle]}>{actionText}</Text>
      <Pressable
        style={[styles.groupItem, styles.groupPosition]}
        onPress={onRectanglePressablePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    borderRadius: Border.br_xs,
    marginLeft: -152.5,
    marginTop: -22.5,
    height: 45,
    width: 305,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.blue_100,
  },
  next: {
    marginTop: -11.5,
    marginLeft: -21.5,
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    fontFamily: FontFamily.poppins,
    color: Color.iOSKeyBackgroundHighlight,
    textAlign: "left",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.blue_200,
  },
  rectangleParent: {
    marginTop: 283,
    marginLeft: -152,
    height: 45,
    width: 305,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
});

export default NextContainer;
