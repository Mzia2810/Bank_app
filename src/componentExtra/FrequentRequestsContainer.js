import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { Margin, FontFamily, FontSize, Color } from "../GlobalStyles";

const FrequentRequestsContainer = ({ onRectanglePressablePress }) => {
  return (
    <View style={styles.freq}>
      <Text style={styles.mostFrequentRequests}>Most Frequent Requests</Text>
      <View style={styles.groupParent}>
        <View style={styles.danielParent}>
          <Text style={[styles.daniel, styles.janeTypo, styles.janePosition]}>
            Daniel
          </Text>
          <Text style={[styles.stella, styles.stellaPosition, styles.janeTypo]}>
            Stella
          </Text>
          <Text style={[styles.precious, styles.janeTypo, styles.janePosition]}>
            Precious
          </Text>
          <Text
            style={[styles.mirabelle, styles.janeTypo, styles.janePosition]}
          >
            Mirabelle
          </Text>
          <Text style={[styles.jane, styles.janeTypo, styles.janePosition]}>
            Jane
          </Text>
        </View>
        <View style={[styles.ellipseParent, styles.stellaPosition]}>
          <Image
            style={styles.frameChild}
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
            source={require("../assets/ellipse-171.png")}
          />
          <Image
            style={[styles.frameChild, styles.ml25]}
            resizeMode="cover"
            source={require("../assets/ellipse-181.png")}
          />
          <Image
            style={[styles.frameChild, styles.ml25]}
            resizeMode="cover"
            source={require("../assets/ellipse-191.png")}
          />
        </View>
      </View>
      <View style={[styles.showRecentParent, styles.groupChildLayout]}>
        <Text style={styles.showRecent}>Show Recent</Text>
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
  janeTypo: {
    fontFamily: FontFamily.gentiumBasic,
    lineHeight: 16,
    letterSpacing: 1.4,
    fontSize: FontSize.size_2xs,
    textAlign: "center",
    color: Color.iOSKeyLabel,
  },
  janePosition: {
    top: 1,
    lineHeight: 16,
    letterSpacing: 1.4,
    fontSize: FontSize.size_2xs,
    position: "absolute",
  },
  stellaPosition: {
    top: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 33,
    width: 105,
    top: 0,
    position: "absolute",
  },
  mostFrequentRequests: {
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
    textAlign: "center",
    left: 0,
  },
  stella: {
    left: 67,
    textAlign: "center",
  },
  precious: {
    left: 123,
    textAlign: "center",
  },
  mirabelle: {
    left: 189,
    textAlign: "center",
  },
  jane: {
    left: 269,
    textAlign: "center",
  },
  danielParent: {
    top: 43,
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
    flexDirection: "row",
    left: 0,
  },
  groupParent: {
    top: 44,
    width: 300,
    height: 60,
    left: 0,
    position: "absolute",
  },
  showRecent: {
    top: 9,
    fontSize: FontSize.size_base,
    textDecoration: "underline",
    fontStyle: "italic",
    color: Color.blue_100,
    textAlign: "center",
    fontFamily: FontFamily.gentiumBookBasic,
    left: 24,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.gainsboro_700,
    left: 0,
  },
  showRecentParent: {
    left: 208,
  },
  freq: {
    top: 283,
    width: 313,
    height: 104,
    left: 24,
    position: "absolute",
  },
});

export default FrequentRequestsContainer;
