import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
  Image,
  Text,
} from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Orange1 = ({ style }) => {
  return (
    <View style={[styles.orange, style]}>
      <View style={styles.orangeChild} />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group84.png")}
      />
      <Text style={styles.omoney}>OMoney</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  orangeChild: {
    top: -7,
    left: -8,
    borderRadius: Border.br_xs,
    backgroundColor: Color.iOSKeyLabel,
    shadowColor: "rgba(0, 0, 0, 0.94)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 64,
    height: 36,
    display: "none",
    position: "absolute",
  },
  groupIcon: {
    height: "67.26%",
    width: "54.35%",
    top: "0%",
    right: "23.91%",
    bottom: "32.74%",
    left: "21.74%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  omoney: {
    top: 23,
    left: 0,
    fontSize: FontSize.size_xs,
    letterSpacing: 0.5,
    lineHeight: 17,
    fontWeight: "700",
    fontFamily: FontFamily.gentiumBasic,
    color: Color.iOSKeyBackgroundHighlight,
    textAlign: "center",
    position: "absolute",
  },
  orange: {
    width: 46,
    height: 40,
  },
});

export default Orange1;
