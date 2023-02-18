import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const AwesomeContainer = ({ carImageUrl }) => {
  return (
    <View style={styles.mtnMmLogoGenericMtnMobileParent}>
      <Image
        style={styles.mtnMmLogoGenericMtnMobileIcon}
        resizeMode="cover"
        source={carImageUrl}
      />
      <View style={styles.yelloParent}>
        <View style={styles.yello}>
          <Text style={styles.yello1}>
            <Text style={styles.y}>Y‘</Text>
            <Text style={styles.ello}>ello</Text>
            <Text style={styles.text}>,</Text>
          </Text>
        </View>
        <Text style={[styles.tawa, styles.tawaLayout]}>
          <Text style={styles.ello}> T</Text>
          <Text style={styles.awa}>AWA</Text>
        </Text>
      </View>
      <Text style={[styles.welcomeToAwesome, styles.tawaLayout]}>
        Welcome to Awesome!!!!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tawaLayout: {
    height: 27,
    textAlign: "center",
    position: "absolute",
  },
  mtnMmLogoGenericMtnMobileIcon: {
    right: 79,
    left: 87,
    maxWidth: "100%",
    overflow: "hidden",
    height: 51,
    top: 0,
    position: "absolute",
  },
  y: {
    fontSize: FontSize.size_7xl,
  },
  ello: {
    fontSize: FontSize.size_4xl,
  },
  text: {
    fontSize: FontSize.size_9xl,
  },
  yello1: {
    fontWeight: "600",
    fontFamily: FontFamily.rubik,
    color: Color.iOSKeyLabel,
    width: 104,
    textAlign: "center",
    fontStyle: "italic",
    left: 0,
    height: 42,
    top: 0,
    position: "absolute",
  },
  yello: {
    right: 39,
    left: 0,
    height: 42,
    top: 0,
    position: "absolute",
  },
  awa: {
    fontSize: FontSize.size_xl,
  },
  tawa: {
    top: 14,
    left: 81,
    letterSpacing: "6.5%",
    fontFamily: FontFamily.gentiumBasic,
    color: Color.gray_200,
    width: 62,
  },
  yelloParent: {
    top: 38,
    right: 62,
    left: 43,
    height: 42,
    position: "absolute",
  },
  welcomeToAwesome: {
    top: 90,
    fontSize: FontSize.size_6xl,
    lineHeight: 35,
    fontFamily: FontFamily.gentiumBookBasic,
    color: Color.blue_100,
    width: 248,
    fontStyle: "italic",
    height: 27,
    left: 0,
  },
  mtnMmLogoGenericMtnMobileParent: {
    top: 69,
    right: 61,
    left: 51,
    height: 117,
    position: "absolute",
  },
});

export default AwesomeContainer;
