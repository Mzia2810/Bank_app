import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const XAFContainer = ({
  xAF10,
  xAF20,
  xAF30,
  xAF40,
  propMarginTop,
  propMarginLeft,
  propMarginLeft1,
}) => {
  const groupView14Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  const xAF10Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  const xAF20Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft1),
    };
  }, [propMarginLeft1]);

  return (
    <View style={[styles.groupParent, groupView14Style]}>
      <View style={[styles.rectangleParent, styles.groupPosition]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.xaf10, styles.xafTypo, xAF10Style]}>{xAF10}</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupPosition]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.xaf20, styles.xafTypo, xAF20Style]}>{xAF20}</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupPosition]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.xaf20, styles.xafTypo]}>{xAF30}</Text>
      </View>
      <View style={[styles.groupView, styles.groupPosition]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.xaf40, styles.xafTypo]}>{xAF40}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    width: 56,
    marginTop: -20,
    height: 40,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  xafTypo: {
    textAlign: "left",
    color: Color.gray_100,
    fontFamily: FontFamily.poppins,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    marginTop: -9,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupChild: {
    marginLeft: -28,
    borderRadius: Border.br_xs,
    backgroundColor: Color.gainsboro_100,
  },
  xaf10: {
    marginLeft: -19,
  },
  rectangleParent: {
    marginLeft: -133,
    marginTop: -20,
  },
  xaf20: {
    marginLeft: -20,
  },
  rectangleGroup: {
    marginLeft: -63,
  },
  rectangleContainer: {
    marginLeft: 7,
  },
  xaf40: {
    marginLeft: -21,
  },
  groupView: {
    marginLeft: 77,
  },
  groupParent: {
    marginTop: 52,
    width: 266,
    height: 40,
    left: "50%",
    top: "50%",
    position: "absolute",
    marginLeft: -133,
  },
});

export default XAFContainer;
