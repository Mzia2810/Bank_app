import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { Margin, FontFamily, FontSize, Color } from "../GlobalStyles";

const RecentRequestContainer = ({ onRectanglePressablePress }) => {
  return (
    <View style={styles.recent}>
      <Text style={styles.recentRequest}>Recent Request</Text>
      <View style={styles.danielParent}>
        <Text style={[styles.daniel, styles.janeFlexBox, styles.janeTypo]}>
          Daniel
        </Text>
        <Text style={styles.stella}>Stella</Text>
        <Text style={[styles.precious, styles.janeFlexBox, styles.janeTypo]}>
          Precious
        </Text>
        <Text style={[styles.mirabelle, styles.janeFlexBox, styles.janeTypo]}>
          Mirabelle
        </Text>
        <Text style={[styles.jane, styles.janeFlexBox, styles.janeTypo]}>
          Jane
        </Text>
      </View>
      <View style={styles.ellipseParent}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/ellipse-171.png")}
        />
        <Image
          style={[styles.frameChild, styles.ml25]}
          resizeMode="cover"
          source={require("../assets/ellipse-191.png")}
        />
        <Image
          style={[styles.frameChild, styles.ml25]}
          resizeMode="cover"
          source={require("../assets/ellipse-1536.png")}
        />
        <Image
          style={[styles.frameChild, styles.ml25]}
          resizeMode="cover"
          source={require("../assets/ellipse-161.png")}
        />
        <Image
          style={[styles.frameChild, styles.ml25]}
          resizeMode="cover"
          source={require("../assets/ellipse-181.png")}
        />
      </View>
      <View style={[styles.showFrequentParent, styles.groupChildLayout]}>
        <Text style={[styles.showFrequent, styles.janeFlexBox]}>
          Show frequent
        </Text>
        <Pressable
          style={[styles.groupChild, styles.groupChildLayout]}
          onPress={onRectanglePressablePress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml25: {
    marginLeft: Margin.m_3xl,
  },
  janeFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  janeTypo: {
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 16,
    letterSpacing: 1.4,
    fontSize: FontSize.size_2xs,
    top: 1,
    textAlign: "center",
    color: Color.iOSKeyLabel,
  },
  groupChildLayout: {
    height: 33,
    width: 105,
    top: 0,
    position: "absolute",
  },
  recentRequest: {
    top: 6,
    left: 3,
    fontSize: FontSize.size_lg,
    letterSpacing: 1.9,
    lineHeight: 22,
    textAlign: "left",
    color: Color.iOSKeyLabel,
    fontFamily: FontFamily.gentiumBookBasic,
    position: "absolute",
  },
  daniel: {
    left: 0,
  },
  stella: {
    left: 67,
    top: 0,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 16,
    letterSpacing: 1.4,
    fontSize: FontSize.size_2xs,
    color: Color.iOSKeyLabel,
    position: "absolute",
  },
  precious: {
    left: 123,
  },
  mirabelle: {
    left: 189,
  },
  jane: {
    left: 269,
  },
  danielParent: {
    top: 87,
    left: 2,
    width: 293,
    height: 17,
    position: "absolute",
  },
  frameChild: {
    width: 40,
    height: 40,
  },
  ellipseParent: {
    top: 44,
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  showFrequent: {
    top: 9,
    left: 19,
    fontSize: FontSize.size_base,
    textDecoration: "underline",
    fontStyle: "italic",
    color: Color.blue_100,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
  },
  groupChild: {
    backgroundColor: Color.gainsboro_700,
    left: 0,
  },
  showFrequentParent: {
    left: 208,
  },
  recent: {
    top: 283,
    left: 24,
    width: 313,
    height: 104,
    position: "absolute",
  },
});

export default RecentRequestContainer;
