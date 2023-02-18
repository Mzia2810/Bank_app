import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Group = ({ style }) => {
  return (
    <View style={[styles.group, style]}>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group148.png")}
      />
      <Text style={styles.mtn}>MTN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupIcon: {
    height: "67.42%",
    width: "74.07%",
    top: "0%",
    right: "14.81%",
    bottom: "32.58%",
    left: "11.11%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  mtn: {
    top: 25,
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
  group: {
    width: 27,
    height: 42,
  },
});

export default Group;
