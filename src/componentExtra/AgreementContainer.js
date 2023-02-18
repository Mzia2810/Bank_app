import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const AgreementContainer = ({ onRectanglePressablePress }) => {
  return (
    <View style={styles.rectangleParent}>
      <View
        style={[styles.groupChild, styles.groupLayout, styles.nextPosition]}
      />
      <Text style={[styles.next, styles.nextPosition]}>Next</Text>
      <Pressable
        style={[styles.groupItem, styles.groupLayout]}
        onPress={onRectanglePressablePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    width: 305,
    height: 45,
    position: "absolute",
  },
  nextPosition: {
    left: "50%",
    top: "50%",
  },
  groupChild: {
    marginTop: -22.5,
    marginLeft: -151.5,
    borderRadius: Border.br_xs,
    backgroundColor: Color.blue_100,
  },
  next: {
    marginTop: -11.5,
    marginLeft: -20.5,
    fontSize: FontSize.size_4xl,
    fontWeight: "700",
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.iOSKeyBackgroundHighlight,
    textAlign: "left",
    position: "absolute",
    top: "50%",
  },
  groupItem: {
    top: 0,
    left: 0,
    backgroundColor: Color.gainsboro_700,
  },
  rectangleParent: {
    marginTop: 316,
    marginLeft: -153,
    width: 307,
    height: 45,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
});

export default AgreementContainer;
